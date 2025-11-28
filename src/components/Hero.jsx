import React, { useEffect, useState } from 'react'

function Hero() {

     const [ visible, setVisible ] = useState(false);

     useEffect(() => {
          setVisible(true);
     }, []);

     // const [ newDate, setNewDate ] = useState(new Date(Date.now()));

     // const value = (`${newDate.getHours()}:${newDate.getMinutes()}`);
     
     // const [ userTimeString, setUserTimeString ] = useState();

     // const [showColon, setShowColon] = useState(true);

     // useEffect(() => {
     //      const interval = setInterval(() => {     
     //           const newDinak = new Date(Date.now()+600000);

     //           // console.log(`${newDinak.getHours() > 12 ? (newDinak.getHours()-12) : (newDinak.getHours())}`);

     //           let hrs;
     //           let min;


     //           if (newDinak.getHours()>12) hrs = newDinak.getHours()-12;
     //           else hrs = newDinak.getHours();

     //           if (newDinak.getMinutes()<10) min = '0'+newDinak.getMinutes();
     //           else min = newDinak.getMinutes();

     //           console.log(showColon);
     //           let sym = `${showColon ? (":") : (" ")}`;
     //           setUserTimeString(`${hrs}${sym}${min}${newDinak.getHours()<12 ? ("am"):("pm")}`);

     //           setShowColon((prev) => !prev);
     //      }, 1000);

     //      return () => clearInterval(interval);
     // }, []);

     // const [showColon, setShowColon] = useState(true);
     // const [userTimeString, setUserTimeString] = useState("");
     
     // useEffect(() => {
     //      const interval = setInterval(() => {
     //           const now = new Date();
     //           const newDinak = new Date(now.getTime() + 10 * 60000); // +10 minutes

     //           let hrs = newDinak.getHours() % 12 || 12; // convert to 12-hour format
     //           let min = newDinak.getMinutes().toString().padStart(2, "0");

     //           const sym = showColon ? ":" : " ";

     //           const msg = (`${hrs}${sym}${min} ${newDinak.getHours() < 12 ? "am" : "pm"}`);

     //           setUserTimeString(msg);
     //      }, 1000);

     //      return () => clearInterval(interval);
     // }, []);
     
     // useEffect(() => {
     //      const blinkinterval = setInterval(() => setShowColon(prev => !prev), 500);
     //      return () => clearInterval(blinkinterval);
     // }, []);

     const [ time, setTime ] = useState(new Date());
     const [ showColon, setShowColon ] = useState(true);
     
     const [ newDate, setNewDate ] =  useState(new Date(time.getTime() + 10*60000));       

     const [ hrs, setHrs ] = useState(newDate.getHours() % 12 || 12);
     const [ min, setMin ] = useState(newDate.getMinutes().toString().padStart(2, "0")) ;
     const [ AmPm, setAmPm ] = useState((newDate.getHours() < 12) ? "am" : "pm");

     useEffect(() => {
          const interval = setTimeout(() => {
               setTime(new Date());
               
               setNewDate(new Date(time.getTime() + 10*60000));
               setHrs(newDate.getHours() % 12 || 12);
               setMin(newDate.getMinutes().toString().padStart(2, "0"));
               setAmPm((newDate.getHours() < 12) ? "am" : "pm");
          }, 60000);

          return () => clearInterval(interval);
     }, []);

     useEffect(() => {
          const blink = setTimeout(() => {
               setShowColon(prevState => !prevState);
          }, 500);

          return () => clearInterval(blink);
     }, [showColon]);

  return (
     <div className='px-4 py-2 flex flex-col justify-center items-center z-10 my-20'>
          
          <button className={`transition-opacity mt-15 delay-700 duration-1000 ease-in inline-block py-1 px-4 rounded-4xl z-10 bg-zinc-100 hover:bg-zinc-200/50 border border-zinc-200 cursor-pointer text-sm font-ABCOracle ${visible ? "opacity-100" : "opacity-0"}`}>
               We're hiring Founding Ruby Engineers 
               <span className='text-zinc-500  left-2 relative'>&rarr;</span>
          </button>

          <div className="flex flex-col items-center mt-10">
               <h1 className={`text-6xl font-bold mt-1 font-ABCOracle transition-opacity duration-700 ease-in ${visible ? "opacity-100" : "opacity-0"}`}>
                    Magically simplify
               </h1>
               <h1 className={`text-6xl font-bold mt-1 font-ABCOracle transition-opacity duration-700 ease-in ${visible ? "opacity-100" : "opacity-0"}`}>     
                    accounting and taxes
               </h1>
          </div>

          <div className='flex flex-col items-center mt-10'>
               <p className={`text-zinc-600 font-ABCOracle transition-opacity delay-700 duration-1000 ease-in ${visible ? "opacity-100" : "opacity-0"}`}>
                    Automated bookkeeping. Effortless tax filing. Financial clarity.
               </p>
               <p className={`text-zinc-600 font-ABCOracle transition-opacity delay-700 duration-1000 ease-in ${visible ? "opacity-100" : "opacity-0"}`}>
                    {`Set up in 10 mins. Back to building by ${hrs}${showColon ? ":" : " "}${min} ${AmPm}`}
               </p>
          </div>

          <div className={`flex items-center gap-4 mt-4 transition-opacity delay-700 duration-1000 ease-in ${visible ? "opacity-100" : "opacity-0"}`}>
               <button
                    className='text-white font-medium font-ABCOracle bg-[#2679F3] hover:bg-[#2262C7] py-2 px-4 rounded-xl shadow-sm shadow-neutral-400 z-10 text-shadow-md cursor-pointer'
               >Get started</button>
               <button
                    className="font-ABCOracle font-medium hover:bg-slate-400/20 py-2 px-4 rounded-xl cursor-pointer z-10"
               >Pricing <span className='text-zinc-500  left-2 relative'>&rarr;</span></button>
          </div>

          <div className={`mt-5 text-zinc-500/60 text-xs transition-opacity delay-700 duration-1000 ease-in ${visible ? "opacity-100" : "opacity-0"}`}>For US-based startups.</div>
     </div>
  )
}

export default Hero