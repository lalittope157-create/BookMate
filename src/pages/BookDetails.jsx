import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookDetails.css";

function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ==========================================
    // LOAD BOOK DETAILS
    // ==========================================

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/books/${id}/`)
            .then((response) => {
                console.log("Book details:", response.data);

                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading book:", error);

                setError("Unable to load this book.");
                setLoading(false);
            });
    }, [id]);


    // ==========================================
    // LOADING
    // ==========================================

    if (loading) {
        return (
            <div className="book-details-loading">

                <div className="loader"></div>

                <h2>
                    Opening your book...
                </h2>

                <p>
                    Please wait while we load the book details.
                </p>

            </div>
        );
    }


    // ==========================================
    // ERROR
    // ==========================================

    if (error) {
        return (
            <div className="book-details-error">

                <div className="error-icon">
                    ⚠️
                </div>

                <h2>
                    {error}
                </h2>

                <button
                    className="back-button"
                    onClick={() => navigate("/books")}
                >
                    ← Back to Library
                </button>

            </div>
        );
    }


    // ==========================================
    // BOOK NOT FOUND
    // ==========================================

    if (!book) {
        return (
            <div className="book-details-error">

                <div className="error-icon">
                    📚
                </div>

                <h2>
                    Book not found
                </h2>

                <p>
                    We couldn't find the book you're looking for.
                </p>

                <button
                    className="back-button"
                    onClick={() => navigate("/books")}
                >
                    ← Back to Library
                </button>

            </div>
        );
    }


    // ==========================================
    // CATEGORY
    // ==========================================

    const categoryName =
        typeof book.category === "object"
            ? book.category?.name
            : book.category;


    // ==========================================
    // PAGE
    // ==========================================

    return (
        <div className="book-details-page">

            {/* ==================================
                BACK BUTTON
            ================================== */}

            <button
                className="back-button"
                onClick={() => navigate("/books")}
            >
                ← Back to Library
            </button>


            {/* ==================================
                BOOK DETAILS CARD
            ================================== */}

            <div className="book-details-card">


                {/* ==================================
                    BOOK COVER
                ================================== */}

                <div className="book-details-cover">

                    <div className="cover-decoration"></div>

                    <div className="book-icon">
                        📖
                    </div>

                    <h1>
                        {book.title}
                    </h1>

                    <p>
                        {book.author}
                    </p>

                </div>


                {/* ==================================
                    BOOK INFORMATION
                ================================== */}

                <div className="book-details-content">


                    {/* CATEGORY */}

                    {categoryName && (
                        <span className="category-badge">
                            {categoryName}
                        </span>
                    )}


                    {/* TITLE */}

                    <h1>
                        {book.title}
                    </h1>


                    {/* AUTHOR */}

                    <h3 className="book-author">
                        ✍️ {book.author}
                    </h3>


                    {/* RATING */}

                    <div className="rating">
                        ⭐{" "}
                        <strong>
                            {book.rating || "4.5"}
                        </strong>

                        <span>
                            {" "} / 5
                        </span>
                    </div>


                    {/* DESCRIPTION */}

                    <p className="book-description">
                        {book.description ||
                            "No description available for this book."}
                    </p>


                    {/* ==================================
                        READ BOOK BUTTON
                    ================================== */}

                    <div className="book-actions">

                        <button
                            type="button"
                            className="start-reading-button"
                            onClick={() => {
                                navigate(`/read/${book.id}`);
                            }}
                        >
                            📖 Read Book →
                        </button>

                        <button
                            type="button"
                            className="back-books-button"
                            onClick={() => navigate("/books")}
                        >
                            Browse More Books
                        </button>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default BookDetails;