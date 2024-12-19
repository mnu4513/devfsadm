
import React from 'react'
import {  Heading, Subheading, Text,  TerminalOutput } from '../utils/Comps';

const Symbols = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Symbols`} />


            {/* ===================================================== */}
            {/* Semicolon */}
            <div >
                <Subheading text={`Semicolon ';'`} />
                < TerminalOutput content={`[root@localhost usr]# cd
[root@localhost ~]# echo Hello; date; pwd; echo Done
Hello
Thu Dec 19 06:44:56 PM IST 2024
/root
Done
[root@localhost ~]#
`} />
                
                <Text text={`This will print "Starting...", then date, then working directory and finally print "Done!"`} />
                
            </div>

            {/* ===================================================== */}
            {/* Pipe */}
            <div >
                <Subheading text={`Pipe '|'`} />
                <Text text={`Takes the output of one command and uses it as the input for the next command. This is useful for chaining commands together.`} />
                < TerminalOutput content={`[root@localhost ~]# ps aux | grep bash | wc -l
3
[root@localhost ~]#
`} />
                
             
                <Text text={`This counts the number of lines containing "bash" in the output of 'ps aux'.`} />
     
            </div>


            {/* ===================================================== */}
            {/* Single Greater Than */}
            <div >
                <Subheading text={`Single Greater Than '>' `} />
                <Text text={`It redirects the output of a command to a file, overwriting the file if it already exists.`} />
                < TerminalOutput content={`[root@localhost ~]# echo "Hello World!" > output.txt
[root@localhost ~]# cat output.txt
Hello World!
[root@localhost ~]#
`} />
         
 
                <Text text={`This writes "Hello World" to 'output.txt', creating the file if it doesn't exist, or overwriting it if it does.`} />
        
            </div>



            {/* ===================================================== */}
            {/* Double Greater Than */}
            <div >
                <Subheading text={`Double Greater Than '>>' `} />
                <Text text={`It redirects the output of a command to a file, appending to the file if it already exists.`} />
                < TerminalOutput content={`[root@localhost ~]# echo "Hello Again" >> output.txt
[root@localhost ~]# cat output.txt
Hello World!
Hello Again
[root@localhost ~]#
`} />
    
                <Text text={`This appends "Hello Again" to 'output.txt', preserving any existing content.`} />
       
            </div>



            {/* ===================================================== */}
            {/* tee */}
            <div >
                <Subheading text={`tee`} />
         
                <Text text={`It reads from standard input and writes to both standard output and one or more files. This can be used to view output on the terminal while simultaneously writing it to a file.`} />
                < TerminalOutput content={`[root@localhost ~]# echo "Hello with tee command" | tee output.txt
Hello with tee command
[root@localhost ~]# cat output.txt
Hello with tee command
[root@localhost ~]#`} />

                <Text text={`This can be used as single greater than symbol as well.`} />
              
                <Text text={`This will store output of command in to a file`} />

                <TerminalOutput content={`[root@localhost ~]# echo "Logging this message" | tee output.txt
Logging this message
[root@localhost ~]# cat output.txt
Logging this message
[root@localhost ~]#
`} />
                <Text text={`This writes "Logging this message" to 'output.txt' and also displays it on the terminal.`} />

            </div>


            {/* ===================================================== */}
            {/* tee -a */}
            <div >
                <Subheading text={`tee -a`} />
                <Text text={`It is used to append text or command output in to a file.`} />
                < TerminalOutput content={`[root@localhost ~]# echo "Hello with tee -a command" | tee -a output.txt
Hello with tee -a command
[root@localhost ~]# cat output.txt
Hello with tee command
Hello with tee -a command
[root@localhost ~]#
`} />
          

                <Text text={`This can be used as double greater than symbol as well.`} />
              
                <Text text={`This will append output of command in to a file`} />

            
                <TerminalOutput content={`[root@localhost ~]# echo "Appending this message" | tee -a output.txt
Appending this message
[root@localhost ~]# cat output.txt
Hello with tee command
Hello with tee -a command
Appending this message
[root@localhost ~]#
`} />
                <Text text={`This appends "Appending this message" to 'output.txt' and also displays it on the terminal. `} />

             
            </div>




        </div>
    )
};


export default Symbols;