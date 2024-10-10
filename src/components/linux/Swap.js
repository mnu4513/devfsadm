import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const SwapPartition = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            {/* Heading */}
            <Heading text="Swap Partition in Linux" />

            {/* Subheading */}
            <Subheading text="What is a Swap Partition?" />

            {/* Text */}
            <Text>
                A swap space is an area of a disk under the control of the Linux kernel memory management subsystem. The kernel uses swap space to supplement the system RAM by holding inactive pages of memory. The combined system RAM plus swap space is called virtual memory.
            </Text>
            <Text>
                When the memory usage on a system exceeds a defined limit, the kernel searches through RAM looking for idle memory pages assigned to processes. The kernel writes the idle pages to the swap area and reassigns the RAM pages to other processes. If a program requires access to a page on disk, the kernel locates another idle page of memory, writes it to disk, then recalls the needed page from the swap area.
            </Text>
            <Text>
                Because swap area resides on the disk, swap is slow when compared with RAM. While it is used to augment system RAM, you should not consider swap space as a sustainable solution for insufficient RAM for your workload.
            </Text>

            {/* Subheading */}
            <Subheading text="Sizing the Swap Space" />

            {/* Text */}
            <Text>
                Administrators should size the swap space based on the memory workload on the system. Application vendors sometimes provide recommendations on that subject. The following table provides some guidance based on the total amount of physical memory.
            </Text>

            {/* Table */}
            <table className='w-full text-left'>
                <thead>
                    <tr>
                        <th>RAM</th>
                        <th>Swap Space</th>
                        <th>Swap Space for Hibernation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2GB or less</td>
                        <td>Twice the RAM</td>
                        <td>Three times the RAM</td>
                    </tr>
                    <tr>
                        <td>2GB to 8GB</td>
                        <td>Same as RAM</td>
                        <td>Twice the RAM</td>
                    </tr>
                    <tr>
                        <td>8GB to 64GB</td>
                        <td>At least 4GB</td>
                        <td>1.5 times the RAM</td>
                    </tr>
                    <tr>
                        <td>More than 64GB</td>
                        <td>At least 4GB</td>
                        <td>Hibernation is not recommended</td>
                    </tr>
                </tbody>
            </table>

            {/* Subheading */}
            <Subheading text="Creating a Swap Partition" />

            {/* Text */}
            <Text>
                There are two main methods for creating a swap partition:
            </Text>
            <ul>
                <li>During the OS installation time</li>
                <li>After the OS installation</li>
            </ul>
            <Text>
                After OS installation, you can use one of the following methods to create swap:
            </Text>
            <ul>
                <li>Using `fdisk` command</li>
                <li>Using `parted` command</li>
                <li>Using `dd` command</li>
            </ul>

            {/* Subheading */}
            <Subheading text="A. Creation of Swap Using fdisk Command" />

            {/* Commands */}
            <Command command="# fdisk <disk>" />
            <Text>
                Use `fdisk` to cut a partition from the disk. Choose the partition type (primary or extended).
            </Text>
            <Command command=": t" />
            <Command command=": <partition_number>" />
            <Command command=": <Id> (82)" />
            <Command command=": w" />
            <Text>
                After creating the partition and changing the ID, create the filesystem for the swap partition:
            </Text>
            <Command command="# mkswap <partition>" />
            <Text>
                Add it to the swap table to activate the swap partition:
            </Text>
            <Command command="# swapon <partition>" />
            <Text>
                Make an entry into the `/etc/fstab` file for permanent use; otherwise, it will be removed from the swap table after reboot. You do not need to format or mount the swap partition on any mount point.
            </Text>

            {/* Subheading */}
            <Subheading text="B. Creation of Swap Using parted Command" />

            {/* Commands */}
            <Command command="# parted <disk> mklabel <label>" />
            <Text>
                First, label the disk (`msdos` or `gpt`). Then, cut the partition from the disk:
            </Text>
            <Command command="# mkswap <partition>" />
            <Text>
                Add it to swap using the command:
            </Text>
            <Command command="# swapon <partition>" />
            <Text>
                Make an entry in `/etc/fstab` for permanent use, and run the command:
            </Text>
            <Command command="# systemctl daemon-reload" />

            {/* Subheading */}
            <Subheading text="C. Creation of Swap Using dd Command" />

            {/* Text */}
            <Text>
                Creating a swap file using the `dd` command involves several steps: creating the file, setting up the swap space, and enabling it.
            </Text>
            <Text>
                1. Create the Swap File Using `dd`:
            </Text>
            <Command command="sudo dd if=/dev/zero of=/swapfile bs=1M count=1024" />
            <Text>
                Replace `count` with the desired size (e.g., `2048` for 2GB).
            </Text>

            <Text>
                2. Secure the Swap File:
            </Text>
            <Command command="sudo chmod 600 /swapfile" />

            <Text>
                3. Set Up the Swap Space:
            </Text>
            <Command command="sudo mkswap /swapfile" />

            <Text>
                4. Enable the Swap File:
            </Text>
            <Command command="sudo swapon /swapfile" />

            <Text>
                5. Verify the Swap Space:
            </Text>
            <Command command="sudo swapon --show" />
            <Command command="free -h" />
            <Text>
                Ensure the swap file is active.
            </Text>

            <Text>
                6. Make the Swap File Permanent:
            </Text>
            <Command command="sudo nano /etc/fstab" />
            <Text>
                Add an entry to `/etc/fstab`, and run:
            </Text>
            <Command command="# systemctl daemon-reload" />
        </div>
    );
};

export default SwapPartition;
