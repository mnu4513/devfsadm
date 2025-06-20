import React from 'react';
import questions from './QuestionsOracleLinux'; // Ensure your list is imported from the correct path
import { Heading, Line, Supersubheading } from '../../utils/Comps';
import ExamCard from '../../utils/ExamCard';
import DismissableAlert from '../../utils/DismissableAlert';

export default function ExamPage() {
  return (
    <div className="mx-4 my-4 lg:max-w-4xl lg:mx-auto">
      <DismissableAlert type="danger">
        <strong className="font-bold">Disclaimer:</strong>
        <span className="block ml-1">The content is for educational and informational purposes only. We do not guarantee 100% correctness or exam clearance. We are not affiliated with Oracle.</span>
      </DismissableAlert>
      <Heading text="Oracle Linux 8 Exam Dumps" />
      <Supersubheading text="( Oracle Linux 8 Advanced System Administration 1Z0-106 Exam Dumps )" />
      <Supersubheading text="( Oracle Linux 8 1Z0-106 Exam Questions )" />
      <Line />
      {
        questions?.map((item, index) => (
          <ExamCard key={index} question={item} />
        ))
      }
    </div>
  );
}
