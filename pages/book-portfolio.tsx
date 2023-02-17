import Page from '@/components/molecules/Page';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

let numberOfPages = 3;

export default function BookPortfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const maximumPageFlips = numberOfPages + 2;
  const isBookOpen = currentPage > 1;

  // Set current page to 1 if it's at the last page
  currentPage === maximumPageFlips && setCurrentPage(1);

  return (
    <>
      <div
        className={` book__container min-h-screen bg-gray-200 flex justify-center items-center overflow-hidden`}
      >
        <div
          className={`${
            isBookOpen ? 'translate-x-[50%]' : 'translate-x-0'
          } relative book transition-all rounded-lg duration-500 sm:w-[35vw] w-[50vw]  min-h-[85vh] bg-white`}
        >
          <button
            className={`absolute flex justify-center  items-center rounded-lg hover:bg-gray-300 h-full w-20 bg-gray-200/20 transition-all duration-500 z-[9999] ${
              isBookOpen
                ? 'sm:translate-x-[-35vw] translate-x-[-50vw]'
                : 'translate-x-0'
            } ${currentPage === 1 ? 'hidden' : ''}`}
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            <FaArrowLeft className='text-white' size={45} />
          </button>

          <button
            className={`absolute flex items-center justify-center rounded-lg hover:bg-gray-300 h-full w-20 bg-gray-200/20 transition-all duration-300 z-[9999] ${
              isBookOpen
                ? 'sm:translate-x-[30vw] translate-x-[45vw]'
                : 'translate-x-0'
            } ${currentPage === 1 ? 'bg-gray-300' : ''}`}
            onClick={() => {
              if (currentPage < maximumPageFlips) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            <FaArrowRight className='text-white' size={40} />
          </button>
          {/* Page 1*/}
          <Page
            maximumPageFlips={maximumPageFlips}
            currentPage={currentPage}
            pageNumber={1}
            frontPageChildren={
              <h1 className='book__page__title'>Front Page 1</h1>
            }
            backPageChildren={
              <h1 className='book__page__title'>Back Page 1</h1>
            }
            pageZIndex={3}
          />

          {/* Page 2 */}
          <Page
            maximumPageFlips={maximumPageFlips}
            currentPage={currentPage}
            pageNumber={2}
            frontPageChildren={
              <h1 className='book__page__title'>Front Page 2</h1>
            }
            backPageChildren={
              <h1 className='book__page__title'>Back Page 2</h1>
            }
            pageZIndex={2}
          />
          {/* Paper 3 */}
          <Page
            maximumPageFlips={maximumPageFlips}
            currentPage={currentPage}
            pageNumber={3}
            frontPageChildren={
              <h1 className='book__page__title'>Front Page 3</h1>
            }
            backPageChildren={
              <h1 className='book__page__title'>Back Page 3</h1>
            }
            pageZIndex={1}
          />
        </div>
      </div>
    </>
  );
}
