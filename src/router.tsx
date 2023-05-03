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
			</Route>
			<Route path="chat" element={<Dashboard/>}/>
			<Route path="chat/:id" element={<Dashboard/>}/>
			<Route path="*" element={"Not found"}></Route>
		</Route>
	)
)

export default router