import React from 'react';
import { img_base_url } from '../Config';

const ViEditor = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold my-5'>VI Editor in Solaris</h2>
        <p>
          In Solaris, the "vi" editor is a commonly used text editor.
        </p>
        <p>
          Here are some basic commands to help you get started with vi:
        </p>
      </div>
      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='mt-5'>
        {/* Opening file in vs code */}
        <h2 className='text-xl font-bold mt-4 ml-2'>1. Opening File </h2>
        <p className='ml-8 my-2'>To create a new file or to open an existing file in VI Editor</p>
        <span className='font-bold ml-8'>
          {`vi <file_name>`}
        </span>

        <img src={`${img_base_url}yyumnvcogn8jnbhslurm`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />

        {/* Switching modex - 2 */}
        <h2 className='text-xl font-bold mt-4 ml-2'>2. Switching Modes </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Command Mode:
          </span> This is the default mode when you open a file. You can navigate and manipulate text.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Insert Mode:
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Visual Mode:
          </span>
          To highlight and select text, press v in command mode.
        </p>


        {/* Saving and exiting - 3 */}
        <h2 className='text-xl font-bold mt-4 ml-2'>3. Saving and Exiting </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save Changes:
          </span>
          In command mode, type :w and press Enter.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save and Exit:
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Exit without Saving:
          </span>
          In command mode, type :q! and press Enter.
        </p>


        {/* Navigation - 4 */}
        <h2 className='text-xl font-bold mt-4 ml-2'>4. Navigation </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Moving Cursor:
          </span>
          Arrow keys or h (left), j (down), k (up), l (right),
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
          Go to the Beginning of Line: 
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Exit without Saving:
          </span>
          0 (zero) in command mode.
        </p>


        {/* Editing text */}
        <h2 className='text-xl font-bold mt-4 ml-2'>3. Saving and Exiting </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save Changes:
          </span>
          In command mode, type :w and press Enter.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save and Exit:
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Exit without Saving:
          </span>
          In command mode, type :q! and press Enter.
        </p>


        {/* Search and Replace */}
        <h2 className='text-xl font-bold mt-4 ml-2'>3. Saving and Exiting </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save Changes:
          </span>
          In command mode, type :w and press Enter.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save and Exit:
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Exit without Saving:
          </span>
          In command mode, type :q! and press Enter.
        </p>

        {/* Undo and Redo */}
        <h2 className='text-xl font-bold mt-4 ml-2'>3. Saving and Exiting </h2>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save Changes:
          </span>
          In command mode, type :w and press Enter.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Save and Exit:
          </span>
          To start inserting or editing text, press i in command mode.
        </p>
        <p className='ml-8 my-2'>
          <span className='font-bold mr-2'>
            Exit without Saving:
          </span>
          In command mode, type :q! and press Enter.
        </p>

      </div>
    </div>
  );
};

export default ViEditor;