import React from 'react';
import { Heading, Line, Subheading, Text } from '../utils/Comps';


const InetviewPreparation = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Solaris 11 Interview Questions`}/>
      <Line/>
      <Subheading text={`Solaris System Administration Interview Questions`}/>
      <Text text={`Below is a categorized list of important Solaris administration and clustering interview questions. These topics cover real-world troubleshooting, configuration, and maintenance scenarios for Solaris 10 and 11, Oracle VM for SPARC (LDOMs), clustering, storage, networking, and patch management.`} />
      <Line/>
      <Subheading text={`1. Patching & System Maintenance`}/>
      <Text text={`🔔 Patching Process for Solaris 11`} />
      <Text text={`🔔 Patching Prerequisites`} />
      <Text text={`🔔 Patching Rollback`} />
      <Text text={`🔔 What to do if server is not coming up after patching?`} />
      <Text text={`🔔 What if server goes down automatically — steps to be taken?`} />
      <Line/>
      <Subheading text={`2. LDOMs (Logical Domains) & Virtualization`}/>
      <Text text={`🔔 Process to create a new guest domain`} />
      <Text text={`🔔 How to add disk to a guest domain?`} />
      <Text text={`🔔 How to verify disk on a guest domain?`} />
      <Text text={`🔔 How to add network switch to a guest domain?`} />
      <Text text={`🔔 LDOM bindings`} />
      <Text text={`🔔 VDS services`} />
      <Text text={`🔔 How to check services in control domain?`} />
      <Text text={`🔔 Control Domain vs Service Domain`} />
      <Text text={`🔔 Use case of Service Domain`} />
      <Text text={`🔔 How to assign disk to a Service Domain?`} />
      <Text text={`🔔 How to check physical function on a server?`} />
      <Text text={`🔔 Virtual Service vs Virtual Function`} />
      <Line/>
      <Subheading text={`3. Clustering (Sun Cluster & Veritas Cluster)`}/>
      <Text text={`🔔 Cluster Configuration (Sun Cluster)`} />
      <Text text={`🔔 Cluster Switch process and command`} />
      <Text text={`🔔 Sun Cluster configuration and switching cluster node`} />
      <Text text={`🔔 Adding resource in cluster`} />
      <Text text={`🔔 Cluster heartbeat`} />
      <Text text={`🔔 Cluster heartbeat configuration`} />
      <Text text={`🔔 Veritas Cluster`} />
      <Text text={`🔔 How to add disk to cluster node?`} />
      <Line/>
      <Subheading text={`4. Storage Management`}/>
      <Text text={`🔔 Creating filesystem on a ZFS pool (zpool)`} />
      <Text text={`🔔 How to create a zpool?`} />
      <Text text={`🔔 How to create a ZFS volume?`} />
      <Text text={`🔔 How to take a ZFS snapshot?`} />
      <Text text={`🔔 Increasing filesystem size`} />
      <Text text={`🔔 How to check and enable multipathing?`} />
      <Text text={`🔔 LVM (Logical Volume Manager)`} />
      <Line/>
      <Subheading text={`5. Networking`}/>
      <Text text={`🔔 NFS share for a particular client`} />
      <Text text={`🔔 IPMP vs Link Aggregation`} />
      <Text text={`🔔 IPMP Group – Link-based vs Probe-based`} />
      <Text text={`🔔 How to create an IP address`} />
      <Text text={`🔔 What if we are not able to SSH a server?`} />
      <Text text={`🔔 What if we are not able to ping a server?`} />
      <Line/>
      <Subheading text={`6. Troubleshooting & General Administration`}/>
      <Text text={`🔔 LDAP configuration`} />
      <Text text={`🔔 Printer configuration`} />
      <Text text={`🔔 Boot phases in Solaris`} />
      <Line/>
      
      <Text text={`This categorization makes the questions more accessible for readers preparing for Solaris interviews or brushing up on day-to-day administration tasks.`} />
    
    </div>
  )
}

export default InetviewPreparation;