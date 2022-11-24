import React, { useRef} from 'react';
import Nav from '../Components/Nav';
import Personal from '../Components/Personal';
import Numerologic from '../Components/Numerologic';

// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faStar } from '@fortawesome/free-solid-svg-icons'
// const burger = <FontAwesomeIcon icon={faBars} />
// const star = <FontAwesomeIcon icon={faStar} />

const Homepage = () => {

    //ref
    const refNumerologic = useRef(null);
    const refPersonal = useRef(null);
    const refNum1 = useRef(null);
    const refNum2 = useRef(null);
    const refNum3 = useRef(null);
    const refNum4 = useRef(null);
    const refNum5 = useRef(null);
    const refNum6 = useRef(null);
    const refNum7 = useRef(null);
    const refNum8 = useRef(null);
    const refNum9 = useRef(null);
    const refNum11 = useRef(null);
    const refNum22 = useRef(null);
    const refNum33 = useRef(null);
    const refNum44 = useRef(null);

    
    return (
        <div className='siteWrapper'>
            {/* <Nav {...{refNum1, refNum2}}/> */}
            <Nav {...{refNumerologic, refPersonal, refNum1, refNum2, refNum3, refNum4, refNum5, refNum6, refNum7, refNum8, refNum9, refNum11, refNum22, refNum33, refNum44}}/>
            <div ref={refPersonal}><Personal/></div>
            <div ref={refNumerologic}><Numerologic {...{refNum1, refNum2, refNum3, refNum4, refNum5, refNum6, refNum7, refNum8, refNum9, refNum11, refNum22, refNum33, refNum44}} /></div>
            {/* <Main/>
            <Footer/> */}
        </div>
    );
}
 
export default Homepage;
