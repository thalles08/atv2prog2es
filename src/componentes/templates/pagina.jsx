import Cabecalho from "./cabecalho";
import Menu from "./menu";

export default function Pagina(props) {
    return (
        <div>
            <Cabecalho titulo="Sistema de Controle de Clientes"/>
            <Menu />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}