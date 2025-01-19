import { getAlunosById } from '../../../../lib/apoiados';

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const aluno = await getAlunosById(id);
    if (aluno) {
      return new Response(JSON.stringify(aluno), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Aluno não encontrado' }), { status: 404 });
    }
  } catch (err) {
    console.error('Erro ao buscar aluno:', err);
    return new Response(JSON.stringify({ error: 'Erro ao buscar aluno' }), { status: 500 });
  }
}
