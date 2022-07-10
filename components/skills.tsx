import React, { useEffect, useRef } from 'react'
import SkillCard from './skillcard'
import classes from "./skills.module.scss"
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const ref1 = React.createRef<HTMLDivElement>();
  const q1 = gsap.utils.selector(ref1);

  const ref2 = React.createRef<HTMLDivElement>();
  const q2 = gsap.utils.selector(ref2);

  useEffect(() => {
    gsap.to(q1("#head"), {
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
  }, [q1, ref1])
  return (
    <div className={classes.container} ref={ref1}>
        <h1 className={classes.head} id="head">Skills</h1>
        <div className={classes.skill_card_box} >
            <SkillCard skillName="HTML5" imagePath="/images/skills/html.png"/>
            <SkillCard skillName="CSS" imagePath="/images/skills/css.png"/>
            <SkillCard skillName="Sass" imagePath="/images/skills/sass.png"/>

            <SkillCard skillName="JavaScript" imagePath="/images/skills/js.png"/>
            <SkillCard skillName="TypeScript" imagePath="/images/skills/typescript.png"/>
            <SkillCard skillName="React" imagePath="/images/skills/physics.png"/>

            <SkillCard skillName="Next.js" imagePath="/images/skills/nextjs1.png"/>
            <SkillCard skillName="Node.js" imagePath="/images/skills/nodejs1.png"/>
            <SkillCard skillName="Express" imagePath="/images/skills/node-js.png"/>

            <SkillCard skillName="Git" imagePath="/images/skills/github.png"/>
            <SkillCard skillName="MySQL" imagePath="/images/skills/mysql.png"/>
            <SkillCard skillName="Mongo DB" imagePath="/images/skills/mongodb.svg"/>

            <SkillCard skillName="Docker" imagePath="/images/skills/docker.png"/>
            <SkillCard skillName="Three.js" imagePath="/images/skills/threejs.png"/>
            <SkillCard skillName="CircleCI" imagePath="/images/skills/circleci.png"/>
        </div>
    </div>
  )
}

export default Skills