import {Component} from '../hyperhtml.js';

export default class Job extends Component {
	render(job) {
		return this.html`<article class="job">
			<header>
				<h3>${job.title}</h3>
			</header>
			<footer>
				<time>${new Date(job.created_at).toLocaleString()}</time>
			</footer>
		</article>`;
	}
}
