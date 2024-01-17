import React from 'react'

function Navbar() {
  return (
    <div id='navbar' className='flex justify-between items-center'>
    <img src="../public/Component 40.png" className='w-[191px] h-[39]' alt="" />
    <ul className='flex'>
      <li>Home</li>
      <li>FlashCard</li>
      <li>Contact</li>
      <li>FAQ</li>
    <button className='px-[40px] '>Login</button>
    </ul>
   </div>
  )
}

export default Navbar