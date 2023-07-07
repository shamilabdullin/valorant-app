import React from 'react'
import Lottie from "lottie-react"
import loading from '../../public/loading.json'
import styles from './Loader.module.sass'

export const Loader = () => {
	return (
		<div className={styles.loading_container}>
			<div className={styles.loading}>
				<Lottie animationData={loading} style={{'width': 200}}></Lottie>
			</div>
		</div>
	)
}
