import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ColorTestPage from "./ColorTestPage";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="color-test" element={<ColorTestPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
