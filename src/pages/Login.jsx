import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!username || !password) {
            setError("Please enter username and password.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "http://127.0.0.1:8000/login/",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                }
            );

            const data = await response.json();

            console.log("Login response:", data);

            if (response.ok) {

                // Save login information
                localStorage.setItem(
                    "isLoggedIn",
                    "true"
                );

                localStorage.setItem(
                    "username",
                    username
                );

                // Save user data if Django sends it
                if (data.user) {
                    localStorage.setItem(
                        "user",
                        JSON.stringify(data.user)
                    );
                }

                setSuccess("Login successful!");

                setTimeout(() => {
                    navigate("/");
                }, 1000);

            } else {

                setError(
                    data.detail ||
                    data.error ||
                    "Invalid username or password."
                );
            }

        } catch (error) {

            console.error("Login error:", error);

            setError(
                "Cannot connect to server. Make sure Django is running."
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="login-page">

            <div className="login-card">

                {/* Logo */}
                <div className="login-logo">
                    📚
                </div>

                <h1>Welcome Back</h1>

                <p className="login-subtitle">
                    Login to continue your BookMate journey
                </p>

                {/* Error */}
                {error && (
                    <div className="login-error">
                        ⚠️ {error}
                    </div>
                )}

                {/* Success */}
                {success && (
                    <div className="login-success">
                        ✅ {success}
                    </div>
                )}

                <form onSubmit={handleLogin}>

                    {/* Username */}
                    <div className="login-input-group">

                        <label>Username</label>

                        <div className="login-input-wrapper">

                            <span className="login-input-icon">
                                👤
                            </span>

                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div className="login-input-group">

                        <label>Password</label>

                        <div className="login-input-wrapper">

                            <span className="login-input-icon">
                                🔒
                            </span>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="login-submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"}

                        {!loading && (
                            <span className="login-arrow">
                                →
                            </span>
                        )}
                    </button>

                </form>

                {/* Register */}
                <div className="register-text">

                    Don't have an account?

                    {" "}

                    <Link to="/register">
                        Create Account
                    </Link>

                </div>

                <div className="login-footer">
                    📚 Read. Connect. Discover.
                </div>

            </div>

        </div>
    );
}

export default Login;