import { h, Component } from 'preact';
import { Router } from 'preact-router';

// import Header from './header';
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import Home from 'async!../routes/home';
import Search from 'async!../routes/search';
import Content from 'async!../routes/content';
import About from 'async!../routes/about';
import FairUse from 'async!../routes/fair-use';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Search path="/search/" query="" />
					<Search path="/search/:query" />
					<Content path="/content/:id" />
					<About path="/about" />
          <FairUse path="/fair-use" />
				</Router>
			</div>
		);
	}
}
