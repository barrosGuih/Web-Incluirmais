import { Pool } from 'pg';

const pool = new Pool({
    user: 'default',
    host: 'ep-small-hall-a4k0yldb-pooler.us-east-1.aws.neon.tech',
    database: 'verceldb',
    password: 'L5bTUHhXdWe0',
    port: '5432'
});

export const query = (text, params) => pool.query(text, params);

export default new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});