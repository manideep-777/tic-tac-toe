import { useState,useEffect } from 'react'

export default function Sqaure({index, click, newGame, classes}) {

  const [value, setValue] = useState("")

  useEffect(() => {
    if (newGame) {
        setValue("");
    }
  }, [newGame]);

  return (
    
      <div type="button" key={index} className={ `h-28 w-28 border-2 flex justify-center items-center  text-8xl text-white ${classes} md:h-36 md:w-36 md:text-10xl lg:h-28 lg:w-28 lg:text-8xl ` }
      onClick={()=>{
        setValue(click(index))
      }}> 
       {/* {newGame ? "" : value} */}
       {value}
      </div>
  )
}
