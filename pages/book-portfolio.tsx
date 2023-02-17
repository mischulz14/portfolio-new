import Page from '@/components/molecules/Page';
import { useState } from 'react';

let numberOfPages = 3;

export default function BookPortfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxLocation = numberOfPages + 2;
  currentPage === maxLocation && setCurrentPage(1);
  const isBookOpen = currentPage > 1;
  const bookWidth = 300;
  const gapWidth = bookWidth / 3.75;

  return (
    <>
      <div
        className={` book__container min-h-screen bg-gray-200 flex justify-center items-center`}
        style={{ gap: `${gapWidth}px` }}
      >
        <button
          className={`transition-all duration-300 ${
            isBookOpen ? 'translate-x-[-100px]' : 'translate-x-0'
          }`}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          {' '}
          Back{' '}
        </button>
        <div
          className={`${
            isBookOpen ? 'translate-x-[50%]' : 'translate-x-0'
          } relative book w-[300px] transition-all duration-500   fit-content min-h-[70vh] bg-white`}
        >
          {/* Page 1*/}
          <Page
            maxLocation={maxLocation}
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
            maxLocation={maxLocation}
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
            maxLocation={maxLocation}
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
        <button
          className={`transition-all duration-300 ${
            isBookOpen ? 'translate-x-[100px]' : 'translate-x-0'
          }`}
          onClick={() => {
            if (currentPage < maxLocation) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          {' '}
          Next{' '}
        </button>
      </div>
    </>
  );
}
