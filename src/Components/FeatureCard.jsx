import React from 'react'
import styles from '../style'
const FeatureCard = ({key,index,icon, title, content}) => (
<div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
    <div className={`w-[64px] h-[64px] bg-dimBlue rounded-full ${styles.flexCenter}`}>
        <img src={icon} alt="icon" className='h-[50%] w-[50%] object-contain ' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins  text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
</div>
)

export default FeatureCard;
