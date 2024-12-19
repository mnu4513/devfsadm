import React from 'react'
import { Command, Heading, Supersubheading, TerminalOutput, Image, Text, Video } from '../utils/Comps';

const DateTime = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={'Date and Time Commands in Linux'} />

            <Video videoSrc={'i8Vwtaozp_A'} />

            {/* date command  */}
            <div >
                <Supersubheading text={'Check Current Date and Time:'} />
                <TerminalOutput content={`[root@localhost ~]# date
Thu Dec 19 04:51:11 PM IST 2024
[root@localhost ~]# `} />
             
                <Text text={'It displays the current date, time and time zone.'} />
                
            </div>

            {/* cal command */}
            <div >
                <Supersubheading text={`Print Current Month's Calendar:`} />
                <TerminalOutput content={`[root@localhost ~]# cal
    December 2024
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31

[root@localhost ~]#
`} />
                
                <Text text={'It shows the calendar for the current month.'} />
                
            </div>

            {/* cal <year> */}
            <div >
                <Supersubheading text={'Print Calendar for a Specific Year:'} />
                <TerminalOutput content={`[root@localhost ~]# cal 2021
                               2021

       January               February                 March
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
                1  2       1  2  3  4  5  6       1  2  3  4  5  6
 3  4  5  6  7  8  9    7  8  9 10 11 12 13    7  8  9 10 11 12 13
10 11 12 13 14 15 16   14 15 16 17 18 19 20   14 15 16 17 18 19 20
17 18 19 20 21 22 23   21 22 23 24 25 26 27   21 22 23 24 25 26 27
24 25 26 27 28 29 30   28                     28 29 30 31
31
        April                   May                   June
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
             1  2  3                      1          1  2  3  4  5
 4  5  6  7  8  9 10    2  3  4  5  6  7  8    6  7  8  9 10 11 12
11 12 13 14 15 16 17    9 10 11 12 13 14 15   13 14 15 16 17 18 19
18 19 20 21 22 23 24   16 17 18 19 20 21 22   20 21 22 23 24 25 26
25 26 27 28 29 30      23 24 25 26 27 28 29   27 28 29 30
                       30 31
        July                  August                September
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
             1  2  3    1  2  3  4  5  6  7             1  2  3  4
 4  5  6  7  8  9 10    8  9 10 11 12 13 14    5  6  7  8  9 10 11
11 12 13 14 15 16 17   15 16 17 18 19 20 21   12 13 14 15 16 17 18
18 19 20 21 22 23 24   22 23 24 25 26 27 28   19 20 21 22 23 24 25
25 26 27 28 29 30 31   29 30 31               26 27 28 29 30

       October               November               December
Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa   Su Mo Tu We Th Fr Sa
                1  2       1  2  3  4  5  6             1  2  3  4
 3  4  5  6  7  8  9    7  8  9 10 11 12 13    5  6  7  8  9 10 11
10 11 12 13 14 15 16   14 15 16 17 18 19 20   12 13 14 15 16 17 18
17 18 19 20 21 22 23   21 22 23 24 25 26 27   19 20 21 22 23 24 25
24 25 26 27 28 29 30   28 29 30               26 27 28 29 30 31
31
[root@localhost ~]#
`} />
                
                <Text text={'Displays the calendar for the specified year.'} />
             
            </div>

            {/* cal <month_name> */}
            <div >
                <Supersubheading text={'Print Calendar for a Specific Month:'} />
                <TerminalOutput content={`[root@localhost ~]# cal March
     March 2024
Su Mo Tu We Th Fr Sa
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31
[root@localhost ~]#
`} />
           
                <Text text={'Displays the calendar for the specified month. For example, `# cal January` will show the calendar for January.'} />
              
            </div>

            {/* cal <month> <year> */}
            <div >
                <Supersubheading text={'Print Calendar for a Specific Month and Year:'} />
                <TerminalOutput content={`[root@localhost ~]# cal March 2026
     March 2026
Su Mo Tu We Th Fr Sa
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31

[root@localhost ~]#
`} />
        
                <Text text={'Shows the calendar for a specific month of a specific year. For example, `cal 7 2024` will display the calendar for July 2024.'} />
      
            </div>

            {/* date +%H:%M:%S */}
            <div >
                <Supersubheading text={'Print Time Only:'} />
                <TerminalOutput content={`[root@localhost ~]# date +%H:%M:%S
16:58:30
[root@localhost ~]#
`} />
       
                <Text text={'Displays the current time in `HH:MM:SS` format.'} />
       
            </div>

            {/* date +%m */}
            <div >
                <Supersubheading text={'Print Number of Current Month:'} />
                <TerminalOutput content={`[root@localhost ~]# date +%m
12
[root@localhost ~]#
`} />
             
                <Text text={'Shows the current month as a number (01 through 12).'} />
              
            </div>

            {/* date +%B */}
            <div >
                <Supersubheading text={'Print Name of Current Month:'} />
                <TerminalOutput content={`[root@localhost ~]# date +%B
December
[root@localhost ~]#
`} />
           
                <Text text={'Displays the full name of the current month (e.g., July).'} />
           
            </div>

            {/* date +%A */}
            <div >
                <Supersubheading text={'Print Name of Current Day:'} />
                <TerminalOutput content={`[root@localhost ~]# date +%A
Thursday
[root@localhost ~]#
`} />
           
                <Text text={'Shows the full name of the current day (e.g., Monday).'} />
     
            </div>

            {/* date +%r */}
            <div >
                <Supersubheading text={'Print Time Only (12-hour Format):'} />
                <TerminalOutput content={`[root@localhost ~]# date +%r
05:01:57 PM
[root@localhost ~]#
`} />
            
                <Text text={'Displays the current time in 12-hour format with AM/PM.'} />
           
            </div>

            {/* date +%z */}
            <div >
                <Supersubheading text={'Print Time Zone Offset:'} />
                <TerminalOutput content={`[root@localhost ~]# date +%z
+0530
[root@localhost ~]#
`} />

                <Text text={'Shows the current time zone offset from UTC (e.g., +0200).'} />
    
            </div>

            {/* date +%D */}
            <div >
                <Supersubheading text={'Print Current Date Only:'} />
                <TerminalOutput content={`[root@localhost ~]# date +%D
12/19/24
[root@localhost ~]#
`} />
       
                <Text text={'Displays the current date in `MM/DD/YY` format.'} />
            
            </div>

            {/* date MMDDhhmmYY.SS */}
            <div >
                <Supersubheading text={'Set Date and Time:'} />
                <TerminalOutput content={`[root@localhost ~]# date 1219050524.00
Thu Dec 19 05:05:00 AM IST 2024
[root@localhost ~]# date
Thu Dec 19 05:05:01 AM IST 2024
[root@localhost ~]#`} />
       
                <Text text={'Sets the system date and time. Replace `MMDDhhmmYY.SS` with the desired month, day, hour, minute, year, and seconds.'} />
         
            </div>

            {/* date -s "<updated_op_of_date_cmd>" */}
            <div >
                <Supersubheading text={'Update Date and Time with a Specific Format:'} />
                <TerminalOutput content={`[root@localhost ~]# date -s "2024-12-19 17:20:00"
Thu Dec 19 05:20:00 PM IST 2024
[root@localhost ~]#
`} />
             
                <Text text={'Updates the system date and time using a string format, such as `"2024-07-28 14:30:00"`. '} />
           
            </div>

            {/* timedatectl */}
            <div >
                <Supersubheading text={'Check Date, Time, and Timezone in Detail:'} />
                <TerminalOutput content={`[root@localhost ~]# timedatectl
               Local time: Thu 2024-12-19 17:20:59 IST
           Universal time: Thu 2024-12-19 11:50:59 UTC
                 RTC time: Thu 2024-12-19 11:51:04
                Time zone: Asia/Kolkata (IST, +0530)
System clock synchronized: no
              NTP service: active
          RTC in local TZ: no
[root@localhost ~]#
`} />
   
                <Text text={'Provides detailed information about the system’s date, time, and time zone settings.'} />

            </div>

            {/* timedatectl list-timezones */}
            <div >
                <Supersubheading text={'List All Available Time Zones:'} />
                <TerminalOutput content={`[root@localhost ~]# timedatectl list-timezones
Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
Africa/Asmera
Africa/Bamako
Africa/Bangui
Africa/Banjul
Africa/Bissau
Africa/Blantyre
Africa/Brazzaville
Africa/Bujumbura
Africa/Cairo
Africa/Casablanca
Africa/Ceuta
Africa/Conakry
Africa/Dakar
Africa/Dar_es_Salaam
Africa/Djibouti
Africa/Douala
Africa/El_Aaiun
Africa/Freetown
lines 1-23
`} />
      
                <Text text={'Displays a list of all time zones available on the system.'} />
         
            </div>

            {/* timedatectl set-timezone <timezone_name> */}
            <div >
                <Supersubheading text={'Set a New Time Zone:'} />
                <TerminalOutput content={`[root@localhost ~]# timedatectl set-timezone Asia/Kolkata
[root@localhost ~]# timedatectl
               Local time: Thu 2024-12-19 17:35:45 IST
           Universal time: Thu 2024-12-19 12:05:45 UTC
                 RTC time: Thu 2024-12-19 12:05:45
                Time zone: Asia/Kolkata (IST, +0530)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
[root@localhost ~]#
`} />
              
                <Text text={'Changes the system’s time zone to the specified value (e.g., `America/New_York`).'} />
     
            </div>
        </div>
    )
}

export default DateTime;