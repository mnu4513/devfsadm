import React from 'react'

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-24 pb-8 pt-8 lg:max-w-7xl dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl text-red-600 font-semibold mb-2">About Us</h1>
      <p>
        Welcome to DevFsAdm, your premier destination for free online courses in Solaris system administration, Linux system administration, shell scripting, Git, HTML, CSS, JavaScript, Node.js, React, and more.
      </p>

      <h2 className='text-2xl mt-6 mb-2 font-bold text-red-600'>
        Our Mission and Values:
      </h2>
      <p>
        At DevFsAdm, our mission is to democratize education and empower learners worldwide by providing high-quality, accessible, and free online courses. We believe that education should be inclusive, affordable, and available to anyone with a desire to learn. Our core values drive everything we do:
      </p>

      <ul className='list-disc'>
        <li className='ml-4 mt-4'>
          <span className='font-semibold text-blue-500 mr-2'>
            Accessibility:
          </span>
          We are committed to breaking down barriers to education and ensuring that our courses are accessible to learners of all backgrounds and abilities.
        </li>

        <li className='ml-4 mt-4'>
          <span className='font-semibold text-blue-500 mr-2'>
            Quality:
          </span>
          We maintain the highest standards of quality in course content, instructional design, and learner support to deliver an exceptional learning experience.
        </li>

        <li className='ml-4 mt-4'>
          <span className='font-semibold text-blue-500 mr-2'>
            Innovation:
          </span>
          We embrace innovation and continuously explore new technologies and teaching methodologies to enhance the effectiveness of our courses.
        </li>

        <li className='ml-4 mt-4'>
          <span className='font-semibold text-blue-500 mr-2'>
            Community:
          </span>
          We foster a supportive and inclusive learning community where learners can collaborate, share knowledge, and grow together.
        </li>

      </ul>



      <h2 className='text-2xl mt-6 mb-2 font-bold text-red-600'>
        Our Commitment to Learners
      </h2>
      <p>
        We are dedicated to the success and satisfaction of our learners. Our commitment includes:
      </p>

      <ul className='list-disc'>
        <li className='ml-4 mt-4'>
          <span className='font-semibold text-blue-500 mr-2'>
            Exceptional Content:
          </span>
          We continually update and improve our course content to reflect the latest industry trends, best practices, and learner feedback.
        </li>

        <li className='ml-4 mt-4'>
          <span className='font-semibold text-blue-500 mr-2'>
            Responsive Support:
          </span>
          Our dedicated support team is available to assist learners with any questions, technical issues, or concerns they may have.
        </li>

        <li className='ml-4 mt-4'>
          <span className='font-semibold text-blue-500 mr-2'>
            Lifelong Learning:
          </span>
          We believe that learning is a lifelong journey, and we are committed to providing learners with opportunities for continuous growth and development.
        </li>

      </ul>


      <h2 className='text-2xl mt-6 mb-2 font-bold text-red-600'>
        Testimonials
      </h2>
      <p>
        "Taking courses on DevFsAdm has been a game-changer for my career. The instructors are knowledgeable, the content is engaging, and the skills I've learned have helped me advance in my field." - Jay
      </p>

      <h2 className='text-2xl mt-6 mb-2 font-bold text-red-600'>
        Get in Touch
      </h2>
      <p>
        Have questions or feedback? We'd love to hear from you! Reach out to us at support@devfsadm.com or connect with us on Instagram or LinkedIn.
      </p>


      <h2 className='text-2xl mt-6 mb-2 font-bold text-red-600'>
      Join Our Community
      </h2>
      <p>
      Ready to start learning? Explore our free courses and join our vibrant learning community today!
      </p>

    </div>
  );
};

export default AboutUs;