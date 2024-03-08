import FormCadProdutos from "../formularios/formCadProdutos";
import Pagina from "../templates/pagina";

export default function TelaCadastroProduto(prop) {
    return (
        <Pagina>
            <h4 className="mt-5">Cadastro de Produtos</h4>
            <div className="mt-3 mb-5"><FormCadProdutos /></div> 
        </Pagina>
    )
}