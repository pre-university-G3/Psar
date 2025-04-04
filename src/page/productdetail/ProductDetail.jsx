import React from 'react'

export default function ProductDetail() {
  return (
        
    <div className="w-[75vw] m-auto my-[15vh] bg-gray-100 flex border-2 max-sm:w-[90vw] max-sm:flex-col max-sm:border-[1px] sm:border-[1px] sm:flex-col md:flex-col lg:flex-col xl:flex-row  ">
      <article className="w-[45%]  ml-auto  max-sm:w-[95%] max-sm:m-auto max-sm:mt-[30px] sm:w-[95%] sm:m-auto sm:mt-[30px] md:w-[80%] md:m-auto md:mt-[30px] lg:w-[65%] lg:m-auto lg:mt-[30px] xl:w-[50%] xl:my-[7.5vh] xl:m-auto ">
        <section>
          <figure className="w-[80%] m-auto px-[8%] py-[2%] max-sm:border-[1px] sm:border-[1px] border-2"><img src="../public/img/Mac14,9.png" alt="" /></figure>
          <div className="flex w-[80%] h-[10%] m-auto gap-2.5 mt-[20px]">
            <figure><figure className=" w-[100%] px-[25px] py-[7px] max-sm:border-[1px] sm:border-[1px] border-2"><img src="../public/img/Mac14,9.png" alt="" /></figure></figure>
            <figure><figure className=" w-[100%] px-[25px] py-[7px] max-sm:border-[1px] sm:border-[1px] border-2"><img src="../public/img/Mac14,9.png" alt="" /></figure></figure>
            <figure><figure className=" w-[100%] px-[25px] py-[7px] max-sm:border-[1px] sm:border-[1px] border-2"><img src="../public/img/Mac14,9.png" alt="" /></figure></figure>
          </div>
          <div className="flex w-[80%] m-auto gap-2.5 mt-[15px]">
            <button className="w-[34%] h-[45px] bg-white max-sm:h-[35px] max-sm:border-[1.5px] max-sm:text-[15px] border-[2px] border-black">$12,99</button>
            <button className="w-[70%] h-[45px] bg-black text-white max-sm:h-[35px] max-sm:text-[15px]">Add to cart</button>
          </div>
        </section>
      </article>
      <article className="w-[45%]  my-[7.5vh] mr-auto   max-sm:w-[95%] max-sm:m-auto sm:w-[95%] sm:m-auto md:w-[95%] md:m-auto lg:w-[95%] lg:m-auto xl:w-[50%] xl:my-[7.5vh] xl:m-auto  ">
        <h3 className="text-[45px] max-sm:text-[25px] max-sm:mt-[30px] sm:mt-[30px]  md:mt-[30px]">MacBook Pro M2 2025</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.</p>
        <div>
            <h3 className="mt-[20px] max-sm:font-medium sm:font-medium md:font-medium lg:font-medium xlfont-medium">select color :</h3>
            <ul className="flex gap-2.5 mt-[5px] ">
                <li className="flex  gap-2.5 bg-gray-400 w-[120px] h-[30px]  ">
                    <div className="w-[20px] h-[20px] rounded-[20px] bg-red-600 mt-[5px] ml-[5px] ">

                    </div>
                    <h3>red</h3>
                </li>
                <li className="flex gap-2.5 bg-gray-400 w-[120px] ">
                    <div className="w-[20px] h-[20px] rounded-[20px] bg-blue-600 mt-[5px] ml-[5px]">

                    </div>
                    <h3>blue</h3>
                </li>
            </ul>
        </div>
        <ul className="mt-[20px] mb-[20px]">
            <li className="my-[5px]">- CPU : Apple M2 chip (8 coreCPU)</li>
            <li className="my-[5px]">- RAM : 8GB (Configurable up to 24GB)</li>
            <li className="my-[5px]">- Graphic Card : integrate 10-core CPU</li>
            <li className="my-[5px]">- OS : MacOS Ventura</li>
            <li className="my-[5px]">- Screen Display : Liquid Retina display</li>
            <li className="my-[5px]">- Sreccn Size : 13.6 inches</li>
            <li className="my-[5px]">- Storage : 256 GB SSD (Configurable to 2TB)</li>
        </ul>
      </article>
    </div>
  )
}
