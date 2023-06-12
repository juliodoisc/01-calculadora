/* interface props*/
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  if (label != "") {
    return (
      <>
        <button
          className="h-16 w-16 flex-1 p-5 text-white border border-solid border-stone-600 text-2xl font-bold
          hover:bg-blue-500 flex justify-center items-center bg-blue-400"
          onClick={onClick}
        >
          {label}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className="h-16 flex-1 w-16 p-5 text-white text-2xl font-boldflex justify-center items-center bg-gray-400"
          disabled={true}
        >
          {label}
        </button>
      </>
    );
  }
};

export { Button };
