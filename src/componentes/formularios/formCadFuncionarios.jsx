import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormCadFuncionarios(props) {
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
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira o nome"
            name="nome"
          />
          <Form.Control.Feedback>Correto!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="00/00/0000"
            name="dataNascimento"
          />
          <Form.Control.Feedback>Correto!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="000.000.000-00"
            name="cpf"
          />
          <Form.Control.Feedback>Correto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
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
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Telefone</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o telefone"
          name="telefone" 
          required />
          <Form.Control.Feedback type="invalid">
            Informe o telefone
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Informe o e-mail"
          name="email"
          required />
          <Form.Control.Feedback type="invalid">
            informe o e-mail.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
