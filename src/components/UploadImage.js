import React, { useState } from 'react';

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleUpload = async () => {
        if (!selectedImage) {
            alert('Please select an image first');
            return;
        }

        try {
            // Create a FormData object to send the image file
            const formData = new FormData();
            formData.append('image', selectedImage);

            // Make a POST request to your image upload API endpoint
            const response = await fetch('http://localhost:3001/upload/image', {
                method: 'POST',
                body: formData
            });

            const jsonData = await response.json();
            // Handle the response (you can update the UI or do other actions)
            console.log('Image uploaded successfully:', jsonData);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
};

export default UploadImage;
