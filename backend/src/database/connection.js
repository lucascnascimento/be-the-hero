const knex = require("knex");
const configuration = require("../../knexfile");

const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(config);

module.exports = connection;

/* importa o arquivo de configuração do db e exporta a conexão. Essa conexão é
  importada no arquivo de routes para conseguir fazer as operações com o banco de
  dado
*/
