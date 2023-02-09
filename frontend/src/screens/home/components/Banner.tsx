import { Button } from '../../../components/button';

export const Banner = () => {
  const scrollToPetsSection = () => {
    document.getElementById('pets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-zinc-50'>
      <div className='lg:container lg:mx-auto'>
        <div className='lg:flex justify-center py-20'>
          <div className='lg:w-6/12 flex flex-col justify-center items-center lg:justify-start xl:items-start'>
            <h3 className='text-4xl md:text-4xl lg:text-9xl text-indigo-900 font-bold mb-8 ml-8 xl:ml-0 animate__animated animate__fadeInLeftBig'>
              Adoption Home For Furry Pets
            </h3>
            <div className='mb-4 animate__animated animate__fadeInLeftBig'>
              <Button title='See kittens' onClick={scrollToPetsSection} />
            </div>
          </div>
          <div
            className='lg:w-6/12 w-full flex justify-center items-center animate__animated animate__fadeInRightBig'
            style={{ height: 500 }}
          >
            <div className='lg:w-full' style={{ height: 500 }}>
              <img
                className='w-full h-full object-fit'
                alt='banner-cat'
                src={`${process.env.PUBLIC_URL}/assets/banner-cat.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
