import Layout from "./pages/Layout";
import { 
		createBrowserRouter, 
		createRoutesFromElements,
		Route
	} from "react-router-dom";


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout/>}>
			<Route index element={<h2>Main AREA</h2>}></Route>
		</Route>
	)
)

export default router