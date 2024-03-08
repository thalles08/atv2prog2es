import FormCadFornecedores from "../formularios/formCadFornecedores";
import Pagina from "../templates/pagina";

export default function TelaCadastroFornecedores(props) {
    return (
        <Pagina>
            <h4 className="mt-5">Cadastro de Fornecedores</h4>
            <div className="mt-3 mb-5"><FormCadFornecedores /></div> 
        </Pagina>
    )
}