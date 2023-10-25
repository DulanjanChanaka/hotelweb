import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
    return (
        <div id='category' className='w-full mt-8 p-2 pb-5'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8'>




                    <Link href='/checkin'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                            <div className='justify-center items-center flex flex-1'>
                                <div className='flex flex-col w-full'>
                                    <div className='m-auto flex-2/3'>
                                        <Image src='/assets/bg1.jpeg' width='64' height='64' alt='/' className='rounded-t-xl' />
                                    </div>
                                    <div className='flex flex-1 items-center justify-center '>
                                        <h3 className='text-center '>CHECK IN</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/breakfast.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>BREAKFAST</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/service.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>ROOMSEARVICE</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/map.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>HOTELMAP</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/spa.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>SPA</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/spa.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>POOL SERVICE</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/taxi.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>TAXI</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/front.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>Call FRONT DESK</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/mealmenu.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>MEALS MENU</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex flex-col bg-red-700 text-white'>
                        <div className='justify-center items-center flex flex-1'>
                            <div className='flex flex-col w-full'>
                                <div className='m-auto flex-2/3'>
                                    <Image src='/assets/category/roomup.png' width='64' height='64' alt='/' className='rounded-t-xl' />
                                </div>
                                <div className='flex flex-1 items-center justify-center'>
                                    <h3 className='text-center'>ROOM UPGRADES</h3>
                                </div>
                            </div>
                        </div>
                    </div>












                </div>
            </div>
        </div>
    )
}

export default Category