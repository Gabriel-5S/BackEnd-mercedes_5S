const Sequelize = require("sequelize");
const connection = require("../../database/database")


const Pergunta = connection.define('pergunta',{
    s:{
        type:Sequelize.STRING
      },
    titulo:{
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.TEXT
    }
});

/*
Pergunta.sync({force: false}).then(() => {
    console.log('Tabela Pergunta criada')
});
*/

/*
Pergunta.create({
    s: "1",
    titulo: "1.1",
    descricao: "Utilização dos recursos existentes nos locais abertos"
});

Pergunta.create({
    s: "1",
    titulo: "1.2",
    descricao: "Utilização dos recursos existentes nos locais fechados"
});

Pergunta.create({
    s: "1",
    titulo: "1.3",
    descricao: "Estado de conservação de instalações e recursos"
});

Pergunta.create({
    s: "1",
    titulo: "1.4",
    descricao: "Controle dos problemas de conservação"
});

Pergunta.create({
    s: "2",
    titulo: "2.1",
    descricao: "Identificações e Sinalizações"
});

Pergunta.create({
    s: "2",
    titulo: "2.2",
    descricao: "Definição e Adequação de locais para a guarda de recursos (não inclui layout)"
});

Pergunta.create({
    s: "2",
    titulo: "2.3",
    descricao: "Ordem dos recursos (não inclui layout)"
});

Pergunta.create({
    s: "2",
    titulo: "2.4",
    descricao: "Layout"
});

Pergunta.create({
    s: "3",
    titulo: "3.1",
    descricao: "Nível de limpeza (sujeira provocada por falha das pessoas)"
});

Pergunta.create({
    s: "3",
    titulo: "3.2",
    descricao: "Nível de limpeza (sujeira provocada pelo processo ou por ações da natureza)"
});

Pergunta.create({
    s: "3",
    titulo: "3.3",
    descricao: "Sistemática de limpeza"
});

Pergunta.create({
    s: "3",
    titulo: "3.4",
    descricao: "Lixeiras, cinzeiros e outros coletores de recursos descartados"
});

Pergunta.create({
    s: "4",
    titulo: "4.1",
    descricao: "Padronizações"
});

Pergunta.create({
    s: "4",
    titulo: "4.2",
    descricao: "Higiene e Saúde"
});

Pergunta.create({
    s: "4",
    titulo: "4.3",
    descricao: "Rotinas e Sistemática para manutenção do 5S"
});

Pergunta.create({
    s: "4",
    titulo: "4.4",
    descricao: "Estruturação dos arquivos e correios eletrônicos (quando houver)"
});

Pergunta.create({
    s: "5",
    titulo: "5.1",
    descricao: "Autodisciplina na prática do 5S"
});

Pergunta.create({
    s: "5",
    titulo: "5.2",
    descricao: "Autodisciplina no cumprimento de normas e procedimentos de trabalho"
});

Pergunta.create({
    s: "5",
    titulo: "5.3",
    descricao: "Autodisciplina no cumprimento de Rotinas de 5S e Regras de convivência"
});

Pergunta.create({
    s: "5",
    titulo: "5.4",
    descricao: "Autodisciplina na manutenção da estrutura de arquivos e correios eletrônicos"
});
*/

module.exports = Pergunta;
