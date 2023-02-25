import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='w-full h-0 flex text-green-400 font-sans text-2xl  '>
<div className='w-[1200px] mx-auto flex justify-between z-50 pt-8'>
    <div>BRAND</div>
    <div className='flex space-x-16'>
        <h1>KONTAKT</h1>
        <h1>USLUGE</h1>
    </div>
</div>
    </div>
  )
}

export default Nav