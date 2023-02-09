export interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="rounded-lg border-2 border-orange-600 py-4 px-10 uppercase text-orange-600 text-xl hover:bg-orange-600 hover:text-white transition delay-75 ">
      {title}
    </button>
  );
};
