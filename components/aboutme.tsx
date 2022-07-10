import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import classes from './aboutme.module.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
    const el = React.createRef<HTMLDivElement>();
    const q = gsap.utils.selector(el);

    useEffect(() => {
        gsap.to(q("#image_section"), {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: el.current,
                start: "top 60%",

            }
        })
        gsap.to(q("#content"), {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: el.current,
                start: "top 30%",
            }
        })
        gsap.to(q("#background"), {
            x: 0,
            scrollTrigger: {
                trigger: el.current,
                start: "top 20%",
                end: "bottom bottom",

            }
        })
    })
  return (
    <div className={classes.container} ref={el} id="aboutme">
        <div className={`${classes.image_section} image_section`} id="image_section">
            <div className='image'>
                <Image className={`${classes.image} image`} src="/images/IMG_6506.jpeg" alt="kiyo image" width={300} height={400}/>
            </div>
        </div>
        <div className={`${classes.content}`} id="content">
            <div>
                <h1>Kiyohiro Kambayashi.</h1>
                <p>
                    Glad to see you here! <br />
                    I&apos;m fullstack developer. <br />
                    I&apos;m realy into the technology that makes page load speed faster
                    for user exeperience such as Next.js.
                </p>
            </div>
        </div>
        <div className={classes.background} id="background">
            <h1>About me</h1>
        </div>
    </div>
  )
}

export default Aboutme