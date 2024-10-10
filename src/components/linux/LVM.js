import React from 'react';
import { Heading, Subheading, Text, Command, Note } from '../utils/Comps';

const LVMPage = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Heading */}
      <Heading text="Logical Volume Manager (LVM)" />

      {/* Subheading */}
      <Subheading text="Introduction" />

      {/* Text */}
      <Text text="LVM technology provides a flexible storage concept where volumes can be easily extended or reduced as needed. LVM is used both in physical data centers and cloud-based infrastructure." />
      <Text text="LVM consists of physical volumes (PVs) and volume groups (VGs)." />

      {/* Subheading */}
      <Subheading text="Components of LVM" />

      {/* Subheading */}
      <Subheading text="Physical Volume (PV)" />

      {/* Text */}
      <Text text="A physical volume is a partition on a disk with the hex code 8e. At least one physical volume is required to create a volume group." />

      {/* Subheading */}
      <Subheading text="Volume Group (VG)" />

      {/* Text */}
      <Text text="A volume group is a collection of one or more physical volumes. One volume group can be divided into one or more logical volumes (LVs). VGs act as storage containers." />
      <Text text="Volume groups store data in chunks known as Physical Extents (PEs), which have a default size of 4MB, but this can be resized." />

      {/* Subheading */}
      <Subheading text="Logical Volume (LV)" />

      {/* Text */}
      <Text text="A logical volume is a subdivision of a volume group, with an assigned filesystem and mount point. It is used to store data flexibly." />

      {/* Subheading */}
      <Subheading text="Steps for Creating and Using Logical Volumes" />

      {/* Subheading */}
      <Subheading text="1. Physical Volume (PV) Creation" />

      {/* Text */}
      <Text text="First, create partitions using 'fdisk' or 'parted' command but do not format them. After partitioning, create the PV using:" />
      <Command command="pvcreate <partition1> <partition2> ..." />
      <Text text="To see the physical volumes, use the following commands:" />
      <Command command="pvs" />
      <Command command="pvs <PV_name>" />
      <Command command="pvdisplay" />
      <Command command="pvdisplay <PV_name>" />

      {/* Subheading */}
      <Subheading text="2. Volume Group (VG) Creation" />

      {/* Text */}
      <Text text="After creating physical volumes, create a volume group with at least one PV using the command:" />
      <Command command="vgcreate <VG_name> <PVs>" />
      <Text text="To check the status of the volume groups, use:" />
      <Command command="vgs" />
      <Command command="vgs <VG_name>" />
      <Command command="vgdisplay" />
      <Command command="vgdisplay <VG_name>" />

      {/* Subheading */}
      <Subheading text="3. Logical Volume (LV) Creation" />

      {/* Text */}
      <Text text="After creating a volume group, create a logical volume using:" />
      <Command command="lvcreate -L +<size> -n <LV_name> <VG_name>" />
      <Command command="lvcreate -l <PE_size> -n <LV_name> <VG_name>" />
      <Text text="To list the logical volumes and see their status, use:" />
      <Command command="lvs" />
      <Command command="lvdisplay" />
      <Text text="After creating the LV, format it with the appropriate filesystem:" />
      <Command command="mkfs.xfs <LV_partition>" />
      <Command command="mkfs.xfs /dev/vg1/lv1" />
      <Text text="Mount the logical volume on a mount point using:" />
      <Command command="mount <LV_partition> <mount_point>" />
      <Text text="Then add an entry in the /etc/fstab file and reload the systemd daemon using:" />
      <Command command="systemctl daemon-reload" />

      {/* Subheading */}
      <Subheading text="LV Extend" />

      {/* Text */}
      <Text text="You can extend the size of a logical volume either in an offline state or during runtime, without unmounting it. However, there must be available space in the VG." />
      <Text text="For ext2, ext3, or ext4 filesystems, there are two methods:" />
      <Subheading text="1st Method: Using Two Commands" />
      <Command command="lvextend -L +<size> <LV_name>" />
      <Command command="resize2fs <LV_name>" />
      <Text text="This command resizes the filesystem after extending the logical volume." />

      <Subheading text="2nd Method: Using lvresize" />
      <Command command="lvresize" />
      <Text text="This command resizes the logical volume and automatically adjusts the filesystem." />

      <Text text="For xfs filesystems, the process differs:" />
      <Subheading text="1st Method (up to RHEL 7):" />
      <Command command="lvextend + xfs_growfs" />

      <Subheading text="2nd Method (RHEL 8 and newer):" />
      <Command command="lvresize" />

      {/* Subheading */}
      <Subheading text="LVM Reduce" />

      {/* Text */}
      <Text text="LVM reduction is only supported in offline mode and is not supported on xfs filesystems. For ext2, ext3, and ext4 filesystems, use:" />
      <Command command="lvresize -L <size> -r <LV_name>" />
      <Text text="This command adjusts the size of the LV." />

      {/* Subheading */}
      <Subheading text="VG Extending and Reduction" />

      {/* Text */}
      <Text text="Volume groups can be extended or reduced by adding or removing physical volumes, depending on the system's requirements." />

    </div>
  );
};

export default LVMPage;
