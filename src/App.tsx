import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Error from "./pages/Error.js";
import { ThemeProvider } from "./ThemeContext.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/"
      errorElement={<Error />}
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
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
