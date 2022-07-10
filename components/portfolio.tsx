import React, { useEffect } from 'react'
import PortfolioCard from './portfolio-card'
import classes from "./portfolio.module.scss"
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const imagePath = "/images/portfolio/"

    const ref1 = React.createRef<HTMLDivElement>();
    const q1 = gsap.utils.selector(ref1);

    useEffect(() => {
        gsap.to(q1("#header"), {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: ref1.current,
              start: "top 60%",
            }
          })
          gsap.to(q1("div"), {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: ref1.current,
              start: "top 40%",
            }
          })
          gsap.to(q1("#background"), {
            x: 0,
            scrollTrigger: {
                trigger: ref1.current,
                start: "top 15%",
                end: "bottom bottom",

            }
        })

          }, [q1, ref1])
  return (
    <div className={classes.container} ref={ref1} >
        <h1 className={classes.header} id="header">Portfolio</h1>
        <div className={classes.portfolio_container}>
            <PortfolioCard
                name='My web application'
                url="https://kiyo-web-app.vercel.app/"
                imagePath={imagePath + "my-web-app.png"}
                description='I made Next.js web application using mongo DB.'
            />
            <PortfolioCard
                name='ML Strength'
                url="https://tafe-ml-strength.netlify.app/"
                imagePath={imagePath + "mlstrength.png"}
                description='This webpage was created for Tafe assignment task.'
            />
            <PortfolioCard
                name='ABC Optical'
                url="https://kiyohiro-abc-optical.netlify.app/"
                imagePath={imagePath + "abc-optical.png"}
                description='This webpage was created for Tafe assignment task.'
            />
            <PortfolioCard
                name='My dev world'
                url="https://kiyodev31.vercel.app/"
                imagePath={imagePath + "threejs.png"}
                description='This webpage is using library for three.js with react.'
            />

        </div>
        <div className={classes.background} id="background">
            <h1>Portfolio</h1>
        </div>
    </div>
  )
}

export default Portfolio