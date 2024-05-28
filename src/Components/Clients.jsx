import React from 'react'
import styles from '../style'
import { clients } from '../constants'



const Clients = () =>  (
  <section className={`${styles.flexCenter} my-4 `}>
    <div className={`${styles.flexCenter} flex-wrap gap-5 w-full `}>
      {clients.map((item)=>(
        <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-h-[120px]`} key={item.id}>
          <img src={item.logo} alt="clients" className='sm:w-[192px] w-[100px] object-contain ' />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
