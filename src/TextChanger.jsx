import React, { useEffect, useState } from 'react'


const TextChanger = () => {
    const texts=['Hello, I am Shejal Singh','Hello, I am Shejal Singh ','Hello, I am Shejal Singh']
    const [currentText,setCurrentText]=useState("")
    const [EndValue,setEndValue]=useState(true)
    const [isForward,setIsForward]=useState(true)
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCurrentText(texts[index].substring(0,EndValue))

            if(isForward){
                setEndValue((prev)=>prev+1);
            }
            else{setEndValue((prev)=>prev-1)}

            if(EndValue>texts[index].length+10){
                setIsForward(false)
            }

            if(EndValue<2.1){
                setIsForward(true)
                setIndex((prev)=>prev&texts.length)
            }
        },50)
        return ()=>clearInterval(intervalId)

    },[EndValue,isForward,index,texts ])


  return (
    <div className='transition ease duration-300'>{currentText}</div>
  )
}

export default TextChanger