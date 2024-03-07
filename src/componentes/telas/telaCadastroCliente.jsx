import FormCadClientes from "../formularios/formCadClientes";
import Pagina from "../templates/pagina";

export default function TelaCadastroCliente(props) {
    return (
        <div>
            <Pagina>
                <h2>Tela de Cadastro de Clientes</h2>
                <FormCadClientes />
            </Pagina>
        </div>
    )
}