import Image from 'next/image';
import React from 'react';

const Page = () => {

  return (
    <div className="w-full  flex justify-center items-center">
    <Image
      src="/assets/category/checkin.png"
      alt="amila"
      width={770}
      height={325}
      className="bg-cover bg-center h-screen w-full flex items-center"
    />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center  ">
      <div className="bg-white bg-opacity-40 rounded-xl p-8">
        <h1 className=" text-center text-white font-bold pb-5">Login</h1>
        <form className='flex flex-col gap-5 '>
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            className='border rounded-lg p-2 w-[250px] lg:w-[400px]'
          />
          <input
            type='text'
            name='idno'
            placeholder='Enter ID Number'
            className='border rounded-lg p-2'
          />
          <input
            type='text'
            name='address'
            placeholder='Enter Address'
            className='border rounded-lg p-2'
          />
          <input
            type='number'
            name='contactno'
            placeholder='Enter Phone No'
            className='border rounded-lg p-2'
          />
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            className='border rounded-lg p-2'
          />
          <button className='bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 '>
            Submit
          </button>
        </form>
        
      </div>
    </div>
  </div>







    // <div className='h-screen w-full flex items-center'>
    //          <Image
    //     src="/assets/category/checkin.png"
    //     alt="amila"
    //     width={924.45}
    //     height={520}
    //     className="bg-cover bg-center h-screen "
    //   />
    //   <div className='flex justify-center px-5 items-center bg-opacity-50 '>
    //   <div className='bg-white p-10 rounded-lg shadow-md w-96'>
        
    //   </div>
    //   </div>
    // </div>
  );
}

export default Page;
