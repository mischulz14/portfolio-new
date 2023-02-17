import React from 'react';

export interface PageProps {
  frontPageChildren: React.ReactNode;
  backPageChildren: React.ReactNode;
  pageZIndex?: number;
}

export default function Page({
  frontPageChildren,
  backPageChildren,
  pageZIndex,
}: PageProps) {
  return (
    <div
      className={`page border-2 border-red-500 absolute h-full w-full`}
      style={{ zIndex: pageZIndex }}
    >
      <div className='book__page__front absolute w-full h-full top-0 left-0 z-[1] bg-white'>
        {frontPageChildren}
      </div>
      <div className='book__page__back bg-white absolute w-full h-full top-0 left-0 z-0'>
        {backPageChildren}
      </div>
    </div>
  );
}
