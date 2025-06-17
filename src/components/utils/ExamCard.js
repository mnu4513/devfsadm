import React from 'react';
import { Text, Line, Command, Supersubheading } from './Comps';

const ExamCard = ({ question }) => {
  return (
    <div className=" rounded shadow-sm bg-[#1e293b] p-">
      {/* Displaying the question ID/Number */}
      <Supersubheading text={`🖊️ Question: ${question.id}`} />

      {/* Displaying the question content */}
      {question?.question?.map((item, idx) => {
        if (item.type === 'text') {
          return <Text key={idx} text={item.value.trim()} />;
        } else if (item.type === 'command') {
          return <Command key={idx} content={item.value.trim()} />;
        }
        return null;
      })}

      {/* Displaying the options with consistent spacing */}
      <div className="mt-4 space-y-2">
        {question.options
          ?.filter(opt => opt?.value?.trim() !== '')
          ?.map((option, idx) => {
            return (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-red-400">⭕</span>
                {option.type === 'text' ? (
                  <Text text={option.value.trim()} />
                ) : option.type === 'command' ? (
                  <Command content={option.value.trim()} />
                ) : null}
              </div>
            );
          })}
      </div>

      {/* Displaying the correct answer */}
      <div className="mt-4 space-y-2">
        {question.answer
          ?.filter(opt => opt?.value?.trim() !== '')
          ?.map((option, idx) => {
            return (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-red-400">✅</span>
                {option.type === 'text' ? (
                  <Text text={option.value.trim()} />
                ) : option.type === 'command' ? (
                  <Command content={option.value.trim()} />
                ) : null}
              </div>
            );
          })}
      </div>

      <Line />
    </div>
  );
};

export default ExamCard;
