
import './App.css'
import Button from './buttons/Button'
import Capslock from './buttons/Caps'
import Command from './buttons/Command'
import Shift from './buttons/Shift'
import Esc from './buttons/Esc'
import Return from './buttons/Return'
import Space from './buttons/Space'
import Tab from './buttons/Tabs'
import Delete from './buttons/Delete'
import Arrowkey from './buttons/ArrowKey'
import BottomButton from './buttons/BottomButton'

function App() {

  return (
    <>
      <div className='flex justify-center items-center w-full h-screen bg-(--my-bg-color) gap-[0.2rem]'>
        <div className='mx-auto flex w-full max-w-[88rem] flex-row items-center justify-center gap-10'>
          <div className='relative mx-auto h-fit w-fit translate-x-10 scale-[1.7] rounded-md bg-zinc-800 p-1 md:relative'>
            <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
              <Esc word='esc' />
              <Button word='F1' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 5l0 .01"></path><path d="M17 7l0 .01"></path><path d="M19 12l0 .01"></path><path d="M17 17l0 .01"></path><path d="M12 19l0 .01"></path><path d="M7 17l0 .01"></path><path d="M5 12l0 .01"></path><path d="M7 7l0 .01"></path></svg>} />
              <Button word='F2' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M12 5l0 -2"></path><path d="M17 7l1.4 -1.4"></path><path d="M19 12l2 0"></path><path d="M17 17l1.4 1.4"></path><path d="M12 19l0 2"></path><path d="M7 17l-1.4 1.4"></path><path d="M6 12l-2 0"></path><path d="M7 7l-1.4 -1.4"></path></svg>} />
              <Button word='F3' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path><path d="M3 10h18"></path><path d="M10 3v18"></path></svg>} />

              <Button word='F4' svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              } />

              <Button word='F5' svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
              } />

              <Button word='F6' svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
              } />

              <Button word='F7' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M21 5v14l-8 -7z"></path><path d="M10 5v14l-8 -7z"></path></svg>} />

              <Button word='F8' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M4 5v14l12 -7z"></path><path d="M20 5l0 14"></path></svg>} />

              <Button word='F9' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M3 5v14l8 -7z"></path><path d="M14 5v14l8 -7z"></path></svg>} />

              <Button word='F10' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path><path d="M16 10l4 4m0 -4l-4 4"></path></svg>} />

              <Button word='F11' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M15 8a5 5 0 0 1 0 8"></path><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path></svg>} />

              <Button word='F12' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M15 8a5 5 0 0 1 0 8"></path><path d="M17.7 5a9 9 0 0 1 0 14"></path><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path></svg>} />

              <Button />
            </div>
            <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
              <Button word='.' symbol='~' />
              <Button word='1' symbol='!' />
              <Button word='2' symbol='@' />
              <Button word='3' symbol='#' />
              <Button word='4' symbol='$' />
              <Button word='5' symbol='%' />
              <Button word='6' symbol='^' />
              <Button word='7' symbol='&' />
              <Button word='8' symbol='*' />
              <Button word='9' symbol='(' />
              <Button word='0' symbol=')' />
              <Button word='_' symbol='_' />
              <Button word='=' symbol='+' />
              <Delete word='delete' />
            </div>
            <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
              <Tab word='tab' />
              <Button word='Q' />
              <Button word='W' />
              <Button word='E' />
              <Button word='R' />
              <Button word='T' />
              <Button word='Y' />
              <Button word='U' />
              <Button word='I' />
              <Button word='O' />
              <Button word='P' />
              <Button word='[' symbol='{' />
              <Button word=']' symbol='}' />
              <Button word='\' symbol='|' />
            </div>
            <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
              <Capslock word='caps lock' className='absolute bottom-0 left-0 p-1' />
              <Button word='A' />
              <Button word='S' />
              <Button word='D' />
              <Button word='F' />
              <Button word='G' />
              <Button word='H' />
              <Button word='J' />
              <Button word='K' />
              <Button word='L' />
              <Button word=';' symbol=':' />
              <Button word="'" symbol='"' />
              <Return word='return' />
            </div>
            <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
              <Shift word='shift' className='absolute bottom-0 left-0 p-1' />
              <Button word='Z' />
              <Button word='X' />
              <Button word='C' />
              <Button word='V' />
              <Button word='B' />
              <Button word='N' />
              <Button word='M' />
              <Button word=',' symbol='<' />
              <Button word='.' symbol='>' />
              <Button word='/' symbol='?' />
              <Shift word='shift' className='absolute bottom-0 left-10 p-1' />
            </div>
            <div className='mb-[2px] flex w-full shrink-0 gap-[2px]'>
              <BottomButton word='fn' className='justify-end pr-1' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>} />

              <BottomButton word='ctrl' className='justify-end pr-1' svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-[6px] w-[6px]"><path d="M6 15l6 -6l6 6"></path></svg>} />

              <BottomButton className="justify-end pr-1 mt-1" word='opn' svg={<svg fill="none" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-[6px] w-[6px]"><rect stroke="currentColor" stroke-width="2" x="18" y="5" width="10" height="2"></rect><polygon stroke="currentColor" stroke-width="2" points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "></polygon><rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none"></rect></svg>} />

              <Command word='cmd' className='justify-end pr-1' />

              <Space />

              <Command word='cmd' className='justify-start pl-1' />

              <BottomButton word='opn' className="justify-start pl-1 mt-1" svg={<svg fill="none" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-[6px] w-[6px]"><rect stroke="currentColor" stroke-width="2" x="18" y="5" width="10" height="2"></rect><polygon stroke="currentColor" stroke-width="2" points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "></polygon><rect id="_Transparent_Rectangle_" className="st0" width="32" height="32" stroke="none"></rect></svg>} />

              <div className='mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]'>
                <Arrowkey className='-rotate-90' />
                <div className='flex'>
                  <Arrowkey className='-rotate-180' />
                  <Arrowkey className='rotate-90' />
                  <Arrowkey />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App















