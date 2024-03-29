import Image from 'next/image'
import githubicon from '../assets/icons/github.png'
import twittericon from '../assets/icons/twitter.png'
import devtoicon from '../assets/icons/devtoicon.png'
import freelancericon from '../assets/icons/freelancer_com.jpg'
import mostqelicon from '../assets/icons/mostqel.png'
import { useEffect, useState, useMemo, useRef } from 'react'
const Card = ({ img, header, text, links, index }) => {
  const [isInstant,setisInstant]=useState(1)
  const [typingtext, settypingtext] = useState()
  const [isMobile,setIsmobile]=useState(false)
  const [typingfinished, settypingfinished] = useState(false)
  const [icons, seticons] = useState()
  const [runedfunc, setrunedfunc] = useState(false)
  var typingtextC = ''
  useEffect(()=>{
    //if mobile we remove the typing effect
    if(window.innerWidth<860){
      setisInstant(0)
      setIsmobile(true)
      type()
    }else{
      setisInstant(0)
      setIsmobile(false)
    }
  },[])
  function type() {
    if(!runedfunc&&isMobile){
      settypingtext(text)
    }
    if (!runedfunc&&!isMobile) {
      setrunedfunc(true)
      for (var i = 0; i < text.length; i++) {
        setTimeout(() => {
          if (i == text.length - 1) {
            settypingfinished(true)
            if (links == 'GTD') {
              seticons(<><a target={'_blank'} tabIndex={6} rel="noreferrer" title='github' className='fade-in mr-[auto]' href="https://github.com/baraa-baba">
                <Image src={githubicon} alt='github  link' height='75' width='75' />
              </a> <a tabIndex={7} target={'_blank'} title='twitter' rel="noreferrer"
                className='m-auto fade-in'
                href="https://twitter.com/baraa_baba">
                  <Image src={twittericon} alt='twitter link' height='75' width='75' />
                </a>
                <a tabIndex={8} target={'_blank'} title='dev.to' rel="noreferrer"
                  className='m-auto fade-in'
                  href="https://dev.to/baraa_baba">
                  <Image src={devtoicon} alt='dev.to  link' height='75' width='75' />
                </a>
              </>)
            }
            else if (links == 'FM') {
              seticons(<><a target={'_blank'} tabIndex={10} rel="noreferrer" title='freelancer'
                className=' fade-in  align-between justify-between'
                href="https://www.freelancer.com/u/baraa12baba">
                <Image src={freelancericon} alt='freelancer icon' height='75' width='75' />
              </a> <a target={'_blank'} tabIndex={11} rel="noreferrer" title='mostqel'
                className='fade-in  align-between justify-between'
                href="https://mostaql.com/u/Baraa1Baba">
                  <Image src={mostqelicon} alt='mostqel icon' height='75' width='75' />
                </a>
              </>)

            }
          }
          typingtextC += text[i]
          settypingtext(typingtextC)
        }, 50 * i*isInstant)
      }
    }
  }

  const Card = useRef(null)
  const callback = entries => {
    const [entry] = entries
    if (entry.isIntersecting) {
      if (!runedfunc) {
        type()
      }
    }
  }
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const currenttarget = Card.current
    if (currenttarget) observer.observe(currenttarget)

    return () => {
      if (currenttarget) {
        observer.unobserve(currenttarget)
      }
    }
  }, [Card, options, runedfunc])
  return (
    <div tabIndex={index} id="card" ref={Card} aria-label={text} className={`w-[95vw] bg-card 
     mr-0 sm:min-h-[20rem]
    mt-10 sm:w-[60vw] p-6 ${img} 
     max-w-[100vw] sm:ml-[3vw] lg:w-[30vw] ml-0 block z-30 lg:inline-block h-fit`}>
      {/*a trick so I can make all cards's height the same*/}

      <h1 data-text={header} className={`orange-color text-4xl sm:text-4xl md:text-2xl lg:text-4xl
       typing w-fit mb-5 inline-block`}>
        {header} </h1>


      <p aria-hidden className='card-text font text-white text-3xl '>
        {typingtext}
        {!typingfinished ? <span className='text-red-800'>|</span> : null}
      </p>
      <div className='flex justify-between align-between'>{icons}</div>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
      .card-text{
        font-family: 'Koulen';
         letter-spacing: 2px; 
      }
      .typing {
            font-weight:900;
            text-transform:uppercase;
            position: relative;
            white-space: nowrap;
            letter-spacing:4px;
            max-width: fit-content;
            display: inline-block;
            color:transparent;
            -webkit-text-stroke: 0.1rem 
        #F5A42A;
          
        
        }
        .typing::before{
          content: attr(data-text)  ;
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
        color:#F5A42A ;
          border-right: 3px solid 
        #F5A42A;
          overflow: hidden;
          animation: fill 4s alternate linear infinite;
          animation-delay: 3s;
        }
        @keyframes fill{
         0%{
            width:100%;
            }
          70% ,100%{
            width:0%;
          }
        }
        `}</style>
    </div>
  )
}
export default Card