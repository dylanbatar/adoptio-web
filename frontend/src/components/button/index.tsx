export interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="rounded-lg border-2 border-orange-600 py-4 px-10 uppercase text-orange-600 text-xl hover:bg-orange-600 hover:text-white transition delay-75 ">
      {title}
    </button>
  );
};
