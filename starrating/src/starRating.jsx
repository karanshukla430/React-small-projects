import { useState } from 'react';

export default function StarRating({stars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
        {Array.from({length: stars}, (_, i) => i).map((star) => {
            return (
                <span 
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                style={{
                    fontSize: "40px",
                    cursor: "pointer",
                    color: star <= (hover || rating) ? 'gold' : 'gray'
                }}>
                ★
            </span>

            )
        })}
        <p>Review Rating is {rating + 1}</p>
        </div>
    )
}