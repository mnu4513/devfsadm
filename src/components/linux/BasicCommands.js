import React from 'react';
import { Heading, Subheading, Video, Image, Text, Command } from '../utils/Comps';

const BasicMonitoring = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>


            <Heading text={`Basic Linux Commands `} />
            <Video videoSrc={'i8Vwtaozp_A'} />

            {/* ===================================================== */}
            {/* whoami */}
            <div >
                <Subheading text={`Username of the currently logged-in user:`} />
                <Command command={`whoami`} />
                <Text text={`Outputs the username of the current user, equivalent to 'echo $USER'.`} />
                <Image imageSrc={'kc7jhho7yjio3sjt4le3'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* hostname */}
            <div >
                <Subheading text={`Hostname of the machine:`} />
                <Command command={`hostname`} />
                <Text text={`It displays the current hostname of the machine.`} />
                <Image imageSrc={'ujlyig4ppqaaz26gwobx'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* change hostname */}
            <div >
                <Subheading text={`Update Hostname:`} />
                <Command command={`hostname <new_hostname>`} />
                <Text text={`Temporarily changes the hostname until the system is rebooted. For permanent changes, you need to edit configuration files like '/etc/hostname' and '/etc/hosts'.`} />
                <Image imageSrc={'r5vvhqz687fclav303nh'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* pwd */}
            <div >
                <Subheading text={`Print Working Directory:`} />
                <Command command={`pwd`} />
                <Text text={`It displays the absolute path to the directory you are currently in.`} />
                <Image imageSrc={'jqywoutebpe07ah1f0ow'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* cat */}
            <div >
                <Subheading text={`Read Content of Any File:`} />
                <Command command={`cat <file_path>`} />
                <Text text={`It displays the content of any file.`} />
                <Image imageSrc={'sc6eo36nbd1il8vwotmy'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* ls */}
            <div >
                <Subheading text={`List Down Contents:`} />
                <Command command={`ls`} />
                <Text text={`It shows the contents of the current directory.`} />
                <Image imageSrc={'ql5l9skzwviyhayzqax1'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* ls with path  */}
            <div >
                <Subheading text={`List Down Contents of a Specific Directory:`} />
                <Command command={`ls <path>`} />
                <Text text={`It lists contents of the specified directory, e.g., 'ls /home/user/'.`} />
                <Image imageSrc={'xtkg7mesrm53wl4hqnci'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* ls -a */}
            <div >
                <Subheading text={`List Down Contents with Hidden Contents:`} />
                <Command command={`ls -a`} />
                <Text text={`It lists all files, including hidden ones (files starting with a dot).`} />
                <Image imageSrc={'vtq0ocwt6txwemz4dynh'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* ls -ltrh  */}
            <div >
                <Subheading text={`Detailed Listing:`} />
                <Command command={`ls -ltrh`} />
                <Text text={`It is use to detailed listing of contents. In this listing format we can see permisson, size, owner, group, name and content type.`} />
                <Image imageSrc={'ebawf9c31szaeialvgzt'} imageAlt={''} />
                <Text text={`'-l' : Long format (detailed information)`} />
                <Text text={`'-t' : Sort by modification time, newest first`} />
                <Text text={`'-r' : Reverse the order of the sort`} />
                <Text text={`'-h' : Human-readable sizes (e.g., KB, MB)`} />

            </div>



            {/* ===================================================== */}
            {/* cd <path> */}
            <div >
                <Subheading text={`Change Directory: `} />
                <Command command={`cd <path_of_directory`} />
                <Text text={`It changes the current working directory.`} />
                <Image imageSrc={'nelcryv9wnzt6tadddpo'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* cd */}
            <div >
                <Subheading text={`Home Directory:`} />
                <Command command={`cd`} />
                <Text text={`It changes to the user’s home directory.`} />
                <Image imageSrc={'nckweirbbfpq229n5onk'} imageAlt={''} />
            </div>




            {/* ===================================================== */}
            {/* cd .. */}
            <div >
                <Subheading text={`Parent Directory:`} />
                <Command command={`cd ..`} />
                <Text text={`It moves up one level in the directory tree.`} />
                <Image imageSrc={'cwgwykmv4s2ckl7toycs'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* cd - */}
            <div >
                <Subheading text={`Previous Directory:`} />
                <Command command={`cd -`} />
                <Text text={`It switches to the previous directory you were in.`} />
                <Image imageSrc={'igt8o076hhoxpn85kqos'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* mkdir */}
            <div >
                <Subheading text={`Create a New Directory:`} />
                <Command command={`mkdir <directory_name>`} />
                <Text text={`It creates a new directory with the given name.`} />
                <Image imageSrc={'giseb2fo9n0uyfiilyuy'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* touch  */}
            <div >
                <Subheading text={`Create a New File:`} />
                <Command command={`touch </file_name>`} />
                <Text text={`It creates an empty file named 'new_file.txt' if it doesn’t already exist, or updates its modification time if it does.`} />
                <Image imageSrc={'i0zly7u7k9lri558pbkn'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* <command> 2> /dev/null */}
            <div >
                <Subheading text={`Suppress Error Messages:`} />
                <Command command={`<command> 2> /dev/null`} />
                <Text text={`It redirects error messages to '/dev/null', suppressing them from the terminal output.`} />
                <Image imageSrc={'n8hss8k9n6jupnyefjhm'} imageAlt={''} />
            </div>









            <Heading text={`Basic Monitoring Commands `} />


            {/* ===================================================== */}
            {/* cat /etc/os-release */}
            <div >
                <Subheading text={`OS Version and Distribution:`} />
                <Command command={`cat /etc/system-release`} />
                <Image imageSrc={'ut8vz4naga7nimt0wwt5'} imageAlt={''} />
                <Command command={`cat /etc/redhat-release`} />
                <Image imageSrc={'w15z1mshdfrvnabf9ebm'} imageAlt={''} />
                <Command command={`cat /etc/fedora-release`} />
                <Image imageSrc={'p0kfypuuy0wdw6pfeefz'} imageAlt={''} />
                <Text text={`These commands provide details about the OS version and distribution.`} />
            </div>



            {/* ===================================================== */}
            {/* cat /etc/system-release */}
            <div >
                <Subheading text={`Check OS Information:`} />
                <Command command={`cat /etc/os-release`} />
                <Image imageSrc={'xojhsliim7bzfvzzuscl'} imageAlt={''} />
                
                <Text text={` This command displays additional information about the OS.`} />
                
            </div>



            {/* ===================================================== */}
            {/* arch */}
            <div >
                <Subheading text={`Check System Architecture:`} />
                <Command command={`arch`} />
                <Text text={`'x86' : Indicates a 32-bit system.`} />
                <Text text={`'x86_64' : Indicates a 64-bit system.`} />
                <Image imageSrc={'v49teril7u0hmmmjzsof'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* lscpu */}
            <div >
                <Subheading text={`Check CPU Architecture:`} />
                <Command command={`lscpu`} />
                <Text text={`This command provides information about the CPU architecture.`} />
                <Image imageSrc={'e4ytvsx7xfqp6uunimer'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* cat /proc/cpuinfo */}
            <div >
                <Subheading text={`Detailed CPU Information:`} />
                <Command command={`cat /proc/cpuinfo`} />
                <Text text={`  This command shows detailed information about the CPU.`} />
                <Image imageSrc={'fcqydxmslc0aag1hrkol'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* free */}
            <div >
                <Subheading text={`Check Memory Information:`} />
                <Command command={`free`} />
                <Text text={`It displays information about physical (RAM) and virtual (swap) memory.
`} />
                <Image imageSrc={'kstnrvras9rbzccrhvpa'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* cat /proc/meminfo */}
            <div >
                <Subheading text={`Detailed Memory Information:`} />
                <Command command={`cat /proc/meminfo`} />
                <Text text={`It shows detailed information about the system’s memory.`} />
                <Image imageSrc={'xijihc7c4wm80enrsmid'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* du */}
            <div >
                <Subheading text={`Check Disk Utilization:`} />
                <Command command={`du`} />
                <Text text={`It displays disk usage of the current working directory.
`} />
                <Image imageSrc={'l3as4xykk5ju5qssas9v'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* du -h */}
            <div >
                <Subheading text={`Disk Utilization in Human-Readable Format:`} />
                <Command command={`du -h`} />
                <Text text={`It shows disk usage in a human-readable format (e.g., KB, MB).
`} />
                <Image imageSrc={'kybjzjalk9odypgeqwkn'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* du -sh */}
            <div >
                <Subheading text={`Sum of Disk Utilization:`} />
                <Command command={`du -sh`} />
                <Text text={`It displays the total disk usage of the current working directory.`} />
                <Image imageSrc={'ks5ch4ejr9wsecvsi0lr'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* du -sh <path_of_dir_or_mount-point> */}
            <div >
                <Subheading text={`Disk Utilization of Specific Directory or Mount Point:`} />
                <Command command={`du -sh <path_of_dir_or_mount-point>`} />
                <Text text={`It shows disk usage for a specific directory or mount point.`} />
                <Image imageSrc={'wn1ek5qoq35faidl2ze6'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* du -sh * */}
            <div >
                <Subheading text={`Size of Each File and Directory:`} />
                <Command command={`du -sh *`} />
                <Text text={`It displays the size of each file and directory in the current working directory.`} />
                <Image imageSrc={'j4sdkndckld9yhplymp7'} imageAlt={''} />
            </div>



            {/* ===================================================== */}
            {/* df */}
            <div >
                <Subheading text={`Check Disk Utilization of All Mount Points:`} />
                <Command command={`df`} />
                <Text text={`It shows disk utilization and free space for all mounted filesystems.`} />
                <Image imageSrc={'jp6sincsxuuajnvowvoe'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* df -h */}
            <div >
                <Subheading text={`Disk Utilization in Human-Readable Format:`} />
                <Command command={`df -h`} />
                <Text text={`It displays disk utilization and free space in a human-readable format.`} />
                <Image imageSrc={'zdneybj7tde6s7mltx2f'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* df -h <disk/mount-point/directory> */}
            <div >
                <Subheading text={`Disk Utilization for Specific Disk, Mount Point, or Directory:`} />
                <Command command={`df -h <disk/mount-point/directory>`} />
                <Text text={`It shows the free space percentage for a specific disk, mount point, or directory.`} />
                <Image imageSrc={'anpjuylc86yvztueeqgy'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            {/* fdisk -l */}
            <div >
                <Subheading text={`List All Disks and Partitions:`} />
                <Command command={`fdisk -l`} />
                <Text text={`It provides a list of all disks, their sizes, and their partitions.`} />
                <Image imageSrc={'uvh5kzzlewr3pnkie87v'} imageAlt={''} />
            </div>


        </div>

    );
};

export default BasicMonitoring;