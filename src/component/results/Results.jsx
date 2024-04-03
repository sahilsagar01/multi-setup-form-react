import React from 'react'

function Results({items}) {
  return (
    <div className=' max-w-[28rem] min-h-[12rem] flex flex-col rounded-lg border cursor-pointer'>
                  <div className=' flex justify-center items-center relative bottom-3 '>
                  {
                    items.popular ?
                  <p className=' bg-amber-500 py-1 px-4 rounded-2xl text-xs'>MOST POPULAR</p>
                  :
                  <p className=' bg-amber-500 py-1 px-4 rounded-2xl text-xs opacity-0'>MOST POPULAR</p>
                  }
                  </div>
                  <div className=' flex  items-center gap-4 flex-wrap sm:flex-nowrap justify-center w-full px-4 pb-1'>
                    <h1 className=' w-[90%] sm:w-[60%]'><span className=' font-semibold'>{items.head}</span> {items.dis}</h1>
                    <div className=' w-[80%] sm:w-[40%]'>{

                      <img className=' w-full' src={items.img} alt='noImg'/>
                    }
                    </div>
                  </div>
                  </div>
  )
}

export default Results