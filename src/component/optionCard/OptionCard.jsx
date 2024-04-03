import React, { useState } from 'react'


function OptionCard({items, formUpdate, name, form}) {

    const keyname = name

//   console.log(items.text, form[keyname])
  return (
    <div value={items.text} onClick={() => {
        formUpdate(items.text,keyname)
   
    }
    } style={{border:items.text === form[keyname]&& "1px solid #ebdbb8", boxShadow: items.text === form[keyname]&& "1px 1px 10px #ede1cb"}} className='car border border-gray-200 hover:border-orange-200 shadow hover:shadow-orange-300 h-14 flex justify-start items-center rounded-lg'>
     <div className='flex justify-start items-center gap-4 h-12'>
        <img className=' h-full ml-4' src={items.img} alt='icon' />
        <h1 className=' px-2'><span className=' font-semibold'>{items.text}</span> {items.des}</h1>
      </div>
     </div>
  )
}

export default OptionCard