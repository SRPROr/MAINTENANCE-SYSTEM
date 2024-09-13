const { Pool } = require('pg');

// Configura la cadena de conexión con tu información
const pool = new Pool({
  connectionString: 'postgresql://postgres:[SRPRO30]@aws-0-us-west-1.pooler.supabase.com:6543/postgres'
});

// Prueba la conexión
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});
