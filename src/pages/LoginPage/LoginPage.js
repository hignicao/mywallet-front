import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/wallet.png";

export default function LoginPage() {
	return (
		<LoginPageContainer>
			<LogoContainer>
				<img src={logo} alt="MyWallet logo" />
				<h1>MyWallet</h1>
			</LogoContainer>
			<Form>
				<input
					required
					// disabled={disabled}
					name="email"
					// value={loginForm.email}
					type="email"
					placeholder="E-mail"
					// onChange={changeFormData}
				/>

				<input
					required
					// disabled={disabled}
					name="password"
					// value={loginForm.password}
					type="password"
					placeholder="Senha"
					// onChange={changeFormData}
				/>

				<ButtonItem type="submit">Entrar</ButtonItem>
			</Form>
			<LinkText data-identifier="sign-up-action" to={"/cadastro"}>
				Primeira vez? Cadastre-se!
			</LinkText>
		</LoginPageContainer>
	);
}

const LoginPageContainer = styled.div`
	height: 100vh;
	padding: 80px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	img {
		width: 120px;
	}
	h1 {
		font-family: "Tulpen One", cursive;
		font-weight: 400;
		font-size: 60px;
		letter-spacing: 4px;
		line-height: 50px;
		color: #ffffff;
	}
`;

const Form = styled.form`
	width: 326px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const ButtonItem = styled.button`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const LinkText = styled(Link)`
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	text-decoration: none;
	color: #ffffff;
`;
