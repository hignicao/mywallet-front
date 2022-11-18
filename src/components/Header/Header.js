import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Header() {
	return (
		<HeaderContainer>
			<p>Olá, Fulano</p>
			<LogoutButton onClick={() => alert("Logout")}></LogoutButton>
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
