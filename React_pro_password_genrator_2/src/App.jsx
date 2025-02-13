import { useCallback, useEffect, useRef, useState } from 'react'
import "./index.css"

function App() {

  const [password,setPassword] = useState("")
  const [charAllow,setCharAllow] =useState(false)
  const [length , setLength] =useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

    //useRef
    const passwordRefrence = useRef(null)
  
  const copyPasswordToClipboard =function(){
    passwordRefrence.current?.select()
    window.navigator.clipboard.writeText(password)
    setIsCopied(true);

      // Reset the button color after a short delay
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
  }

 

  const passwordgenrator = useCallback(()=>{
    let pass =""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllow){
      str =str+"1234567890"
     }
     if(charAllow){
      str=str+"!@#$%^&*~"
     }
    
     for (let i = 0; i < length-1; i++) {
      let index = Math.floor(Math.random()*str.length)
      pass =pass+str.charAt(index)
      
     }
     console.log(pass)
     setPassword(pass)

  },[numberAllow,length,charAllow])
  
  useEffect(()=>{
    passwordgenrator()

  },[numberAllow,length,charAllow])


return (
    
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref = {passwordRefrence}
          
      />
      <button
      onClick={copyPasswordToClipboard}
      className={`outline-none ${
        isCopied ? 'bg-green-500' : 'bg-blue-700'
      } text-white px-3 py-0.5 shrink-0`}
      >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={8}
      max={100}
      value={length}
       className='cursor-pointer'
       onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberAllow}
        id="numberInput"
        onChange={() => {
            setNumberAllow((prev) => !prev);
        }}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={charAllow}
            id="characterInput"
            onChange={() => {
                setCharAllow((prev) => !prev )
            }}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
  
)
}
  


export default App
