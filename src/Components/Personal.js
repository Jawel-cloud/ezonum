import AllData from './AllData';
import React, { useState } from 'react';
// import {motion} from 'framer-motion'; // npm install framer-motion

const Personal = () => {

const [anim, setAnim] = useState(false);
const [myDate, setMyDate] = useState('');
const [number, setNumber] = useState(0);
const [numerologic, setNumerologic] = useState('');
// const [numerologicR, setNumerologicR] = useState('');
const [bornValid, setBornValid] = useState(false);
const nums = AllData.nums;

const sum = (inputNumber) =>{
    let numb = parseInt(inputNumber);
    let score = 0;
        while (numb !== 0){
            while (numb !== 0){
            score += numb%10;
            numb = Math.floor(numb/10);
        }
        // if (score > 9 && score !==11 && score !== 22 && score !== 33 && score !== 44){
            if (score > 9){
            numb = score;
            score=0;
        }
    }
    return score;
}

const handleChangeMyDate = (e)=>{
    setMyDate(e.target.value);
    setAnim(false);
}

const ValidBirthInfo = () => { 
    return(
        <>
        {/* <motion.div animate={{scale:1}} initial={{scale: anim? 0: 1}} transition={{type:'twin', duration: 2}}> */}
        {/* <motion.div animate={{scale:1}} initial={{scale: 0}}> */}
        <p>Urodziłeś się: {myDate}</p>
        <h2>Twoja liczba to: {number}</h2>
        <p>{numerologic}</p>
        {/* <p>{numerologicR}</p> */}
        {/* <motion.div animate={{x:100}}>Testowa animacja</motion.div> */}
        {/* </motion.div> */}
        </>
    )
}
const InValidBirthInfo = () => {
    return(
        <>
        <h3>Uzupełnij datę urodzenia</h3>
        </>
    )
}


const handleSubmit = (e)=>{
    e.preventDefault();
    let dateNumbers = parseInt(myDate.replaceAll('-',''));
    if (!isNaN(dateNumbers)){
        let myNum =sum(dateNumbers)
        let myNumData = nums.filter(num=> num.id === myNum);
        setNumber(sum(dateNumbers));
        setNumerologic(myNumData[0].description);
        // setNumerologicR(myNumData[0].relationship)
        setBornValid(true);     
        setAnim(true);
    }else{
        setBornValid(false);
    }
    
}

    return (
        <div className='personalWrapper siteComponent'>
            <form onSubmit={handleSubmit} noValidate>
                {/* <label htmlFor='Date'>Data urodzenia */}
                <input type='date' id='Date' value={myDate} onChange={handleChangeMyDate}/>
                {/* </label> */}
                <button id='buttonBirth'>Oblicz</button>
                {/* <div className='validInfo'>{bornValid? <ValidBirthInfo/> : <InValidBirthInfo/>}</div> */}
                {/* <motion.div animate={{rotate: bornValid? 360: 0}}> */}
                    {bornValid? <div className='validInfo'><ValidBirthInfo/></div> : <div className='invalidInfo'><InValidBirthInfo/></div>}
                {/* </motion.div> */}
            </form>
        </div>
    );
}
 
export default Personal;
// style={{transform:`rotate(${80}deg)`}}