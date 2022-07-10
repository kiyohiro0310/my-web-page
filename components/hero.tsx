import React, { FormEvent, Fragment, useEffect, useRef, useState } from 'react'
import classes from './hero.module.scss'
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { NextPage } from 'next';
import Router from 'next/router';

interface propsType {
  show: boolean;
  onSet: () => void;
}
const Hero: NextPage<propsType> = (props) => {
  gsap.registerPlugin(ScrollTrigger);

  const el = React.createRef<HTMLDivElement>();
  const ob_ref = React.createRef<HTMLDivElement>();

  const q = gsap.utils.selector(el);

  const clickRef = React.createRef<HTMLDivElement>();

  const tl = useRef<any>();

  useEffect(() => {
    tl.current = gsap.timeline()
    .to(q("p"), {
      y: 0,
      autoAlpha: 1,
    })
    .to(q("h1"), {
      y: 0,
      autoAlpha: 1
    })
    .to(q("div"), {
      y: 0,
      autoAlpha: 1,
    })
    .to(clickRef.current, {
      autoAlpha: 1,
      y: 0,
      delay: 1,
      yoyo: true,
      repeat: -1
    })
    gsap.to(ob_ref.current, {
      delay: 2.5,
      visibility: "hidden"
    })


  }, [q, clickRef, ob_ref]);
  useEffect(() => {
    const handleEvent = (event: Event) => {
      props.onSet();
    }

    document.getElementById("container")!.addEventListener("wheel", handleEvent);
    document.getElementById("container")!.addEventListener("scroll", handleEvent);

    return () => {
      document.getElementById("container")!.removeEventListener("wheel", handleEvent);
      document.getElementById("container")!.removeEventListener("scroll", handleEvent);

    }
  }, [props])


  function setTrueHandler() {
    props.onSet();
  }
  return (
    <Fragment>
      <div className={classes.container} ref={el} id="container">
        <div className={classes.hero_content}>
          <div>
            <p>Hi, I&apos;m Kiyohiro Kambayashi.</p>
            <h1>I develop client side and server side .</h1>
          </div>
        </div>
        <div className={classes.hero_image}>
          <div>
            <Image className={classes.image} src="/images/pngegg.png" alt="kiyo image" width={300} height={250} />
          </div>
        </div>
      </div>
      {!props.show &&
          <div className={`${classes.click} click`} ref={clickRef} onClick={setTrueHandler}>
            <Link href="#aboutme" >
              <a><Image src="/images/arrow-down.png" alt="next page" width={24} height={27} /></a>
            </Link>
          </div>
      }
      <div className={classes.invisible_obstacle} ref={ob_ref}></div>
    </Fragment>
  )
}

export default Hero