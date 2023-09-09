import NavBar from "../../components/NavBar/NavBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs());
    },[dispatch]);
    return (
        <div className={style.body}>
            <NavBar/>
            <SearchBar/>
            <CardsContainer/>
        </div>
    );
};

export default Home;