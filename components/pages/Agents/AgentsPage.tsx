import { agentsApi } from '@/api/agentsApi'
import React, { useEffect, useState } from 'react'
import styles from './AgentsPage.module.sass'
import { Agent } from '@/types/Agent'
import { Loader } from '@/components/valorantUI/Loader'

export default function AgentsPage() {

	const [agents, setAgents] = useState <Agent[]>([])
	const [currentAgent, setCurrentAgent] = useState <Agent | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		agentsApi.getAgents().then(
			agents => {
				setAgents(agents)
				setCurrentAgent(agents[0])
			}
		)
			.finally(() => setIsLoading(false))
	}, [])

	// const handleCurrentAgent = (agent: Agent) => {
	// 	setCurrentAgent(agent)
	// }

	return (
		<div className={styles.agents__page}>
			{isLoading ? 
				<Loader />
				:
				<div className={styles.agent}>
					<div className={styles.agents__list}>
						{agents.map(agent => (
							<div key={agent.uuid} onClick={() => setCurrentAgent(agent)}>
								{agent.displayName === currentAgent?.displayName ?
									<div className={styles.current__agent}>{agent.displayName}</div>
									:
									<div className={styles.agent__item}>{agent.displayName}</div>
								}
							</div>
						))}
					</div>
					<div className={styles.agent__wrap}>
						<div className={styles.agent__card}>
							<div>
								<img src={currentAgent?.fullPortrait} alt='Agent' width={512} height={465} style={{'border' : 'solid 1px #ff4655'}}/>
							</div>
							<div className={styles.agent__info}>
								<div className={styles.agent__info__role}>
									<h2 style={{'margin' : '4px'}}>Role</h2>
									<div className={styles.agent__info__role__description}>
										<h1>{currentAgent?.role.displayName}</h1>
										<img src={currentAgent?.role.displayIcon} alt="role" width={64} height={64} style={{'marginLeft' : '8px'}}/>
									</div>
								</div>
								<div className={styles.agent__info__bio}>
									<h2 style={{'margin' : '8px'}}>Bio</h2>
									<p>{currentAgent?.description}</p>
								</div>
							</div>
						</div>
						<div className={styles.agent__skills}>
							<div className={styles.agent__skills__title}>
								<h2>Skills</h2>
							</div>
							<div className={styles.agent__skills__description}>
								<div className={styles.agent__skills__1}>
									<h3 className={styles.agent__skill__description}>{currentAgent?.abilities[0].displayName}</h3>
									<div>
										<p>{currentAgent?.abilities[0].description}</p>
									</div>
								</div>
								<div className={styles.agent__skills__2}>
									<h3 className={styles.agent__skill__description}>{currentAgent?.abilities[1].displayName}</h3>
									<div>
										<p>{currentAgent?.abilities[1].description}</p>
									</div>
								</div>
								<div className={styles.agent__skills__3}>
									<h3 className={styles.agent__skill__description}>{currentAgent?.abilities[2].displayName}</h3>
									<div>
										<p>{currentAgent?.abilities[2].description}</p>
									</div>
								</div>
								<div className={styles.agent__skills__4}>
									<h3 className={styles.agent__skill__description}>{currentAgent?.abilities[3].displayName}</h3>
									<div>
										<p>{currentAgent?.abilities[3].description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}
