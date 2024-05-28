import React from 'react'
import { features } from '../constants';
import styles, {layout} from '../style';
import Button from "./Button";
import FeatureCard from './FeatureCard';

const Business = () =>(
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className='sm:block hidden'/> we'll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        we the right cradit card, you can inprove your finencial life by building cradit, earning rewards and saving money. but with hundreads of credit cards of the markets. 
      </p>
      <Button styles=""/>
    </div>
    <div className={`${layout.sectionImg} flex-col gap-6`}>
      {
        features.map((item, index)=>(
          <FeatureCard key={item.id} index={index} {...item}/>
        ))
      }
    </div>
  </section>
)

export default Business
