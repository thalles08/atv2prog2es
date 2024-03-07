import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
    return (
        <Alert variant="secondary" className="text-center"><h1>{props?.titulo}</h1></Alert>
    );
}