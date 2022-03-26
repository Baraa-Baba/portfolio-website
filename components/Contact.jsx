import { useRef, useEffect, useMemo, useState } from 'react'
const Contact = () => {
    const [animation, setanimation] = useState('')
    const Contact_ref = useRef(null)
    const callback = entries => {
        const [entry] = entries
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
            setanimation('slide')
        } else {
            setanimation('')
        }
    }
    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.71
        }
    }, [])
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        const currenttarget = Contact_ref.current
        if (currenttarget) observer.observe(currenttarget)

        return () => {
            if (currenttarget) {
                observer.unobserve(currenttarget)
            }
        }
    }, [Contact_ref, options])
    return (
        <div ref={Contact_ref} className="container  h-[70vh] relative bg-transparent mb-40">
            <div className={`${animation} absolute left-[-200px]`}>
                <h1 className="text-5xl text-white font-bold mb-5">Contact Me</h1>
                <form target="_blank" action="https://formsubmit.co/9d6d1a7d16373e389623c00f48207d1c" method="POST">
                    <div className="form-group">
                        <div className={`form-row `}>
                            <div className="col">
                                <input type="text" name="name" className="contact-input" placeholder="Full Name" required />
                            </div>
                            <div className="col">
                                <input type="email" name="email" className="contact-input" placeholder="Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div className={`form-group px-3  `}>
                        <textarea placeholder="Your Message" className="resize-y text-2xl max-w-[95vw] w-[30rem] bg-transparent text-white
                    border-[1px] border-white"
                            name="message" rows="6" required></textarea>
                    </div>
                    <button type="submit" className="rounded-full font-bold text-3xl border-2 
                 border-purple-800 bg-transparent shadow-lg shadow-purple-600 p-5 
                 text-white
                 hover:bg-purple-900">Submit Form</button>
                </form>
            </div>
            <style jsx>{`
            .slide {
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
}

@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}
                `}</style>
        </div>
    )
}

export default Contact