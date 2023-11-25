import React from "react";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";
function Summary() {
    const results = [
        {
            img: iconReaction,
            text: 'Reaction',
            value: 80,
            total: 100,
            bg: 'bg-primary-lightRed'

        },
        {
            img: iconMemory,
            text: 'Memory',
            value: 92,
            total: 100,
            bg: 'bg-primary-orangeyYellow'

        },
        {
            img: iconVerbal,
            text: 'Verbal',
            value: 61,
            total: 100,
            bg: 'bg-primary-greenTeal'
        },
        {
            img: iconVisual,
            text: 'Visual',
            value: 72,
            total: 100,
            bg: 'bg-primary-cobaltBlue'

        },
    ];
  
  return (
    <div className="  w-full md:w-1/2  p-5 box-border shadow-2xl flex flex-col justify-between ">
        <h2 className="font-extrabold py-5 md:pb-5 md:py-0 text-2xl">Summary</h2>
        <div className="flex flex-col gap-5  ">
                    { results.map((item)=>{
                        return (
                    // const [img, text, value, total] = item
                    <div className={`${item.bg} flex justify-between p-4  bg-opacity-10 rounded-lg`}>
                        <p className="flex">
                            <img src={item.img}/>
                            <span className="mx-5">{item.text}</span></p>
                        <p>
                            <span className="font-bold">{item.value}</span>/
                            <span>{item.total}</span>
                        </p>
                        
                    </div>
                )
            })}
            
        <button className="py-3 px-10 text-bold text-2xl bg-black mt-3 align-middle text-white rounded-full ">Countinue</button>
        </div>

    </div>
  )
}

export default Summary