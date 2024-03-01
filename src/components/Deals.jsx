import React from 'react'

function Deals() {
    return (
        <>

            <div className='w-67% mx-auto text-center mt-[4rem]'>
               
                <div className='flex justify-center'>
                    <img src="card.png" alt="" />
                </div>
                <div className=''>
                    <div className='mt-[1rem] mx-auto text-blue-400 bg-[#F2F4F7] w-[5rem] rounded-md'>20% Off</div>
                    <div className='mt-1 w-[6rem] mx-auto bg-[#F2F4F7] text-blue-400 rounded-md mb-2'>Limited time</div>
                </div>
                <div>
                    <b>Webbuilder 1</b>
                </div>
                <div>
                    Computer modern classic with wix support
                </div>
                <div className='flex flex-col justify-evenly mt-2'>
                    <div className='text-xl'>$39.96</div>
                    <div className='text-[#9FA9B3]'>$49.96</div>
                    <div className='mt-1 text-red-600'>(20% Off)</div>
                </div>
                <div className="w-[306px] h-[48px] flex justify-center mx-auto mt-[1.5rem] bg-[#1B88F4] rounded-md text-white cursor-pointer">
                    <button>View Deal</button>
                </div>
            </div>
        </>
    )
}

export default Deals
