import React from 'react';

interface TextBoxProps {
  title: string;
  paragraphs: string[];
}

const TextBox: React.FC<TextBoxProps> = ({ title, paragraphs }) => {
  return (
    <div className="px-4 py-8 font-serif">
      <div className="flex justify-center">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          {paragraphs.map((para, index) => (
            <p key={index} className="mb-8">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextBox;
