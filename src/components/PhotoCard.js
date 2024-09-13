// src/components/PhotoCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PhotoCard = ({ photo }) => {
    return (
        <Card>
            <Card.Img variant="top" src={photo.thumbnail} alt={photo.title} />
            <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Link to={`/photo/${photo.id}`}>
                    <Button variant="primary">View Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default PhotoCard;
