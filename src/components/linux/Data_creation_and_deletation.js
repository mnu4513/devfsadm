import React from 'react'
import { Command, Heading, Subheading, Text, Image, Video, Note } from '../utils/Comps';

const DateTime = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>

            <Heading text={`Files and Directories Creation and Deletation`} />

            <Video videoSrc={`i8Vwtaozp_A`} />


            <Heading text={`Files and Directories Creation`} />
            {/* ===================================================== */}
            {/* mkdir command  */}
            <div >
                <Subheading text={`Create Directory:`} />
                <Command command={`mkdir [options] <directory_name>`} />
                <Text text={`It is use to create a new directory.`} />
                <Image imageSrc={`veyr4pjf8scgubxutj1h`} imageAlt={``} />
            </div>

            {/* ===================================================== */}
            {/* mkdir command multiple directories */}
            <div >
                <Subheading text={`Create Multiple Directories:`} />
                <Command command={`mkdir <dir1> <dir2> <dir3>`} />
                <Text text={`It is use to create multiple new directories at a time.`} />
                <Image imageSrc={`mi2tsxtjuzv35xzxmyio`} imageAlt={``} />
            </div>


            {/* ===================================================== */}
            {/* mkdir -p command  */}
            <div >
                <Subheading text={`Create Nested Directories:`} />
                <Command command={`mkdir -p <parent_dir/child/grandchild>`} />
                <Text text={`It is use to create nested directories.`} />
                <Text text={`Option '-p' is use to create nested directories.`} />
                <Image imageSrc={`xaf2pw1hab25shfqfc6x`} imageAlt={``} />
            </div>

            {/* ===================================================== */}
            {/* touch command  */}
            <div >
                <Subheading text={`Create New File:`} />
                <Command command={`touch <file_name>`} />
                <Text text={`It is use to create a new file.`} />
                <Text text={`Command touch is often used to update file timestamps.`} />
                <Image imageSrc={`hjk4tvnin2hr3c61jh31`} imageAlt={``} />
            </div>

            {/* ===================================================== */}
            {/* touch command  multiple files */}
            <div >
                <Subheading text={`Create Multiple Files:`} />
                <Command command={`touch <file1> <file2> <file3>`} />
                <Text text={`It is use to create multiple empty files at a time.`} />
                <Image imageSrc={`zeos0yc6wzmwaaeyi3iq`} imageAlt={``} />
            </div>


            <Heading text={`Files and Directories Deletation`} />
            {/* ===================================================== */}
            {/* rmdir command  */}
            <div >
                <Subheading text={`Remove Empty Directory:`} />
                <Command command={`rmdir <directory_name>`} />
                <Text text={`Command 'rmdir' only works on directories that are completely empty. To remove directories with contents, use the 'rm' command.`} />
                <Image imageSrc={`olsvjtjzwaizlccgsdw1`} imageAlt={``} />
            </div>

            {/* ===================================================== */}
            {/* rm command */}
            <div >
                <Subheading text={`Remove files and directories:`} />
                <Command command={`rm [options] <file/dir_path>`} />
                <Text text={`It is used to delete files or directories.`} />
                <Text text={` '-i' : Interactive mode. Prompts before each removal.`} />
                <Text text={`'-r' or '-R' : Recursively remove directories and their contents.`} />
                <Text text={`'-v' : Verbose mode. Displays the details of the removal process.`} />
                <Text text={`'-f' : Force. Ignores non-existent files and never prompts.`} />
                <Image imageSrc={`a4ip4vhssjez656hs7bc`} imageAlt={``} />
            </div>

            {/* ===================================================== */}
            {/* rm command  */}
            <div >
                <Subheading text={`Remove File:`} />
                <Command command={`rm <file1> <file2> <file3>`} />
                <Text text={`Without any option, we can delete a single or multiple files at a time with 'rm' command.`} />
                <Image imageSrc={`yxtu9kwd3sxyt5srrnpx`} imageAlt={``} />
            </div>

            {/* ===================================================== */}
            {/* rm  -rf command  */}
            <div >
                <Subheading text={`Forcefully remove a file or directory without prompting:`} />
                <Command command={`rm -rf <file/dir_name>`} />
                <Text text={`It is use to delete any file or directory forcefully.`} />
                <Text text={`Command 'rm -rf' deletes a directory recursively.`} />
                <Image imageSrc={`ph4urg247bhy1k718f8o`} imageAlt={``} />
                <Text text={`With the help of command 'rm -rf', we can delete multiple files or directories at a time.`} />
            </div>


            {/* ===================================================== */}

            <div>
                <Note text={`The '-rf' option allows you to delete directories and their contents forcefully. Be cautious with this option, as it will not prompt for confirmation and can lead to data loss.`} />
            </div>


        </div>
    )
}

export default DateTime;