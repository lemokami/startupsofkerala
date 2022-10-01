const Card = ({ data }) => {
  return (
    <div class='rounded-xl px-8 py-6 flex flex-col items-center justify-between border-2 border-[#dcdcdc] bg-white'>
      <div class='h-36 w-full flex items-center justify-center'>
        <img src={data.logo} alt={data.name + "'s Logo"} class='h-32' />
      </div>
      <div class='flex flex-col items-center mb-8'>
        <h4 class='font-semibold text-lg -mb-0.5'>{data.name}</h4>
        <span class='text-sm text-black text-opacity-50 mb-2'>
          {data.location}
        </span>
        <p class='text-sm'>{data.description}</p>
      </div>
      <a
        href={'/company/' + data.name.split(' ')[0].toLowerCase()}
        class='text-[#7c7c7c] hover:text-black flex gap-1 items-center text-sm underline'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          class='w-3.5 h-3.5'
          fill='currentColor'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z' />
        </svg>
        <span>more details</span>
      </a>
    </div>
  );
};

export default Card;
