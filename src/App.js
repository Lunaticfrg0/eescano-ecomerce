import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import { Routes, Route } from "react-router-dom"

const Shop = () => {
  return(
    <div>
      <div>
        <h1>Shop</h1>
      </div>
    </div>
  )
}
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
  );
};
export default App;
