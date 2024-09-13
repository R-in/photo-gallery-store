// src/pages/PhotoPage.js
import React from 'react';
import PhotoDetail from '../components/PhotoDetail';
import Navbar from '../components/Navbar';
import photos from '../data/photos'; // Sample data or API call

const PhotoPage = () => {
    return (
        <div>
            <Navbar />
            <PhotoDetail photos={photos} />
        </div>
    );
};

export default PhotoPage;
