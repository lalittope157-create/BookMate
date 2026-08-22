from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Book
from .serializers import BookSerializer


# ==========================================
# BOOKS
# ==========================================

@api_view(["GET"])
def books(request):

    book_list = Book.objects.all().order_by("-id")

    serializer = BookSerializer(
        book_list,
        many=True,
        context={"request": request}
    )

    return Response(serializer.data)


# ==========================================
# BOOK DETAIL
# ==========================================

@api_view(["GET"])
def book_detail(request, pk):

    try:
        book = Book.objects.get(pk=pk)

    except Book.DoesNotExist:

        return Response(
            {"error": "Book not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = BookSerializer(
        book,
        context={"request": request}
    )

    return Response(serializer.data)


# ==========================================
# REGISTER USER
# ==========================================

@api_view(["POST"])
def register_user(request):

    full_name = request.data.get("full_name", "").strip()
    email = request.data.get("email", "").strip().lower()
    password = request.data.get("password", "")

    # Check required fields
    if not full_name or not email or not password:

        return Response(
            {
                "detail": "Please fill in all fields."
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Check password length
    if len(password) < 6:

        return Response(
            {
                "detail": "Password must be at least 6 characters."
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Check existing email
    if User.objects.filter(email=email).exists():

        return Response(
            {
                "detail": "An account with this email already exists."
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Create user
    user = User.objects.create_user(
        username=email,
        email=email,
        password=password,
        first_name=full_name
    )

    return Response(
        {
            "message": "Account created successfully!",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "full_name": user.first_name
            }
        },
        status=status.HTTP_201_CREATED
    )


# ==========================================
# LOGIN USER
# ==========================================

@api_view(["POST"])
def login_user(request):

    username = request.data.get("username", "").strip()
    password = request.data.get("password", "")

    # Check fields
    if not username or not password:

        return Response(
            {
                "detail": "Username and password are required."
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    # Authenticate user
    user = authenticate(
        username=username,
        password=password
    )

    # Invalid credentials
    if user is None:

        return Response(
            {
                "detail": "Invalid username or password."
            },
            status=status.HTTP_401_UNAUTHORIZED
        )

    # Successful login
    return Response(
        {
            "message": "Login successful!",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "full_name": user.first_name
            }
        },
        status=status.HTTP_200_OK
    )