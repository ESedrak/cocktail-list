import "./Header.css";

function Header({ header }) {
	return (
		<div className="Header">
			<h2>{header.header}</h2>
			<p>{header.msg}</p>
		</div>
	);
}

export default Header;
