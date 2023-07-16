import React from 'react'

function test() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("form submitted")
    

    
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