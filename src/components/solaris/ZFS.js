import React from 'react';
import { img_base_url } from '../Config';

const ZFS = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-4'>ZFS in Solaris</h2>
        <h2 className='text-xl font-bold mb-5 ml-4'>(Zettabyte File System)</h2>
        <p className='ml-4'>
          ZFS (Zettabyte File System) is a combined file system and logical volume manager designed by Sun Microsystems (now part of Oracle Corporation) for Solaris. ZFS offers advanced features, data integrity, and simplified storage management.
        </p>
      </div>

      <hr className='mt-5 ml-4' />

      {/* Zpool */}
      <div className='ml-4 mt-5'>
        <h2 className='text-xl font-bold mb-2'> zpool</h2>
        <p>
          In Solaris, the zpool command is used to manage ZFS storage pools. ZFS (Zettabyte File System) is a combined file system and volume manager that provides features like pooled storage, snapshots, and data integrity. Here are some common zpool commands in Solaris:
        </p>
        <div className='mt-10' >
          <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='mb-4'>
          <p className='mt-5'>1. To list down all pools </p>
          <p className=' font-bold ml-5'> {`zpool list`} </p>
          <img src={`${img_base_url}q5loyxkipfiz9vz8vqoy.png`} alt='' className='mt-3 mb-4 md:w-2xl lg:max-w-5xl' />
          <p>
            In above result we can only one pool that is default rpool.
          </p>
          <p className='mt-2'>
            Now we will check availabe free disks to create new pools. If we don't have free disks then we have to run a command to generate the WWN ( world wide name ) and after generating WWN number we will provide it to DB team and they will provide disk ID to us.
          </p>
        </div>

        <div className='mb-4'>
          <p className='mt-5'>2. To get WWN number </p>
          <p className=' font-bold ml-5'> {`fcinfo hba-port`} </p>
          <img src={`${img_base_url}zots0iwgbesq89vanhaz.png`} alt='' className='mt-3 mb-4 md:w-2xl lg:max-w-5xl' />
          <p >
            Now we are getting "No Adepters Found" as output because we are not working on actual server but on actual server it will generate WWN number.
          </p>
          <p className='mt-2' >
            On our local machine we can add multiple local disks from our virtual machine's setting.
          </p>
        </div>

        <div className='mb-4'>
          <p className='mt-5'>3. To refresh the disks</p>
          <p className=' font-bold ml-5'> {`devfsadm`} </p>
          <img src={`${img_base_url}whojbiadmwnijo35vvu2.png`} alt='' className='mt-3 mb-4 md:w-2xl lg:max-w-5xl' />
          <p>
            After adding disks we have to refresh the disks.
          </p>
          <p className='mt-2'>
            If this command doesn't work then we have to use another command to refresh the disks.
          </p>
          <p className='mt-3'>To refresh the disks </p>
          <p className=' font-bold ml-5'> {`cfgadm -al`} </p>
          <img src={`${img_base_url}dato8ifsg5dhv93siw5l.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>4. To list down all disks </p>
          <p className=' font-bold ml-5'> {`echo | format`} </p>
          <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>5. To create a normal pool </p>
          <p className=' font-bold ml-5'> {`zpool create <pool_name> <disk_Id>`} </p>
          <img src={`${img_base_url}yrjbx6z9aqtwpp1ki5jt.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>6. To check pool status</p>
          <p className=' font-bold ml-5'> {`zpool status <pool_name>`} </p>
          <img src={`${img_base_url}ovpq4r4zsfivptj4makr.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>7. To Destroy a Pool </p>
          <p className=' font-bold ml-5'> {`zpool destroy <pool_name>`} </p>
          <img src={`${img_base_url}vnz6ab2lmoaijp88spsz.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>8. To list down all destroied pools</p>
          <p className=' font-bold ml-5'> {`zpool import -D`} </p>
          <img src={`${img_base_url}hp1dcd907ch03n2qo2y5.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>9. To import back a destroied pool</p>
          <p className=' font-bold ml-5'> {`zpool import -D <pool_name>`} </p>
          <p className=' font-bold ml-5'> {`zpool import -D <pool_id>`} </p>
          <img src={`${img_base_url}bz9p3ruh9wfh5syx4l03.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>10. To export a pool</p>
          <p className=' font-bold ml-5'> {`zpool export <pool_name>`} </p>
          <img src={`${img_base_url}djddvjq4gnxj1m5a5usw.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>11. To list down all the exported pools</p>
          <p className=' font-bold ml-5'> {`zpool import`} </p>
          <img src={`${img_base_url}hqb1qj7gcovmzhcap0dj.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>12. To import a alreday exported pool</p>
          <p className=' font-bold ml-5'> {`zpool import <pool_name>`} </p>
          <p className=' font-bold ml-5'> {`zpool import <pool_id>`} </p>
          <img src={`${img_base_url}lwneuodtiqfpu06qttcg.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>13. To add a new disk in a already created pool</p>
          <p className=' font-bold ml-5'> {`zpool add <pool_name> <new_disk_Id>`} </p>
          <img src={`${img_base_url}f154onoeoils7jjehszg.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>14. To remove a disk from pool</p>
          <p className=' font-bold ml-5'> {`zpool remove <pool_name> <disk_Id>`} </p>
          <img src={`${img_base_url}kidjrwnohcfwim6gatra.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>15. To create a normal pool with multiple disks </p>
          <p className=' font-bold ml-5'> {`zpool create <pool_name> <disk1_id> <disk2_id>`} </p>
          <img src={`${img_base_url}moci5ugwncpneuz1drbd.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>16. To Create a Mirror Pool </p>
          <p className=' font-bold ml-5'> {`zpool create <pool_name> mirror <disk1_id> <disk2_id>`} </p>
          <img src={`${img_base_url}yxb9hpbe6e0m9ukl2ztc.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>17. To convert a normal pool into a mirror pool</p>
          <p className=' font-bold ml-5'> {`zpool attach <pool_name> <primary_disk_id> <new_disk_id>`} </p>
          <img src={`${img_base_url}bqhycw5tkpcqlysmo2rk.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>18. To detach or to convert a mirror pool into a normal pool</p>
          <p className=' font-bold ml-5'> {`zpool detach <pool_name> <disk_id>`} </p>
          <img src={`${img_base_url}upayrrhhojrkk5slwg4l.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>19. If we get an error in a pool and we want to clear the error from the pool</p>
          <p className=' font-bold ml-5'> {`zpool clear <pool_name>`} </p>
          <img src={`${img_base_url}uxpdiwvvfqgh2vlyolem.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>20. To get the history of the pools</p>
          <p className=' font-bold ml-5'> {`zpool history <pool_name>`} </p>
          <img src={`${img_base_url}dqv8uskqdapjzjqvjnb0.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>21. To take the pool's intigirity</p>
          <p className=' font-bold ml-5'> {`zpool scrub <pool_name>`} </p>
          <img src={`${img_base_url}pljjhywqxt65gr26q0uo.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>22. To check the pools status ( health )</p>
          <p className=' font-bold ml-5'> {`zpool status -xv`} </p>
          <img src={`${img_base_url}ra0scmie6knudyqb5lks.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>23. To check the data set name, mount point and size etc.</p>
          <p className=' font-bold ml-5'> {`df -h`} </p>
          <img src={`${img_base_url}ncis6qojsvxd8ixmfhow.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>24. To create children file system </p>
          <p className=' font-bold ml-5'> {`zfs create <pool_name>/<child_name>`} </p>
          <img src={`${img_base_url}zixqykmlcw2y0nk7d92g.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

        <div className='mb-4'>
          <p className='mt-5'>25. To change mount point name </p>
          <p className=' font-bold ml-5'> {`zfs set mountpoint=/<new_mountpoint_name> <data_set_name>`} </p>
          <img src={`${img_base_url}cromenapqjjwppcdkmhr.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>

      </div>


      <hr className='mt-5 ml-4' />

      {/* Quota and reservation */}
      <div className='ml-4 mt-5'>
        <h2 className='text-xl font-bold mb-2'> Quota and Reservation</h2>
        <p>
          In a very simple term quota is a maximum size can be used by a file system and if it has free space then other sibling or patent file system can use it's space too.
        </p>
        <p className='mt-2'>
          Reservation is the reserved space for a particular file system, this file system can use its parent's or sibling's sapce if it is out of sapce, but its parent or siblings can't use its reserved space.
        </p>
        <div className='mt-10' >
          <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <div className='mb-4'>
          <p className='mt-5'>1. To check quota details for a file system</p>
          <p className=' font-bold ml-5'> {`zfs get quota <data_set_name>`} </p>
          <img src={`${img_base_url}ktzkumg2ro0yd7tujlik.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>
        <div className='mb-4'>
          <p className='mt-5'>2. To set quota for a file system </p>
          <p className=' font-bold ml-5'> {`zfs set quota=<size> <data_set_name>`} </p>
          <img src={`${img_base_url}diqqrezgdtao3cr6kdy5.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>
        <div className='mb-4'>
          <p className='mt-5'>3. To unset the quota for a file system</p>
          <p className=' font-bold ml-5'> {`zfs set quota=none <data_set_name>`} </p>
          <img src={`${img_base_url}c4groadnkbb2dih6um0a.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>
        <div className='mb-4'>
          <p className='mt-5'>4. To check reservation details for a file system</p>
          <p className=' font-bold ml-5'> {`zfs get reservation <data_set_name>`} </p>
          <img src={`${img_base_url}mvdot73qwm5ava2pvz7w.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>
        <div className='mb-4'>
          <p className='mt-5'>5. To set the reservation value for a file system</p>
          <p className=' font-bold ml-5'> {`zfs set reservation=<size> <data_set_name>`} </p>
          <img src={`${img_base_url}hf2vawhbxc2acsgldygw.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>
        <div className='mb-4'>
          <p className='mt-5'>6. To unset the reservation for a file system</p>
          <p className=' font-bold ml-5'> {`zfs set reservation=none <data_set_name>`} </p>
          <img src={`${img_base_url}clwaid39j5iwxmt23jcj .png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        </div>


      </div>

    </div>
  );
};

export default ZFS;