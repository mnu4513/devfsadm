import React from 'react';
import { img_base_url } from '../Config';
import copy_icon from '../../assets/ico/copy.svg';


//  Video Component :- [Provide Video Source ID from YouTube]
export const Video = ({ videoSrc }) => (
    <div className="mb-4">
        <iframe className="w-full h-56 lg:h-96 lg:w-full mx-auto" src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
);

// Image Component :- [Provide Image Source ID from Cloudinary and Image Alter Text]
export const Image = ({ imageSrc, imageAlt }) => (
    <div className="mb-4">
        <img className="w-96 md:w-full mx-auto" src={`${img_base_url}${imageSrc}.png`} alt={imageAlt} />
    </div>
);

// Text Component :- [Descriptive Text]
export const Text = ({ text }) => (
    <div className="mb-4">
        <p className="font-cambria">{text}</p>
    </div>
);

// Command Component :- [Commnad or Command Example]
export const Command = ({ command }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(command);
        alert("Command copied to clipboard!");
    };
    return (
        <div className="mb-4 flex">
            <pre className=" px-2 py-2 text-blue-500 rounded-lg shadow-md flex w-full whitespace-pre-wrap break-words">
                {command}
                <button
                    onClick={copyToClipboard}
                    className="hover:bg-blue-300 hover:rounded-md ml-2"
                >
                    <img className='w-4' src={copy_icon} alt='c' />
                </button>
            </pre>
        </div>
    );
};

// Heading Component :- [Heading of Page]
export const Heading = ({ text }) => (
    <div className="mb-8 mt-16 font-bold">
        <h1 className="text-4xl text-red-500 font-serif text-center">{text}</h1>
    </div>
);

// Sub-haeding Component :- [Sub-heading or Command's Name]
export const Subheading = ({ text }) => (
    <div className="mb-4 mt-12 font-semibold flex">
        <h2 className="text-2xl text-red-500 font-serif ">{text}</h2>
    </div>
);

// Note Component :- [Additional Note For Any Command]

export const Note = ({text}) => (
    <div className='mt-5 mb-8 text-blue-400 font-mono'>
        <p> [Note: {text}]</p>
    </div>
)