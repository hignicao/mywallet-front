import styled from "styled-components";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserData";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { toast } from "react-toastify";
import { ThreeDots } from  'react-loader-spinner'

export default function NewTransactionPage() {
	const { balance } = useParams();
	const { userData } = useContext(UserContext);
	const [transactionForm, setTransactionForm] = useState({ value: "", description: "" });
	const [disabled, setDisabled] = useState(false)
	const navigate = useNavigate();
	const loader =
	<ThreeDots
		type="Puff"
		color="#FFFFFF"
		height={23}
		width={46}
		timeout={2000}
  />

	function changeFormData(e) {
		const { name, value } = e.target;
		setTransactionForm({ ...transactionForm, [name]: value });
	}

	function submitTransaction(e) {
		e.preventDefault();

		setDisabled(true)

		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		const body = {
			description: transactionForm.description,
			value: transactionForm.value,
			balance: balance === "entrada" ? true : false,
		};

		axios
			.post(`${BASE_URL}/newtransaction`, body, config)
			.then((res) => {
				navigate("/home");
			})
			.catch((err) => {
				console.log(err);
				toast.error(`Erro ao salvar ${balance}, tente novamente!`, {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				setDisabled(false)
			});
	}

	return (
		<NewTransactionContainer>
			<HeaderContainer>
				<h2>Nova {balance}</h2>
				<BackButton onClick={() => navigate(-1)}></BackButton>
			</HeaderContainer>
			<Form onSubmit={submitTransaction}>
				<input
					required
					disabled={disabled}
					name="value"
					value={transactionForm.value}
					type="number"
					placeholder="Valor"
					onChange={changeFormData}
				/>

				<input
					required
					disabled={disabled}
					name="description"
					value={transactionForm.description}
					type="text"
					placeholder="Descrição"
					onChange={changeFormData}
				/>

				<ButtonItem	disabled={disabled} type="submit">{(disabled ? loader : `Salvar ${balance}`)}</ButtonItem>
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
