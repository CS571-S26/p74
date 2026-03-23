import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
