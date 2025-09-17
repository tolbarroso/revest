import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // você pega isso do Neon/integração com Vercel
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;