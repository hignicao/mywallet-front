import styled from "styled-components";
import Transaction from "../Transaction/Transaction";

const mockData = [
	{
		date: "30/11",
		description: "Almoço mãe",
		value: 39.9,
		balance: false,
	},
	{
		date: "27/11",
		description: "Mercado",
		value: 423.9,
		balance: false,
	},
	{
		date: "26/11",
		description: "Compras churrasco",
		value: 89.9,
		balance: false,
	},
	{
		date: "15/11",
		description: "Salário",
		value: 1230.9,
		balance: true,
	},
];

export default function BalanceCard() {
	return (
		<BalanceCardContainer>
			<Transactions>
				{mockData.map((t, i) => (
					<Transaction transaction={t} key={i} />
				))}
			</Transactions>
			<Total>
				<p>SALDO</p>
				<p>233.90</p>
			</Total>
		</BalanceCardContainer>
	);
}

const BalanceCardContainer = styled.div`
	position: relative;
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
`;

const Transactions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
