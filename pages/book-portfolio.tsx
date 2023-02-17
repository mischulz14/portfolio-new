import Page from '@/components/molecules/Page';

export default function BookPortfolio() {
  return (
    <>
      <div className='book__container min-h-screen bg-gray-400 flex justify-center items-center'>
        <div className='relative book  w-[400px] min-h-[70vh] bg-white'>
          {/* Page 1*/}
          <Page
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
