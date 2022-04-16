import React, { useState } from 'react';
import { useGlobalContext } from '../context/LikesContext';

export default function Card({ name, email, id, image, location }) {
    const [likes, getLikes] = useGlobalContext();
    const [like, setLikes] = useState(0);

    const getLike = () => {
        setLikes(like + 1);
        getLikes(likes + like);
    };

    return (
        <div className='card mb-4 box-shadow'>
            <div className='card-header'>
                <h4 className='my-0 font-weight-normal'>{name} </h4>
            </div>
            <div className='card-body'>
                <img src={image} alt={name} />
                <ul className='list-unstyled mt-3 mb-4'>
                    <li>{email}</li>
                    <li>{location}</li>
                </ul>
                <button
                    type='button'
                    className='btn btn-lg btn-block btn-outline-primary'
                    onClick={() => getLike()}
                >
                    LIKE {like}
                </button>
            </div>
        </div>
    );
}
