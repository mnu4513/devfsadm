
import React from 'react'
import { Command, Heading, Subheading, Text, Image, Video, Note } from '../utils/Comps';

const Symbols = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>

            <Heading text={`Copy or Move Files and Directories`} />

            <Video videoSrc={'i8Vwtaozp_A'} />


            <Heading text={`Symbols`} />


            {/* ===================================================== */}
            {/* Semicolon */}
            <div >
                <Subheading text={`Semicolon ';'`} />
                <Command command={`<command1>; <command2>; <command3>`} />
                <Command command={`echo "Starting..."; ls -l; echo "Done!"`} />
                <Text text={`This will print "Starting...", then list files in long format, and finally print "Done!"`} />
                <Image imageSrc={'xxioyokyvuzucz96zcth'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* Pipe */}
            <div >
                <Subheading text={`Pipe '|'`} />
                <Command command={`<command1> | <command2> | <command3>`} />
                <Text text={`Takes the output of one command and uses it as the input for the next command. This is useful for chaining commands together.`} />
                <Command command={`ps aux | grep bash | wc -l`} />
                <Text text={`This counts the number of lines containing "bash" in the output of 'ps aux'.`} />
                <Image imageSrc={'hqoqj7xbqfxmdtesb2ld'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* Single Greater Than */}
            <div >
                <Subheading text={`Single Greater Than '>' `} />
                <Command command={`<command> > <file_name> `} />
                <Text text={`It redirects the output of a command to a file, overwriting the file if it already exists.`} />
                <Command command={`echo "Hello World!" > output.txt`} />
                <Text text={`This writes "Hello World" to 'output.txt', creating the file if it doesn't exist, or overwriting it if it does.`} />
                <Image imageSrc={'jmxti2jmuk6np7o7icpz'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* Double Greater Than */}
            <div >
                <Subheading text={`Double Greater Than '>>' `} />
                <Command command={`<command> >> <file_name>`} />
                <Text text={`It redirects the output of a command to a file, appending to the file if it already exists.`} />
                <Command command={`echo "Hello Again" >> output.txt`} />
                <Text text={`This appends "Hello Again" to 'output.txt', preserving any existing content.`} />
                <Image imageSrc={'abrebesxgbfzklhqwcdx'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* tee */}
            <div >
                <Subheading text={`tee`} />
                <Command command={`tee <file_name> `} />
                <Text text={`It reads from standard input and writes to both standard output and one or more files. This can be used to view output on the terminal while simultaneously writing it to a file.`} />

                <Text text={`This can be used as single greater than symbol as well.`} />
                <Command command={`<command> tee <file_name>`} />
                <Text text={`This will store output of command in to a file`} />

                <Command command={`echo "Logging this message" | tee log.txt`} />
                <Text text={`This writes "Logging this message" to 'log.txt' and also displays it on the terminal.`} />

                <Image imageSrc={'oi11aivcikd3lqpwupau'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* tee -a */}
            <div >
                <Subheading text={`tee -a`} />
                <Command command={`tee -a <file_name> `} />
                <Text text={`It is used to append text or command output in to a file.`} />

                <Text text={`This can be used as double greater than symbol as well.`} />
                <Command command={`<command> | tee -a <file_name>`} />
                <Text text={`This will append output of command in to a file`} />

                <Command command={`echo "Appending this message" | tee -a log.txt`} />
                <Text text={`This appends "Appending this message" to 'log.txt' and also displays it on the terminal. `} />

                <Image imageSrc={'s5ectgueejaqeqvj5ddc'} imageAlt={''} />
            </div>




        </div>
    )
};


export default Symbols;