import React, {useState} from 'react';
import "./Form.css";
import cableMach from "../../assets/cableMach.png"
import alien from "../../assets/alien.png"

import OptionCard from '../optionCard/OptionCard';

// Font Awesome Icon imports 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// dummy data 
import {describesBest,interestedIn} from "../../data"

function Form() {
  const [pageNo, setPageNo] = useState(4)

console.log(describesBest)
  return (
    <div className='form w-4/5 mt-8'>
    <div className='progressBarCont w-full h-6 flex justify-center items-center gap-1'>
    {
      pageNo > 0 ?  <FontAwesomeIcon onClick={() => setPageNo(pv => pv - 1)} style={{cursor: "pointer"}} icon={faChevronLeft} /> : ""
    }
    
    <div className='progressBar w-11/12 h-1 rounded-lg overflow-hidden bg-slate-200'>
      <div style={{width: pageNo === 0? "20%": pageNo === 1 ? "40%" : pageNo === 2 ? "60%" : pageNo === 3 ? "80%": "100%"}} className='progress bg-emerald-500 h-full'></div>
    </div>
    </div>
    <div className='formBody w-full'>
    <div className='page0' style={{display: pageNo === 0 ? "block": "none"}}>
      <div className=' flex justify-center items-center flex-col gap-6 my-10'>
        <h1 className=' text-3xl font-semibold'>Which describes you best?</h1>
        <p className=' text-slate-400'>This will help us personalize your experience.</p>
      </div>
      <div className=' w-full flex flex-col items-center'>
      <div className='w-full sm:w-3/4 md:w-3/4 lg:w-2/4 flex flex-col gap-2'>
      {
        describesBest.map((item, e) => {
          return <OptionCard key={e} items={item} />
        })
      }
      </div>
      </div>
      <div className=' flex justify-center items-center my-4'>
        <button onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-gray-200 text-white rounded-lg'>Continue</button>
      </div>
    </div>
    <div className='page1' style={{display: pageNo === 1 ? "block": "none"}}>
    <div className=' flex justify-center items-center flex-col gap-6 my-10'>
        <h1 className=' text-3xl font-semibold'>Which are you most interested in?</h1>
        <p className=' text-slate-400'>Choose just one. This will help us get you started(but wont't limit your experience)</p>
      </div>
      <div className=' w-full flex flex-col items-center'>
      <div className='w-full sm:w-3/4 md:w-3/4 lg:w-2/4 flex flex-col gap-2'>
      {
        interestedIn.map((item, e) => {
          return <OptionCard key={e} items={item} />
        })
      }
      </div>
      </div>
      <div className=' flex justify-center items-center my-4'>
        <button onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-gray-200 text-white rounded-lg'>Continue</button>
      </div>
    </div>
    <div className='page2' style={{display: pageNo === 2 ? "block": "none"}}>
    <div className=' w-full flex justify-around items-center h-96 my-12'>
    <div className=' lg:w-2/5 h-full flex justify-center items-center'>
      <img className=' h-full' src={cableMach} alt='cable machine' />
    </div>
    <div className=' lg:w-2/4 lg:p-14 flex flex-col items-start gap-6'>
      <h1 className=' text-3xl font-semibold'>You're in the right palce</h1>
      <p className=' text-slate-400'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science."</p>
    </div>
    </div>
    <div className=' flex justify-center items-center my-4'>
        <button onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-gray-200 text-white rounded-lg'>Continue</button>
      </div>
    </div>
    <div className='page3' style={{display: pageNo === 3 ? "block": "none"}}>3</div>
    <div className='page4' style={{display: pageNo === 4 ? "block": "none"}}>4</div>
    </div>
    
    </div>
  )
}

export default Form