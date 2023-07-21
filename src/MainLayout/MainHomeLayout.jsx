import { Outlet } from "react-router-dom";
import Header from "../ShearSection/Header/Header";

 

const MainHomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainHomeLayout;