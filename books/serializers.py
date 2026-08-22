from rest_framework import serializers
from .models import Book, Category


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class BookSerializer(serializers.ModelSerializer):

    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    pdf_url = serializers.SerializerMethodField()

    class Meta:
        model = Book

        fields = [
            "id",
            "title",
            "author",
            "description",
            "category",
            "category_name",
            "rating",
            "pdf",
            "pdf_url",
        ]

    def get_pdf_url(self, obj):

        request = self.context.get("request")

        if obj.pdf:

            if request:
                return request.build_absolute_uri(
                    obj.pdf.url
                )

            return obj.pdf.url

        return None