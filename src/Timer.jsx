{/*************************************


 IN PROGRESS





 /*************************}







 // import React, {useEffect, useRef, useState} from "react";
 //
 //
 // const formatTime = (time) => {
//     let minutes = Math.floor(time / 60)
//     let seconds = Math.floor(time - minutes * 60)
//
//     if (minutes <= 10) minutes = +minutes
//     if (seconds < 10) seconds = "0" + seconds
//     return minutes + ":" + seconds
//
// }
 //
 // export default function Timer({seconds, score, questions, setCount}) {
//     const [countDown, setCountDown] = useState(seconds)
//     const timeId = useRef()
//     useEffect(() => {
//         timeId.current = setInterval(() => {
//             setCountDown(prev => prev - 1)
//         }, 1000)
//         return () => clearInterval(timeId.current)
//     }, [])
//     // useEffect(() => {
//         if (countDown <= 0) {
//             clearInterval(timeId.current)
//             {
//                 return(
//                 <div className='score-section'>
//                     You scored {score} out of {questions.length}
//                     {/*<button onClick={handleRefreshPage}>Start Again</button>*/
}
//
//                 </div>
//                 )
//             }
//         }
//     return (
//         <h2>Timer > {formatTime(countDown)}</h2>
//     )
// }