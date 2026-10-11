import "./StudentCard.css"

export default function StudentCard({number="first" ,name,age,major,graduated}){
    return(
        <>
        <section>
         <h3>The {number} student</h3>
         <div className="hero">
         <div className="card">
            <h3>{name}</h3>
            <span>Age : {age}</span> <br />
            <span>Major : {major}</span><br />
            <span>Graduated : {graduated}</span>
            

         </div></div>
         </section>
   </> )
}
 