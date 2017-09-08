import {hyper, Component} from 'hyperhtml';
import JobsList from './views/JobsList.js';

document.addEventListener("DOMContentLoaded", function() {
	hyper(document.querySelector('main'))`${[
		JobsList({title: 'F2E', org: 'f2etw', color: '#E44D26'}),
		JobsList({title: 'NodeJS', org: 'nodejs-tw', color: '#43853d'}),
		JobsList({title: 'Golang', org: 'golangtw', color: '#375EAB'})
	]}`;
});
