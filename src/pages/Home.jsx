import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page">

            {/* ==========================================
                HERO SECTION
            ========================================== */}

            <section className="hero-section">

                {/* Background Decorations */}

                <div className="hero-glow glow-one"></div>
                <div className="hero-glow glow-two"></div>

                <div className="floating-book floating-one">
                    📖
                </div>

                <div className="floating-book floating-two">
                    📚
                </div>

                <div className="floating-book floating-three">
                    ✨
                </div>


                <div className="hero-content">

                    <div className="hero-badge">
                        ✨ YOUR DIGITAL READING WORLD
                    </div>

                    <h1>
                        Discover Your
                        <span> Next Great Story</span>
                    </h1>

                    <p>
                        Explore amazing books, build your personal
                        library, connect with fellow readers, and
                        enjoy your favorite stories anytime.
                    </p>


                    <div className="hero-buttons">

                        <button
                            className="primary-button"
                            onClick={() =>
                                navigate("/books")
                            }
                        >
                            📚 Explore Books
                        </button>

                        <button
                            className="secondary-button"
                            onClick={() =>
                                navigate("/library")
                            }
                        >
                            ❤️ My Library
                        </button>

                    </div>


                    <div className="hero-stats">

                        <div>
                            <strong>19+</strong>
                            <span>Books</span>
                        </div>

                        <div>
                            <strong>10+</strong>
                            <span>Categories</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Reading Joy</span>
                        </div>

                    </div>

                </div>


                {/* HERO BOOK */}

                <div className="hero-book-area">

                    <div className="book-shadow"></div>

                    <div className="hero-book">

                        <div className="hero-book-top">
                            BOOKMATE
                        </div>

                        <div className="hero-book-icon">
                            📖
                        </div>

                        <h2>
                            Stories
                        </h2>

                        <p>
                            Worth Reading
                        </p>

                        <div className="hero-book-line"></div>

                        <small>
                            DISCOVER • READ • CONNECT
                        </small>

                    </div>

                    <div className="book-floating-card card-rating">
                        ⭐ <strong>4.8</strong>
                        <span>Reader Rating</span>
                    </div>

                    <div className="book-floating-card card-books">
                        📚
                        <span>
                            19+ Books
                        </span>
                    </div>

                </div>

            </section>


            {/* ==========================================
                FEATURES
            ========================================== */}

            <section className="features-section">

                <div className="section-title">

                    <span>
                        WHY BOOKMATE?
                    </span>

                    <h2>
                        Everything You Need
                        <strong> To Love Reading</strong>
                    </h2>

                    <p>
                        A simple and beautiful place for every
                        book lover.
                    </p>

                </div>


                <div className="features-grid">

                    <div className="feature-card">

                        <div className="feature-icon purple">
                            📚
                        </div>

                        <h3>
                            Huge Collection
                        </h3>

                        <p>
                            Explore books from different genres,
                            authors and categories.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon orange">
                            📖
                        </div>

                        <h3>
                            Read Online
                        </h3>

                        <p>
                            Open your favorite PDF books and
                            enjoy a comfortable reading experience.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon pink">
                            ❤️
                        </div>

                        <h3>
                            Personal Library
                        </h3>

                        <p>
                            Save your favorite books and keep
                            everything organized.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon blue">
                            👥
                        </div>

                        <h3>
                            Meet Readers
                        </h3>

                        <p>
                            Discover readers, share posts and
                            connect with people who love books.
                        </p>

                    </div>

                </div>

            </section>


            {/* ==========================================
                CATEGORIES
            ========================================== */}

            <section className="categories-section">

                <div className="section-title">

                    <span>
                        EXPLORE
                    </span>

                    <h2>
                        Find Your
                        <strong> Favorite Genre</strong>
                    </h2>

                </div>


                <div className="categories-grid">

                    <div
                        className="category-card fiction"
                        onClick={() =>
                            navigate("/books")
                        }
                    >
                        <div>
                            📖
                        </div>

                        <h3>
                            Fiction
                        </h3>

                        <p>
                            Stories & imagination
                        </p>

                        <span>
                            Explore →
                        </span>
                    </div>


                    <div
                        className="category-card science"
                        onClick={() =>
                            navigate("/books")
                        }
                    >
                        <div>
                            🔬
                        </div>

                        <h3>
                            Science
                        </h3>

                        <p>
                            Discover knowledge
                        </p>

                        <span>
                            Explore →
                        </span>
                    </div>


                    <div
                        className="category-card history"
                        onClick={() =>
                            navigate("/books")
                        }
                    >
                        <div>
                            🏛️
                        </div>

                        <h3>
                            History
                        </h3>

                        <p>
                            Learn from the past
                        </p>

                        <span>
                            Explore →
                        </span>
                    </div>


                    <div
                        className="category-card mystery"
                        onClick={() =>
                            navigate("/books")
                        }
                    >
                        <div>
                            🔎
                        </div>

                        <h3>
                            Mystery
                        </h3>

                        <p>
                            Secrets & suspense
                        </p>

                        <span>
                            Explore →
                        </span>
                    </div>

                </div>

            </section>


            {/* ==========================================
                FEATURED BOOKS
            ========================================== */}

            <section className="featured-section">

                <div className="featured-heading">

                    <div>

                        <span>
                            HANDPICKED FOR YOU
                        </span>

                        <h2>
                            Featured
                            <strong> Books</strong>
                        </h2>

                    </div>


                    <button
                        onClick={() =>
                            navigate("/books")
                        }
                    >
                        View All Books →
                    </button>

                </div>


                <div className="featured-books">

                    <div className="featured-book">

                        <div className="featured-cover cover-one">

                            <span>
                                📖
                            </span>

                            <h3>
                                The Great
                                Gatsby
                            </h3>

                            <p>
                                F. Scott Fitzgerald
                            </p>

                        </div>

                        <div className="featured-info">

                            <div className="book-rating">
                                ⭐ 3.0
                            </div>

                            <h3>
                                The Great Gatsby
                            </h3>

                            <p>
                                F. Scott Fitzgerald
                            </p>

                        </div>

                    </div>


                    <div className="featured-book">

                        <div className="featured-cover cover-two">

                            <span>
                                🧪
                            </span>

                            <h3>
                                The
                                Disappearing
                                Spoon
                            </h3>

                            <p>
                                Sam Kean
                            </p>

                        </div>

                        <div className="featured-info">

                            <div className="book-rating">
                                ⭐ 4.5
                            </div>

                            <h3>
                                The Disappearing Spoon
                            </h3>

                            <p>
                                Science & Discovery
                            </p>

                        </div>

                    </div>


                    <div className="featured-book">

                        <div className="featured-cover cover-three">

                            <span>
                                🌙
                            </span>

                            <h3>
                                Beautiful
                                Stories
                            </h3>

                            <p>
                                BookMate Collection
                            </p>

                        </div>

                        <div className="featured-info">

                            <div className="book-rating">
                                ⭐ 4.8
                            </div>

                            <h3>
                                Beautiful Stories
                            </h3>

                            <p>
                                Fiction
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==========================================
                COMMUNITY
            ========================================== */}

            <section className="community-section">

                <div className="community-content">

                    <div className="community-icon">
                        👥
                    </div>

                    <span>
                        BOOKMATE COMMUNITY
                    </span>

                    <h2>
                        Reading Is Better
                        <br />
                        <strong>Together.</strong>
                    </h2>

                    <p>
                        Share your thoughts, write reviews,
                        discover new readers and become part
                        of the BookMate community.
                    </p>

                    <button
                        onClick={() =>
                            navigate("/readers")
                        }
                    >
                        Find Readers →
                    </button>

                </div>


                <div className="community-visual">

                    <div className="reader-avatar avatar-one">
                        👨🏻
                    </div>

                    <div className="reader-avatar avatar-two">
                        👩🏻
                    </div>

                    <div className="reader-avatar avatar-three">
                        👨🏽
                    </div>

                    <div className="reader-avatar avatar-four">
                        👩🏽
                    </div>

                    <div className="community-book">
                        📚
                    </div>

                </div>

            </section>


            {/* ==========================================
                FINAL CTA
            ========================================== */}

            <section className="final-cta">

                <div className="cta-glow"></div>

                <div className="cta-content">

                    <div className="cta-icon">
                        📖
                    </div>

                    <h2>
                        Your Next Adventure
                        <br />
                        <strong>Starts Here.</strong>
                    </h2>

                    <p>
                        Pick a book. Turn the page.
                        Discover a whole new world.
                    </p>

                    <button
                        onClick={() =>
                            navigate("/books")
                        }
                    >
                        Start Reading →
                    </button>

                </div>

            </section>

        </div>
    );
}

export default Home;