import { h, Component } from 'preact';
import { route } from 'preact-router';
import SearchBox from '../searchbox';
import Logo from '../logo';
import 'preact-material-components/TextField/style.css';
import style from './style.css';

const HeaderLogo = () => (
	<div className={style.HeaderLogo}>
		<Logo />
	</div>
);

export default class Header extends Component {
	linkTo = path => () => {
		route(path);
	};

	render() {
		const { query, children } = this.props;

		return (
			<div className={style.Header}>
				<HeaderLogo />
				{children.length === 0 ? (
					<SearchBox
						fields={['title', 'author']}
						onSubmit={queryValue => {
							route(`search?q=${queryValue}`);
						}}
					/>
				) : (
					children
				)}
			</div>
		);
	}
}
