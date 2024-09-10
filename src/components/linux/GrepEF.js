import React from 'react'
import { Command, Heading, Subheading, Text, Image, Video, Note } from '../utils/Comps';

const GrepEF = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Filter Data Using Grep Command`} />

            <Video videoSrc={'i8Vwtaozp_A'} />


            <Heading text={`Search Pattern Using 'grep' Command`} />


            {/* ===================================================== */}
            {/* grep command */}
            <div >
                <Subheading text={`Search pattern:`} />
                <Command command={`<command> | grep <options> <pattern>`} />
                or
                <Command command={`grep <options> <pattern> <file_name>`} />
                <Text text={`The 'grep' command is used to search for patterns within files or command outputs.`} />
                <Image imageSrc={'alrjtvbsb1iuhxfbofrq'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* grep -c command */}
            <div >
                <Subheading text={`Count the number of lines that match the pattern:`} />
                <Command command={`grep -i <pattern> <file_name>`} />
                <Text text={`It counts the linux in a file that contain the pattern.`} />
                <Image imageSrc={'clroow7aurvwxw4fhwra'} imageAlt={''} />
            </div>





            {/* ===================================================== */}
            {/* grep -i command */}
            <div >
                <Subheading text={`Ignore Case:`} />
                <Command command={`grep -i <pattern> <file_name>`} />
                <Text text={`It ignores case when matching the pattern.`} />
                <Image imageSrc={'m3jt6okkikjnmj9rwujo'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* grep -n command */}
            <div >
                <Subheading text={`Show line numbers along with matching line:`} />
                <Command command={`grep -n <pattern> <file_name>`} />
                <Text text={`It displays lines with "pattern" along with their line numbers in a file.`} />
                <Image imageSrc={'puudc4ymg6naqgmgauvb'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* grep -o command */}
            <div >
                <Subheading text={`Show only the matched part of the line:`} />
                <Command command={`grep -o <pattern> <file_name>`} />
                <Text text={`It displays only the "pattern" parts of lines that match, not the entire line.`} />
                <Image imageSrc={'uljss1q2vovkb3qvd6je'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* grep -v command */}
            <div >
                <Subheading text={`Invert Match:`} />
                <Command command={`grep -v <pattern> <file_name>`} />
                <Text text={`It displays all lines in a file that do not contain the pattern.`} />
                <Image imageSrc={'f38lwlu3xvklt1kxr4oe'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* grep -w command */}
            <div >
                <Subheading text={`Whole Word:`} />
                <Command command={`grep -w <pattern> <file_name>`} />
                <Text text={`It finds the pattern as a whole word but not as a part of another word.`} />
                <Image imageSrc={'c6kouxkc0ir3okbegord'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* start of line  */}
            <div >
                <Subheading text={`Start of Line:`} />
                <Command command={`grep ^<pattern> <file_name>`} />
                <Text text={`It finds lines that start with the pattern.`} />
                <Image imageSrc={'mdcvthao01df0a2domst'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* end of line */}
            <div >
                <Subheading text={`End of Line:`} />
                <Command command={`grep <pattern>$ <file_name>`} />
                <Text text={`It finds lines that end with the pattern.`} />
                <Image imageSrc={'dika0f8kmqs58rasjhue'} imageAlt={''} />
            </div>



            {/* ======================================================== */}
            <Heading text={`Search Pattern Using 'egrep' Command`} />
            {/* ===================================================== */}
            {/* egrep command */}
            <div >
                <Subheading text={`Search Pattern Using 'egrep' Command:`} />
                <Command command={`egrep <option> <pattern1|pattern2> <file_name>`} />
                or
                <Command command={`grep -E <option> <pattern1|pattern2> <file_name>`} />
                or
                <Command command={`<command> | egrep <option> <pattern1|pattern2>`} />
                <Text text={`'egrep' is an extended version of 'grep' that supports extended regular expressions (ERE), allowing more complex pattern matching.`} />
                <Image imageSrc={'rwloxe9fcpc8cusbvhqc'} imageAlt={''} />
                <Note text={`It allows searching for multiple patterns at once using the pipe symbol.`} />
                <Note text={`All options will be same as 'grep' command.`} />
            </div>





            {/* ======================================================== */}
            <Heading text={`Search Pattern Using 'fgrep' Command`} />
            {/* ===================================================== */}
            {/* fgrep command */}
            <div >
                <Subheading text={`Search the exact string:`} />
                <Command command={`fgrep <option> <pattern> <file_name>`} />
                or
                <Command command={`grep -F <option> <pattern> <file_name>`} />
                or
                <Command command={`<command> | fgrep <option> <pattern>`} />
                <Text text={`'fgrep' is used for searching fixed strings, meaning it does not recognize regular expressions and treats the search pattern as a literal string.`} />
                <Image imageSrc={'w8uxzwunciioo55re9d6'} imageAlt={''} />
                <Note text={`It does not support regular expressions, so '^', '$' and other regex symbols are treated as litral characters.`} />
                <Note text={`'grep -E' is the modern way to use extended refular expressions with 'grep'. It provides the same functionality as 'egrep' and is recomanded since 'egrep' and 'fgrep' are deprecated. `} />
            </div>





        </div>
    )
}

export default GrepEF;