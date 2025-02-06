import pool from "@/lib/db";
import { getAlunosById } from '../../../../lib/apoiados';

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM apoiado WHERE id = $1', [id]);
    client.release();
    if (aluno) {
      return new Response(result.rows[0], { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'apoiado não encontrado' }), { status: 404 });
    }
  } catch (err) {
    console.error('Erro ao buscar aluno:', err);
    return new Response(JSON.stringify({ error: 'Erro ao buscar aluno' }), { status: 500 });
  }
}
