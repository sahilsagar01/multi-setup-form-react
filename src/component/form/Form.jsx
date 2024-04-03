import React, {useEffect, useState} from 'react';
import "./Form.css";
import cableMach from "../../assets/cableMach.png"
import alien from "../../assets/alien.png"

import OptionCard from '../optionCard/OptionCard';
import MathCard from '../mathCard/MathCard';

// Font Awesome Icon imports 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faStar,faMinus, faL} from '@fortawesome/free-solid-svg-icons'

// dummy data 
import {describesBest,interestedIn, math, result} from "../../data"
import PreLoader from '../preloader/PreLoader';
import Results from "../results/Results"
function Form() {
  const [pageNo, setPageNo] = useState(0)
  const [loader, setLoader] = useState(true)
  const [formBody, setFormBody] = useState({
    describesBest: null,
    interestedIn: null,
    mathLavel: null
  })
console.log(formBody)
  const handleForm = (text,keyname) => {
    // console.log(text, "name=", keyname)
    setFormBody(pv => {
      return {
        ...pv,
        [keyname]: text
      }
    })
  }

  useEffect(() => {
    const fetchData = () => {
      if(pageNo > 4){
        setTimeout(() => {
          setLoader(false)
        }, 3000)
      }
    }
    fetchData()
  },[pageNo])



  return (
    <div className='form w-4/5 mt-8'>
    {pageNo <= 4 ?
      <div className='progressBarCont w-full h-6 flex justify-center items-center gap-3'>
    {
      pageNo > 0 ?  <FontAwesomeIcon onClick={() => setPageNo(pv => pv - 1)} style={{cursor: "pointer"}} icon={faChevronLeft} /> : ""
    }
    
    <div className='progressBar w-11/12 h-1 rounded-lg overflow-hidden bg-slate-200'>
      <div style={{width: pageNo === 0? "20%": pageNo === 1 ? "40%" : pageNo === 2 ? "60%" : pageNo === 3 ? "80%": "100%"}} className='progress bg-emerald-500 h-full'></div>
    </div>
    </div>
    : ""
    }
    <div className='formBody w-full'>
    <div className='page0' style={{display: pageNo === 0 ? "block": "none"}}>
      <div className=' flex justify-center items-center flex-col gap-6 my-10'>
        <h1 className=' text-2xl sm:text-3xl text-center  font-semibold'>Which describes you best?</h1>
        <p >This will help us personalize your experience.</p>
      </div>
      <div className=' w-full flex flex-col items-center'>
      <div className='w-full sm:w-3/4 md:w-3/4 lg:w-2/4 flex flex-col gap-2'>
      {
        describesBest.map((item, i) => {
          return <OptionCard form={formBody} formUpdate={handleForm} name={"describesBest"} key={i} items={item} />
        })
      }
      </div>
      </div>
      <div className=' flex justify-center items-center my-4'>
      {
        formBody.describesBest !== null ?
        <button  onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-slate-950 text-white rounded-lg'>Continue</button>
        :
        <button disabled onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-gray-200 text-white rounded-lg'>Continue</button>

      }
      </div>
    </div>
    <div className='page1' style={{display: pageNo === 1 ? "block": "none"}}>
    <div className=' flex justify-center items-center flex-col gap-6 my-10'>
        <h1 className=' text-2xl sm:text-3xl text-center font-semibold'>Which are you most interested in?</h1>
        <p>Choose just one. This will help us get you started(but wont't limit your experience)</p>
      </div>
      <div className=' w-full flex flex-col items-center'>
      <div className='w-full sm:w-3/4 md:w-3/4 lg:w-2/4 flex flex-col gap-2'>
      {
        interestedIn.map((item, i) => {
          return <OptionCard form={formBody} formUpdate={handleForm} name={"interestedIn"} key={i} items={item} />
        })
      }
      </div>
      </div>
      <div className=' flex justify-center items-center my-4'>
      {
        formBody.interestedIn !== null ?
        <button  onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-slate-950 text-white rounded-lg'>Continue</button>
        :
        <button disabled onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-gray-200 text-white rounded-lg'>Continue</button>

      }
      </div>
    </div>
    <div className='page2' style={{display: pageNo === 2 ? "block": "none"}}>
    <div className=' w-full flex justify-around items-center flex-wrap min-h-[60vh]'>
    <div className=' lg:w-[20rem] h-full flex justify-center items-center'>
      <img className=' h-full' src={cableMach} alt='cable machine' />
    </div>
    <div className=' lg:w-2/4 lg:p-14 flex flex-col items-start gap-6'>
      <h1 className=' text-2xl sm:text-3xl font-semibold'>You're in the right palce</h1>
      <p className=' text-justify'>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science."</p>
    </div>
    </div>
    <div className=' flex justify-center items-center my-4'>
    <button  onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-slate-950 text-white rounded-lg'>Continue</button>
      </div>
    </div>
    <div className='page3' style={{display: pageNo === 3 ? "block": "none"}}>
    <div className=' flex justify-center items-center flex-col gap-6 my-10'>
        <h1 className='  text-2xl sm:text-3xl text-center font-semibold'>What is your math comfort level?</h1>
        <p>Choose the highest level you feel comfortable in <FontAwesomeIcon icon={faMinus} style={{color: "#000000",}} /> you can always adjust later.</p>
      </div>
      <div className=' w-full flex flex-col items-center my-16'>
      <div className='w-full flex justify-evenly items-center flex-wrap gap-2'>
      {
        math.map((item, i) => {
          return <MathCard form={formBody} index={i} formUpdate={handleForm} name={"mathLavel"} key={i} items={item} />
        })
      }
      </div>
      </div>
      <div className=' flex justify-center items-center my-4'>
      {
        formBody.mathLavel !== null ?
        <button  onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-slate-950 text-white rounded-lg'>Continue</button>
        :
        <button disabled onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-gray-200 text-white rounded-lg'>Continue</button>

      }
      </div>
    </div>
    <div className='page4' style={{display: pageNo === 4 ? "block": "none"}}>
    <div className=' w-full flex justify-around items-center flex-wrap min-h-[70vh]'>
    <div className=' lg:w-2/5 h-full flex justify-center items-center'>
      <img className=' h-full' src={alien} alt='cable machine' />
    </div>
    <div className=' lg:w-2/4 lg:p-14 flex flex-col items-start gap-4'>
      <h1 className=' text-3xl font-semibold'>You're on your way!</h1>
      <div className=' flex justify-start item-center gap-4 mt-4'> <FontAwesomeIcon icon={faStar} style={{color: '#eea720', fontSize: "1.5rem"}} /><FontAwesomeIcon icon={faStar} style={{color: '#eea720', fontSize: "1.5rem"}} /><FontAwesomeIcon icon={faStar} style={{color: '#eea720', fontSize: "1.5rem"}} /><FontAwesomeIcon icon={faStar} style={{color: '#eea720', fontSize: "1.5rem"}} /><FontAwesomeIcon icon={faStar} style={{color: '#eea720', fontSize: "1.5rem"}} /></div>
      <p className=' italic text-justify'>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
      <p className=' italic'><FontAwesomeIcon icon={faMinus} style={{color: "#000000",}} /> jacob S</p>
    </div>
    </div>
    <div className=' flex justify-center items-center my-4'>
    <button  onClick={() => setPageNo(pv => pv + 1)} className='continue w-40 h-12 bg-slate-950 text-white rounded-lg'>Continue</button>
      </div>
    </div>
    <div className='page5' style={{display: pageNo === 5 ? "block": "none"}}>
      <div className=' w-full flex flex-col gap-8 justify-center items-center my-4'>
         {loader ?
          <div className=' h-[80vh] flex justify-center items-center flex-col'>
            <PreLoader />
            <h1 className=' text-2xl sm:text-3xl font-bold max-w-3xl text-center'>Finding learning path recommendation bases on your response.</h1>
          </div> :
          <div className=' w-full h-full flex justify-center items-center flex-col'>
               <div className=' flex justify-center items-center flex-col gap-6 my-10'>
                    <h1 className=' text-2xl sm:text-3xl text-center font-semibold'>Learning path based your answer.</h1>
                    <p className=''>Choose one to get started. you can switch any time.</p>
                </div>
                <div className=' flex justify-center items-start gap-4 flex-wrap'>
                {
                  result.map((item, i) => {
                    return <Results items={item} key={i} />
                  })
                }
                </div>
           </div>
         }
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default Form