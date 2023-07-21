import { InputGroup } from "react-bootstrap";
import HomeTabs from "../../Components/Tabs/HomeTabs/HomeTabs";
import Banner from "./Banner/Banner";
import { FaSearch, FaUser, FaUsers } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { BiSolidPencil, BiErrorCircle } from 'react-icons/bi';

import './HomeStyle.css'
import { useContext } from "react";

const Home = () => {
 
    return (
        <div className="">

            <Banner></Banner>
            <div className="d-flex flex-sm-none mainWidth">
                <div className="flex-grow-1 "><HomeTabs></HomeTabs></div>

                <div className="mtop  d-none d-lg-block">
                    <div className="d-flex gap-5">
                        <button type="button" className="btn btn-secondary">Write a Post</button>
                        <button type="button" className="btn btn-primary"><FaUsers></FaUsers> Join Group</button>
                     </div>
                    <hr />

                    <div>
                        <div className="container mt-5">
                            <InputGroup>
                                <InputGroup.Text>
                                    <ImLocation2 className="input-icon" />
                                </InputGroup.Text>
                                <input type="text" className="form-control" placeholder="Noida, India" />
                                <InputGroup.Text>
                                    <BiSolidPencil className="end-icon" />
                                </InputGroup.Text>
                            </InputGroup>
                        </div>

                        <div className="d-flex gap-3 errorMt align-items-center justify-content-center" >
                            <BiErrorCircle></BiErrorCircle>
                            <p style={{ maxWidth: '250px' }}>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
