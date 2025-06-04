import { useState } from "react";
import { First } from "react-bootstrap/esm/PageItem";
import Firstpage from "./Firstpage";



const Thirdpage  = ({score,wronganswr})=>{
  console.log("score",score);
  console.log("wrong",wronganswr);
  
  
  
 const [backtostart,setbackstart]=useState(false)

 return (
    backtostart ? <Firstpage/>:<div className="border border-black bg-secondary" style={{ height: "100vh" }}>
  <div className="d-flex justify-content-center align-items-center " style={{ minHeight: '100%' }}>
    <div className="border border-black w-75 p-4 shadow-lg text-center bg-light">
      
      <h2 className="mb-4 text-primary">Quiz Completed!</h2>
      
      <div className="mb-3">
        <h4>Your Score</h4>
        <p className="fs-1 fw-bold text-success">{score} / 5</p>
      </div>

        <div className="mb-3">
        <p className="text-success">✅ Correct Answers:{score} </p>
        <p className="text-danger">❌ Wrong Answers:{wronganswr} </p>
      </div>
         <button className="btn btn-primary w-100 fs-5" onClick={()=>setbackstart(true)}>Back to start</button>

    </div>
  </div>
</div>
 )
}
export default Thirdpage;