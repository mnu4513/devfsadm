import React from 'react'

const Features = () => {

    const featuresContent = [
        {
            id: 1,
            title: "Comprehensive Solaris Administration Tutorials",
            description:
                "Dive into the world of Solaris administration with our in-depth tutorials. Learn essential skills and best practices for managing Solaris systems efficiently.",
        },
        {
            id: 2,
            title: "Expert Guidance in Linux Administration",
            description:
                "Master the intricacies of Linux administration with expert-led tutorials. Understand the fundamentals and advanced concepts of Linux system management.",
        },
        {
            id: 3,
            title: "Hands-On Shell Scripting Workshops",
            description:
                "Develop your scripting skills with hands-on workshops. Explore the power of shell scripting to automate tasks and streamline your workflow.",
        },
        {
            id: 4,
            title: "Version Control with Git Demystified",
            description:
                "Learn the ins and outs of Git, the industry-standard version control system. Understand branching, merging, and collaboration with ease.",
        },
        {
            id: 5,
            title: "HTML and CSS Mastery",
            description:
                "Build a solid foundation in web development. Explore HTML for structuring content and CSS for styling, making your websites visually appealing and responsive.",
        },
        {
            id: 6,
            title: "Dynamic Web Development with JavaScript",
            description:
                "Unlock the potential of JavaScript to create dynamic and interactive web pages. From basics to advanced concepts, we've got you covered.",
        },
        {
            id: 7,
            title: "Node.js Programming Simplified",
            description:
                "Delve into server-side JavaScript with Node.js. Learn to build scalable and high-performance applications using this versatile runtime.",
        },
        {
            id: 8,
            title: "Rich Content with Video Lectures",
            description:
                "Enjoy an immersive learning experience with our video lectures. Visualize concepts, follow practical demonstrations, and enhance your understanding.",
        },
        {
            id: 9,
            title: "Self-Paced Learning",
            description:
                "Our tutorials are designed for self-paced learning. Progress through the content at your own speed, ensuring a comfortable and effective learning journey.",
        },
        {
            id: 10,
            title: "Community Support and Collaboration",
            description:
                "Join our community of learners. Engage in discussions, seek help, and collaborate with peers to enhance your learning experience.",
        },
        {
            id: 11,
            title: "Continuously Updated Content",
            description:
                "Stay current with the latest industry trends. We regularly update our tutorials to provide you with relevant and up-to-date content.",
        },
        {
            id: 12,
            title: "Absolutely Free of Charge",
            description:
                "All our tutorials, including video lectures, are completely free. We believe in making quality education accessible to everyone.",
        },
    ];

    return (
        <div className="container mx-auto mt-8 px-4 lg:max-w-7xl mb-5">
            <h1 className="text-3xl font-semibold mb-4">Features of Our Tutorials</h1>

            {
                featuresContent.map((e) => {
                    return (
                        <div key={e.id} className='mt-8 px-2'>
                            <h2 className="text-xl font-semibold mb-2 mt-4"> {e.title} </h2>
                            <p className='mb-2'> {e.description} </p>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Features;