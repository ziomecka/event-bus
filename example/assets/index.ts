import { alert, button } from './components';

const { Pipeline } = require('../../dist');

const pipeline = new Pipeline();

button({ pipeline, parentElement: document.body }).render();
alert({ pipeline }).render();
