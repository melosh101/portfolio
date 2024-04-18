import './App.css'
import pfpImage from "/pfp.png"
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='w-full h-full'>
      {/* navbar */}
      <div id="navbar" className='col-span-2'>
          <Navbar className=''/>
      </div>     
      <div className="grid grid-cols-[1.5fr_1fr] h-full relative dark:bg-background">
          <div id="gridContentWrapper" className="flex flex-col items-center self-start justify-end h-full ml-[30%] flex-nowrap">
            <li className='font-bold list-none dark:text-white text-8xl mt-14 font-snippet'>Melosh</li>
            <li className='dark:text-white text-2xl top-[-1.5rem] font-bold font-scp list-none'>&lt;Code is life /&gt;</li>
            <div className='grid self-end font-medium font-scp justify-around w-full h-full grid-cols-2 grid-rows-[1fr_1fr_auto] gap-4 m-3 list-none pt-9'>
            <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                including blog posts, self-hosting projects and much more
                </li>
              </div>              <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                including blog posts, self-hosting projects and much more
                </li>
              </div>              <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                including blog posts, self-hosting projects and much more
                </li>
              </div>              <div className="w-full h-full col-span-1 p-2 rounded-md dark:text-white size-12 bg-primary">
                <li className='text-xl'>Want to see more?</li>
                <li className='text-l'>
                including blog posts, self-hosting projects and much more
                </li>
              </div>
              <li className='relative self-start list-none'>Check out my github</li>

            </div>
          </div>
        <div className='w-full h-full col-span-1'>
          <img src={pfpImage} alt="" className="w-[50%] h-[100%] mt-14"/>
        </div> 
      </div>

    </div>
  )
}

export default App
