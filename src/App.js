import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/mainPage";
import ProductCard from "./components/productCard";
import ShoppingBasket from "./components/shoppingBasket";
import AddProduct from "./components/addProduct";
import LoginPage from "./components/loginPage.jsx";
import RegisterPage from "./components/registerPage";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/product" component={ProductCard} />
                <Route exact path="/basket" component={ShoppingBasket} />
                <Route exact path="/add" component={AddProduct} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
