import { Link } from 'react-router-dom';

export interface CardProps {
  id: number;
  name: string;
  image: string;
}

export const Card = ({ id, name, image }: CardProps) => {
  return (
    <div
      className='rounded-lg overflow-hidden relative shadow-lg hover:shadow-sky-300/40 transition delay-75 hover:scale-105 my-4 lg:my-0'
      style={{ maxWidth: 280 }}
    >
      <div className='w-full h-full'>
        <img className='w-full h-full' alt={name} src={image} />
      </div>
      <div className='absolute w-full flex justify-center align-center bottom-7 -rotate-12'>
        <div className='bg-sky-300 p-3 rounded-full border-2 border-white w-32 flex justify-center items-center'>
          <Link
            className='text-white text-lg z-10 uppercase drop-shadow-lg cursor-pointer'
            to={{ pathname: `/pet/${id}` }}
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};
