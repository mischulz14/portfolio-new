import React, { useState } from 'react';

export interface PageProps {
  frontPageChildren?: React.ReactNode;
  backPageChildren?: React.ReactNode;
  lastPageChildren?: React.ReactNode;
  pageZIndex: number;
  pageNumber: number;
  currentPage: number;
  maxLocation: number;
}

export default function Page({
  frontPageChildren,
  backPageChildren,
  pageZIndex,
  pageNumber,
  currentPage,
  maxLocation,
  lastPageChildren,
}: PageProps) {
  const isFlipped = currentPage > pageNumber;

  return (
    <div
      id={`page-${pageNumber}`}
      className={`page absolute h-full w-full transition-all duration-500`}
      style={{ zIndex: isFlipped ? pageNumber : pageZIndex }}
    >
      {lastPageChildren}
      <div
        className={`${
          isFlipped ? 'flipped' : ''
        } page__front transition-all duration-500 origin-left absolute w-full h-full top-0 left-0 z-[1] bg-white `}
      >
        {frontPageChildren}
      </div>
      <div
        className={`${
          isFlipped ? 'flipped' : ''
        } page__back transition-all duration-500 origin-left absolute w-full h-full top-0 left-0 z-0 bg-white border-l-2 border-gray-300`}
      >
        <div className='page__back__content'>{backPageChildren}</div>
      </div>
    </div>
  );
}
