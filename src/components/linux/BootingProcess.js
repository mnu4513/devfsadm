import React from 'react';
import { Heading, Subheading, Text, Command } from '../utils/Comps';

const BootingProcessPage = () => {
  return (
    <div className="mx-4 my-4 lg:max-w-4xl lg:mx-auto">
      
      {/* Main Heading */}
      <Heading text="Linux Booting Process" />

      {/* Introduction */}
      <Subheading text="Overview" />
      <Text text="The booting process in Linux involves several steps, starting from the power-on stage to the login screen. Understanding these steps is crucial for troubleshooting boot-related issues." />
      <Text text="Here is a simplified sequence of the Linux booting process:" />
      <Text text="Power ON ==> SMPS ==> BIOS ==> POST ==> CMOS initialization ==> MBR/GPT ==> Bootloader ==> Kernel + Initramfs ==> Init/Systemd ==> Login shell ==> Applications" />

      {/* SMPS */}
      <Subheading text="1. SMPS (Switch Mode Power Supply)" />
      <Text text="The SMPS is responsible for converting high voltage AC power into low voltage DC power, which is required to power the motherboard, CPU, and other components. Once the power is stable, the motherboard signals the BIOS to begin the boot process." />

      {/* BIOS */}
      <Subheading text="2. BIOS (Basic Input Output System)" />
      <Text text="The BIOS is firmware that performs hardware initialization during the booting process and provides runtime services for operating systems. It manages data flow between the operating system and hardware devices such as the hard disk, video adapter, keyboard, and more." />

      {/* POST */}
      <Subheading text="3. POST (Power On Self Test)" />
      <Text text="During POST, the BIOS checks the hardware components (like RAM, CPU, and storage devices) to ensure they are working properly. If any critical hardware fails, an error message or a beep code will indicate the issue." />

      {/* CMOS Initialization */}
      <Subheading text="4. CMOS Initialization" />
      <Text text="CMOS (Complementary Metal-Oxide-Semiconductor) stores BIOS settings, including the system date, time, and hardware configuration. During initialization, BIOS reads the settings from CMOS and configures the system accordingly." />

      {/* MBR / GPT */}
      <Subheading text="5. MBR (Master Boot Record) / GPT (GUID Partition Table)" />
      <Text text="MBR or GPT is located in the first sector of a disk. They contain partition tables and bootloader code that tell the system how to load the operating system. MBR is older and supports up to 4 primary partitions, whereas GPT supports more partitions and larger disks." />

      {/* Bootloader */}
      <Subheading text="6. Bootloader" />
      <Text text="The bootloader is a small program responsible for loading the operating system into memory. In Linux, common bootloaders are GRUB (Grand Unified Bootloader) or GRUB2. The bootloader loads the kernel and initial RAM disk (initramfs) into memory and transfers control to the kernel." />
      <Command command="Configuration files: /boot/grub2/grub.cfg" />
      <Command command="Boot files location: /boot" />

      {/* Kernel */}
      <Subheading text="7. Kernel" />
      <Text text="The Linux kernel is the core component of the operating system. It manages hardware resources and provides an interface between the system's hardware and processes. It handles memory management, process scheduling, and device drivers." />
      <Text text="The kernel is loaded as a file named 'vmlinuz' (compressed bootable image) located in the /boot directory." />
      <Command command="# uname -r" />
      <Command command="Command to check kernel version" />

      {/* Initramfs */}
      <Subheading text="8. Initramfs (Initial RAM Filesystem)" />
      <Text text="Initramfs is a temporary root filesystem loaded into memory during the boot process. It contains drivers and scripts needed to mount the real root filesystem. Once the root filesystem is mounted, initramfs is discarded, and its memory is freed." />

      {/* Init / Systemd */}
      <Subheading text="9. Init / Systemd" />
      <Text text="Init (or systemd in modern Linux distributions) is the first process that runs after the kernel is loaded. It manages system services and processes from startup to shutdown. Systemd is a newer init system that offers faster boot times and better service management." />

      {/* Login Shell */}
      <Subheading text="10. Login Shell" />
      <Text text="Once the init/systemd process is complete, the login shell (like GNOME or a terminal) appears, allowing the user to interact with the system by logging in." />

      {/* Troubleshooting Booting Issues */}
      <Heading text="Troubleshooting Booting Issues" />

      {/* Reinstall Kernel using Rescue Kernel */}
      <Subheading text="1. Reinstall Kernel using Rescue Kernel" />
      <Text text="If the machine fails to boot due to kernel corruption, booting using a rescue kernel can help repair or reinstall the kernel without needing a bootable DVD. By mounting an ISO image and installing the kernel and kernel-core packages, the system can be repaired." />
      <Command command="# rpm -ivh kernel-<version><architecture>.rpm --force" />
      <Command command="# grub2-mkconfig -o /boot/grub2/grub.cfg" />

      {/* Reinstall Initramfs */}
      <Subheading text="2. Reinstall Initramfs" />
      <Text text="If the system fails to boot due to initramfs corruption, this results in a 'kernel panic' error. The system can be recovered by generating a new initramfs image and updating the bootloader." />
      <Command command="# mkinitrd initramfs-$(uname -r).img $(uname -r)" />
      <Command command="# grub2-mkconfig -o /boot/grub2/grub.cfg" />

      {/* Reinstall GRUB2 Bootloader */}
      <Subheading text="3. Reinstall GRUB2 Bootloader" />
      <Text text="If the bootloader (GRUB2) is corrupted, preventing the system from booting, it can be reinstalled using rescue mode with a bootable ISO image. The GRUB2 bootloader can be installed and configured to restore boot functionality." />
      <Command command="# grub2-install /dev/sda" />
      <Command command="# grub2-mkconfig -o /boot/grub2/grub.cfg" />

    </div>
  );
};

export default BootingProcessPage;
