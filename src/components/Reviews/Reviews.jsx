import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchReviewsById } from "services/movie-api";
import { ReviewsList, ReviewsItem } from "./Reviews.styled";
import { toast } from "react-toastify";

export default function Reviews() {
  const [reviews, SetReviews] = useState([]);
  const {movieId} = useParams();
  
  useEffect(() => {
    fetchReviewsById(movieId)
      .then(article => {
        SetReviews(article.results);
      })
      .catch((e) => { toast.error(e.status_message); });
  }, [movieId])

  return (<>
    {reviews.length
      ? (
      <ReviewsList>
        {reviews.map(({id, author, content }) => (
        <ReviewsItem key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </ReviewsItem>
        ))}
      </ReviewsList>
      )
      : <p>We don't have any reviews for this movies</p>
    }
  </>)
}