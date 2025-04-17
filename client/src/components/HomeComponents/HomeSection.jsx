import React from 'react'

function HomeSection() {
    return (
        <div className='flex flex-col items-center h-[90vh] bg-red-500 justify-center'>
            <div className='text-7xl font-bold text-center mt-20 mb-[2.6rem]'>Your Mental <div>Health Matter</div></div>
            <img src="/mind.png" alt="mind" className='w-[30rem]'/>
        </div>
    )
}

export default HomeSection
