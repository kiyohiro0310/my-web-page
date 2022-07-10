import React, { FormEvent, useEffect } from 'react'
import classes from "./contact.module.scss"
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const ref1 = React.createRef<HTMLDivElement>();
    const q1 = gsap.utils.selector(ref1);
    const nameRef = React.createRef<HTMLInputElement>();
    const mailRef = React.createRef<HTMLInputElement>();
    const messageRef = React.createRef<HTMLTextAreaElement>();

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
          gsap.to(q1("#background"), {
            x: 0,
            scrollTrigger: {
                trigger: ref1.current,
                start: "top 50%",
                end: "bottom bottom",
            }
        })

          }, [q1, ref1])

    function submitHandler(e: FormEvent) {
         e.preventDefault();
         const enteredName = nameRef.current!.value;
         const enteredMail = mailRef.current!.value;
         const enteredMessage = messageRef.current!.value;

         const data = {
          name: enteredName,
          mail: enteredMail,
          message: enteredMessage
         }
         fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
         })
         .then(res => res.json())
         .then(data => {
          window.alert("Send message Successfully");
         });
    }

  return (
    <div className={classes.container} ref={ref1}>
        <h1 className={classes.header} id="header">Contact me</h1>
        <p>If you have question or job offers, please contact me.</p>
        <form onSubmit={submitHandler}>
            <div className={classes.form_top}>
                <div className={classes.left}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' ref={nameRef} pattern="[a-zA-z]*"/>
                    <span className={classes.input_validation}>Invalid input</span>
                </div>
                <div className={classes.right}>
                    <label htmlFor="mail">Email</label>
                    <input type="mail" id='mail' ref={mailRef} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                    <span className={classes.input_validation}>Invalid input</span>
                </div>
            </div>
            <div className={classes.form_bottom}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols={30} rows={20} ref={messageRef} required/>
            </div>
            <div className={classes.button}>
                <input type="submit" value="Send Message"/>
            </div>
        </form>
        <div className={classes.background} id="background">
            <h1>Contact</h1>
        </div>
    </div>
  )
}

export default Contact