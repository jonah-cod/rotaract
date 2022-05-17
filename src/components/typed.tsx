import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js'

const Typing = () => {
    const el = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        // , 
        //                "2: Is it FAIR to all concerned?", 
        //                "3: Will it build GOODWILL and BETTER FRIENDSHIPS?", 
        //                "4: Will it be BENEFICIAL to all?"
        const typed = new Typed(el.current!, {
            strings: ["1: Is it the TRUTH? <br/> 2: Is it FAIR to all concerned? <br/> 3: Will it build GOODWILL and BETTER FRIENDSHIPS? <br/> 4: Will it be BENEFICIAL to all?"], 
            startDelay: 300,
            typeSpeed: 250,
            backSpeed: 30,
            backDelay: 100,
            loop: true,
            showCursor: false,
          });

          typed.start()
          return () => {
            typed.destroy();
          };
    }, [])
    
  return (
    <div>
      <span ref={el} style={{color: '#a18b60', fontSize: 25}}></span>
    </div>
  )
}

export default Typing