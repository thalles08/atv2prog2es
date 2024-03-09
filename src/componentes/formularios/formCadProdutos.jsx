import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormCadProdutos(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
      
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Código do produto</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Digite o código do produto"
            name="codigoProduto"
          />
          <Form.Control.Feedback type="invalid">
            Informe o código do produto.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="9" controlId="validationCustom02">
          <Form.Label>Descrição do produto</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira a descrição do produto"
            name="descricaoProduto"
          />
          <Form.Control.Feedback type="invalid">
            Faça uma descrição do produto.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">  
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Informe a marca do produto"
            name="marcaProduto"
          />
          <Form.Control.Feedback type="invalid">
            Informe a marca.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Modelo</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o modelo do produto"
          name="modeloProduto"
          required />
          <Form.Control.Feedback type="invalid">
            Informe o modelo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Categoria</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe a categoria do produto"
          name="categoriaProduto"
          required />
                    <Form.Control.Feedback type="invalid">
            Informe a categoria.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Preço de custo</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="R$"
          name="precoCusto"
          required />
          <Form.Control.Feedback type="invalid">
            Informe o preço de custo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Label>Preço de venda</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="R$"
          name="precoVenda" 
          required />
            <Form.Control.Feedback type="invalid">
            Informe o preço de venda.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom08">
          <Form.Label>Fornecedor</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o fornecedor"
          name="fornecedor"
          required />
          <Form.Control.Feedback type="invalid">
            Informe qual é o fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
