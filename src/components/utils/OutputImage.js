import React from 'react';
import { img_base_url } from '../Config';

const OutputImage = ({image_id}) => {
    return (

        <img src={`${img_base_url}${image_id}`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />

    );
};

export default OutputImage;