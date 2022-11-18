import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/wallet.png";

export default function RegistrationPage() {
	return (
		<RegistrationPageContainer>
			<LogoContainer>
				<img src={logo} alt="MyWallet logo" />
				<h1>MyWallet</h1>
			</LogoContainer>
			<Form>
				<input
					required
					// disabled={disabled}
					name="name"
					// value={registerForm.email}
					type="text"
					placeholder="Nome"
					// onChange={changeFormData}
				/>

				<input
					required
					// disabled={disabled}
					name="email"
					// value={registerForm.password}
					type="email"
					placeholder="E-mail"
					// onChange={changeFormData}
				/>

				<input
					required
					// disabled={disabled}
					name="password"
					// value={registerForm.name}
					type="password"
					placeholder="Senha"
					// onChange={changeFormData}
				/>

				<input
					required
					// disabled={disabled}
					name="confirmPassword"
					// value={registerForm.image}
					type="password"
					placeholder="Confirme a senha"
					// onChange={changeFormData}
				/>

				<ButtonItem type="submit">Cadastrar</ButtonItem>
			</Form>
			<LinkText to={"/"}>Já tem uma conta? Faça login!</LinkText>
		</RegistrationPageContainer>
	);
}

const RegistrationPageContainer = styled.div`
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
