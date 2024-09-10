import React from 'react'
import { Command, Heading, Subheading, Text, Image, Video } from '../utils/Comps';

const DateTime = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={'Date and Time Commands in Linux'} />

            <Video videoSrc={'i8Vwtaozp_A'} />

            {/* date command  */}
            <div >
                <Subheading text={'Check Current Date and Time:'} />
                <Command command={'date'} />
                <Text text={'It displays the current date, time and time zone.'} />
                <Image imageSrc={'mkx2bnfrfch1g70znddq'} imageAlt={'date'} />
            </div>

            {/* cal command */}
            <div >
                <Subheading text={`Print Current Month's Calendar:`} />
                <Command command={'cal'} />
                <Text text={'It shows the calendar for the current month.'} />
                <Image imageSrc={'fptxsyza2ict2h1w3b6t'} imageAlt={'cal'} />
            </div>

            {/* cal <year> */}
            <div >
                <Subheading text={'Print Calendar for a Specific Year:'} />
                <Command command={'cal <year>'} />
                <Text text={'Displays the calendar for the specified year.'} />
                <Image imageSrc={'sn44rvnoyhbmnneb8ifm'} imageAlt={'cal year'} />
            </div>

            {/* cal <month_name> */}
            <div >
                <Subheading text={'Print Calendar for a Specific Month:'} />
                <Command command={'cal <month_name>'} />
                <Text text={'Displays the calendar for the specified month. For example, `# cal January` will show the calendar for January.'} />
                <Image imageSrc={'pnqam5csekam2nb4akzv'} imageAlt={''} />
            </div>

            {/* cal <month> <year> */}
            <div >
                <Subheading text={'rint Calendar for a Specific Month and Year:'} />
                <Command command={'cal <month> <year>'} />
                <Text text={'Shows the calendar for a specific month of a specific year. For example, `cal 7 2024` will display the calendar for July 2024.'} />
                <Image imageSrc={'pngsrsatoob30rfjnf1a'} imageAlt={''} />
            </div>

            {/* date +%H:%M:%S */}
            <div >
                <Subheading text={'Print Time Only:'} />
                <Command command={'date +%H:%M:%S'} />
                <Text text={'Displays the current time in `HH:MM:SS` format.'} />
                <Image imageSrc={'poxyx0z8bffrndvsguqz'} imageAlt={''} />
            </div>

            {/* date +%m */}
            <div >
                <Subheading text={'Print Number of Current Month:'} />
                <Command command={'date +%m'} />
                <Text text={'Shows the current month as a number (01 through 12).'} />
                <Image imageSrc={'y5srawvlfrteo0njd8kq'} imageAlt={''} />
            </div>

            {/* date +%B */}
            <div >
                <Subheading text={'Print Name of Current Month:'} />
                <Command command={'date +%B'} />
                <Text text={'Displays the full name of the current month (e.g., July).'} />
                <Image imageSrc={'i8z73wcxczkvblli1xao'} imageAlt={''} />
            </div>

            {/* date +%A */}
            <div >
                <Subheading text={'Print Name of Current Day:'} />
                <Command command={'date +%A'} />
                <Text text={'Shows the full name of the current day (e.g., Monday).'} />
                <Image imageSrc={'n6wwkl5v0y0ygs3txdce'} imageAlt={''} />
            </div>

            {/* date +%r */}
            <div >
                <Subheading text={'Print Time Only (12-hour Format):'} />
                <Command command={'date +%r'} />
                <Text text={'Displays the current time in 12-hour format with AM/PM.'} />
                <Image imageSrc={'gdu6sarl6laktvjd1qjd'} imageAlt={''} />
            </div>

            {/* date +%z */}
            <div >
                <Subheading text={'Print Time Zone Offset:'} />
                <Command command={'date +%z'} />
                <Text text={'Shows the current time zone offset from UTC (e.g., +0200).'} />
                <Image imageSrc={'tffhoiyxmeyod2dbxnnh'} imageAlt={''} />
            </div>

            {/* date +%D */}
            <div >
                <Subheading text={'Print Current Date Only:'} />
                <Command command={'date +%D'} />
                <Text text={'Displays the current date in `MM/DD/YY` format.'} />
                <Image imageSrc={'u95doyr1pchfxugs5meq'} imageAlt={''} />
            </div>

            {/* date MMDDhhmmYY.SS */}
            <div >
                <Subheading text={'Set Date and Time:'} />
                <Command command={'date MMDDhhmmYY.SS'} />
                <Text text={'Sets the system date and time. Replace `MMDDhhmmYY.SS` with the desired month, day, hour, minute, year, and seconds.'} />
                <Image imageSrc={'oxahoqlqjopl91jdv69k'} imageAlt={''} />
            </div>

            {/* date -s "<updated_op_of_date_cmd>" */}
            <div >
                <Subheading text={'Update Date and Time with a Specific Format:'} />
                <Command command={'date -s "<updated_output_date_command>"'} />
                <Text text={'Updates the system date and time using a string format, such as `"2024-07-28 14:30:00"`. '} />
                <Image imageSrc={'nfxgsfw3jk57n7pvmqla'} imageAlt={''} />
            </div>

            {/* timedatectl */}
            <div >
                <Subheading text={'Check Date, Time, and Timezone in Detail:'} />
                <Command command={'timedatectl'} />
                <Text text={'Provides detailed information about the system’s date, time, and time zone settings.'} />
                <Image imageSrc={'oift5ldg4nviovtejpcq'} imageAlt={''} />
            </div>

            {/* timedatectl list-timezones */}
            <div >
                <Subheading text={'List All Available Time Zones:'} />
                <Command command={'timedatectl list-timezones'} />
                <Text text={'Displays a list of all time zones available on the system.'} />
                <Image imageSrc={'zzgegtjdnkmjngube6tf'} imageAlt={''} />
            </div>

            {/* timedatectl set-timezone <timezone_name> */}
            <div >
                <Subheading text={'Set a New Time Zone:'} />
                <Command command={'timedatectl set-timezone <timezone_name>'} />
                <Text text={'Changes the system’s time zone to the specified value (e.g., `America/New_York`).'} />
                <Image imageSrc={'zkrnq7s1vzt6zzkhxxzb'} imageAlt={''} />
            </div>
        </div>
    )
}

export default DateTime;