import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Findreaders.css";

function Findreaders() {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [followed, setFollowed] = useState([]);

    // ==========================================
    // READER DATA
    // ==========================================

    const readers = [
        {
            id: 1,
            name: "Aarav Sharma",
            username: "@aaravreads",
            avatar: "👨🏻‍💻",
            bio: "Book lover, coffee addict & weekend reader.",
            genre: "Fiction",
            books: 87,
            followers: "1.2K",
            rating: "4.8",
            online: true,
            favorite: "The Great Gatsby",
            color: "purple"
        },

        {
            id: 2,
            name: "Ananya Patil",
            username: "@ananyabooks",
            avatar: "👩🏻‍🎨",
            bio: "Finding magic between the pages ✨",
            genre: "Fantasy",
            books: 124,
            followers: "2.4K",
            rating: "4.9",
            online: true,
            favorite: "Harry Potter",
            color: "pink"
        },

        {
            id: 3,
            name: "Rohan Mehta",
            username: "@rohanreads",
            avatar: "👨🏻‍🚀",
            bio: "Sci-fi enthusiast exploring new worlds.",
            genre: "Sci-Fi",
            books: 65,
            followers: "890",
            rating: "4.7",
            online: false,
            favorite: "Dune",
            color: "blue"
        },

        {
            id: 4,
            name: "Sneha Kulkarni",
            username: "@snehareads",
            avatar: "👩🏻‍💼",
            bio: "Romance, poetry and rainy evenings.",
            genre: "Romance",
            books: 96,
            followers: "1.8K",
            rating: "4.9",
            online: true,
            favorite: "Pride and Prejudice",
            color: "rose"
        },

        {
            id: 5,
            name: "Vikram Joshi",
            username: "@vikrambooks",
            avatar: "🧑🏻‍🏫",
            bio: "Mystery lover. Always looking for clues.",
            genre: "Mystery",
            books: 73,
            followers: "756",
            rating: "4.6",
            online: false,
            favorite: "Sherlock Holmes",
            color: "cyan"
        },

        {
            id: 6,
            name: "Meera Deshmukh",
            username: "@meerareads",
            avatar: "👩🏻‍🔬",
            bio: "Learning something new from every book.",
            genre: "Self Help",
            books: 112,
            followers: "1.5K",
            rating: "4.8",
            online: true,
            favorite: "Atomic Habits",
            color: "orange"
        },

        {
            id: 7,
            name: "Kabir Singh",
            username: "@kabirstories",
            avatar: "🧑🏻‍🎤",
            bio: "Stories are my escape from reality.",
            genre: "Fiction",
            books: 91,
            followers: "1.1K",
            rating: "4.7",
            online: true,
            favorite: "1984",
            color: "indigo"
        },

        {
            id: 8,
            name: "Priya Shah",
            username: "@priyareads",
            avatar: "👩🏻‍🎓",
            bio: "Collecting books and unforgettable stories.",
            genre: "Biography",
            books: 105,
            followers: "1.7K",
            rating: "4.8",
            online: false,
            favorite: "Becoming",
            color: "green"
        }
    ];


    // ==========================================
    // GENRES
    // ==========================================

    const genres = [
        "All",
        "Fiction",
        "Fantasy",
        "Romance",
        "Mystery",
        "Sci-Fi",
        "Biography",
        "Self Help"
    ];


    // ==========================================
    // FILTER READERS
    // ==========================================

    const filteredReaders = useMemo(() => {

        return readers.filter((reader) => {

            const searchValue =
                search.toLowerCase().trim();

            const matchesSearch =
                reader.name
                    .toLowerCase()
                    .includes(searchValue) ||

                reader.username
                    .toLowerCase()
                    .includes(searchValue) ||

                reader.favorite
                    .toLowerCase()
                    .includes(searchValue);

            const matchesGenre =
                selectedGenre === "All" ||
                reader.genre === selectedGenre;

            return (
                matchesSearch &&
                matchesGenre
            );
        });

    }, [search, selectedGenre]);


    // ==========================================
    // FOLLOW / UNFOLLOW
    // ==========================================

    const toggleFollow = (id) => {

        setFollowed((current) => {

            if (current.includes(id)) {

                return current.filter(
                    (readerId) => readerId !== id
                );

            }

            return [
                ...current,
                id
            ];
        });
    };


    // ==========================================
    // OPEN PROFILE
    // ==========================================

    const openProfile = (id) => {

        navigate(`/profile/${id}`);

    };


    return (

        <div className="readers-page">

            {/* ==================================
                BACKGROUND EFFECTS
            ================================== */}

            <div className="reader-glow glow-one"></div>

            <div className="reader-glow glow-two"></div>

            <div className="reader-glow glow-three"></div>


            <div className="reader-floating float-one">
                📚
            </div>

            <div className="reader-floating float-two">
                ✨
            </div>

            <div className="reader-floating float-three">
                ❤️
            </div>


            {/* ==================================
                HERO SECTION
            ================================== */}

            <section className="readers-hero">

                <div className="hero-badge">
                    ✦ BOOKMATE COMMUNITY
                </div>


                <h1>
                    Find Your
                    <span> Reading Tribe</span>
                </h1>


                <p>
                    Connect with readers who share your
                    passion, discover amazing recommendations,
                    and build your own reading community.
                </p>


                {/* SEARCH */}

                <div className="reader-search">

                    <span className="search-icon">
                        🔍
                    </span>


                    <input
                        type="text"
                        placeholder="Search readers, usernames or books..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />


                    {search && (

                        <button
                            className="clear-search"
                            onClick={() =>
                                setSearch("")
                            }
                        >
                            ✕
                        </button>

                    )}

                </div>

            </section>


            {/* ==================================
                COMMUNITY STATS
            ================================== */}

            <section className="community-stats">

                <div className="community-stat">

                    <div className="stat-symbol">
                        👥
                    </div>

                    <div>
                        <strong>
                            12K+
                        </strong>

                        <span>
                            Readers
                        </span>
                    </div>

                </div>


                <div className="community-stat">

                    <div className="stat-symbol">
                        📚
                    </div>

                    <div>
                        <strong>
                            48K+
                        </strong>

                        <span>
                            Books Read
                        </span>
                    </div>

                </div>


                <div className="community-stat">

                    <div className="stat-symbol">
                        💬
                    </div>

                    <div>
                        <strong>
                            25K+
                        </strong>

                        <span>
                            Discussions
                        </span>
                    </div>

                </div>


                <div className="community-stat">

                    <div className="stat-symbol">
                        ⭐
                    </div>

                    <div>
                        <strong>
                            4.9
                        </strong>

                        <span>
                            Community Rating
                        </span>
                    </div>

                </div>

            </section>


            {/* ==================================
                GENRE FILTER
            ================================== */}

            <section className="reader-filters">

                <div className="filter-title">

                    <span>
                        EXPLORE
                    </span>

                    <h2>
                        Find readers by interest
                    </h2>

                </div>


                <div className="genre-list">

                    {genres.map((genre) => (

                        <button
                            key={genre}
                            className={
                                selectedGenre === genre
                                    ? "genre-button active"
                                    : "genre-button"
                            }
                            onClick={() =>
                                setSelectedGenre(genre)
                            }
                        >
                            {genre}
                        </button>

                    ))}

                </div>

            </section>


            {/* ==================================
                READERS SECTION
            ================================== */}

            <section className="readers-section">

                <div className="readers-heading">

                    <div>

                        <span>
                            COMMUNITY MEMBERS
                        </span>

                        <h2>
                            Readers you may like
                        </h2>

                    </div>


                    <p>
                        {filteredReaders.length} readers found
                    </p>

                </div>


                {/* ==================================
                    NO RESULTS
                ================================== */}

                {filteredReaders.length === 0 ? (

                    <div className="no-readers">

                        <div>
                            🔍
                        </div>

                        <h2>
                            No readers found
                        </h2>

                        <p>
                            Try another name, username,
                            book or genre.
                        </p>

                        <button
                            onClick={() => {
                                setSearch("");
                                setSelectedGenre("All");
                            }}
                        >
                            Reset Search
                        </button>

                    </div>

                ) : (


                    /* ==================================
                        READER GRID
                    ================================== */

                    <div className="readers-grid">

                        {filteredReaders.map(
                            (reader, index) => (

                                <article
                                    className={`reader-card ${reader.color}`}
                                    key={reader.id}
                                    style={{
                                        animationDelay:
                                            `${index * 0.08}s`
                                    }}
                                >

                                    <div className="card-glow"></div>


                                    {/* TOP */}

                                    <div className="reader-card-top">

                                        <div className="reader-avatar-wrapper">

                                            <div className="reader-avatar">
                                                {reader.avatar}
                                            </div>


                                            {reader.online && (

                                                <span
                                                    className="online-dot"
                                                    title="Online"
                                                ></span>

                                            )}

                                        </div>


                                        {/* FOLLOW */}

                                        <button
                                            type="button"
                                            className={
                                                followed.includes(
                                                    reader.id
                                                )
                                                    ? "follow-button following"
                                                    : "follow-button"
                                            }
                                            onClick={() =>
                                                toggleFollow(
                                                    reader.id
                                                )
                                            }
                                        >

                                            {followed.includes(
                                                reader.id
                                            )
                                                ? "✓ Following"
                                                : "+ Follow"}

                                        </button>

                                    </div>


                                    {/* USER INFO */}

                                    <div className="reader-info">

                                        <h3>
                                            {reader.name}
                                        </h3>


                                        <span className="username">
                                            {reader.username}
                                        </span>


                                        <p>
                                            {reader.bio}
                                        </p>

                                    </div>


                                    {/* TAGS */}

                                    <div className="reader-tags">

                                        <span>
                                            #{reader.genre}
                                        </span>


                                        <span>
                                            ⭐ {reader.rating}
                                        </span>

                                    </div>


                                    {/* FAVORITE BOOK */}

                                    <div className="favorite-book">

                                        <div className="mini-book">
                                            📖
                                        </div>


                                        <div>

                                            <small>
                                                CURRENT FAVORITE
                                            </small>


                                            <strong>
                                                {reader.favorite}
                                            </strong>

                                        </div>

                                    </div>


                                    {/* READER STATS */}

                                    <div className="reader-card-stats">

                                        <div>

                                            <strong>
                                                {reader.books}
                                            </strong>

                                            <span>
                                                Books
                                            </span>

                                        </div>


                                        <div>

                                            <strong>
                                                {reader.followers}
                                            </strong>

                                            <span>
                                                Followers
                                            </span>

                                        </div>

                                    </div>


                                    {/* VIEW PROFILE */}

                                    <button
                                        type="button"
                                        className="profile-button"
                                        onClick={() =>
                                            openProfile(
                                                reader.id
                                            )
                                        }
                                    >

                                        <span>
                                            View Profile
                                        </span>

                                        <span>
                                            →
                                        </span>

                                    </button>

                                </article>

                            )
                        )}

                    </div>

                )}

            </section>


            {/* ==================================
                BOTTOM CTA
            ================================== */}

            <section className="reader-cta">

                <div className="cta-icon">
                    📚
                </div>


                <div className="cta-content">

                    <span>
                        BUILD YOUR COMMUNITY
                    </span>


                    <h2>
                        Your next favorite reader
                        could be here.
                    </h2>


                    <p>
                        Follow readers, exchange
                        recommendations, and make
                        reading more social.
                    </p>

                </div>


                <button
                    type="button"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                >
                    Explore Readers →
                </button>

            </section>

        </div>
    );
}

export default Findreaders;