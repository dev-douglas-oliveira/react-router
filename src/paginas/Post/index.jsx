import { useParams } from "react-router-dom";

export default function Post() {
    const parametros = useParams();
    console.log(parametros);
    return "Post...";
}
