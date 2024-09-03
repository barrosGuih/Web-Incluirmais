import db from './db';

export async function Autchat(id) {
    
        console.log(process.env.POSTGRES_URL);
        const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return result.rows[0];
}