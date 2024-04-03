import React from 'react'

function MathCard({items, formUpdate, name, form}) {
    const keyname = name
  return (
    <div style={{border:items.head === form[keyname]? "2px solid #ebdbb8": "2px solid #f8f8f8",boxShadow: items.text === form[keyname]&& "1px 1px 10px #ede1cb"}} onClick={() => formUpdate(items.head,keyname)} className='  hover:border-orange-200 shadow hover:shadow-orange-200 w-64 h-64 flex flex-col justify-between rounded-lg m-2'>
    <div className=' h-2/4 flex justify-center items-end'>
        <img src={items.img} alt='' />
    </div>
    <div className=' h-2/4 flex justify-center items-center flex-col gap-2'>
        <h1>{items.head}</h1>
        <p className=' text-slate-400 text-xl'>{items.foot}</p>
    </div>
    </div>
  )
}

export default MathCard