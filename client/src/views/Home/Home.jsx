import NavBar from "../../components/NavBar/NavBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getTemperaments } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import OrderBy from "../../components/OrderBy/OrderBy";
import Filter from "../../components/Filter/Filter";


const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTemperaments());
        dispatch(getDogs());
        
        
    },[dispatch]);
    return (
        <div className={style.body}>
            <NavBar/>
            <SearchBar/>  
            <Filter/>  
            <OrderBy/>
            <CardsContainer/>            
        </div>
    );
};

export default Home;