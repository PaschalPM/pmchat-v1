import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import { 
		createBrowserRouter, 
		createRoutesFromElements,
		Route
	} from "react-router-dom";


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout/>}>
			<Route path="dashboard" element={<Dashboard/>}>
				<Route path="chat/:id" element={"<h2> USERS </h2>"}>
				</Route>
			</Route>
			<Route path="*" element={"Not found"}></Route>
		</Route>
	)
)

export default router