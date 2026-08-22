import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Createpost.css";

function Createpost() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Book Review");
    const [mood, setMood] = useState("📖");
    const [image, setImage] = useState(null);
    const [published, setPublished] = useState(false);

    const moods = [
        "📖",
        "❤️",
        "✨",
        "🔥",
        "😭",
        "🤯",
        "😍",
        "🧠"
    ];

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("Please add a post title and content.");
            return;
        }

        console.log("Post:", {
            title,
            content,
            category,
            mood,
            image
        });

        setPublished(true);

        setTimeout(() => {
            navigate("/");
        }, 1500);
    };

    return (
        <div className="create-post-page">

            {/* Floating decorations */}

            <div className="post-orb orb-one"></div>
            <div className="post-orb orb-two"></div>
            <div className="post-orb orb-three"></div>

            <div className="floating-post-icon icon-one">
                📚
            </div>

            <div className="floating-post-icon icon-two">
                ✨
            </div>

            <div className="floating-post-icon icon-three">
                💬
            </div>


            {/* Header */}

            <section className="create-post-header">

                <span className="create-post-label">
                    ✦ BOOKMATE COMMUNITY
                </span>

                <h1>
                    Share Your
                    <span> Reading Story</span>
                </h1>

                <p>
                    Share your thoughts, reviews, recommendations,
                    and unforgettable reading moments with fellow
                    book lovers.
                </p>

            </section>


            {/* Main editor */}

            <form
                className="create-post-container"
                onSubmit={handleSubmit}
            >

                {/* LEFT SIDE */}

                <div className="post-editor">

                    <div className="editor-top">

                        <div>

                            <span>
                                CREATE POST
                            </span>

                            <h2>
                                What's on your bookshelf?
                            </h2>

                        </div>

                        <div className="editor-icon">
                            ✍️
                        </div>

                    </div>


                    {/* Title */}

                    <div className="input-group">

                        <label>
                            Post Title
                        </label>

                        <input
                            type="text"
                            placeholder="Example: 5 books that completely changed my perspective..."
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                        />

                    </div>


                    {/* Category */}

                    <div className="form-row">

                        <div className="input-group">

                            <label>
                                Post Type
                            </label>

                            <select
                                value={category}
                                onChange={(e) =>
                                    setCategory(e.target.value)
                                }
                            >
                                <option>
                                    Book Review
                                </option>

                                <option>
                                    Book Recommendation
                                </option>

                                <option>
                                    Reading Update
                                </option>

                                <option>
                                    Discussion
                                </option>

                                <option>
                                    Quote
                                </option>

                                <option>
                                    Question
                                </option>
                            </select>

                        </div>

                    </div>


                    {/* Content */}

                    <div className="input-group">

                        <div className="content-label">

                            <label>
                                Your Story
                            </label>

                            <span>
                                {content.length}/2000
                            </span>

                        </div>

                        <textarea
                            placeholder="Tell the BookMate community what you're thinking..."
                            value={content}
                            maxLength={2000}
                            onChange={(e) =>
                                setContent(e.target.value)
                            }
                        />

                    </div>


                    {/* Mood */}

                    <div className="mood-section">

                        <label>
                            How did this book make you feel?
                        </label>

                        <div className="mood-list">

                            {moods.map((item) => (

                                <button
                                    type="button"
                                    key={item}
                                    className={
                                        mood === item
                                            ? "mood active"
                                            : "mood"
                                    }
                                    onClick={() =>
                                        setMood(item)
                                    }
                                >
                                    {item}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* Image */}

                    <div className="upload-section">

                        <label>
                            Add a Book Image
                        </label>

                        <label
                            className="upload-box"
                            htmlFor="post-image"
                        >

                            {image ? (

                                <img
                                    src={image}
                                    alt="Book preview"
                                />

                            ) : (

                                <>
                                    <div>
                                        🖼️
                                    </div>

                                    <strong>
                                        Add an image
                                    </strong>

                                    <span>
                                        JPG, PNG or WEBP
                                    </span>
                                </>

                            )}

                        </label>

                        <input
                            id="post-image"
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                            hidden
                        />

                    </div>


                    {/* Actions */}

                    <div className="post-actions">

                        <button
                            type="button"
                            className="cancel-post"
                            onClick={() =>
                                navigate("/")
                            }
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="publish-post"
                        >
                            ✨ Publish Post
                        </button>

                    </div>

                </div>


                {/* RIGHT PREVIEW */}

                <aside className="post-preview">

                    <div className="preview-heading">

                        <span>
                            LIVE PREVIEW
                        </span>

                        <div className="preview-dot"></div>

                    </div>


                    <div className="preview-card">

                        {/* User */}

                        <div className="preview-user">

                            <div className="preview-avatar">
                                📚
                            </div>

                            <div>

                                <strong>
                                    BookMate Reader
                                </strong>

                                <span>
                                    Just now · {category}
                                </span>

                            </div>

                        </div>


                        {/* Image */}

                        {image && (

                            <img
                                className="preview-image"
                                src={image}
                                alt="Preview"
                            />

                        )}


                        {/* Content */}

                        <div className="preview-content">

                            <div className="preview-mood">
                                {mood}
                            </div>

                            <h3>
                                {title ||
                                    "Your amazing post title will appear here..."}
                            </h3>

                            <p>
                                {content ||
                                    "Start writing your thoughts and they will appear here in real time..."}
                            </p>

                            <span className="preview-category">
                                #{category.replaceAll(" ", "")}
                            </span>

                        </div>


                        {/* Preview footer */}

                        <div className="preview-footer">

                            <span>
                                ❤️ 0
                            </span>

                            <span>
                                💬 0
                            </span>

                            <span>
                                🔖 Save
                            </span>

                        </div>

                    </div>


                    {/* Tips */}

                    <div className="post-tips">

                        <h3>
                            💡 Tips for a great post
                        </h3>

                        <p>
                            ✦ Share your honest opinion
                        </p>

                        <p>
                            ✦ Mention what you loved
                        </p>

                        <p>
                            ✦ Ask the community a question
                        </p>

                        <p>
                            ✦ Keep spoilers clearly marked
                        </p>

                    </div>

                </aside>

            </form>


            {/* Success */}

            {published && (

                <div className="post-success">

                    <div className="success-box">

                        <div>
                            🎉
                        </div>

                        <h2>
                            Post Published!
                        </h2>

                        <p>
                            Your story has been shared with
                            the BookMate community.
                        </p>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Createpost;