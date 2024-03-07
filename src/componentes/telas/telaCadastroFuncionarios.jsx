import FormCadFuncionarios from "../formularios/formCadFuncionarios";
import Pagina from "../templates/pagina";

export default function TelaCadastroFuncionarios(props) {
    return (
        <div>
            <Pagina>
                <h4 className="mt-5">Tela de Cadastro de Funcionários</h4>
                <div className="mt-3 mb-5"><FormCadFuncionarios /></div>                
            </Pagina>
        </div>
    )
}