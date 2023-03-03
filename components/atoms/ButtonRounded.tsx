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
    <button className={`activate-ripple relative ${additionalStyles}`}>
      <div className='top'>{children}</div>
      <div className='ripple' id='i1'></div>
      <div className='ripple' id='i2'></div>
      <div className='ripple' id='i3'></div>
    </button>
  );
}
