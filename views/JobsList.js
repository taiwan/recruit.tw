import {wire, Component} from '../hyperhtml.js';
import Job from './Job.js';

const fetchList = repo => {
	return fetch(`https://api.github.com/repos/${repo}/issues`).then(response => response.json())
}

export default class JobsList extends Component {
	render(props) {
		const repo = props.repo ? props.repo : `${props.org}/jobs`;
		const link = `https://github.com/${repo}/issues`;
		const style = `--color: ${props.color}`;
		return this.html`
	 	<section class=${props.org} style=${style}>
			<header>
				<a href=${link}>
					<h2>${props.title}</h2>
				</a>
			</header>
			${{
				any: fetchList(repo).then(jobs => wire(jobs)`
					<ul>${jobs.map(job =>
						wire(job, ':item')`<li>
							<a href=${job.html_url}>
								${Job.for(this, job.id).render(job)}
							</a>
						</li>`
					)}</ul>
				`),
				placeholder: wire()`<p>Loading list...</p>`
			}}
		</section>
		`;
	}
};
