import Link from 'next/link'
import React from 'react'
import styles from './Header.module.sass'
import Image from 'next/image'
import ValorantIcon from '../public/valorant-icon.svg'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.icon}>
				<Link href={'/'}>
					<Image src={ValorantIcon} alt='icon' width={48} height={48} />
				</Link>
			</div>
			<nav className={styles.navigation}>
				<div className={styles.navButton}>
					<Link href={'/agents'}>Агенты</Link>
					{/* <div className={styles.pink__bg}>123</div> */}
				</div>
				<div className={styles.navButton}>
					<Link href={'/maps'}>Карты</Link>
				</div>
				<div className={styles.navButton}>
					<Link href={'/aboutUs'}>Обо мне</Link>
				</div>
			</nav>
		</header>
	)
}
