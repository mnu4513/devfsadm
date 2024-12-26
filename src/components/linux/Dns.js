import React from 'react';
import { Heading, Subheading, Text, Supersubheading, Line, TerminalOutput } from '../utils/Comps';

const DNS = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text="Domain Name System" />

      <Text text={`DNS is a hierarchical, distributed naming system used to translate domain names (like www.example.com) into IP addresses (like 192.168.1.1) and vice versa. It allows users to refer to machines on a network by easily memorable names instead of numeric IP addresses.`} />

      <Supersubheading text="Use Cases of DNS" />
      <Text text={`Resolving domain names to IP addresses (forward lookup).`} />
      <Text text={`Resolving IP addresses to domain names (reverse lookup).`} />
      <Text text={`Simplifies network management by allowing human-readable names for devices.`} />
      <Text text={`Supports website hosting, email delivery, and other internet-based services.`} />
      <Text text={`Facilitates load balancing and redundancy in network services.`} />

      <Subheading text="BIND" />
      <Text text={`BIND stands for Berkeley Internet Name Daemon. It is the most commonly used DNS server software in Linux environments.`} />


<Line />
{/* ========================================================== */}
      <Subheading text="Hierarchy of DNS" />
      <Text text={`DNS is organized as a hierarchy, starting with the root domain, represented by a period (.).`} />
      <Supersubheading text={`Root Domain:`} />
      <Text text={`Represented by a . (dot), the root domain is the top-most level of the DNS hierarchy.`} />
      <Supersubheading text={`Top-Level Domains (TLDs):`} />
      <Text text={`Examples: .com, .org, .edu, .net, .gov, and country-specific TLDs like .in, .us, .uk.`} />
      <Supersubheading text={`Second-Level Domains:`} />
      <Text text={`Examples: google.com, redhat.com.`} />
      <Supersubheading text={`Subdomains:`} />

      <Text text={`Examples: mail.google.com, docs.oracle.com.`} />




      <Line />
      {/* =============================================== */}

      <Subheading text="Domain and Its Types" />
      <Supersubheading text={`Domain:`} />
      <Text text={`A tree or subtree within the DNS namespace.`} />
      <Supersubheading text={`Root Domain:`} />
      <Text text={`The root of the DNS tree, unnamed, and represented by a period (.).`} />
      <Supersubheading text={`Top-Level Domain (TLD):`} />
      <Text text={`Generic TLDs (gTLDs): .com, .org, .edu, .net.`} />
      <Text text={`Country Code TLDs (ccTLDs): .in, .us, .uk.`} />
      <Supersubheading text={`Second-Level Domain: `} />
      <Text text={`Unique names assigned to individuals or organizations under a TLD.`} />
      <Text text={`Example: example.com.`} />
      <Supersubheading text={`Subdomain:`} />
      <Text text={`Further divisions of a second-level domain.`} />
      <Text text={`Example: blog.example.com.`} />


      <Line />
      {/* ============================================= */}

      <Subheading text="Types of DNS Servers" />
      <Supersubheading text={`Primary DNS Server:`} />
      <Text text={`Stores the original domain configuration files and responds to DNS queries.`} />
      <Supersubheading text={`Secondary DNS Server:`} />
      <Text text={`Acts as a backup for the primary server and synchronizes with it to maintain consistency.`} />
      <Supersubheading text={`Caching DNS Server:`} />
      <Text text={`Temporarily stores DNS query results for faster resolution, reducing load on primary and secondary servers.`} />


      <Line />
      {/* ========================================= */}
      <Subheading text="Zone Files and Types" />
      <Supersubheading text={`Zone Files:`} />
      <Text text={`These are text files that store DNS records for a specific portion of the DNS namespace (zones).`} />
      <Text text={`DNS Zones provide us a way to maintain these records on one or more servers.`} />
      <Supersubheading text={`Forward Zone File:`} />
      <Text text={`Used for forward lookups (resolves names to IP addresses).`} />
      <Supersubheading text={`Reverse Zone File:`} />
      <Text text={`Used for reverse lookups (resolves IP addresses to names).`} />


      <Line />
      {/* ============================================ */}
      <Subheading text="DNS Records and Their Types" />
      <Supersubheading text={`A (Address) Record:`} />
      <Text text={`Maps a hostname to an IPv4 address.`} />
      <Text text={`Example: www.example.com A 192.168.1.1`} />
      <Supersubheading text={`PTR (Pointer) Record:`} />
      <Text text={`Maps an IP address to a hostname (used in reverse lookups).`} />
      <Text text={`Example: 1.1.168.192.in-addr.arpa PTR www.example.com`} />
      <Supersubheading text={`CNAME (Canonical Name) Record:`} />
      <Text text={`Maps an alias to a canonical (true) name.`} />
      <Text text={`Example: blog.example.com CNAME www.example.com`} />
      <Supersubheading text={`NS (Name Server) Record:`} />
      <Text text={`Specifies the authoritative name servers for a domain.`} />
      <Text text={`Example: example.com NS ns1.example.com`} />
      <Supersubheading text={`MX (Mail Exchange) Record:`} />
      <Text text={`Maps a domain name to mail servers for email delivery.`} />
      <Text text={`Example: example.com MX 10 mail.example.com`} />
      <Supersubheading text={`SOA (Start of Authority) Record:`} />
      <Text text={`Indicates the primary name server and authoritative information for the zone.`} />
      <Text text={`Example: example.com SOA ns1.example.com admin.example.com 2023122101 3600 600 604800 86400`} />

      <Line />

      {/* ======================================================== */}
      <Subheading text="DNS Service Profile" />
      <ul className="list-disc pl-5 space-y-2 pb-3">
        <li> Package: bind </li>
        <li> Daemon: named </li>
        <li> Port Number: 53 </li>
        <li> Configuration File: /etc/named.conf </li>
        <li> Zone Files Location: /var/named </li>
        <li> Log File: /var/log/messages </li>
      </ul>

      <Text text={`Every file related to DNS, blongs to 'named' group.`}/>

