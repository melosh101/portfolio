import './App.css'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='grid grid-cols-2 grid-rows-2'>
      <div className='col-span-2'>
          <Navbar/>
      </div>     
      <div className='w-full h-full col-span-1 bg-red-600 font-snippet'>
        Melosh101

      </div>
      <div className='w-full h-full col-span-1 bg-lime-700'>

      </div> 
    </div>
  )
}

export default App
