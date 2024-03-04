const Exponent = ({ count, power }) => {

    let countString = `${count} * `.repeat(power).slice(0, -3)
    
    return (
    <div className="exponent-counter-container">
     <p className="exponent-label">{count}<sup>{power}</sup></p>
     <p className="exponent-result">{countString} = <span className="total">{count ** power}</span></p>
   </div>
 )};
 
 export default Exponent;