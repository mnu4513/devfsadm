prstat -a => memory info

psrinfo -vp => cpu physical & virtual

iostat -en => to check disk error

prstat -t => to check cpu & memory utilization user wise 

du -sh <mount_point> => to check mount point / dir used size 

cat /etc/opasswd => copy of passwd 

cat /etc/shadow => user management in password incripted format 

pwconv => to restore shadow file 

id -r <user_name> => to get user info with secondary group 

ipadm remove-ipmp -i <link-1> -i <link-2> <ipmp_group> => to remove link from ipmp group

dladm create-vinc -l net0 vnet0 => to create virtual network interface card 

if_mpadm -d <link_name> => to disable link form a ipmp group 

ipmpstat -i => to show interface, action, group, flags, link state 

fcinfo hba-port => to check the wwn number 

cfgadm -al => to refresh the devices 

zpool status | grep -i <disk_id> => to check disk integration in zpool 

zfs list -t snapshot => to list down all snapshots 

zfs snapshot -r <data_set_name>@<snapshot_name> => to create a zfs snapshot 

zfs rollback <data_set_name>@<snapshot_name> => to rollback a snapshot 

zfs destroy -r <data_set_name>@<snapshot_name> => to destroy a snapshot 

zfs offline rpool <disk_id> => to offline a disk 

swap -l => to check swap space / -s => status / swap -a /dev/zvol/dsk/rpool/<swap_name> => to add  / -d => to delete

cron 
-l => to list of job entry 
-e => to edit the file (job list)
-r => to remove file 
vi /etc/cron.d/cron.allow

O => ok prompt 
S => single user with critical file system (root, var, swap)
1 => sinle user with all file system 
2 => multi user without nfs
3 => multi user with nfs (default)
4 => not in use
5 => to shutdown the system 
6 => to reboot the system 
who -r => to check the current run level 
/sbin/init 2 => to change the run level 

svcadm enable nfs 
share -o rw <dir_name / mount_point> => to share a directory or mount point 
showmount -e => to check shared mount point or directories 
mount -F nfs <source_ip:/root/...> <destination> => to mount shared directory 

patching 
unzip installation guide 
./install-repo.ksh -d <path_or_dir> => to run script for uncompress all the files 
pkg publisher => to check all publishers 
pkg unset-publisher <publisher_name> => to unset the publisher 
pkg set-publisher -g <sru_location> <publisher_name (solaris) > => to set new publisher 
beadm create <be_name> => to create new boot environment 
pkg update -nv => to dry run 
pkg update --accept => to update 
init 6 => to restart the server 
beadm list => to list down all boot environments 
beadm activate <be_name> => to activate another boot environment 
ok > boot -L => to see all boot environments 

ssh
scp -r <file / dir > <ip : / path or destination >

password less ssh 
ssh -keygen -t rsa => to generate key 
copy key into destination server's home dir <authorised-keys> 


Iloam snapshot => hardware failware 
Guds report => For OS issue 
Explorer => 
cd /usr/lib/explorer/bin > ./explorer 