<Line />
{/* =============================================================== */}
<Subheading text={`Master server configuration`}/>
<TerminalOutput content={`[root@localhost ~]# vim /etc/named.conf
//
// named.conf
//
// Provided by Red Hat bind package to configure the ISC BIND named(8) DNS
// server as a caching only nameserver (as a localhost DNS resolver only).
//
// See /usr/share/doc/bind*/sample/ for example named configuration files.
//

options {
        listen-on port 53 { 192.168.131.1; };               <======= Insert Master DNS IP
        listen-on-v6 port 53 { ::1; };
        directory       "/var/named";
        dump-file       "/var/named/data/cache_dump.db";
        statistics-file "/var/named/data/named_stats.txt";
        memstatistics-file "/var/named/data/named_mem_stats.txt";
        secroots-file   "/var/named/data/named.secroots";
        recursing-file  "/var/named/data/named.recursing";
        allow-query     { any; };                           <======= Allow query to everyone (mateched with zonefile)

        /*
         - If you are building an AUTHORITATIVE DNS server, do NOT enable recursion.
         - If you are building a RECURSIVE (caching) DNS server, you need to enable
           recursion.
         - If your recursive DNS server has a public IP address, you MUST enable access
           control to limit queries to your legitimate users. Failing to do so will
           cause your server to become part of large scale DNS amplification
           attacks. Implementing BCP38 within your network would greatly
           reduce such attack surface
        */
        recursion no;                                   <======== If we use public & private key then 'yes'

        dnssec-validation no;                           <======== If we use public & private key then 'yes'

        managed-keys-directory "/var/named/dynamic";
        geoip-directory "/usr/share/GeoIP";

        pid-file "/run/named/named.pid";
        session-keyfile "/run/named/session.key";

        /* https://fedoraproject.org/wiki/Changes/CryptoPolicy */
        include "/etc/crypto-policies/back-ends/bind.config";
};

logging {
        channel default_debug {
                file "data/named.run";
                severity dynamic;
        };
};

#zone "." IN {
#        type hint;
#        file "named.ca";
#};
#
#include "/etc/named.rfc1912.zones";
#include "/etc/named.root.key";             <====== These are zone files syntax in C language, If we want to make entry in main file

# zone file systax                   <======= we can copy this from "/etc/named.rfc1912.zones"

zone "example.com" IN {               <======= Update with your domain name
        type master;                  <======= Server type
        file "forward.zone";          <======= To create forward zone record file (any name)
        allow-update { none; };
};
zone "1.0.0.127.in-addr.arpa" IN {    <======= Update with DNS IP in reverse mode
        type master;                  <======= Server type
        file "reverse.zone";        <======= To create reverse zone record file (any name)
        allow-update { none; };
};
[root@localhost ~]#
`}/>

