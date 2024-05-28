import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import {Navbar} from "./exportAll"
import { footerLinks, socialMedia } from '../constants'




const Foother = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="bank" className='w-[266px] h-[72px] object-contain ' />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make payment easy, reliable and secure.
        </p>
      </div>
    <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>
      {footerLinks.map((item)=>(
        <div key={item.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
          <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
            {item.title}
          </h4>
          <ul className='grid gap-2 list-none mt-4'>
            {item.links.map((link, index)=>(
              <li key={index} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] mt-2'>
      <p className='font-poppins font-normal text-[18px] leading-[27px] text-white'>
        @2024 Bank ,  All copyright reserved.
      </p>
      <div className='flex flex-row md:mt-0 mt-6 gap-5 '>
        {socialMedia.map((item, index)=>(
          <img key={index} src={item.icon} alt="social" className={`w-[21px] h-[21px] object-contain cursor-pointer mt-2`} />
        ))}
      </div>
    </div>
  </section>
  )

export default Foother
