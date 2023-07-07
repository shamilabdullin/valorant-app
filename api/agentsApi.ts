import { url } from './baseApi'
import axios from 'axios'

class AgentsApi {

	private urlAgents = url + 'agents?language=ru-RU'

	public getAgents() {
		return axios.get(this.urlAgents).then(
			response => response.data.data
		)
	}

}

export const agentsApi = new AgentsApi() 