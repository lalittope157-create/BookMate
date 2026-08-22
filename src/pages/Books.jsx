import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Books.css";

function Books() {
    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    // ==========================================
    // LOAD BOOKS
    // ==========================================

    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/books/")
            .then((response) => {

                console.log("Books data:", response.data);

                setBooks(response.data);
                setFilteredBooks(response.data);
                setLoading(false);

            })
            .catch((error) => {

                console.error(
                    "Error fetching books:",
                    error
                );

                setError("Failed to load books.");
                setLoading(false);

            });

    }, []);


    // ==========================================
    // SEARCH
    // ==========================================

    useEffect(() => {

        const searchText = search.toLowerCase().trim();

        const result = books.filter((book) => {

            return (
                book.title
                    ?.toLowerCase()
                    .includes(searchText) ||

                book.author
                    ?.toLowerCase()
                    .includes(searchText)
            );

        });

        setFilteredBooks(result);

    }, [search, books]);


    // ==========================================
    // LOADING
    // ==========================================

    if (loading) {

        return (
            <div className="loading-screen">

                <div className="loader"></div>

                <h2>
                    Loading your library...
                </h2>

                <p>
                    Finding amazing books for you 📚
                </p>

            </div>
        );

    }


    // ==========================================
    // ERROR
    // ==========================================

    if (error) {

        return (
            <div className="error-screen">

                <div className="error-icon">
                    ⚠️
                </div>

                <h2>
                    {error}
                </h2>

                <p>
                    Please check that your Django
                    server and Books API are running.
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="read-button"
                >
                    🔄 Try Again
                </button>

            </div>
        );

    }


    // ==========================================
    // PAGE
    // ==========================================

    return (

        <div className="library-page">

            {/* ==================================
                BACKGROUND DECORATIONS
            ================================== */}

            <div className="floating-book book-one">
                📖
            </div>

            <div className="floating-book book-two">
                📚
            </div>

            <div className="floating-book book-three">
                📕
            </div>


            {/* ==================================
                HEADER
            ================================== */}

            <section className="library-header">

                <div className="header-content">

                    <span className="small-title">
                        WELCOME TO YOUR
                    </span>

                    <h1>
                        Digital <span>Library</span>
                    </h1>

                    <p>
                        Discover stories, explore knowledge,
                        and find your next unforgettable book.
                    </p>

                </div>

                <div className="library-icon">
                    📚
                </div>

            </section>


            {/* ==================================
                SEARCH
            ================================== */}

            <section className="search-section">

                <div className="search-box">

                    <span>
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Search by book title or author..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    {search && (

                        <button
                            onClick={() => setSearch("")}
                        >
                            ✕
                        </button>

                    )}

                </div>

            </section>


            {/* ==================================
                STATS
            ================================== */}

            <section className="library-stats">

                <div className="stat-card">

                    <div className="stat-icon">
                        📚
                    </div>

                    <div>

                        <strong>
                            {books.length}
                        </strong>

                        <span>
                            Total Books
                        </span>

                    </div>

                </div>


                <div className="stat-card">

                    <div className="stat-icon">
                        ⭐
                    </div>

                    <div>

                        <strong>
                            4.5
                        </strong>

                        <span>
                            Top Rating
                        </span>

                    </div>

                </div>


                <div className="stat-card">

                    <div className="stat-icon">
                        🔎
                    </div>

                    <div>

                        <strong>
                            {filteredBooks.length}
                        </strong>

                        <span>
                            Showing
                        </span>

                    </div>

                </div>

            </section>


            {/* ==================================
                BOOK SECTION
            ================================== */}

            <section className="books-section">

                <div className="section-heading">

                    <div>

                        <span>
                            EXPLORE
                        </span>

                        <h2>
                            All Books
                        </h2>

                    </div>

                    <p>
                        {filteredBooks.length} books available
                    </p>

                </div>


                {/* NO BOOKS */}

                {filteredBooks.length === 0 ? (

                    <div className="no-books">

                        <div>
                            📚
                        </div>

                        <h2>
                            No books found
                        </h2>

                        <p>
                            Try searching with another
                            title or author.
                        </p>

                    </div>

                ) : (

                    <div className="books-grid">

                        {filteredBooks.map(
                            (book, index) => (

                                <div
                                    className="book-card"
                                    key={book.id}
                                    style={{
                                        animationDelay:
                                            `${index * 0.08}s`
                                    }}
                                >


                                    {/* ==================
                                        BOOK COVER
                                    ================== */}

                                    <div className="book-cover">

                                        <div className="cover-decoration">
                                        </div>

                                        <div className="book-icon">
                                            📖
                                        </div>

                                        <div className="cover-title">
                                            {book.title}
                                        </div>

                                        <div className="cover-author">
                                            {book.author}
                                        </div>

                                    </div>


                                    {/* ==================
                                        BOOK CONTENT
                                    ================== */}

                                    <div className="book-content">

                                        <div className="category-badge">

                                            {book.category_name ||
                                                (
                                                    typeof book.category === "object"
                                                        ? book.category?.name
                                                        : book.category
                                                )}

                                        </div>


                                        <h2>
                                            {book.title}
                                        </h2>


                                        <p className="author">
                                            ✍️ {book.author}
                                        </p>


                                        <p className="description">

                                            {book.description ||
                                                "No description available."}

                                        </p>


                                        {/* ==================
                                            FOOTER
                                        ================== */}

                                        <div className="book-footer">

                                            <div className="rating">

                                                ⭐

                                                <strong>
                                                    {book.rating || "4.5"}
                                                </strong>

                                                <span>
                                                    / 5
                                                </span>

                                            </div>


                                            {/* ==================
                                                READ NOW
                                            ================== */}

                                            <button
                                                type="button"
                                                className="read-button"
                                                onClick={() =>
                                                    navigate(
                                                        `/books/${book.id}`
                                                    )
                                                }
                                            >
                                                Read Now →
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                )}

            </section>

        </div>
    );
}

export default Books;