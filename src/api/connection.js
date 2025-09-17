// server.js
import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(express.json());

// Conexão com o banco Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // pego do .env
  ssl: {
    rejectUnauthorized: false, // Neon exige SSL
  },
});

// Teste de conexão
app.get("/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro na conexão com o banco" });
  }
});

// Exemplo de rota para pegar dados
app.get("/estoque", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, qntd_estoque 
      FROM produtos;
    `);
    res.json(result.rows); // [{ id: 1, qntd_estoque: 12 }, ...]
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar estoque" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});