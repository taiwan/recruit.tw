import {wire, Component} from 'hyperhtml';

const fetchList = org => {
	return fetch(`https://api.github.com/repos/${org}/jobs/issues`).then(response => response.json())
}

function Job(job) {
	return wire(job, ':entity')`<article class="job">
		<header>
			<h3>${job.title}</h3>
		</header>
		<footer>
			<time>${new Date(job.created_at).toLocaleString()}</time>
		</footer>
	</article>`;
}

export default function JobsList(props) {
	const link = `https://github.com/${props.org}/jobs/issues`;
	const style = `--color: ${props.color}`;
	return wire(props)`
 	<section class=${props.org} style=${style}>
		<header>
			<a href=${link}>
				<h2>${props.title}</h2>
			</a>
		</header>
		${{
			any: fetchList(props.org).then(jobs => wire(jobs)`
				<ul>${jobs.map(job =>
					wire(job, ':item')`<li>
						<a href=${job.html_url}>
							${Job(job)}
						</a>
					</li>`
				)}</ul>
			`),
			placeholder: wire()`<p>Loading list...</p>`
		}}
	</section>
	`;
};
