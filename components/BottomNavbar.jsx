import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';

function BottomNavbar() {
  return (
    <div className={`lg:hidden sticky bottom-0   left-0 w-full py-5 z-50 shadow-xl bg-red-700 text-white`}  >
      <div className='flex flex-row justify-around'>

        <Link href='/'><div ><HomeOutlinedIcon /></div></Link>
        <div><SearchOutlinedIcon /></div>
        <Link href='/cart'><div><ShoppingCartOutlinedIcon /></div></Link>

        <Link href='/profile'><div><AccountCircleOutlinedIcon /></div></Link>
      </div>
    </div>
  )
}

export default BottomNavbar