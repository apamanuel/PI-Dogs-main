import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = ()=>{
    return (
        <div className={style.body}>
            <div className={style.content}>
                <h1>Bienvenidos a Nuestra Aplicación sobre Perros</h1>
                <p>Descubre todo sobre tus amigos peludos favoritos.</p>
                <Link to='/home'>
                    <button>Entrar</button>
                </Link>
            </div>
        </div>
    );
};

export default Landing;