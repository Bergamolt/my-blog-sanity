import React from 'react'
import cx from 'classnames'
import classes from './index.module.scss'

import { AiFillYoutube, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import { IconType } from 'react-icons/lib'
import ScreenEgg from '../ScreenEgg'

type socialNetworksType = {
  name: string
  url: string
  icon: IconType
}

const socialNetworks: Array<socialNetworksType> = [
  {
    name: 'youtube',
    url: '#',
    icon: AiFillYoutube,
  },
  {
    name: 'instagram',
    url: '#',
    icon: AiFillInstagram,
  },
  {
    name: 'email',
    url: '#',
    icon: AiFillMail,
  },
]

type Props = {
  className?: string
}

const SocialNetworks = ({ className }: Props) => {
  return (
    <ScreenEgg type='left'>
      <ul className={cx(className, classes.list)}>
        {socialNetworks.map(({ name, url, icon: Icon }) => (
          <li key={name} className={classes.listItem}>
            <a
              href={url}
              className={classes.listLink}
              target='_blank'
              rel='noreferrer'
            >
              {React.createElement(Icon, { color: 'black', size: 24 })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks
