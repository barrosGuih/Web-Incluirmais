import Aluno from "../../../alunos/aluno/page";

export default ({params}) => (
    <Aluno nome={params.aluno} />
);