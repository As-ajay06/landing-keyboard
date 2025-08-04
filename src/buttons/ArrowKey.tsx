
type alphabet = {
  
  className? : string
}




const Arrowkey = ({  className }: alphabet) => {
  return (

    <div className='rounded-[4px] p-[0.5px] cursor-pointer bg-white/[0.2] shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none'>
      <div className='flex items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6'>
        <div className='flex w-full flex-col items-center justify-center text-[5px] text-white'>
          <div className={`w-[6px] h-[6px] ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Arrowkey;