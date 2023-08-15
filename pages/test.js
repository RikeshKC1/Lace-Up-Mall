"use client"
import React from 'react'

function test() {
  console.log(localStorage.getItem("userId"))
  const handleSubmit=(e)=>{
  
    

    
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="fname" name="fname"></input>
      <input type="text" placeholder="lname" name="lname"></input>
      <button type='submit'>click</button>
    </form>
    
    </>
  )
}

export default test