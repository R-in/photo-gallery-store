// src/components/PhotoGrid.js
import React from 'react';
import PhotoCard from './PhotoCard';
import { Container, Row, Col } from 'react-bootstrap';

const PhotoGrid = ({ photos }) => {
    return (
        <Container>
            <Row>
                {photos.map(photo => (
                    <Col key={photo.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <PhotoCard photo={photo} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PhotoGrid;
