import React from 'react';
import { Heading, Supersubheading, Text, TerminalOutput, Line } from "../utils/Comps";

const ViEditor = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      
      {/* Page Heading */}
      <Heading text="VI Editor in Solaris" />

      {/* Introduction */}
      <Text text="In Solaris, the 'vi' editor is a powerful and commonly used text editor for editing configuration files, scripts, and more. It operates in different modes to provide maximum efficiency and flexibility for text editing." />
      
      <Text text="Here are some basic commands to help you get started with vi:" />
      
   

      {/* Opening File */}
     
        <Supersubheading text="1. Opening a File" />
        <TerminalOutput content="[root@localhost ~]# vi file.txt" />
        <Text text="To create a new file or open an existing file in the vi editor, use the `vi` command followed by the file name. If the file doesn’t exist, vi will create it." />
     

      {/* Switching Modes */}
     
        <Supersubheading text="2. Switching Modes" />
        <Text text="Vi operates in different modes. Here are the primary modes you’ll be using:" />
        
        <Text text="• Command Mode: This is the default mode when you open a file. In command mode, you can navigate the document and manipulate text, but you cannot directly edit the text." />
        
        <Text text="• Insert Mode: To edit or insert text, press 'i' in command mode. Once in insert mode, you can start typing freely." />
        
        <Text text="• Visual Mode: To highlight and select text for copying, cutting, or other operations, press 'v' in command mode." />
        
     

      {/* Saving and Exiting */}
     
        <Supersubheading text="3. Saving and Exiting" />
        <Text text="To save and exit vi or to exit without saving, here are the key commands:" />
        
        <Text text="• Save Changes: In command mode, type :w and press Enter to save changes." />
        
        <Text text="• Save and Exit: Type ':wq' or ':x' in command mode and press Enter to save changes and exit vi." />
        
        <Text text="• Exit without Saving: If you want to exit vi without saving any changes, type ':q!' in command mode and press Enter." />
        
     

      {/* Navigation */}
     
        <Supersubheading text="4. Navigation" />
        <Text text="Navigating within a file in vi is done through command mode. Here are the common navigation commands:" />
        
        <Text text="• Moving Cursor: Use the arrow keys or the following keys in command mode: 'h' (left), 'j' (down), 'k' (up), 'l' (right)." />
        
        <Text text="• Go to the Beginning of Line: Press '0' in command mode to move the cursor to the beginning of the current line." />
        
        <Text text="• Go to the End of Line: Press '$' in command mode to move the cursor to the end of the current line." />
        
        <Text text="• Go to a Specific Line: Type ':<line_number>' in command mode to jump directly to a specified line number." />
        
     

      {/* Editing Text */}
     
        <Supersubheading text="5. Editing Text" />
        <Text text="In vi, text editing is done in insert mode. Here are some useful editing commands in command mode:" />
        
        <Text text="• Delete a Character: Press 'x' in command mode to delete the character under the cursor." />
        
        <Text text="• Delete a Line: Press 'dd' in command mode to delete the entire line where the cursor is currently placed." />
        
        <Text text="• Copy (Yank) and Paste (Put): In command mode, type 'yy' to copy the current line, and type 'p' to paste it below the cursor." />
        
     

      {/* Search and Replace */}
     
        <Supersubheading text="6. Search and Replace" />
        <Text text="Here’s how you can search for text and perform replacements in vi:" />
        
        <Text text="• Search Forward: In command mode, type '/' followed by the search term and press Enter. This searches forward in the document." />
        
        <Text text="• Search Backward: In command mode, type '?' followed by the search term and press Enter. This searches backward in the document." />
        
        <Text text="• Replace Text: In command mode, type ':s/old_text/new_text/g' to replace all occurrences of 'old_text' with 'new_text' in the current line." />
        
     

      {/* Undo and Redo */}
     
        <Supersubheading text="7. Undo and Redo" />
        <Text text="If you make a mistake or want to revert changes, use these commands:" />
        
        <Text text="• Undo: In command mode, press 'u' to undo the last change." />
        
        <Text text="• Redo: In command mode, press 'Ctrl + r' to redo a change that was undone." />
        
     

      {/* Conclusion */}
      <Line/>
      <Text text="These are just some basic commands to get you started with vi in Solaris. As you become more comfortable with vi, you’ll discover even more powerful features. The key to mastering vi is practice and familiarity with its modes and commands." />
   </div>
  );
};

export default ViEditor;
