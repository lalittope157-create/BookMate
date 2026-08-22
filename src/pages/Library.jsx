import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Library.css";

function Library() {

    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [loading, setLoading] = useState(true);


    // ==========================================
    // LOAD BOOKS
    // ==========================================

    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/books/")
            .then((response) => {

                console.log(
                    "Library books:",
                    response.data
                );

                setBooks(response.data);

                setLoading(false);

            })
            .catch((error) => {

                console.error(
                    "Library error:",
                    error
                );

                setLoading(false);

            });

    }, []);


    // ==========================================
    // FILTER BOOKS
    // ==========================================

    const filteredBooks = books.filter((book) => {

        const searchText =
            search.toLowerCase();

        const matchesSearch =
            book.title
                ?.toLowerCase()
                .includes(searchText) ||
            book.author
                ?.toLowerCase()
                .includes(searchText);


        const category =
            typeof book.category === "object"
                ? book.category?.name
                : book.category;


        const matchesFilter =
            filter === "All" ||
            category === filter;


        return (
            matchesSearch &&
            matchesFilter
        );

    });


    // ==========================================
    // CATEGORIES
    // ==========================================

    const categories = [
        "All",
        ...new Set(
            books
                .map((book) =>
                    typeof book.category === "object"
                        ? book.category?.name
                        : book.category
                )
                .filter(Boolean)
        )
    ];


    // ==========================================
    // LOADING
    // ==========================================

    if (loading) {

        return (

            <div className="library-loading">

                <div className="library-spinner"></div>

                <h2>
                    Preparing your bookshelf...
                </h2>

                <p>
                    Gathering your favorite books 📚
                </p>

            </div>

        );

    }


    return (

        <div className="personal-library">


            {/* ==================================
                HERO
            ================================== */}

            <section className="library-hero">

                <div className="library-hero-content">

                    <div className="library-label">
                        📚 MY BOOKMATE LIBRARY
                    </div>

                    <h1>
                        Your Personal
                        <span> Bookshelf</span>
                    </h1>

                    <p>
                        Keep your favorite stories close,
                        discover something new, and continue
                        your reading journey.
                    </p>


                    <button
                        className="discover-button"
                        onClick={() =>
                            navigate("/books")
                        }
                    >
                        Discover More Books →
                    </button>

                </div>


                {/* BOOK STACK */}

                <div className="library-visual">

                    <div className="stack-book stack-one">
                        📕
                    </div>

                    <div className="stack-book stack-two">
                        📗
                    </div>

                    <div className="stack-book stack-three">
                        📘
                    </div>

                    <div className="stack-book stack-main">
                        📖
                    </div>

                </div>

            </section>


            {/* ==================================
                STATS
            ================================== */}

            <section className="library-stat-grid">

                <div className="library-stat-card">

                    <div className="stat-card-icon purple">
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


                <div className="library-stat-card">

                    <div className="stat-card-icon orange">
                        📖
                    </div>

                    <div>
                        <strong>
                            {books.length > 0
                                ? Math.ceil(
                                    books.length * 0.4
                                )
                                : 0}
                        </strong>

                        <span>
                            Books Reading
                        </span>
                    </div>

                </div>


                <div className="library-stat-card">

                    <div className="stat-card-icon pink">
                        ❤️
                    </div>

                    <div>
                        <strong>
                            {books.length > 0
                                ? Math.ceil(
                                    books.length * 0.3
                                )
                                : 0}
                        </strong>

                        <span>
                            Favorites
                        </span>
                    </div>

                </div>


                <div className="library-stat-card">

                    <div className="stat-card-icon blue">
                        ⭐
                    </div>

                    <div>
                        <strong>
                            4.5
                        </strong>

                        <span>
                            Avg Rating
                        </span>
                    </div>

                </div>

            </section>


            {/* ==================================
                SEARCH & FILTER
            ================================== */}

            <section className="library-controls">

                <div className="library-search">

                    <span>
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Search your library..."
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                    {search && (

                        <button
                            onClick={() =>
                                setSearch("")
                            }
                        >
                            ✕
                        </button>

                    )}

                </div>


                <div className="category-filters">

                    {categories.map(
                        (category) => (

                            <button
                                key={category}
                                className={
                                    filter === category
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setFilter(category)
                                }
                            >
                                {category}
                            </button>

                        )
                    )}

                </div>

            </section>


            {/* ==================================
                SECTION HEADING
            ================================== */}

            <section className="library-books-section">

                <div className="library-section-heading">

                    <div>

                        <span>
                            YOUR COLLECTION
                        </span>

                        <h2>
                            My Books
                        </h2>

                    </div>

                    <p>
                        {filteredBooks.length} books
                    </p>

                </div>


                {/* ==================================
                    EMPTY
                ================================== */}

                {filteredBooks.length === 0 ? (

                    <div className="library-empty">

                        <div className="empty-icon">
                            📚
                        </div>

                        <h2>
                            Your shelf is waiting
                        </h2>

                        <p>
                            We couldn't find any books
                            matching your search.
                        </p>

                        <button
                            onClick={() =>
                                navigate("/books")
                            }
                        >
                            Explore Books
                        </button>

                    </div>

                ) : (

                    <div className="library-books-grid">

                        {filteredBooks.map(
                            (book, index) => {

                                const category =
                                    typeof book.category === "object"
                                        ? book.category?.name
                                        : book.category;


                                return (

                                    <article
                                        className="library-book-card"
                                        key={book.id}
                                        style={{
                                            animationDelay:
                                                `${index * 0.08}s`
                                        }}
                                    >

                                        {/* COVER */}

                                        <div
                                            className={
                                                `library-book-cover cover-${index % 5}`
                                            }
                                        >

                                            <div className="cover-glow"></div>

                                            <div className="cover-book-icon">
                                                📖
                                            </div>

                                            <h3>
                                                {book.title}
                                            </h3>

                                            <p>
                                                {book.author}
                                            </p>

                                            <div className="cover-bottom">
                                                BOOKMATE
                                            </div>

                                        </div>


                                        {/* INFORMATION */}

                                        <div className="library-book-info">

                                            {category && (

                                                <span className="library-category">
                                                    {category}
                                                </span>

                                            )}


                                            <h2>
                                                {book.title}
                                            </h2>


                                            <p className="library-author">
                                                ✍️ {book.author}
                                            </p>


                                            <p className="library-description">

                                                {book.description
                                                    ? book.description.length > 95
                                                        ? `${book.description.substring(
                                                            0,
                                                            95
                                                        )}...`
                                                        : book.description
                                                    : "No description available."
                                                }

                                            </p>


                                            {/* PROGRESS */}

                                            <div className="reading-progress">

                                                <div className="progress-top">

                                                    <span>
                                                        Reading Progress
                                                    </span>

                                                    <strong>
                                                        {index % 3 === 0
                                                            ? "100%"
                                                            : index % 3 === 1
                                                                ? "65%"
                                                                : "30%"}
                                                    </strong>

                                                </div>


                                                <div className="progress-bar">

                                                    <div
                                                        style={{
                                                            width:
                                                                index % 3 === 0
                                                                    ? "100%"
                                                                    : index % 3 === 1
                                                                        ? "65%"
                                                                        : "30%"
                                                        }}
                                                    ></div>

                                                </div>

                                            </div>


                                            {/* FOOTER */}

                                            <div className="library-card-footer">

                                                <div className="library-rating">

                                                    ⭐{" "}

                                                    <strong>
                                                        {book.rating || "4.5"}
                                                    </strong>

                                                </div>


                                                <button
                                                    onClick={() =>
                                                        navigate(
                                                            `/read/${book.id}`
                                                        )
                                                    }
                                                >
                                                    Read →
                                                </button>

                                            </div>

                                        </div>

                                    </article>

                                );

                            }
                        )}

                    </div>

                )}

            </section>


            {/* ==================================
                CTA
            ================================== */}

            <section className="library-cta">

                <div>

                    <span>
                        KEEP READING
                    </span>

                    <h2>
                        There Are Always
                        <strong> More Stories</strong>
                    </h2>

                    <p>
                        Your next favorite book could be
                        waiting for you.
                    </p>

                </div>


                <button
                    onClick={() =>
                        navigate("/books")
                    }
                >
                    Browse Books 📚
                </button>

            </section>

        </div>

    );
}

export default Library;