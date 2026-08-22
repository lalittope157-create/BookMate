import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="navbar">

            {/* ================= LOGO ================= */}
            <NavLink to="/" className="navbar-logo">
                📚 <span>BookMate</span>
            </NavLink>


            {/* ================= MAIN NAVIGATION ================= */}
            <div className="navbar-links">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    🏠 Home
                </NavLink>

                <NavLink
                    to="/books"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    📚 Books
                </NavLink>

                <NavLink
                    to="/library"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    📖 Library
                </NavLink>

                <NavLink
                    to="/readers"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    👥 Readers
                </NavLink>

                <NavLink
                    to="/create-post"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    ✍️ Create Post
                </NavLink>

            </div>


            {/* ================= RIGHT SIDE ================= */}
            <div className="navbar-right">

                {/* LOGIN */}
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive
                            ? "login-button active"
                            : "login-button"
                    }
                >
                    Login
                </NavLink>


                {/* REGISTER */}
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive
                            ? "register-button active"
                            : "register-button"
                    }
                >
                    Register
                </NavLink>


                {/* ================= NOTIFICATION ================= */}
                <div className="notification-wrapper">

                    <button
                        type="button"
                        className="notification-button"
                        onClick={() =>
                            setShowNotifications(!showNotifications)
                        }
                        title="Notifications"
                    >
                        🔔

                        <span className="notification-dot">
                            3
                        </span>
                    </button>


                    {/* DROPDOWN */}
                    {showNotifications && (
                        <div className="notification-dropdown">

                            <div className="notification-header">
                                <h3>Notifications</h3>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowNotifications(false)
                                    }
                                >
                                    ✕
                                </button>
                            </div>


                            <div className="notification-item">
                                <div className="notification-icon">
                                    📚
                                </div>

                                <div>
                                    <strong>New Book Added</strong>
                                    <p>
                                        A new book has been added to BookMate.
                                    </p>
                                    <small>2 minutes ago</small>
                                </div>
                            </div>


                            <div className="notification-item">
                                <div className="notification-icon">
                                    👤
                                </div>

                                <div>
                                    <strong>New Reader</strong>
                                    <p>
                                        Someone started following your profile.
                                    </p>
                                    <small>10 minutes ago</small>
                                </div>
                            </div>


                            <div className="notification-item">
                                <div className="notification-icon">
                                    💬
                                </div>

                                <div>
                                    <strong>New Message</strong>
                                    <p>
                                        You have received a new message.
                                    </p>
                                    <small>30 minutes ago</small>
                                </div>
                            </div>


                            <button
                                className="view-all-notifications"
                                onClick={() => {
                                    setShowNotifications(false);
                                    navigate("/notifications");
                                }}
                            >
                                View All Notifications →
                            </button>

                        </div>
                    )}

                </div>


                {/* PROFILE */}
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive
                            ? "profile-nav-button active"
                            : "profile-nav-button"
                    }
                >
                    👤 Profile
                </NavLink>

            </div>

        </nav>
    );
}

export default NavBar;