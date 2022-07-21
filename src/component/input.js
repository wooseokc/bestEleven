import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Input (props) {
  const [index, setIndex] = useState(0)

  const dispatch = useDispatch()
  let ref = useRef()

  function buttonCLick () {
    console.log(ref.current.value)
    const a = [ref.current.value, index]
    dispatch({type : 'addPlayer', payload : a}) 
    ref.current.value = ''
    setIndex(index => index +1)
  }

  function enterPress (e) {
    if (e.key === 'Enter') {
      buttonCLick(); 
    }
  }



  return (
    <>
      <input ref={ref} type={'text'} onKeyPress={enterPress}></input>
      <button onClick={buttonCLick} type={'submit'}></button>
    </>

  )

}