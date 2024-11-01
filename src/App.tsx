import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./Sobre-Nos/About.js";
import Contact from "./Contato/Contact.js";
import Error from "./error/Error.js";
import { ThemeProvider } from "./ThemeContext.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/TCC-TI/"
      errorElement={<Error />}
    >
      <Route index element={<Home />} />
      <Route path="Sobre-Nos" element={<About />} />
      <Route path="Contato" element={<Contact />} />
    </Route>
    
  )
)

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
