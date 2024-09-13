// src/components/PhotoDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const PhotoDetail = ({ photos }) => {
    const { id } = useParams();
    const photo = photos.find(p => p.id === parseInt(id));

    return (
        <Container className="text-center mt-4">
            {photo ? (
                <>
                    <img src={photo.url} alt={photo.title} className="img-fluid" />
                    <h2>{photo.title}</h2>
                    <p>{photo.description}</p>
                    <p>Price: ${photo.price}</p>
                    <Button variant="primary">Add to Cart</Button>
                </>
            ) : (
                <p>Photo not found</p>
            )}
        </Container>
    );
};

export default PhotoDetail;
