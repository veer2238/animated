import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Home/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/Context";



function App() {
    return (
        <BrowserRouter>
        <AppContext>
           
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category:id" element={<Category />} />
                    <Route path="/Product/:id" element={<SingleProduct />} />

                </Routes>
                <Newsletter />
                <Footer />

                </AppContext>
        

        </BrowserRouter>
    )
}

export default App;
