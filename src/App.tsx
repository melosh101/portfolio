import './App.css'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='w-screen h-screen'>
      {/* navbar */}
      <div id="navbar" className='col-span-2'>
          <Navbar className=''/>
      </div>     
      <div className="grid h-full grid-cols-2">
        <div id="content" className='flex justify-end h-full col-span-1 bg-red-600 bg-opacity-50'>
          <div id="gridContentWrapper" className="flex flex-col self-end h-full pr-6 w-[75%]">
            <li className='text-[4rem] mt-14 self-center font-bold font-snippet list-none'>Melosh</li>
            <li className='text-[0.8rem] top-[-1.5rem] self-center font-bold font-scp list-none'>&lt;Code is life /&gt;</li>
            <div className='grid self-end w-full h-full grid-cols-2 gap-4 list-none pt-9'>
              <div className="w-full h-full col-span-1 rounded-md size-12 bg-slate-800">
                <li className='text-xl'>Want to see more?</li>
              </div>
              <div className="w-full h-full col-span-1 rounded-md size-12 bg-slate-800">
                <li className='text-xl'>Want to see more?</li>
              </div>
              <div className="w-full h-full col-span-1 rounded-md size-12 bg-slate-800">
                <li className='text-xl'>Want to see more?</li>
              </div>
              <div className="w-full h-full col-span-1 rounded-md size-12 bg-slate-800">
                <li className='text-xl'>Want to see more?</li>
              </div>
        
            </div>
          </div>
        </div>
        <div className='w-full h-full col-span-1 bg-lime-700'>

        </div> 
      </div>

    </div>
  )
}

export default App
