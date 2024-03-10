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
            console.log('Image uploaded successfully:', jsonData?.data?.public_id);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className='flex flex-col max-w-fit mx-auto space-y-6 my-6 border px-4 py-3 border-gray-600 rounded-md'>
            <input type="file" onChange={handleImageChange} className='border py-2 px-3 border-gray-600 rounded-md'/>
            <button onClick={handleUpload} className='border border-gray-600 rounded-md px-3 py-2  max-w-fit mx-auto'>Upload Image</button>
        </div>
    );
};

export default UploadImage;
