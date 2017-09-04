import {hyper, Component} from 'hyperhtml';

class Clock extends Component {
	get defaultState() { return {status: 'Under construction'}; }
	render() {
		return this.html`
			<p style="text-align: center">It is ${this.state.status}.</p>
		`;
	}
}

hyper(document.querySelector('main'))`${new Clock}`;
