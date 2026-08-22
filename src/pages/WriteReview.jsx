import { useParams } from "react-router-dom";

function WriteReview() {

  const { id } = useParams();

  return (
    <div className="form-container">

      <h1>⭐ Write Review</h1>

      <p>Book ID: {id}</p>

      <select>
        <option>5 ⭐</option>
        <option>4 ⭐</option>
        <option>3 ⭐</option>
        <option>2 ⭐</option>
        <option>1 ⭐</option>
      </select>

      <textarea
        placeholder="Write your review..."
      ></textarea>

      <button>
        Submit Review
      </button>

    </div>
  );
}

export default WriteReview;