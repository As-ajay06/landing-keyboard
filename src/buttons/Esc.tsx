
type alphabet = {
  word: string
}



const Esc = ({ word }: alphabet) => {
  return (
    <div className='rounded-[4px] p-[0.5px] cursor-pointer bg-white/[0.2] shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none st-current'>
      <div className='relative flex h-6 w-10 items-center justify-center rounded-[3.5px] bg-[#0A090D] '>
        <div className='absolute bottom-0 left-0 p-1 flex w-full flex-col justify-center text-[5px] text-white '>
          <span>{word}</span>
        </div>
      </div>
    </div>
  )
}


export default Esc;
