import React, { useState } from 'react';

export interface PageProps {
  frontPageChildren?: React.ReactNode;
  backPageChildren?: React.ReactNode;
  lastPageChildren?: React.ReactNode;
  pageZIndex: number;
  pageNumber: number;
  currentPage: number;
  maximumPageFlips: number;
}

export default function Page({
  frontPageChildren,
  backPageChildren,
  pageZIndex,
  pageNumber,
  currentPage,
  lastPageChildren,
  maximumPageFlips,
}: PageProps) {
  const isFlipped = currentPage > pageNumber;

  return (
    <div
      id={`page-${pageNumber}`}
      className={`page absolute h-full w-full rounded-lg transition-all duration-500`}
      style={{ zIndex: isFlipped ? pageNumber : pageZIndex }}
    >
      <div className='lastpage__content relative h-full'>
        {lastPageChildren}
        {currentPage != 1 && (
          <div className='test w-[100%] h-32 absolute -bottom-[70px] left-0 bg-gray-200 z-[90000]' />
        )}
      </div>
      <div
        className={`${
          isFlipped ? 'flipped' : ''
        } page__front rounded-lg transition-all duration-500 origin-left absolute w-full h-full top-0 left-0 z-[1] bg-white page-bulge`}
      >
        <div className='relative h-full'>
          {frontPageChildren}
          {currentPage != 1 && (
            <div className='test w-[100%] h-32 absolute -bottom-[70px] left-0 bg-gray-200 z-[90000]' />
          )}
        </div>
      </div>
      <div
        className={`${
          isFlipped ? 'flipped' : ''
        } page__back rounded-lg transition-all duration-500 origin-left absolute w-full h-full top-0 left-0 z-0 bg-white border-l-2 border-gray-300`}
      >
        <div className='relative h-full'>
          <div className='page__back__content'>{backPageChildren}</div>
          <div className='test w-[100%] h-32 absolute -bottom-[70px] left-0 bg-gray-200 z-[90000]' />
        </div>
      </div>
    </div>
  );
}
