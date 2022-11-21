import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/wallet.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BASE_URL } from "../../constants/urls";

export default function RegistrationPage() {
	const [registerForm, setResgisterForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
	const navigate = useNavigate();

	function register(e) {
		e.preventDefault();

		axios
			.post(`${BASE_URL}/signup`, registerForm)
			.then((res) => {
				toast.success(`Cadastro criado com sucesso!`, {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Erro ao criar cadastro, por favor verifique as informações e tente novamente", {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	}

	function changeFormData(e) {
		const { name, value } = e.target;
		setResgisterForm({ ...registerForm, [name]: value });
	}

	return (
		<RegistrationPageContainer>
			<LogoContainer>
				<img src={logo} alt="MyWallet logo" />
				<h1>MyWallet</h1>
			</LogoContainer>
			<Form onSubmit={register}>
				<input required name="name" value={registerForm.name} type="text" placeholder="Nome" onChange={changeFormData} />

				<input required name="email" value={registerForm.email} type="email" placeholder="E-mail" onChange={changeFormData} />

				<input required name="password" value={registerForm.password} type="password" placeholder="Senha" onChange={changeFormData} />

				<input required name="confirmPassword" value={registerForm.confirmPassword} type="password" placeholder="Confirme a senha" onChange={changeFormData} />

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
