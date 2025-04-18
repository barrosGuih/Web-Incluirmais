import { Pool} from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl:{ 
        rejectUnauthorized: false,
    },
}); 

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await pool.query('SELECT * FROM atividade');
            res.status(200).json(result.rows);
        } catch (err) {
            console.error('Erro buscando atividades:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else{
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}