import headerDetails from "../../library/headerDetails";
import Header from "../Header/Header";

function Signup() {
	return (
		<div className="Signup">
			<Header header={headerDetails.account.signup} />
		</div>
	);
}

export default Signup;
