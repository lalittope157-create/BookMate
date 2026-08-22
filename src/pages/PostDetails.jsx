import { useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {

  const { id } = useParams();

  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");

  function addLike() {
    setLikes(likes + 1);
  }

  function addComment() {

    if (comment !== "") {
      alert("Comment Added: " + comment);
      setComment("");
    }
  }

  return (
    <div className="container">

      <h1>💬 Post</h1>

      <p>Post ID: {id}</p>

      <div className="post">

        <h2>Lalit</h2>

        <p>
          I just finished reading The Alchemist.
          What is your favorite book?
        </p>

        <button onClick={addLike}>
          ❤️ Like {likes}
        </button>

        <br /><br />

        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />

        <button onClick={addComment}>
          Comment
        </button>

      </div>

    </div>
  );
}

export default PostDetails;