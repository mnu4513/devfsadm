import React from 'react';
import { Heading, Subheading, Text, Supersubheading } from '../utils/Comps';

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
      

      <Subheading text="DNS Service Profile" />
      <Text text={`Package: bind`} />
      <Text text={`Daemon: named`} />
      <Text text={`Port Number: 53`} />
      <Text text={`Configuration File: /etc/named.conf`} />
      <Text text={`Zone Files Location: /var/named`} />
      <Text text={`Log File: /var/log/messages`} />

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

      <Subheading text="Types of DNS Servers" />
      <Supersubheading text={`Primary DNS Server:`} />
      <Text text={`Stores the original domain configuration files and responds to DNS queries.`} />
      <Supersubheading text={`Secondary DNS Server:`} />
      <Text text={`Acts as a backup for the primary server and synchronizes with it to maintain consistency.`} />
      <Supersubheading text={`Caching DNS Server:`} />
      <Text text={`Temporarily stores DNS query results for faster resolution, reducing load on primary and secondary servers.`} />

      <Subheading text="Zone Files and Types" />
      <Supersubheading text={`Zone Files:`} />
      <Text text={`These are text files that store DNS records for a specific portion of the DNS namespace (zones).`} />
      <Supersubheading text={`Forward Zone File:`} />
      <Text text={`Used for forward lookups (resolves names to IP addresses).`} />
      <Supersubheading text={`Reverse Zone File:`} />
      <Text text={`Used for reverse lookups (resolves IP addresses to names).`} />

      <Subheading text="DNS Records and Their Types" />
      <Supersubheading text={`A (Address) Record:`}/>
      <Text text={`Maps a hostname to an IPv4 address.`}/>
      <Text text={`Example: www.example.com A 192.168.1.1`}/>
      <Supersubheading text={`PTR (Pointer) Record:`}/>
      <Text text={`Maps an IP address to a hostname (used in reverse lookups).`}/>
      <Text text={`Example: 1.1.168.192.in-addr.arpa PTR www.example.com`}/>
      <Supersubheading text={`CNAME (Canonical Name) Record:`}/>
      <Text text={`Maps an alias to a canonical (true) name.`}/>
      <Text text={`Example: blog.example.com CNAME www.example.com`}/>
      <Supersubheading text={`NS (Name Server) Record:`}/>
      <Text text={`Specifies the authoritative name servers for a domain.`}/>
      <Text text={`Example: example.com NS ns1.example.com`}/>
      <Supersubheading text={`MX (Mail Exchange) Record:`}/>
      <Text text={`Maps a domain name to mail servers for email delivery.`}/>
      <Text text={`Example: example.com MX 10 mail.example.com`}/>
      <Supersubheading text={`SOA (Start of Authority) Record:`}/>
      <Text text={`Indicates the primary name server and authoritative information for the zone.`}/>
      <Text text={`Example: example.com SOA ns1.example.com admin.example.com 2023122101 3600 600 604800 86400`} />
    </div>
  );
};

export default DNS;
