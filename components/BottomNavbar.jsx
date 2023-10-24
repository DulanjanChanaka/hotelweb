import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function BottomNavbar() {
  return (
    <div className={`lg:hidden sticky bottom-0   left-0 w-full py-5 z-50 shadow-xl bg-red-700 text-white`}  >
        <div className='flex flex-row justify-around'>
            <div><HomeOutlinedIcon/></div>
            <div><ShoppingCartOutlinedIcon/></div>
            <div><SearchOutlinedIcon/></div>
            <div><AccountCircleOutlinedIcon/></div>
        </div>
    </div>
  )
}

export default BottomNavbar