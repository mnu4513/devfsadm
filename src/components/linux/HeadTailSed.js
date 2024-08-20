import React from 'react';
import { Command, Heading, Subheading, Text } from '../utils/Comps';

const HeadTailSedCommands = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            {/* Main Heading */}
            <Heading text={`Head, Tail, and Sed Commands in Linux`} />

            {/* Head Command */}
            <Heading text={`Head Command`} />
            <Text text={`The 'head' command is used to print out a specific number of lines from the top of the output of any command. By default, it returns the first 10 lines.`} />
            <Command command={`head <option> <file_name>`} />
            <Command command={`<command> | head <option>`} />
            <Command command={`<command> | head -n <number_of_lines>`} />

            {/* Tail Command */}
            <Heading text={`Tail Command`} />
            <Text text={`The 'tail' command performs a similar operation as 'head', but it returns the output from the bottom of the output instead of the top.`} />
            <Command command={`tail <option> <file_name>`} />
            <Command command={`<command> | tail <option>`} />
            <Command command={`<command> | tail -n 5`} />

            {/* Tail -f Command */}
            <Subheading text={`Tail -f Command`} />
            <Text text={`The 'tail -f' command returns output in real-time, which is particularly useful for reading logs or files that are frequently updated.`} />
            <Command command={`tail -f <file_name>`} />
            <Command command={`<command> | tail -f <option>`} />
            <Text text={`This command shows logs in real-time, updating the display as changes occur. It can also read logs from multiple files:`} />
            <Command command={`tail -f <file_1> <file_2>`} />

            <Text text={`While 'head' and 'tail' commands allow capturing output in a specific range, they do not support capturing multiple outputs like an 'and' operator.`} />

            {/* Sed Command */}
            <Heading text={`Sed Command`} />
            <Text text={`The 'sed' command, also known as a stream editor, is used to print specific lines from a file or command output, and can also perform operations like find and replace, delete, insert, or append lines.`} />
            <Command command={`sed <option> <file_name>`} />
            <Command command={`<command> | sed <option>`} />

            {/* Sed Command Operations */}
            <Subheading text={`Sed Command Operations`} />

            {/* Print Operation */}
            <Subheading text={`1. Print Operation`} />
            <Text text={`To print a specific line number:`} />
            <Command command={`sed -n '<number_of_lines>p' <file_name>`} />
            <Text text={`To print lines in a given range:`} />
            <Command command={`sed -n '<start>,<end>p' <file_name>`} />
            <Text text={`To print multiple specific lines:`} />
            <Command command={`sed -n '<line_1>p;<line_2>p' <file_name>`} />
            <Text text={`To print multiple line ranges:`} />
            <Command command={`sed -n '<start>,<end>p;<start>,<end>p' <file_name>`} />
            <Text text={`To print the last line:`} />
            <Command command={`sed -n '$p' <file_name>`} />

            {/* Find and Replace Operation */}
            <Subheading text={`2. Find and Replace Operation`} />
            <Text text={`Find and replace can be performed in two ways:`} />
            <Text text={`A. Perform operation only on screen:`} />
            <Command command={`sed 's/<target>/<new_string>/' <file_name>`} />
            <Text text={`To replace all occurrences in a line, use the 'g' (global) option:`} />
            <Command command={`sed 's/<target>/<new_string>/g' <file_name>`} />
            <Text text={`To replace in a specific line:`} />
            <Command command={`sed '<line>s/<target>/<new_string>/g' <file_name>`} />
            <Text text={`To replace in a range of lines:`} />
            <Command command={`sed '<start>,<end>s/<target>/<new_string>/g' <file_name>`} />
            <Text text={`To perform a case-insensitive replacement, use 'i' with 'g':`} />
            <Command command={`sed 's/<target>/<new_string>/gi' <file_name>`} />

            <Text text={`B. Perform operation in the data file:`} />
            <Command command={`sed -i 's/<target>/<new_string>/gi' <file_name>`} />
            <Text text={`To add a new string at the beginning of a line:`} />
            <Command command={`sed '<line>s/^/<new_string>/' <file_name>`} />
            <Text text={`To replace multiple targets:`} />
            <Command command={`sed -e 's/<target_1>/<new_string_1>/' -e 's/<target_2>/<new_string_2>/' <file_name>`} />

            {/* Delete Operation */}
            <Subheading text={`3. Delete Any Line`} />
            <Text text={`Delete operations can also be performed on screen or in the data file:`} />
            <Text text={`A. Perform operation only on screen:`} />
            <Command command={`sed '<line>d' <file_name>`} />
            <Command command={`sed '<start>,<end>d' <file_name>`} />
            <Command command={`<command> | sed '<line>d'`} />
            <Text text={`B. Perform operation in the data file:`} />
            <Command command={`sed -i '<line>d' <file_name>`} />

            {/* Insert Operation */}
            <Subheading text={`4. Insert Any Message Before Any Line`} />
            <Text text={`A. Perform operation only on screen:`} />
            <Command command={`sed '<line>i<message>' <file_name>`} />
            <Command command={`<command> | sed '<line>i<message>'`} />
            <Text text={`B. Perform operation in the data file:`} />
            <Command command={`sed -i '<line>i<message>' <file_name>`} />

            {/* Append Operation */}
            <Subheading text={`5. Append Any Message After Any Line`} />
            <Text text={`A. Perform operation only on screen:`} />
            <Command command={`sed '<line>a<message>' <file_name>`} />
            <Command command={`<command> | sed '<line>a<message>'`} />
            <Text text={`B. Perform operation in the data file:`} />
            <Command command={`sed -i '<line>a<message>' <file_name>`} />

            {/* Options Summary */}
            <Subheading text={`Options Summary`} />
            <Text text={`p -> print`} />
            <Text text={`s -> substitute / replace`} />
            <Text text={`d -> delete`} />
            <Text text={`i -> insert before the line`} />
            <Text text={`a -> append after the line`} />
        </div>
    )
}

export default HeadTailSedCommands;
