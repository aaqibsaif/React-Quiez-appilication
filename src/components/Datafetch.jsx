
  const Datafetch = async ()=>{

    const res = await fetch('https://the-trivia-api.com/api/questions?limit=6')
    const data =await res.json() 
    // console.log(data); 
    return data
 
}
export default Datafetch;