import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedBackCard from "./FeedBackCard"




const Testimonial = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
    <div className='w-full flex justify-between items-center md:flex-row  flex-col mb-6 sm:mb-16 relative z-[1]'>
      <h1 className={styles.heading2}>what people are <br className='sm:block hidden' /> saying about us</h1>
      <div className='w-full mit-6 md:mt-0'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          everything you need to accept card payment and grow your business anywhere in the world.
        </p>
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-1'>
      {feedback.map((item)=>(
        <FeedBackCard key={item.id} {...item}/>
      ))}
    </div>
  </section>
)

export default Testimonial
