import { NextPage } from 'next';
import React from 'react'
import classes from "./portfoliio-card.module.scss"
import Image from 'next/image';
import Link from 'next/link';

interface propsType {
    name: string;
    url: string;
    description: string;
    imagePath: string;
}
const PortfolioCard: NextPage<propsType> = (props) => {
    const { name, description, url, imagePath } = props;

  return (
    <div className={classes.container}>
        <div className={classes.image_section}>
            <Link href={url}>
                <div>
                    <Image src={imagePath} alt={`${name} image`} width={600} height={350} />
                </div>
            </Link>
        </div>
        <div className={classes.description}>
            <h1>{name}</h1>
            <p>{description}</p>
            <Link href={url}><a>{url}</a></Link>
        </div>
    </div>
  )
}

export default PortfolioCard;