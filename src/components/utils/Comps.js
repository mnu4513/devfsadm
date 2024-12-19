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
    <div className="mb-3">
        <p className="font-cambria">{text}</p>
    </div>
);


// line 
export const Line = ({ text = "", color = "border-gray-300", textColor = "text-gray-500" }) => {
    return (
      <div className="flex items-center my-6">
        <div className={`border-t-2 ${color} flex-grow`}></div>
        {text && (
          <span className={`mx-4 text-lg font-semibold ${textColor}`}>{text}</span>
        )}
        <div className={`border-t-2 ${color} flex-grow`}></div>
      </div>
    );
  };


// terminal 
export const TerminalOutput = ({ content }) => {
    return (
        <div
      className="bg-black text-white font-mono p-4 rounded-lg overflow-auto mb-3"
      style={{
        maxHeight: "400px",
        whiteSpace: "pre-wrap", // Ensure text wraps properly
        wordBreak: "break-word", // Break long unbroken strings to fit within the container
      }}
    >
      {content.split("\n").map((line, index) => {
        // Handle lines with user prompts
        if (line.startsWith("[user@localhost") || line.startsWith("[root@localhost")) {
          const delimiter = line.includes("$") ? "$" : "#";
          return (
            <div key={index}>
              <span className="text-gray-500 font-bold">
                {line.split(delimiter)[0]}
                {delimiter}
              </span>
              <span className="text-blue-300">
                {line.split(delimiter)[1] || ""}
              </span>
            </div>
          );
        }
        // Handle other lines (output or empty)
        return <div key={index} className="text-green-400">{line}</div>;
      })}
    </div>
    );
  };

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

// Super-sub-haeding Component :- [Sub-heading or Command's Name]
export const Supersubheading = ({ text }) => (
  <div className="mb-2 mt-8 font-semibold flex">
      <h2 className="text-xl text-gray-400 font-serif ">{text}</h2>
  </div>
);


// Note Component :- [Additional Note For Any Command]

export const Note = ({text}) => (
    <div className='mt-5 mb-8 text-blue-400 font-mono'>
        <p> [Note: {text}]</p>
    </div>
)