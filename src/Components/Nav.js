const Nav = ({refPersonal, refNum1, refNum2, refNum3, refNum4, refNum5, refNum6, refNum7, refNum8, refNum9, refNum11, refNum22, refNum33, refNum44}) => {
    
    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    const navElements = [
    {id:0, name:'Personal', ref:refPersonal},
    {id:1, name:'1', ref:refNum1},
    {id:2, name:'2', ref:refNum2},
    {id:3, name:'3', ref:refNum3},
    {id:4, name:'4', ref:refNum4},
    {id:5, name:'5', ref:refNum5},
    {id:6, name:'6', ref:refNum6},
    {id:7, name:'7', ref:refNum7},
    {id:8, name:'8', ref:refNum8},
    {id:9, name:'9', ref:refNum9},
    // {id:11, name:'11', ref:refNum11},
    // {id:22, name:'22', ref:refNum22},
    // {id:33, name:'33', ref:refNum33},
    // {id:44, name:'44', ref:refNum44}
    ];

    const navElementComponents = navElements.map(navElement=>
    <button className='nav-buttons-btn' key={navElement.id} onClick={()=>scrollToRef(navElement.ref)}>
    {navElement.name}</button>)


    return (
        <div className='navWrapper siteComponent'>
            <h1 className='siteName'>Numezo</h1>
            {navElementComponents}
        </div>
    );
}
 
export default Nav;