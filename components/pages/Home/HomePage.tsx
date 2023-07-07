import React from 'react'
import styles from './HomePage.module.sass'

export default function HomePage() {
	return (
		<div className={styles.home__page}>
			<div className={styles.promo}>
				<h3 className={styles.promo__1}>Тактический шутер с матчами 5 на 5 и уникальными персонажами</h3>
				<h1 className={styles.promo__2}>VALORANT</h1>
				<h2 className={styles.promo__1}>Скоро здесь будет что-то интересное!</h2>
			</div>
		</div>
	)
}