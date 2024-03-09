import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormCadFornecedores(props) {
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
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="00.000.000/0000-00"
            name="cnpjFornecedor"
          />
          <Form.Control.Feedback type="invalid">
            Informe o CNPJ do fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Razão Social</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Informe a razão social do fornecedor"
            name="razaoSocialFornecedor"
          />
          <Form.Control.Feedback type="invalid">
            Informe a Razão Social do forncedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>Nome Fantasia</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Informe o nome fantasia do fornecedor"
            name="nomeFantasiaFornecedor"
          />
          <Form.Control.Feedback type="invalid">
            Informe o Nome Fantasia do fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Endereço completo</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe endereço, CEP, cidade e estado"
          name="endereco"
          required />
          <Form.Control.Feedback type="invalid">
            Informe o endereço completo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Telefone</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o telefone"
          name="telefone" 
          required />
          <Form.Control.Feedback type="invalid">
            Informe o telefone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o e-mail"
          name="email"
          required />
          <Form.Control.Feedback type="invalid">
            Informe o e-mail.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom07">
          <Form.Label>Nome do representante</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o nome do representante"
          name="nomeRepresentante"
          required />
                    <Form.Control.Feedback type="invalid">
            Informe o nome do representante desse fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom08">
          <Form.Label>Telefone do representante</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o telefone do representante"
          name="telefoneRepresentante" 
          required />
          <Form.Control.Feedback type="invalid">
            Informe o telefone do representante desse fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom09">
          <Form.Label>E-mail do representante</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o e-mail do representante"
          name="emailRepresentante"
          required />
                    <Form.Control.Feedback type="invalid">
            Informe o e-mail do representante desse fornecedor.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
