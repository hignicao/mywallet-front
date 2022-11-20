import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserData";

export default function Header() {
	const { userData, setUserData } = useContext(UserContext);
	const navigate = useNavigate();

	function handleLogout() {
		localStorage.removeItem("userData");
		setUserData(undefined);
		navigate("/");
	}

	return (
		<HeaderContainer>
			<p>Olá, {userData.name}</p>
			<LogoutButton onClick={handleLogout}></LogoutButton>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		font-weight: 600;
		font-size: 26px;
		line-height: 31px;
		color: #ffffff;
	}
`;

const LogoutButton = styled(RiLogoutBoxRLine)`
	color: #ffffff;
	font-size: 26px;
`;
