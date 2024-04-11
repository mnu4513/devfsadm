import React from 'react';
import { img_base_url } from '../Config';
import YouTubeVideo from '../utils/YouTubeVideo';

const ViEditor = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl text-red-500 font-bold my-5'>VI Editor in Solaris</h2>
        <p>
          In Solaris, the "vi" editor is a commonly used text editor.
        </p>
        <p>
          Here are some basic commands to help you get started with vi:
        </p>
      </div>
      <YouTubeVideo video_id={`9B-IOooDxIo`} />
     
      <div className='mt-5'>
        {/* Opening file in vs code */}
        <h2 className='text-xl font-bold mt-8 ml-2 text-red-500'>1. Opening File </h2>
        <p className='ml-8 my-2'>To create a new file or to open an existing file in VI Editor</p>
        <span className='font-bold text-violet-600 ml-8'>
          {`vi <file_name>`}
        </span>

        <img src={`${img_base_url}asyocz59tvjnuswdvbfx`} alt='' className='mt-5 mb-8 md:w-2xl md:ml-4 lg:max-w-5xl' />

        {/* Switching modex - 2 */}
        <h2 className='text-xl font-bold mt-8 ml-2 text-red-500'>2. Switching Modes </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Command Mode:
          </span> This is the default mode when you open a file. You can navigate and manipulate text.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Insert Mode:
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Visual Mode:
          </span>
          To highlight and select text, press v in command mode.
        </p>


        {/* Saving and exiting - 3 */}
        <h2 className='text-xl font-bold mt-8 ml-2 text-red-500'>3. Saving and Exiting </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Save Changes:
          </span>
          In command mode, type :w and press Enter.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Save and Exit:
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Exit without Saving:
          </span>
          In command mode, type :q! and press Enter.
        </p>


        {/* Navigation - 4 */}
        <h2 className='text-xl font-bold mt-8 ml-2 text-red-500'>4. Navigation </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Moving Cursor:
          </span>
          Arrow keys or h (left), j (down), k (up), l (right),
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Go to the Beginning of Line:
          </span>
          0 (zero) in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Go to the End of Line:
          </span>
          $ in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Go to a Specific Line:
          </span>
          {`:<line_number> in command mode.`}
        </p>


        {/* Editing text */}
        <h2 className='text-xl font-bold mt-8 ml-2 text-red-500'>5. Editing Text </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Delete a Character:
          </span>
          Press x in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Delete a Line:
          </span>
          Press dd in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Copy (Yank) and Paste (Put):
          </span>
          In command mode, use yy to copy a line and p to paste it.
        </p>


        {/* Search and Replace */}
        <h2 className='text-xl font-bold mt-8 ml-2 text-red-500'>6. Search and Replace: </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Search Forward:
          </span>
          In command mode, type / followed by the search term and press Enter.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Search Backward:
          </span>
          In command mode, type ? followed by the search term and press Enter.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Replace Text:
          </span>
          In command mode, type :s/old_text/new_text/g to replace all occurrences of old_text with new_text.
        </p>

        {/* Undo and Redo */}
        <h2 className='text-xl font-bold mt-8 ml-2 text-red-500'>7. Undo and Redo: </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Undo:
          </span>
          In command mode, press u.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2 text-blue-500'>
            Redo:
          </span>
          In command mode, press Ctrl + r.
        </p>
      </div>

        <p className='my-5'>These are just some basic commands to get you started with vi in Solaris. Remember that vi can be powerful once you get used to its modes and commands.</p>
    </div>
  );
};

export default ViEditor;