<Supersubheading text={`To copy zone file systax:`}/>
<TerminalOutput content={`[root@localhost ~]# sed -n '23,27p;35,39p' /etc/named.rfc1912.zones
zone "localhost" IN {
        type master;
        file "named.localhost";
        allow-update { none; };
};
zone "1.0.0.127.in-addr.arpa" IN {
        type master;
        file "named.loopback";
        allow-update { none; };
};
[root@localhost ~]#
`}/>
<Text text={`Line numbers may diffr. Copy this data and append in /etc/named.conf file.`}/>

<Text text={`Now we have created mapping of forward and reverse zone files respective to original files.`}/>

<Supersubheading text={`Copy Original Files Content:`}/>
<TerminalOutput content={`[root@localhost ~]# cp /var/named/named.localhost /var/named/forward.zone
[root@localhost ~]# cp /var/named/named.loopback /var/named/reverse.zone
[root@localhost ~]#
`}/>

<Supersubheading text={`Change Group Owner:`}/>
<TerminalOutput content={`[root@localhost ~]# chgrp named /var/named/forward.zone /var/named/reverse.zone
[root@localhost ~]# ls -l /var/named/forward.zone /var/named/reverse.zone
-rw-r-----. 1 root named 152 Dec 26 13:36 /var/named/forward.zone
-rw-r-----. 1 root named 168 Dec 26 13:36 /var/named/reverse.zone
[root@localhost ~]#
`}/>

<Supersubheading text={`Configure Forward Zone File:`}/>
<TerminalOutput content={`[root@localhost ~]# vim /var/named/forward.zone
$TTL 1D
@       IN SOA  node1.example.com. root.node1.example.com. (       <==== Machine name & admin + machne name
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
             NS      node1.example.com       <==== Nameserver 
node1        A       192.168.131.1           <==== Nameserver IP (IPV4)
node2        A       192.168.131.2           <==== Client Node IP (IPV4)       
node3        A       192.168.131.3           <==== Client Node IP (IPV4)
dnsmaster    CNAME   node1                   <==== Conical Name or Alias Name
`}/>
<Supersubheading text={`Configure Reverse Zone File:`}/>
<TerminalOutput content={`[root@localhost ~]# vim /var/named/forward.zone
$TTL 1D
@       IN SOA  node1.example.com. root.node1.example.com. (       <==== Machine name & admin + machne name
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
             NS      node1.example.com.       <==== Nameserver 
1            PTR     node1.example.com.       <==== Nameserver IP last block & fqdn
2            PTR     node2.example.com.       <==== Client IP last block & fqdn
3            PTR     node2.example.com.       <==== Client IP last block & fqdn
4            PTR     node2.example.com.       <==== Client IP last block & fqdn
`}/>
<Text text={`After these steps our DNS server is ready.`}/>

<Text text={`Now we have to make entry in firewall to enable request from client`}/>

<TerminalOutput content={`[root@localhost ~]# firewall-cmd --permanent --add-service=dns
success
[root@localhost ~]# firewall-cmd --reload
success
[root@localhost ~]#
`}/>

<Text text={`Now go to /etc/resolv.conf file and make entry of dns server (own entry):`}/>
<TerminalOutput content={`[root@localhost ~]# vim /etc/resolv.conf
# Generated by NetworkManager
search  example.com
nameserver 192.168.131.1
`}/>
<TerminalOutput content={`[root@localhost ~]# systemctl restart named
[root@localhost ~]# systemctl enable named
Created symlink /etc/systemd/system/multi-user.target.wants/named.service → /usr/lib/                    systemd/system/named.service.
[root@localhost ~]# netstat -tunlp | grep named
tcp        0      0 127.0.0.1:53            0.0.0.0:*               LISTEN      3419/named
tcp        0      0 127.0.0.1:953           0.0.0.0:*               LISTEN      3419/named
tcp6       0      0 ::1:53                  :::*                    LISTEN      3419/named
tcp6       0      0 ::1:953                 :::*                    LISTEN      3419/named
udp        0      0 127.0.0.1:53            0.0.0.0:*                           3419/named
udp        0      0 127.0.0.1:53            0.0.0.0:*                           3419/named
udp6       0      0 ::1:53                  :::*                                3419/named
udp6       0      0 ::1:53                  :::*                                3419/named
[root@localhost ~]#
`}/>

    </div>
  );
};

export default DNS;