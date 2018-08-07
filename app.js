import {Component} from './hyperhtml.js';
import JobsList from './views/JobsList.js';

const groups = [
	{title: 'F2E', org: 'f2etw', color: '#E44D26'},
	{title: 'NodeJS', org: 'nodejs-tw', color: '#43853d'},
	{title: 'Golang', org: 'golangtw', color: '#375EAB'},
	{title: 'C++', repo: 'whitglint/cppjobs', color: '#00599C'},
	{title: 'Java', org: 'twjug', color: '#51D5B6'}
];

export default class App extends Component {
    render() {
        return this.html`${groups.map(group => JobsList.for(groups, group.org || group.repo).render(group))}`;
    }
}
