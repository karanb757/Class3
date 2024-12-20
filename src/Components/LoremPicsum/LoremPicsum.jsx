import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LoremPicsum = () => {
    const [data, setData] = useState([])

    const getData = async ()=>{
        const response = await axios.get('https://picsum.photos/v2/list')
        setData(response.data);
    }

    // useEffect(()=>{
    //     getData()
    // },[])
    
  return (
    <>
        <button onClick={getData} className='mt-5 mb-5 ml-5 bg-amber-400 rounded text-white font-semibold text-2xl px-6 py-3 active:scale-90'>Get Data</button>
        <div className='p-5 bg-gray-900'>
            {data.map(function(elem,idx){
                    return <div key = {idx} className='bg-gray-300 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
                        <img className='h-40' src={elem.download_url} alt="" />
                        <h1 className=''>{elem.author}</h1>
                    </div>
                })
            }
        </div>
    </>
    )}

export default LoremPicsum