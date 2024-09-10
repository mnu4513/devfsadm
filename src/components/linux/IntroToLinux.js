import React from 'react';
import { Heading, Subheading, Text, Note } from '../utils/Comps';

const UnixLinuxComparison = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            
            <Heading text="Unix and Linux Overview" />
            
            <Subheading text="Unix" />
            <Text text="Unix is a powerful, multiuser, multitasking operating system originally developed in the 1960s and 1970s at AT&T's Bell Labs." />
            <Text text="• Unix is proprietary, but there are also free and open-source Unix-like systems." />
            <Text text="• Unix is copyrighted by its respective owners, but there are various implementations and derivatives." />
            <Text text="• Unix is hardware-independent, capable of running on various platforms." />
            <Text text="• Unix systems can run third-party applications, including web servers like Apache." />
            <Text text="• Unix is available for both server and user environments." />

            <Subheading text="Flavors of Unix" />
            <Text text="• IBM AIX – Developed by IBM." />
            <Text text="• Sun Solaris – Originally developed by Sun Microsystems, now owned by Oracle." />
            <Text text="• HP-UX – Developed by Hewlett-Packard." />
            <Text text="• macOS – Developed by Apple Inc., based on a Unix-based system (Darwin)." />

            <Subheading text="Linux" />
            <Text text="Linux is a free and open-source operating system kernel created by Linus Torvalds in 1991. Various distributions (distros) are based on the Linux kernel." />

            <Subheading text="Portable and Non-portable OS" />
            <Text text="• Portable OS: An OS that can run on various hardware platforms. Linux is considered portable as it can run on a wide range of hardware." />
            <Text text="• Non-portable OS: An OS designed for specific hardware, not easily ported. Some traditional Unix systems were non-portable, though modern versions are more portable." />

            <Subheading text="Popular Linux Distributions" />
            <Text text="• Red Hat Linux – A popular enterprise distribution, with Fedora as its community version." />
            <Text text="• SUSE Linux – Known for enterprise offerings like SUSE Linux Enterprise." />
            <Text text="• Ubuntu Linux – Widely used for its user-friendly interface." />
            <Text text="• CentOS Linux – Free version of Red Hat, now succeeded by CentOS Stream." />
            <Text text="• Debian Linux – Known for its stability." />
            <Text text="• Slackware Linux – Oldest Linux distribution, known for its simplicity." />
            <Text text="• Puppy Linux – Lightweight, designed for older hardware." />

            <Subheading text="Server and Client" />
            <Text text="A server provides resources to other computers (clients) over a network. A client requests and uses resources from servers." />
            
            <Subheading text="Server" />
            <Text text="• Role: Provides resources, services, or data to clients." />
            <Text text="• Function: Hosts websites, databases, and files, and manages network resources." />
            <Text text="• Hardware: Typically powerful, designed for handling multiple requests and managing large data." />

            <Subheading text="Client" />
            <Text text="• Role: Requests resources or services from servers." />
            <Text text="• Function: Uses servers to access web pages, send emails, or retrieve files." />
            <Text text="• Hardware: Can be any device capable of connecting to a network, such as desktops, laptops, and smartphones." />

            <Subheading text="Basic Differences Between Linux and Unix" />
            <Text text="1. **Origin and Development**:" />
            <Text text="   • Unix: Developed in the 1960s at AT&T’s Bell Labs, proprietary." />
            <Text text="   • Linux: Created in 1991 by Linus Torvalds, free and open-source." />
            
            <Text text="2. **Licensing**:" />
            <Text text="   • Unix: Mostly proprietary, requiring a paid license." />
            <Text text="   • Linux: Open-source under the GNU GPL, available for free." />
            
            <Text text="3. **Cost**:" />
            <Text text="   • Unix: Requires a paid license for both software and support." />
            <Text text="   • Linux: Generally free, but some distributions offer paid support." />
            
            <Text text="4. **Architecture**:" />
            <Text text="   • Unix: Traditionally tied to specific hardware, though more portable now." />
            <Text text="   • Linux: Highly portable, can run on many different hardware platforms." />
            
            <Text text="5. **User Base**:" />
            <Text text="   • Unix: Historically used in academic and large enterprise environments." />
            <Text text="   • Linux: Widely used in personal, enterprise, and server environments." />
            
            <Text text="6. **System Administration**:" />
            <Text text="   • Unix: Tools can vary between different Unix systems." />
            <Text text="   • Linux: Unified tools and conventions across distributions, with some variation." />

            <Text text="7. **File System Hierarchy**:" />
            <Text text="   • Unix: File system structures can vary between Unix systems." />
            <Text text="   • Linux: Follows the Filesystem Hierarchy Standard (FHS)." />

            <Text text="8. **Community and Support**:" />
            <Text text="   • Unix: Support through commercial vendors." />
            <Text text="   • Linux: Large community support, with commercial options available." />

            <Text text="9. **Usage and Popularity**:" />
            <Text text="   • Unix: Usage has declined in favor of Linux." />
            <Text text="   • Linux: Continues to grow in web hosting, cloud computing, and desktop use." />
            
        </div>
    );
};

export default UnixLinuxComparison;