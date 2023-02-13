import React from 'react';

interface ButtonRoundedProps {
  children?: React.ReactNode;
  additionalStyles?: string;
}

export default function ButtonRounded({
  children,
  additionalStyles,
}: ButtonRoundedProps) {
  return (
    <button
      className={`${additionalStyles} w-20 h-20 rounded-full bg-white border-2 `}
    >
      {children}
    </button>
  );
}
