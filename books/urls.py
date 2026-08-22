from django.urls import path
from . import views


urlpatterns = [

    # All books
    path(
        "books/",
        views.books,
        name="books"
    ),

    # Single book
    path(
        "books/<int:pk>/",
        views.book_detail,
        name="book-detail"
    ),
      path("register/", views.register_user, name="register"),  
      path(
        "login/",
        views.login_user,
        name="login"
    ),

]