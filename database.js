const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'ljgyuufctizdyk',
    password: '653841f2a6d1fb46554af8d4982f202c706d113cd5f3093ccd0c5c7667fa9b3f',
    host: 'ec2-52-1-115-6.compute-1.amazonaws.com',
    database: 'dd7lv1e8usbko3',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

// const script = `
//     CREATE TABLE IF NOT EXISTS contatos
//     (
//         ID serial primary key,
//         nome varchar(60) not null,
//         telefone varchar(20) not null
//     )
// `;

// pool.query(script, function(error, result) {
//     if(error)
//         throw error;

//     console.log("Tabela criada");
// })

module.exports = {
    async create(nome, telefone) {
        try {
            const sql = `INSERT INTO contatos (nome, telefone) VALUES ($1, $2)`;
            const result = await pool.query(sql, [nome, telefone]);
            return result.rows;
        } catch (error) {
            console.log(error);
            return -1;
        }
    },

    async read() {
        const sql = `SELECT * FROM contatos order by nome`;
        const result = await pool.query(sql);
        return result.rows;
    },

    async findOne(id) {
        const sql = `SELECT * FROM contatos WHERE ID = $1`;
        const result = await pool.query(sql);
        return result.rows;
    },

    async update(id, nome, telefone) {
        const sql = `UPDATE contatos SET nome = $1, telefone = $2, ID = $3`;
        const result = await pool.query(sql, [nome, telefone, id]);
        return result.rows;
    },

    async delete() {
        const sql = `DELETE FROM contatos WHERE ID = $1`;
        const result = await pool.query(sql, [id]);
        return result.rows;
    }
}