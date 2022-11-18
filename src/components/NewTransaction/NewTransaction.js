import styled from "styled-components";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function NewTransaction({ balance }) {
	const navigate = useNavigate();

	return (
		<NewTransactionContainer>
			<HeaderContainer>
				<h2>Nova {balance ? "entrada" : "saida"}</h2>
				<BackButton onClick={() => navigate(-1)}></BackButton>
			</HeaderContainer>
			<Form>
				<input
					required
					// disabled={disabled}
					name="value"
					// value={loginForm.email}
					type="number"
					placeholder="Valor"
					// onChange={changeFormData}
				/>

				<input
					required
					// disabled={disabled}
					name="description"
					// value={loginForm.password}
					type="text"
					placeholder="Descrição"
					// onChange={changeFormData}
				/>

				<ButtonItem type="submit">Salvar {balance ? "entrada" : "saida"}</ButtonItem>
			</Form>
		</NewTransactionContainer>
	);
}

const NewTransactionContainer = styled.div`
	height: 100vh;
	padding: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;
	h2 {
		font-weight: 700;
		font-size: 26px;
		line-height: 31px;
		color: #ffffff;
		align-self: flex-start;
	}
`;

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BackButton = styled(TbArrowBackUp)`
	color: #ffffff;
	font-size: 30px;
`;

const Form = styled.form`
	width: 100%;
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
