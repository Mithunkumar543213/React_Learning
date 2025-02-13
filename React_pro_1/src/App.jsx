import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]= useState("black")



  return (
    <>
    <div className='w-full h-screen ' style={{backgroundColor : color}}>
      <div className='w-auto h-20 flex content-center'>
        <div className='bg-white m-7 w-15 h-10 rounded-lg flex content-center'><button onClick={()=>setColor("white")}>white</button>
        </div>

        <div className='bg-red-500 m-7 w-15 h-10 rounded-lg flex content-center'><button onClick={()=>setColor("red")}>Red</button>
        </div>

        <div className='bg-amber-500 m-7 w-15 h-10 rounded-lg flex content-center'><button onClick={()=>setColor("orange")}>Orangr</button>
        </div>

        <div className='bg-emerald-700 m-7 w-15 h-10 rounded-lg flex content-center'><button onClick={()=>setColor("green")}>Green</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
