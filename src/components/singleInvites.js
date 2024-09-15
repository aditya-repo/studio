import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleInvites = () => {
    return (
        <div className='p-4'>
            <p className='text-2xl'>Morning Love - 1001</p>
            <p className='pt-3 pb-5'>Home {'>'} Invites {'>'} Wedding Card {'>'}1001</p>
            <div className='flex justify-center'>
                <div className='item-card mb-5'>
                    <div class="bg-gray-200 p-4 h-[720px] w-[480px] rounded-md">Item 1</div>
                    <div className='flex justify-between items-center p-2'><p className='text-lg'>Morning Love</p><p>213466</p></div>
                </div>

            </div>
            <div className='flex justify-center'>
                <NavLink to={'/123456/invites/wedding-card/1001/checkout'} >
                    <div className='mt-3 px-[172px] rounded border bg-grey-100 text-xl py-4 hover:bg-grey-300'>Order Request</div>
                </NavLink>
            </div>
        </div>
    )
}

export default SingleInvites