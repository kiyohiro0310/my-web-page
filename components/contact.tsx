import React, { FormEvent, useEffect } from 'react'
import classes from "./contact.module.scss"
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
        gsap.to(q1("p"), {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: ref1.current,
              start: "top 50%",
            }
          })

        gsap.to(q1("form"), {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: ref1.current,
              start: "top 40%",
            }
          })
          }, [q1, ref1])

    function submitHandler(e: FormEvent) {
         e.preventDefault();
    }

  return (
    <div className={classes.container} ref={ref1}>
        <h1 className={classes.header} id="header">Contact me</h1>
        <p>If you have question or job offers, please contact me.</p>
        <form onSubmit={submitHandler}>
            <div className={classes.form_top}>
                <div className={classes.left}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' />
                </div>
                <div className={classes.right}>
                    <label htmlFor="mail">Email</label>
                    <input type="mail" id='mail'/>
                </div>
            </div>
            <div className={classes.form_bottom}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols={30} rows={20} />
            </div>
            <div className={classes.button}>
                <input type="submit" value="Send Message"/>
            </div>
        </form>
    </div>
  )
}

export default Contact