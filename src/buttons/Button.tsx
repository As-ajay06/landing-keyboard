import type { ReactElement } from "react"

type alphabet = {
  word?: string
  svg?: ReactElement,
  symbol?: string
}



const Button = ({ word, svg, symbol }: alphabet) => {
  return (
    <div className='rounded-[4px] p-[0.5px] cursor-pointer bg-white/[0.2] shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none st-current'>
      <div className='flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] '>
        <div className='flex w-full flex-col items-center justify-center text-[5px] text-white '>
          {svg &&
            <div className="w-[6px] h-[6px] mb-1">
              {svg}
            </div>
          }
          <span>{symbol}</span>
          <span>{word}</span>
        </div>
      </div>
    </div>
  )
}


export default Button;