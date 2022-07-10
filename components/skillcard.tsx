import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react'
import classes from "./skillcard.module.scss"

interface propsType {
  skillName: string;
  imagePath: string;
}
const SkillCard: NextPage<propsType> = (props) => {
  const { skillName, imagePath } = props;
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Image className={classes.image} src={imagePath} alt={imagePath + " logo"} width={64} height={64} />
      </div>
      <div className={classes.right}>
        <h1>{skillName}</h1>
      </div>
    </div>
  )
}

export default SkillCard