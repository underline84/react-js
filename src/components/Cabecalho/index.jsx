import styles from './Cabecalho.module.scss';
import logo from '../Cabecalho/logo.png';
import search from '../Cabecalho/search.png';

export default function Cabecalho () {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura"/>
            <di className={styles.cabecalho__container}>
                <input type="text" className={styles.cabecalho__input}
                placeholder="Busca"/>
                <img src={search} alt="ícone de lupa"/>
            </di>
        </header>
    );
}
