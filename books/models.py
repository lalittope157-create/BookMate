from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="books"
    )

    rating = models.FloatField(default=4.5)

    # PDF BOOK
    pdf = models.FileField(
        upload_to="books/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.title