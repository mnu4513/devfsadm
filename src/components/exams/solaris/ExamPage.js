import React from 'react';
import questions from '../solaris/Questions'; // Ensure your list is imported from the correct path
import { Heading, Line } from '../../utils/Comps';
import ExamCard from '../../utils/ExamCard';

export default function ExamPage() {
  return (
    <div className="mx-4 my-4 lg:max-w-4xl lg:mx-auto">
      <Heading text="Solaris Exam" />
      <Line />
      {
        questions?.map((item, index) => (
          <ExamCard key={index} question={item} />
        ))
      }
    </div>
  );
}
