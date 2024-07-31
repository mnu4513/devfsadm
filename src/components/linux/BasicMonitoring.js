import React from 'react';
import {Heading, Subheading, Video, Image, Text, Command} from '../utils/Comps';

const BasicMonitoring = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            <Heading text='This is heading' />
            <Text text='Some Basic Commands' />
            <Video videoSrc={'i8Vwtaozp_A'}/>
            <Image imageSrc={'mjwqwh5rzphzytfsjwly'} imageAlt={'alts'} />
            <Subheading text='This is sub-heading' />
            
            <Command command='prsta -a' />
        </div>
    );
};

export default BasicMonitoring;