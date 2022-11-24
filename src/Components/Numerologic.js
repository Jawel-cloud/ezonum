import React, { useRef } from 'react'
import AllData from './AllData';

const Numerologic = ({refNum1, refNum2, refNum3, refNum4, refNum5, refNum6, refNum7, refNum8, refNum9, refNum11, refNum22, refNum33, refNum44}) => {

    const refs = [refNum1,refNum2,refNum3,refNum4,refNum5,refNum6,refNum7,refNum8,refNum9,refNum11,refNum22,refNum33,refNum44];
    const nums = AllData.nums;
    const numComponents = nums.map((num,i)=> <div key={num.id} ref={refs[i]} className='numComponent'>
        <h2>{num.id}</h2>
        <p>{num.description}</p>
    </div> )


    return (
        <div className='numerologicWrapper siteComponent'>
            {numComponents}
        </div>
    );
}
 
export default Numerologic;