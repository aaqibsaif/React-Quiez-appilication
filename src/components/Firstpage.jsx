import { useEffect, useState } from 'react';
import Secondpage from './Secondpage';

const Firstpage = () => {
  const [open, setOpen] = useState(false);

//   useEffect(()=>{
// const interwel = setInterval(() => {
//     if(!open){
//    const audioplay = new Audio(sound)
//    audioplay.play().catch(err=>console.log(err))
//    setOpen(true) 
//   }
// }, 10000);
// // clearInterval(interwel)
// },[])
  

  return open ? (
    <Secondpage />
  ) : (
    <div className="bg-secondary d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="text-center px-3 py-4 shadow-lg bg-light rounded w-75 ">
        <h2 className="fw-bold text-black mb-3 fs-2">
          🧠 Get Ready to Challenge Your Brain!
        </h2>
        <h4 className="fw-semibold text-black mb-2 fs-5">
          This isn't just a game—it's a battle of wits
        </h4>
        <p className="text-black mb-4 fs-6">
          Think fast, answer smart, and prove you're the quiz master! 🎯
        </p>

        <button
          type="button"
          className="btn btn-primary fs-4 fw-bold px-5 py-3 shadow rounded"
          onClick={() => setOpen(true)}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Firstpage;
