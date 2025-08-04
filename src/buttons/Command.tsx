
type alphabet = {
  word: string,
  className: string
}


const Command = ({ word, className }: alphabet) => {
  return (
    <div className='rounded-[4px] p-[0.5px] cursor-pointer bg-white/[0.2] shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none st-current'>
      <div className='flex h-6 w-8 items-center  rounded-[3.5px] bg-[#0A090D] '>
        <div className='flex w-full flex-col   text-[5px] text-white '>
          <div className={` flex ${className} mb-1 `}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path></svg>
          </div>
          <div className="flex justify-center ">
          <span>{word}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Command;