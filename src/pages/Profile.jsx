import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        full_name: "",
        username: "",
        email: ""
    });

    const [isEditing, setIsEditing] = useState(false);

    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");

    // ==========================================
    // NEW USER STARTING STATISTICS
    // ==========================================

    const [readingStats, setReadingStats] = useState({
        booksRead: 0,
        pagesRead: 0,
        readingHours: 0,
        monthlyGoal: 10,
        monthlyBooks: 0,
        favorites: 0,
        achievements: 0
    });


    // ==========================================
    // LOAD USER
    // ==========================================

    useEffect(() => {

        const savedUser = localStorage.getItem("user");
        const savedUsername = localStorage.getItem("username");

        if (savedUser) {

            const userData = JSON.parse(savedUser);

            setUser(userData);

            setEditName(userData.full_name || "");
            setEditEmail(userData.email || "");

        } else if (savedUsername) {

            setUser({
                username: savedUsername,
                email: savedUsername,
                full_name: savedUsername
            });

            setEditName(savedUsername);
            setEditEmail(savedUsername);

        } else {

            navigate("/login");

            return;
        }


        // ==========================================
        // LOAD READING STATISTICS
        // ==========================================

        const savedStats =
            localStorage.getItem("readingStats");

        if (savedStats) {

            setReadingStats(
                JSON.parse(savedStats)
            );

        } else {

            // New user = ZERO progress

            const initialStats = {
                booksRead: 0,
                pagesRead: 0,
                readingHours: 0,
                monthlyGoal: 10,
                monthlyBooks: 0,
                favorites: 0,
                achievements: 0
            };

            setReadingStats(initialStats);

            localStorage.setItem(
                "readingStats",
                JSON.stringify(initialStats)
            );
        }

    }, [navigate]);


    // ==========================================
    // CALCULATE MONTHLY PROGRESS
    // ==========================================

    const monthlyProgress =
        readingStats.monthlyGoal > 0
            ? Math.min(
                Math.round(
                    (readingStats.monthlyBooks /
                        readingStats.monthlyGoal) * 100
                ),
                100
            )
            : 0;


    // ==========================================
    // SAVE PROFILE
    // ==========================================

    const handleSaveProfile = () => {

        const updatedUser = {
            ...user,
            full_name: editName,
            email: editEmail
        };

        setUser(updatedUser);

        localStorage.setItem(
            "user",
            JSON.stringify(updatedUser)
        );

        setIsEditing(false);
    };


    // ==========================================
    // LOGOUT
    // ==========================================

    const handleLogout = () => {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("user");

        navigate("/login");
    };


    return (
        <div className="profile-page">

            {/* =====================================
                HEADER
            ====================================== */}

            <div className="profile-header">

                <button
                    className="profile-back-btn"
                    onClick={() => navigate("/")}
                >
                    ← Back to Home
                </button>

                <button
                    className="profile-logout-btn"
                    onClick={handleLogout}
                >
                    🚪 Logout
                </button>

            </div>


            <div className="profile-container">


                {/* =====================================
                    PROFILE HERO
                ====================================== */}

                <div className="profile-hero">

                    <div className="profile-avatar">

                        {user.full_name
                            ? user.full_name
                                .charAt(0)
                                .toUpperCase()
                            : "U"}

                    </div>


                    <div className="profile-main-info">

                        <h1>
                            {user.full_name ||
                                "BookMate User"}
                        </h1>

                        <p>
                            📚 BookMate Reader
                        </p>

                        <span>
                            ✨ Welcome to BookMate
                        </span>

                    </div>


                    <button
                        className="edit-profile-btn"
                        onClick={() =>
                            setIsEditing(!isEditing)
                        }
                    >
                        ✏️{" "}
                        {isEditing
                            ? "Cancel"
                            : "Edit Profile"}
                    </button>

                </div>


                {/* =====================================
                    EDIT PROFILE
                ====================================== */}

                {isEditing && (

                    <div className="edit-profile-card">

                        <h2>
                            ✏️ Edit Profile
                        </h2>

                        <div className="edit-grid">

                            <div className="edit-input">

                                <label>
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) =>
                                        setEditName(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>


                            <div className="edit-input">

                                <label>
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={editEmail}
                                    onChange={(e) =>
                                        setEditEmail(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>


                        <button
                            className="save-profile-btn"
                            onClick={handleSaveProfile}
                        >
                            💾 Save Changes
                        </button>

                    </div>
                )}


                {/* =====================================
                    STATISTICS
                ====================================== */}

                <div className="profile-stats">


                    {/* BOOKS */}

                    <div className="stat-card">

                        <div className="stat-icon">
                            📚
                        </div>

                        <div>

                            <h2>
                                {readingStats.booksRead}
                            </h2>

                            <p>
                                Books Read
                            </p>

                        </div>

                    </div>


                    {/* FAVORITES */}

                    <div className="stat-card">

                        <div className="stat-icon">
                            ❤️
                        </div>

                        <div>

                            <h2>
                                {readingStats.favorites}
                            </h2>

                            <p>
                                Favorites
                            </p>

                        </div>

                    </div>


                    {/* PAGES */}

                    <div className="stat-card">

                        <div className="stat-icon">
                            📄
                        </div>

                        <div>

                            <h2>
                                {readingStats.pagesRead}
                            </h2>

                            <p>
                                Pages Read
                            </p>

                        </div>

                    </div>


                    {/* ACHIEVEMENTS */}

                    <div className="stat-card">

                        <div className="stat-icon">
                            🏆
                        </div>

                        <div>

                            <h2>
                                {readingStats.achievements}
                            </h2>

                            <p>
                                Achievements
                            </p>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    READING PROGRESS + ACCOUNT
                ====================================== */}

                <div className="profile-content">


                    {/* =================================
                        MONTHLY READING GOAL
                    ================================= */}

                    <div className="profile-card">

                        <div className="card-title">

                            <h2>
                                📊 Reading Progress
                            </h2>

                            <span>
                                2026
                            </span>

                        </div>


                        <div className="progress-section">

                            <div className="progress-info">

                                <span>
                                    Monthly Goal
                                </span>

                                <strong>
                                    {readingStats.monthlyBooks}
                                    {" / "}
                                    {readingStats.monthlyGoal}
                                    {" Books"}
                                </strong>

                            </div>


                            {/* PROGRESS BAR */}

                            <div className="progress-bar">

                                <div
                                    className="progress-fill"
                                    style={{
                                        width:
                                            `${monthlyProgress}%`
                                    }}
                                ></div>

                            </div>


                            {/* PERCENTAGE */}

                            <div className="progress-percentage">

                                {monthlyProgress}%

                            </div>


                            {/* MESSAGE */}

                            {monthlyProgress === 0 ? (

                                <p>
                                    📖 Start reading to achieve
                                    your monthly goal!
                                </p>

                            ) : monthlyProgress < 100 ? (

                                <p>
                                    📚 Keep reading! You're{" "}
                                    {monthlyProgress}%
                                    through your monthly goal.
                                </p>

                            ) : (

                                <p>
                                    🎉 Congratulations! Monthly
                                    reading goal completed!
                                </p>

                            )}

                        </div>


                        {/* MINI STATS */}

                        <div className="reading-mini-stats">

                            <div>

                                <strong>
                                    {readingStats.booksRead}
                                </strong>

                                <span>
                                    Books
                                </span>

                            </div>


                            <div>

                                <strong>
                                    {readingStats.pagesRead}
                                </strong>

                                <span>
                                    Pages
                                </span>

                            </div>


                            <div>

                                <strong>
                                    {readingStats.readingHours}h
                                </strong>

                                <span>
                                    Reading
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =================================
                        ACCOUNT INFORMATION
                    ================================= */}

                    <div className="profile-card">

                        <div className="card-title">

                            <h2>
                                👤 Account Information
                            </h2>

                        </div>


                        <div className="account-info">


                            <div className="account-row">

                                <span>
                                    👤 Username
                                </span>

                                <strong>
                                    {user.username || "-"}
                                </strong>

                            </div>


                            <div className="account-row">

                                <span>
                                    ✉️ Email
                                </span>

                                <strong>
                                    {user.email || "-"}
                                </strong>

                            </div>


                            <div className="account-row">

                                <span>
                                    📖 Reader Type
                                </span>

                                <strong>
                                    New Reader
                                </strong>

                            </div>


                            <div className="account-row">

                                <span>
                                    🔐 Account
                                </span>

                                <strong className="verified">
                                    ✓ Active
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    ACHIEVEMENTS
                ====================================== */}

                <div className="profile-card achievements-card">

                    <div className="card-title">

                        <h2>
                            🏆 Achievements
                        </h2>

                        <span>
                            {readingStats.achievements}
                            {" earned"}
                        </span>

                    </div>


                    <div className="achievement-grid">


                        {/* FIRST BOOK */}

                        <div
                            className={
                                readingStats.booksRead >= 1
                                    ? "achievement achievement-earned"
                                    : "achievement achievement-locked"
                            }
                        >

                            <div className="achievement-icon">

                                {readingStats.booksRead >= 1
                                    ? "📖"
                                    : "🔒"}

                            </div>

                            <h3>
                                First Book
                            </h3>

                            <p>
                                {readingStats.booksRead >= 1
                                    ? "Achievement unlocked!"
                                    : "Read your first book"}
                            </p>

                        </div>


                        {/* READING STREAK */}

                        <div
                            className={
                                readingStats.readingHours >= 7
                                    ? "achievement achievement-earned"
                                    : "achievement achievement-locked"
                            }
                        >

                            <div className="achievement-icon">

                                {readingStats.readingHours >= 7
                                    ? "🔥"
                                    : "🔒"}

                            </div>

                            <h3>
                                Reading Streak
                            </h3>

                            <p>
                                Read for 7 days
                            </p>

                        </div>


                        {/* BOOK LOVER */}

                        <div
                            className={
                                readingStats.booksRead >= 10
                                    ? "achievement achievement-earned"
                                    : "achievement achievement-locked"
                            }
                        >

                            <div className="achievement-icon">

                                {readingStats.booksRead >= 10
                                    ? "⭐"
                                    : "🔒"}

                            </div>

                            <h3>
                                Book Lover
                            </h3>

                            <p>
                                Read 10 books
                            </p>

                        </div>


                        {/* EXPLORER */}

                        <div
                            className={
                                readingStats.favorites >= 5
                                    ? "achievement achievement-earned"
                                    : "achievement achievement-locked"
                            }
                        >

                            <div className="achievement-icon">

                                {readingStats.favorites >= 5
                                    ? "🏅"
                                    : "🔒"}

                            </div>

                            <h3>
                                Explorer
                            </h3>

                            <p>
                                Add 5 favorite books
                            </p>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    FAVORITE GENRES
                ====================================== */}

                <div className="profile-card">

                    <div className="card-title">

                        <h2>
                            ❤️ Favorite Genres
                        </h2>

                    </div>

                    <div className="genre-list">

                        {readingStats.favorites === 0 ? (

                            <p className="no-genres">
                                📚 You haven't added any favorite
                                books yet.
                            </p>

                        ) : (

                            <>
                                <span>📚 Fiction</span>
                                <span>🔥 Mystery</span>
                                <span>💕 Romance</span>
                            </>

                        )}

                    </div>

                </div>


            </div>

        </div>
    );
}

export default Profile;