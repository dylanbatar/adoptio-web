export interface CardProps {
  name: string;
  image: string;
}

export const Card = ({ name, image }: CardProps) => {
  return (
    <div
      className="rounded-lg overflow-hidden relative shadow-lg hover:shadow-sky-300/40 transition delay-75 hover:scale-105 cursor-pointer my-4 lg:my-0"
      style={{ maxWidth: 280 }}
    >
      <div className="w-full h-full">
        <img className="w-full h-full" alt={name} src={image} />
      </div>
      <div className="absolute w-full flex justify-center align-center bottom-7 -rotate-12">
        <div className="bg-sky-300 p-3 rounded-full border-2 border-white w-32 flex justify-center items-center">
          <p className="text-white text-lg z-10 uppercase drop-shadow-lg">{name}</p>
        </div>
      </div>
    </div>
  );
};
