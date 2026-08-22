import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Library from "./pages/Library.jsx";
import Createpost from "./pages/Createpost.jsx";
import Findreaders from "./pages/Findreaders.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import WriteReview from "./pages/WriteReview.jsx";
import ReadBook from "./pages/ReadBook.jsx";


function App() {

    return (

        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

            <NavBar />

            <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">

                <Routes>

                    {/* HOME */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* BOOKS */}
                    <Route
                        path="/books"
                        element={<Books />}
                    />

                    <Route
                        path="/books/:id"
                        element={<BookDetails />}
                    />

                    {/* READ BOOK */}
                    <Route
                        path="/read/:id"
                        element={<ReadBook />}
                    />

                    {/* LIBRARY */}
                    <Route
                        path="/library"
                        element={<Library />}
                    />

                    {/* CREATE POST */}
                    <Route
                        path="/create-post"
                        element={<Createpost />}
                    />

                    {/* FIND READERS */}
                    <Route
                        path="/readers"
                        element={<Findreaders />}
                    />

                    <Route
                        path="/find-readers"
                        element={<Findreaders />}
                    />

                    {/* AUTHENTICATION */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />

                    {/* NOTIFICATIONS */}
                    <Route
                        path="/notifications"
                        element={<Notifications />}
                    />

                    {/* PROFILE */}
                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                    <Route
                        path="/profile/:id"
                        element={<Profile />}
                    />

                    {/* POSTS */}
                    <Route
                        path="/post/:id"
                        element={<PostDetails />}
                    />

                    {/* WRITE REVIEW */}
                    <Route
                        path="/write-review"
                        element={<WriteReview />}
                    />

                    {/* 404 */}
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Routes>

            </main>

        </div>
    );
}

export default App;