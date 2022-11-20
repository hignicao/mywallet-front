import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import IncomePage from "./pages/IncomePage/IncomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import { UserProvider } from "./providers/UserData";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<UserProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<RegistrationPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/entrada" element={<IncomePage />} />
					<Route path="/saida" element={<ExpensePage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</UserProvider>
	);
}

export default App;
