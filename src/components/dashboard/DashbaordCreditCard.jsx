import React from 'react'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'

const DashbaordCreditCard = () => {
  return (
    <div className='p-6 mb-6 rounded-2xl bg-orange-300 flex items-start justify-between gap-1'>
        <div className="p-3 bg-white rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Balance</p>
            <h3 className="text-2xl font-bold text-headingColor"><span>$</span>500.02</h3>
        </div>
        <div className="flex items-center gap-6 justify-between">
            <div className="flex flex-col items-center cursor-pointer gap-4 justify-between">
                <MdOutlineAccountBalanceWallet className='p-2 bg-white rounded-full text-xl text-textColor w-10 h-10' />
                <p className='text-xs text-textColor text-center'>Top Up</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer gap-4 justify-between">
                <MdOutlineAccountBalanceWallet className='p-2 bg-white rounded-full text-xl text-textColor w-10 h-10' />
                <p className='text-xs text-textColor text-center'>Transfer</p>
            </div>
        </div>
    </div>
  )
}

export default DashbaordCreditCard