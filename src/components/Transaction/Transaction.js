import styled from "styled-components";
import { textColor, incomingColor, expenseColor } from "../../constants/colors";

export default function Transaction({ transaction }) {
	const { date, description, value, balance } = transaction;

	return (
		<TransactionElement balance={balance}>
			<div>
				<p>{date}</p>
				<p>{description}</p>
			</div>
			<p>{value.toFixed(2)}</p>
		</TransactionElement>
	);
}

const TransactionElement = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	div {
		display: flex;
		align-items: center;
		gap: 10px;
		p:nth-child(1) {
			font-weight: 500;
			color: ${textColor};
		}
	}
	> p {
		font-weight: 500;
		color: ${({ balance }) => (balance ? incomingColor : expenseColor)};
	}
`;
