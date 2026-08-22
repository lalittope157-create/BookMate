import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        // Validation
        if (!fullName || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
    "http://127.0.0.1:8000/register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: email,
                        email: email,
                        password: password,
                        full_name: fullName,
                    }),
                }
            );

            const data = await response.json();

            console.log("Register response:", data);

            if (response.ok) {
                setSuccess("Account created successfully!");

                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                if (data.username) {
                    setError(data.username[0]);
                } else if (data.email) {
                    setError(data.email[0]);
                } else if (data.password) {
                    setError(data.password[0]);
                } else if (data.detail) {
                    setError(data.detail);
                } else {
                    setError("Registration failed. Please try again.");
                }
            }

        } catch (error) {
            console.error("Registration error:", error);

            setError(
                "Cannot connect to server. Make sure Django is running."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">

            <div className="register-glow register-glow-one"></div>
            <div className="register-glow register-glow-two"></div>

            <div className="register-card">

                {/* Logo */}
                <div className="register-logo">
                    📚
                </div>

                <h1>Create Account</h1>

                <p className="register-subtitle">
                    Join BookMate and start your reading journey
                </p>

                {/* Error */}
                {error && (
                    <div className="register-error">
                        ⚠️ {error}
                    </div>
                )}

                {/* Success */}
                {success && (
                    <div className="register-success">
                        ✅ {success}
                    </div>
                )}

                <form onSubmit={handleRegister}>

                    {/* Full Name */}
                    <div className="register-input-group">

                        <label>Full Name</label>

                        <div className="register-input-wrapper">

                            <span className="register-input-icon">
                                👤
                            </span>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) =>
                                    setFullName(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* Email */}
                    <div className="register-input-group">

                        <label>Email Address</label>

                        <div className="register-input-wrapper">

                            <span className="register-input-icon">
                                ✉️
                            </span>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div className="register-input-group">

                        <label>Password</label>

                        <div className="register-input-wrapper">

                            <span className="register-input-icon">
                                🔒
                            </span>

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                            <button
                                type="button"
                                className="register-password-toggle"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div className="register-input-group">

                        <label>Confirm Password</label>

                        <div className="register-input-wrapper">

                            <span className="register-input-icon">
                                🔐
                            </span>

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />

                            <button
                                type="button"
                                className="register-password-toggle"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                            >
                                {showConfirmPassword ? "🙈" : "👁️"}
                            </button>

                        </div>

                    </div>

                    {/* Terms */}
                    <label className="terms-checkbox">

                        <input
                            type="checkbox"
                            required
                        />

                        <span>
                            I agree to the{" "}
                            <a href="/terms">
                                Terms & Conditions
                            </a>
                        </span>

                    </label>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="register-submit"
                        disabled={loading}
                    >
                        <span>
                            {loading
                                ? "Creating Account..."
                                : "Create Account"}
                        </span>

                        <span className="register-arrow">
                            {loading ? "..." : "→"}
                        </span>
                    </button>

                </form>

                {/* Login */}
                <div className="login-text">

                    Already have an account?

                    {" "}

                    <Link to="/login">
                        Login
                    </Link>

                </div>

                <div className="register-footer">
                    📚 Read. Connect. Discover.
                </div>

            </div>

        </div>
    );
}

export default Register;