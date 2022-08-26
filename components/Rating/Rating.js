import { useState, useEffect } from 'react';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

const Rating = ({ rating, ...props}) => {
    const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

    useEffect(() => {
        constructingRating(rating);
    }, [rating]);

    const constructingRating = (currentRating) => {
        const updatedArray = ratingArray.map((rating, index) => {
            return (
                <span>
                    <StarIcon className={cn(styles.star, {
                        [styles.filled]: index < currentRating
                    })} />
                </span>
            )
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((star, i) => (<span key={i}>{star}</span>))}
        </div>
    );
};

export default Rating;