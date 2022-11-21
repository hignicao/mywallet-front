import styled from "styled-components";
import Transaction from "../Transaction/Transaction";
import { accentColor, baseColor, expenseColor, incomingColor, textColor } from "../../constants/colors";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserData";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

export default function BalanceCard() {
	const { userData } = useContext(UserContext);
	const [transactions, setTransactions] = useState(undefined);
	const [balance, setBalance] = useState(0);

	function calcBalance(transactions) {
		const incomes = transactions.filter((transaction) => transaction.balance === true);
		const expenses = transactions.filter((transaction) => transaction.balance === false);
		const incomesSum = incomes.reduce((acc, curr) => acc + curr.value, 0);
		const expensesSum = expenses.reduce((acc, curr) => acc + curr.value, 0);
		setBalance(incomesSum - expensesSum);
	}

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		axios
			.get(`${BASE_URL}/balance`, config)
			.then((res) => {
				setTransactions(res.data);
				calcBalance(res.data);
			})
			.catch((err) => {
				toast.error("Erro ao carregar hábitos, tente novamente!", {
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
	}, [userData.token]);

	if(transactions === undefined) {
		return (
			<BalanceCardContainerEmpty>
				<ColorRing
					visible={true}
					height="150"
					width="150"
					ariaLabel="blocks-loading"
					wrapperStyle={{}}
					wrapperClass="blocks-wrapper"
					colors={[accentColor, baseColor, accentColor, baseColor, accentColor]}
				/>
				<p>Carregando...</p>
			</BalanceCardContainerEmpty>
		);
	}

	if (transactions.length === 0) {
		return (
			<BalanceCardContainerEmpty>
				<p>Não há registros de entrada ou saída</p>
			</BalanceCardContainerEmpty>
		);
	}

	return (
		<BalanceCardContainer>
			<Transactions>
				{transactions.map((t, i) => (
					<Transaction transaction={t} key={i} />
				))}
			</Transactions>
			<Total balance={balance}>
				<p>SALDO</p>
				<p>{balance.toFixed(2)}</p>
			</Total>
		</BalanceCardContainer>
	);
}

const BalanceCardContainerEmpty = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	border-radius: 5px;
	padding: 25px 15px 15px 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	p {
		width: 60%;
		text-align: center;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		color: ${textColor};
	}
`;

const BalanceCardContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	border-radius: 5px;
	padding: 25px 15px 15px 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 25px;
	font-size: 17px;
	line-height: 20px;
	overflow: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

const Total = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	p:nth-child(1) {
		font-weight: 700;
	}
	p:nth-child(2) {
		font-weight: 500;
		color: ${({ balance }) => (balance >= 0 ? incomingColor : expenseColor)};
	}
`;

const Transactions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
