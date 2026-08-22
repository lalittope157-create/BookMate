import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notifications.css";

function Notifications() {
    const navigate = useNavigate();

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: "follow",
            icon: "👤",
            title: "New follower",
            message: "Ananya Patil started following you.",
            time: "2 minutes ago",
            unread: true,
        },
        {
            id: 2,
            type: "review",
            icon: "⭐",
            title: "New book review",
            message: "Rohan Mehta reviewed The Great Gatsby.",
            time: "15 minutes ago",
            unread: true,
        },
        {
            id: 3,
            type: "like",
            icon: "❤️",
            title: "Someone liked your post",
            message: "Sneha Kulkarni liked your book recommendation.",
            time: "1 hour ago",
            unread: true,
        },
        {
            id: 4,
            type: "comment",
            icon: "💬",
            title: "New comment",
            message: "Aarav Sharma commented on your post.",
            time: "3 hours ago",
            unread: false,
        },
        {
            id: 5,
            type: "book",
            icon: "📚",
            title: "New book recommendation",
            message: "A book you may like has been added to BookMate.",
            time: "Yesterday",
            unread: false,
        },
        {
            id: 6,
            type: "community",
            icon: "✨",
            title: "Welcome to the community",
            message: "Discover readers, share books and build your reading tribe.",
            time: "2 days ago",
            unread: false,
        },
    ]);

    const unreadCount = notifications.filter(
        (notification) => notification.unread
    ).length;

    const markAsRead = (id) => {
        setNotifications((current) =>
            current.map((notification) =>
                notification.id === id
                    ? { ...notification, unread: false }
                    : notification
            )
        );
    };

    const markAllAsRead = () => {
        setNotifications((current) =>
            current.map((notification) => ({
                ...notification,
                unread: false,
            }))
        );
    };

    const deleteNotification = (id) => {
        setNotifications((current) =>
            current.filter((notification) => notification.id !== id)
        );
    };

    return (
        <div className="notifications-page">

            {/* Background effects */}
            <div className="notification-glow glow-purple"></div>
            <div className="notification-glow glow-pink"></div>
            <div className="notification-glow glow-blue"></div>

            <div className="notification-container">

                {/* Header */}
                <div className="notification-header">

                    <div>
                        <span className="notification-small-title">
                            BOOKMATE COMMUNITY
                        </span>

                        <h1>
                            Your <span>Notifications</span> 🔔
                        </h1>

                        <p>
                            Stay updated with your reading community.
                        </p>
                    </div>

                    <div className="notification-header-icon">
                        🔔

                        {unreadCount > 0 && (
                            <span>{unreadCount}</span>
                        )}
                    </div>

                </div>


                {/* Action bar */}
                <div className="notification-actions">

                    <div className="notification-count">
                        <strong>
                            {unreadCount}
                        </strong>

                        <span>
                            unread notifications
                        </span>
                    </div>

                    {unreadCount > 0 && (
                        <button
                            className="mark-all-button"
                            onClick={markAllAsRead}
                        >
                            ✓ Mark all as read
                        </button>
                    )}

                </div>


                {/* Notifications */}
                <div className="notifications-list">

                    {notifications.length === 0 ? (

                        <div className="empty-notifications">

                            <div className="empty-icon">
                                🔕
                            </div>

                            <h2>
                                You're all caught up!
                            </h2>

                            <p>
                                No new notifications at the moment.
                            </p>

                            <button
                                onClick={() => navigate("/books")}
                            >
                                Explore Books 📚
                            </button>

                        </div>

                    ) : (

                        notifications.map((notification) => (

                            <div
                                key={notification.id}
                                className={
                                    notification.unread
                                        ? "notification-card unread"
                                        : "notification-card"
                                }
                            >

                                {/* Icon */}
                                <div
                                    className={`notification-icon ${notification.type}`}
                                >
                                    {notification.icon}
                                </div>


                                {/* Content */}
                                <div className="notification-content">

                                    <div className="notification-title-row">

                                        <h3>
                                            {notification.title}
                                        </h3>

                                        {notification.unread && (
                                            <span className="new-badge">
                                                NEW
                                            </span>
                                        )}

                                    </div>

                                    <p>
                                        {notification.message}
                                    </p>

                                    <span className="notification-time">
                                        🕐 {notification.time}
                                    </span>

                                </div>


                                {/* Actions */}
                                <div className="notification-card-actions">

                                    {notification.unread && (
                                        <button
                                            className="read-button"
                                            onClick={() =>
                                                markAsRead(
                                                    notification.id
                                                )
                                            }
                                        >
                                            ✓
                                        </button>
                                    )}

                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            deleteNotification(
                                                notification.id
                                            )
                                        }
                                    >
                                        ×
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>


                {/* Bottom section */}
                <div className="notification-footer">

                    <div>
                        <span>
                            📖
                        </span>

                        <div>
                            <strong>
                                Keep exploring BookMate
                            </strong>

                            <p>
                                Find new books and connect with readers.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate("/readers")}
                    >
                        Find Readers →
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Notifications;