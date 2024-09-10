import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const FileEditingTools = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            {/* Main Heading */}
            <Heading text={`File Editing Tools`} />

            {/* GUI Based Tools */}
            <Heading text={`1. GUI Based`} />
            <Subheading text={`gedit`} />
            <Text text={`Gedit is a simple and easy-to-use text editor that is available by default in most Linux distributions.`} />
            <Text text={`It is used for creating and editing files in a graphical environment.`} />
            <Command command={`gedit <file_name>`} />
            <Text text={`This command opens the specified file in the gedit text editor.`} />

            {/* GUI + CLI Tools */}
            <Heading text={`2. GUI + CLI Based`} />
            <Subheading text={`vi & vim`} />
            <Text text={`Vi and Vim are powerful text editors commonly used in Linux systems. While 'vi' is the original, 'vim' (Vi IMproved) is an enhanced version with more features.`} />

            {/* Difference Between vi and vim */}
            <Subheading text={`Basic Difference`} />
            <Text text={`Vi is the default text editor in most Unix-based systems, whereas Vim includes additional functionality like syntax highlighting, better search features, and plugin support.`} />

            {/* File Creation and Editing with vi/vim */}
            <Heading text={`File Creation and Editing with vi/vim`} />
            <Text text={`To create or edit a file using Vim or Vi, use the following command:`} />
            <Command command={`vim <file_name>`} />

            {/* Key Commands for vi/vim */}
            <Heading text={`Key Commands in vi/vim`} />
            <Subheading text={`Insert, Open, and Append Modes`} />
            <Text text={`Use these commands to enter various editing modes:`} />
            <Command command={`i - Insert before the cursor`} />
            <Command command={`o - Open a new line below the cursor`} />
            <Command command={`a - Append after the cursor`} />

            <Subheading text={`Esc Mode and Saving/Exiting`} />
            <Text text={`Use the following commands to exit insert mode and save or exit:`} />
            <Command command={`Esc - Exit Insert Mode`} />
            <Command command={`: - Enter Command Mode`} />
            <Command command={`w - Save (write) changes`} />
            <Command command={`q - Quit without saving`} />
            <Command command={`! - Force the command (used with quit)`} />
            <Command command={`:wq / :x / Shift + zz - Save and Exit`} />

            {/* Copy, Paste, Delete, and More in vi/vim */}
            <Heading text={`Copy, Paste, Delete, and Other Commands in vi/vim`} />
            <Subheading text={`Copy and Paste`} />
            <Text text={`Copying and pasting is straightforward in vim. Use the following commands to copy and paste text:`} />
            <Command command={`yy - Copy the current line`} />
            <Command command={`nyy - Copy 'n' number of lines`} />
            <Command command={`p - Paste after the cursor`} />
            <Command command={`P - Paste before the cursor`} />

            <Subheading text={`Delete Operations`} />
            <Text text={`Use the following commands to delete lines, words, or characters:`} />
            <Command command={`dd - Delete the current line`} />
            <Command command={`ndd - Delete 'n' number of lines`} />
            <Command command={`dw - Delete a word`} />
            <Command command={`x - Delete a single character`} />
            <Command command={`D - Delete from the cursor to the end of the line`} />

            <Subheading text={`Undo and Redo`} />
            <Text text={`To undo and redo changes:`} />
            <Command command={`u - Undo the last change`} />
            <Command command={`Ctrl + r - Redo the last undone change`} />

            <Subheading text={`Jumping to Specific Lines`} />
            <Text text={`Move to a specific line number in the file:`} />
            <Command command={`:<line_number> - Jump to the specified line number`} />
            <Command command={`gg - Jump to the beginning of the file`} />
            <Command command={`G - Jump to the end of the file`} />

            {/* Searching in vi/vim */}
            <Heading text={`Searching in vi/vim`} />
            <Text text={`In vi/vim, you can search for a keyword and navigate through the results using the following commands:`} />
            <Subheading text={`Search for a Keyword`} />
            <Command command={`/pattern`} />
            <Text text={`Press '/' to enter search mode, type the keyword or pattern, and press Enter to find it in the file.`} />

            <Subheading text={`Navigating Search Results`} />
            <Command command={`n - Jump to the next occurrence`} />
            <Command command={`N - Jump to the previous occurrence`} />
            <Text text={`Use 'n' to move forward through the results, and 'N' to move backward.`} />

            {/* Additional Notes */}
            <Note text={`Note: Vim offers advanced search patterns using regular expressions, making it a powerful tool for developers and sysadmins.`} />

        </div>
    );
};

export default FileEditingTools;