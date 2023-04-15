interface FiltersProps {
  buttonValue: string;
  filter: (button: string) => void;
  active: boolean;
}

const Filters = ({ buttonValue, filter, active }: FiltersProps) => {
  return (
    <button
      onClick={() => filter(buttonValue)}
      className={`${
        active ? 'bg-[#5CA5A5] text-white' : 'bg-[#ecf7f7] text-[#5CA5A5]'
      } rounded-lg p-2  font-bold`}
    >
      <p className='mx-2'>{buttonValue}</p>
    </button>
  );
};

export default Filters;
