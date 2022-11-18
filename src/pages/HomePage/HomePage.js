import styled from "styled-components";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import Header from "../../components/Header/Header";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function HomePage() {
	return (
		<HomePageContainer>
			<Header />
			<BalanceCard />
			<InAndOut>
				<button>
					<AiOutlinePlusCircle />
					<p>Nova entrada</p>
				</button>
				<button>
					<AiOutlineMinusCircle />
					<p>Nova saída</p>
				</button>
			</InAndOut>
		</HomePageContainer>
	);
}

const HomePageContainer = styled.div`
	padding: 25px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 25px;
`;

const InAndOut = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	button {
		width: 100%;
		height: 114px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		font-weight: 700;
		font-size: 25px;
		line-height: 20px;
		p:nth-child(2) {
			text-align: left;
			width: 30%;
			font-size: 17px;
		}
	}
`;