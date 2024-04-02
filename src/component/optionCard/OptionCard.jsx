import React from 'react'


function OptionCard({items}) {

  return (
    <div className='card hover:border-orange-200 shadow hover:shadow-orange-200 h-14 flex justify-start items-center border rounded-lg'>
     <div className='flex justify-start items-center gap-4 h-12'>
        <img className=' h-full ml-4' src={items.img} alt='icon' />
        <h1>{items.text}</h1>
      </div>
     </div>
  )
}

export default OptionCard