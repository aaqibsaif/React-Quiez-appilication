import { useEffect, useRef, useState } from "react";
import Thirdpage from "./Thirdpage";
import Datafetch from "./Datafetch.jsx";
import sound from '../assets/game-music.mp3'
import coin from '../assets/coin.mp3'
import { use } from "react";
const Secondpage = () => {

  const [data, setdata] = useState([]);

  const [index, setindex] = useState(0);

  const [score, setscore] = useState(0);
  
  const[wronganswr,setwronganswer] = useState(0)

  const [showmsg, setshowmsg] = useState(false);

  const [msg, setmsg] = useState("");
  
  const [click, setclick] = useState(false);

  const [removetic,setremovetic] = useState('')
 
  // const [audioplaye,setaudioplay] = useState(false)

  // const[coins,setcoins]=useState(false)

  useEffect(() => {
    Datafetch().then((res) => setdata(res));
  }, []);
  const clickhandlar = () => {
    if (index === data.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
      setclick(false)
      setmsg("");
    }
  };

// const audeoref = useRef()
// useEffect(()=>{
//     audeoref.current = new Audio(sound)
//     if(index < data.length-1){
//       setaudioplay(true) 
  
//   audeoref.current.play().catch(err=>console.log(err))
//   }else if(index >= data.length-1){
//     setaudioplay(false)
//     audeoref.current.pause()
// }
// },[data,audioplaye])


useEffect(()=>{
    if(msg === "wrong" || msg === "right"){
      // setcoins(true)
   const playcoin= new Audio(coin)
  playcoin.play().catch((err)=>console.log(err))
      }
},[msg])


  const randomdata = [
    data[index]?.incorrectAnswers[0],
    data[index]?.incorrectAnswers[1],
    data[index]?.incorrectAnswers[2],
    data[index]?.correctAnswer,
  ];
  const dta = randomdata.sort(() => Math.random() - 0.5);
  // console.log("===========>", data[index]?.correctAnswer);

  const valuehandlar = (e) => {
    console.log(e.target);
     setremovetic(e.target.value)
    if (data[index]?.correctAnswer === e.target.value) {
      setscore(score + 1);
      setshowmsg(true);
      setmsg("right");
   
    } else {
      setshowmsg(false);
      setwronganswer(wronganswr+1)
      setmsg("wrong");

    }
     setclick(true)
     

  };




  
  return index === data.length - 1 ? (
    <Thirdpage score={score} wronganswr={wronganswr} />
  ) : (
    <div
      className="d-flex justify-content-center align-items-center bg-secondary"
      style={{ height: "100vh" }}
    >
      <div className="shadow-lg w-75 p-4 bg-light border border-black rounded">
        <div className="text-center mb-4">
          <h2 className="text-primary">Question {index + 1}</h2>
          <p className="fs-4 fw-semibold text-dark">{data[index]?.question}</p>
        </div>

        <div className="d-flex flex-column gap-3 px-5">
          <div className="form-check">
            <input
              type="radio"
              id="option1"
              name="quiz"
              value={dta[0]}
              className="form-check-input"
              onChange={valuehandlar}
              disabled={click}
              checked={removetic === dta[0]}
           
            />
            <label htmlFor="option1" className="form-check-label fs-5">
              {dta[0]}
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              id="option2"
              name="quiz"
              className="form-check-input"
              value={dta[1]}
              onChange={valuehandlar}
              disabled={click}
                checked={removetic === dta[1]}
           
            />
            <label htmlFor="option2" className="form-check-label fs-5">
              {dta[1]}
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              id="option3"
              name="quiz"
              className="form-check-input"
              value={dta[2]}
              onChange={valuehandlar}
              disabled={click}
              checked={removetic === dta[2]}
            
            />
            <label htmlFor="option3" className="form-check-label fs-5">
              {dta[2]}
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              id="option4"
              name="quiz"
              className="form-check-input"
              value={dta[3]}
              onChange={valuehandlar}
              disabled={click}
                checked={removetic === dta[3]}
             
            />
            <label htmlFor="option4" className="form-check-label fs-5">
              {dta[3]}
            </label>
          </div>
           
           <div className="d-flex justify-content-center">
             <h3>{msg}</h3>
           </div>
          <button
            className="btn btn-primary mt-4 fs-5 fw-bold shadow"
            onClick={clickhandlar}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
