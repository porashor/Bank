import React from "react";
import {apple, bill, google} from '../assets';
import styles, {layout} from "../style";




const Billing = ()=>(
    <section id="product" className={`${layout.sectionReverse}`}>
        <div className={`${layout.sectionReverse} sm:w-[50%]`}>
        <div>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
            <div className="aboslute z-[3]  -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" ></div>
            <div className="aboslute z-[0]  -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" ></div>
        </div>
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Easily controll your <br  className="sm:block hidden"/> billing and invoicing
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim numquam mollitia voluptatibus eveniet neque ratione in fugiat ullam, minima dolorum tenetur. Eum dolor officiis voluptatem.
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img src={apple} alt="apple-store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                <img src={google} alt="goole-play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
            </div>
        </div>
    </section>
)





export default Billing;