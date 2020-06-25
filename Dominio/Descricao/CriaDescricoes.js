const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Descricoes = connection.define('descricoes',{
  descricao_id:{
    type:Sequelize.STRING
  },
  nota:{
    type:Sequelize.STRING
  },
  descricao:{
  type: Sequelize.TEXT,
  }
});
/*
Descricoes.sync({force: false}).then(() => {
  console.log("Tabela Descricao Criada")
});
*/

/*
Descricoes.create({
  descricao_id: "1.1",
  nota:"1",
  descricao:"Em vários locais foram encontradas diversas anormalidades no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício).",
});
Descricoes.create({
  descricao_id: "1.1",
  nota:"2",
  descricao:"Em vários locais foi encontrada uma ou outra anormalidade no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício).",
});
Descricoes.create({
  descricao_id: "1.1",
  nota:"3",
  descricao:"Em um ou outro local foram encontradas diversas anormalidades no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício).",
});
Descricoes.create({
  descricao_id: "1.1",
  nota:"4",
  descricao:"Em um ou outro local foi encontrado uma ou outra anormalidade no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício).",
});
Descricoes.create({
  descricao_id: "1.1",
  nota:"5",
  descricao:"Todos os recursos existentes nos pisos, mesas e outros locais abertos são compartilhados e usados adequadamente (não há excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});


Descricoes.create({
  descricao_id: "1.2",
  nota:"1",
  descricao:"Em vários locais foram encontradas diversas anormalidades no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente ou falta).",
});
Descricoes.create({
  descricao_id: "1.2",
  nota:"2",
  descricao:"Em vários locais foi encontrada uma ou outra anormalidade no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente ou falta).",
});
Descricoes.create({
  descricao_id: "1.2",
  nota:"3",
  descricao:"Em um ou outro local foram encontradas diversas anormalidades no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente, falta ou desperdício).",
});
Descricoes.create({
  descricao_id: "1.2",
  nota:"4",
  descricao:"Em um ou outro local foi encontrado uma ou outra anormalidade no uso e adequação de recursos (não compartilhamento, excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente ou falta).",
});
Descricoes.create({
  descricao_id: "1.2",
  nota:"5",
  descricao:"Todos os recursos existentes nos armários, arquivos, gavetas e outros compartimentos fechados são compartilhados e usados adequadamente (não há excesso, improvisações, recursos desnecessários, recursos inadequados ou usados inadequadamente ou falta). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});


Descricoes.create({
  descricao_id: "1.3",
  nota:"1",
  descricao:"Há problemas de conservação generalizados e um ou outro compromete a segurança ou a funcionalidade das instalações e recursos, levando-se em consideração as características do ambiente.",
});
Descricoes.create({
  descricao_id: "1.3",
  nota:"2",
  descricao:"Há problemas de conservação generalizados, mas nenhum compromete a segurança ou a funcionalidade das instalações e recursos, levando-se em consideração as características do ambiente.",
});
Descricoes.create({
  descricao_id: "1.3",
  nota:"3",
  descricao:"Há problemas de conservação em uma ou outra instalação ou recurso. Um ou outro compromete a segurança e/ou funcionalidade, levando-se em consideração as características do ambiente.",
});
Descricoes.create({
  descricao_id: "1.3",
  nota:"4",
  descricao:"Há problemas de conservação em uma ou outra instalação ou recurso, mas nenhum compromete a segurança e/ou funcionalidade, levando-se em consideração as características do ambiente.",
});
Descricoes.create({
  descricao_id: "1.3",
  nota:"5",
  descricao:"Todas as instalações e recursos estão em bom estado de conservação. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});


Descricoes.create({
  descricao_id: "1.4",
  nota:"1",
  descricao:"Não há justificativa formal para a maioria dos problemas de conservação encontrados (quando há problemas generalizados).",
});
Descricoes.create({
  descricao_id: "1.4",
  nota:"2",
  descricao:"Não há justificativa formal para alguns problemas de conservação, inclusive para um ou outro que compromete a segurança e/ou a funcionalidade das instalações e recursos, levando-se em consideração as características do ambiente.",
});
Descricoes.create({
  descricao_id: "1.4",
  nota:"3",
  descricao:"Não há justificativa formal para alguns problemas de conservação, mas nenhum compromete a segurança e/ou a funcionalidade das instalações e recursos, levando-se em consideração as características do ambiente.",
});
Descricoes.create({
  descricao_id: "1.4",
  nota:"4",
  descricao:"Não há justificativa formal para um ou outro problema de conservação, mas nenhum compromete a segurança e/ou a funcionalidade das instalações e recursos, levando-se em consideração as características do ambiente.",
});
Descricoes.create({
  descricao_id: "1.4",
  nota:"5",
  descricao:"Há justificativa formal para todos os problemas de conservação e nenhum compromete a segurança e/ou a funcionalidade das instalações e recursos, levando-se em consideração as características do ambiente. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});


Descricoes.create({
  descricao_id: "2.1",
  nota:"1",
  descricao:"Em vários locais há deficiências de identificação e sinalização. Não há providências concretas para a correção da maioria.",
});
Descricoes.create({
  descricao_id: "2.1",
  nota:"2",
  descricao:"Em vários locais há deficiências de identificação e sinalização. Não há providências concretas para a correção de algumas.",
});
Descricoes.create({
  descricao_id: "2.1",
  nota:"3",
  descricao:"Em um ou outro local há deficiências de identificação e/ou sinalização. Não há providências concretas para a correção de algumas.",
});
Descricoes.create({
  descricao_id: "2.1",
  nota:"4",
  descricao:  "Em um ou outro local há deficiências de identificação e/ou sinalização. Há providências concretas para a correção de todas.",
});
Descricoes.create({
  descricao_id: "2.1",
  nota:"5",
  descricao: "Em todos os locais há identificações e sinalizações que facilitam a localização e evitam perda de tempo e riscos. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});
Descricoes.create({
  descricao_id: "2.2",
  nota:"1",
  descricao: "Em vários ambientes há diversos recursos sem locais de guarda definidos e adequados (formato, dimensões, tipo de material, etc.).",
});
Descricoes.create({
  descricao_id: "2.2",
  nota:"2",
  descricao: "Em vários ambientes há um ou outro recurso sem local de guarda definido e adequado (formato, dimensões, tipo de material, etc.).",
});
Descricoes.create({
  descricao_id: "2.2",
  nota:"3",
  descricao: "Em um ou outro ambiente há vários recursos sem locais de guarda definidos e adequados (formato, dimensões, tipo de material, etc.).",
});
Descricoes.create({
  descricao_id: "2.2",
  nota:"4",
  descricao: "Em um ou outro ambiente há um ou outro recurso sem local de guarda definido e adequado (formato, dimensões, tipo de material, etc.).",
});
Descricoes.create({
  descricao_id: "2.2",
  nota:"5",
  descricao: "Há locais definidos e adequados para todos os recursos utilizados (formato, dimensões, tipo de material, etc.). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});


Descricoes.create({
  descricao_id: "2.3",
  nota:"1",
  descricao: "Em vários locais foram encontrados diversos recursos desordenados, dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
});
Descricoes.create({
  descricao_id: "2.3",
  nota:"2",
  descricao: "Em vários locais foi encontrado um ou outro recurso desordenado dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
});
Descricoes.create({
  descricao_id: "2.3",
  nota:"3",
  descricao: "Em um ou outro local foram encontrados diversos recursos desordenados, dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
});
Descricoes.create({
  descricao_id: "2.3",
  nota:"4",
  descricao: "Em um ou outro local foi encontrado um ou outro recurso desordenado, dificultando o acesso (há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual ou física ou risco).",
});
Descricoes.create({
  descricao_id: "2.3",
  nota:"5",
  descricao: "Todos os recursos estão classificados e organizados (não há recursos úteis fora dos locais de guarda, mistura, dificuldade de localização visual e física ou risco). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});


Descricoes.create({
  descricao_id: "2.4",
  nota:"1",
  descricao: "Em vários ambientes há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Não há providências concretas para a correção da maioria. ",
});
Descricoes.create({
  descricao_id: "2.4",
  nota:"2",
  descricao:  "Em vários ambientes há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Não há providências concretas para a correção de algumas. ",
});
Descricoes.create({
  descricao_id: "2.4",
  nota:"3",
  descricao:"Em um ou outro ambiente há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Não há providências concretas para a correção de algumas.",
});
Descricoes.create({
  descricao_id: "2.4",
  nota:"4",
  descricao: "Em um ou outro ambiente há deficiências de Layout promovendo desgastes, riscos e desperdício de tempo (distribuição planejada dos recursos produtivos e/ou de apoio dificultando a circulação e o acesso; espaço incompatível com o volume, etc.). Há providências concretas para a correção de todas.",
});
Descricoes.create({
  descricao_id: "2.4",
  nota:"5",
  descricao: "A disposição de todos os recursos produtivos e de apoio está adequada, facilita a circulação e o acesso, evitando riscos, desgaste e desperdício de tempo. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});
Descricoes.create({
  descricao_id: "3.1",
  nota:"1",
  descricao: "Em vários locais há sujeira, inclusive provocadas pelas pessoas do próprio ambiente.",
});
Descricoes.create({
  descricao_id: "3.1",
  nota:"2",
  descricao: "Em vários locais há sujeira, uma ou outra provocada pelas pessoas do próprio ambiente ou por não cumprimento da sistemática de limpeza.",
});
Descricoes.create({
  descricao_id: "3.1",
  nota:"3",
  descricao: "Em um ou outro local há sujeira, uma ou outra provocada pelas pessoas do próprio ambiente ou por não cumprimento da sistemática de limpeza.",
});
Descricoes.create({
  descricao_id: "3.1",
  nota:"4",
  descricao: "Em um ou outro local há sujeira provocada apenas, e claramente, por pessoas de outros ambientes ou apenas por não cumprimento da sistemática de limpeza.",
});
Descricoes.create({
  descricao_id: "3.1",
  nota:"5",
  descricao: "Não há sujeira provocada pelas pessoas nem por falta de cumprimento da sistemática de limpeza. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});
Descricoes.create({
  descricao_id: "3.2",
  nota:"1",
  descricao: "Em vários locais há fonte de sujeira ou há sujeira acumulada ao longo do tempo, gerando riscos de acidentes (não por problemas de conservação) e que não está sendo contida. ",
});
Descricoes.create({
  descricao_id: "3.2",
  nota:"2",
  descricao: "Em um ou outro local há fonte de sujeira ou sujeira acumulada ao longo do tempo, gerando riscos de acidentes (não por problemas de conservação) e que não está sendo contida e/ou sinalizada. ",
});
Descricoes.create({
  descricao_id: "3.2",
  nota:"3",
  descricao:  "A fonte de sujeira ou sujeira acumulada ao longo do tempo não gera riscos de acidentes. Não há um prazo definido para a eliminação da fonte.",
});
Descricoes.create({
  descricao_id: "3.2",
  nota:"4",
  descricao: "A fonte de sujeira ou sujeira acumulada ao longo do tempo não gera riscos de acidentes. Há um prazo definido para a eliminação da fonte.",
});
Descricoes.create({
  descricao_id: "3.2",
  nota:"5",
  descricao: "A fonte de sujeira (máquinas, equipamentos, manuseio de produtos) ou sujeira acumulada ao longo do tempo não gera riscos de acidentes e a extinção de sua(s) fonte(s) foi considerada inviável técnica e financeiramente pelos órgãos competentes da empresa. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});
Descricoes.create({
  descricao_id: "3.3",
  nota:"1",
  descricao: "Não há uma freqüência definida e/ou adequada para a limpeza de nenhum tipo de sujeira (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.).",
});
Descricoes.create({
  descricao_id: "3.3",
  nota:"2",
  descricao: "Não há uma freqüência definida e/ou adequada de limpeza para vários tipos de sujeira (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.).",
});
Descricoes.create({
  descricao_id: "3.3",
  nota:"3",
  descricao: "Não há uma freqüência definida e/ou adequada de limpeza apenas para um ou outro tipo de sujeira ou local de difícil acesso (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.).",
});
Descricoes.create({
  descricao_id: "3.3",
  nota:"4",
  descricao: "Há uma freqüência definida e adequada para a limpeza de todo o tipo de sujeira (gerada por processos, manuseio de produtos, ações da natureza, animais, árvores, transportes, etc.). A sistemática não inclui, por escrito, todos os locais de difícil acesso.",
});
Descricoes.create({
  descricao_id: "3.3",
  nota:"5",
  descricao: "Há uma freqüência definida e adequada para a limpeza de todo o tipo de sujeira (gerada por processos, manuseio de produtos, intempéries, animais, árvores, transportes, etc.). A sistemática inclui, por escrito, todos os locais de difícil acesso.",
});
Descricoes.create({
  descricao_id: "3.4",
  nota:"1",
  descricao: "Em vários locais há algumas deficiências nas lixeiras, cinzeiros e outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
});
Descricoes.create({
  descricao_id: "3.4",
  nota:"2",
  descricao: "Em vários locais há uma ou outra deficiência nas lixeiras, cinzeiros ou outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
});
Descricoes.create({
  descricao_id: "3.4",
  nota:"3",
  descricao: "Em um ou outro local há algumas deficiências nas lixeiras, cinzeiros e outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
});
Descricoes.create({
  descricao_id: "3.4",
  nota:"4",
  descricao: "Em um ou outro local há uma ou outra deficiência nas lixeiras, cinzeiros ou outros coletores de recursos descartados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.).",
});
Descricoes.create({
  descricao_id: "3.4",
  nota:"5",
  descricao: "Todas as lixeiras, cinzeiros e outros coletores de recursos descartados são adequados (quantidade, localização, conservação, higiene, tipo e tamanho, freqüência de retirada, identificação, sinalização, prática da coleta seletiva, etc.). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});

Descricoes.create({
  descricao_id: "4.1",
  nota:"1",
  descricao: "A grande maioria das identificações ou sinalizações não obedece aos padrões da empresa ou não estão uniformes, ou não foram consensados padrões dos 3 primeiros \"S\"",
});
Descricoes.create({
  descricao_id: "4.1",
  nota:"2",
  descricao: "Algumas identificações ou sinalizações não obedecem aos padrões da empresa ou não estão uniformes, ou não foram consensados padrões dos 3 primeiros \"S\"",
});
Descricoes.create({
  descricao_id: "4.1",
  nota:"3",
  descricao: "Uma ou outra identificação ou sinalização não obedece aos padrões da empresa ou não está uniforme, ou não foram consensados alguns padrões dos 3 primeiros \"S\"",
});
Descricoes.create({
  descricao_id: "4.1",
  nota:"4",
  descricao: "Uma ou outra identificação ou sinalização não obedece aos padrões da empresa ou não está uniforme. Um ou outro padrão dos 3 primeiros \"S\" ainda não foi consensado ",
});
Descricoes.create({
  descricao_id: "4.1",
  nota:"5",
  descricao: "Todas as identificações e sinalizações obedecem aos padrões da empresa ou estão uniformes. Foram consensados todos os padrões dos 3 primeiros \"S\". Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});
Descricoes.create({
  descricao_id: "4.2",
  nota:"1",
  descricao: "Não foi feito nenhum estudo sobre problemas que afetam a saúde no ambiente de trabalho e/ou são encontrados alguns problemas de higiene no local de trabalho.",
});
Descricoes.create({
  descricao_id: "4.2",
  nota:"2",
  descricao: "Há um ou outro problema que afeta a saúde no ambiente de trabalho, mas não há nenhum estudo para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
});
Descricoes.create({
  descricao_id: "4.2",
  nota:"3",
  descricao: "Há um ou outro problema que afeta a saúde no ambiente de trabalho e há estudo para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
});
Descricoes.create({
  descricao_id: "4.2",
  nota:"4",
  descricao: "Há um ou outro problema que afeta a saúde no ambiente de trabalho e há ações concretas para solucioná-lo e/ou há um ou outro problema de higiene no local de trabalho.",
});
Descricoes.create({
  descricao_id: "4.2",
  nota:"5",
  descricao: "Não há nenhum problema que afeta a saúde ou de higiene no local de trabalho. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});
Descricoes.create({
  descricao_id: "4.3",
  nota:"1",
  descricao: "Não há sistemática para a manutenção do 5S. A prática é aleatória.",
});
Descricoes.create({
  descricao_id: "4.3",
  nota:"2",
  descricao: "Há uma ou outra sistemática para a manutenção do 5S, mas não garante a melhoria contínua (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
});
Descricoes.create({
  descricao_id: "4.3",
  nota:"3",
  descricao: "Há uma sistemática para a melhoria contínua do 5S, mas há deficiência em alguns aspectos (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
});
Descricoes.create({
  descricao_id: "4.3",
  nota:"4",
  descricao: "Há uma sistemática para a melhoria contínua do 5S, mas há deficiência em um ou outro aspecto (faltam avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.)",
});
Descricoes.create({
  descricao_id: "4.3",
  nota:"5",
  descricao: "Há uma sistemática eficiente para a melhoria contínua do 5S (avaliações numéricas, planos de ação, divisão de responsabilidade, estabelecimento e divulgação de regras, reuniões, divulgação de resultados, participação com sugestões, etc.). Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});

Descricoes.create({
  descricao_id: "4.4",
  nota:"1",
  descricao: "Não há uma estruturação definida para a utilização e guarda da maioria dos documentos e e-mails eletrônicos e não há uma freqüência definida e adequada para a limpeza de arquivos obsoletos.",
});
Descricoes.create({
  descricao_id: "4.4",
  nota:"2",
  descricao: "Não há uma estruturação definida para a utilização e guarda da maioria dos documentos e e-mails eletrônicos ou não há uma freqüência definida e adequada para a limpeza de arquivos obsoletos.",
});
Descricoes.create({
  descricao_id: "4.4",
  nota:"3",
  descricao: "Não há uma estruturação definida para a utilização e guarda de um ou outro documento ou e-mails eletrônicos. Não há uma freqüência definida e adequada para a limpeza de todos os tipos de arquivos obsoletos.",
});
Descricoes.create({
  descricao_id: "4.4",
  nota:"4",
  descricao: "Não há uma estruturação definida para a utilização e guarda de um ou outro documento ou e-mails eletrônicos. Há uma freqüência definida e adequada para a limpeza de todos os tipos de arquivos obsoletos.",
});
Descricoes.create({
  descricao_id: "4.4",
  nota:"5",
  descricao: "Há uma estruturação definida para a utilização e guarda de todos os documentos eletrônicos e e-mails. Há uma freqüência definida e adequada para a limpeza de todos os arquivos obsoletos. Pode existir uma ou outra irregularidade insignificante para as características do ambiente.",
});


Descricoes.create({
  descricao_id: "5.1",
  nota:"1",
  descricao: "Menos da metade das pessoas praticam os 3S no dia-a-dia sem necessidade de monitoramento ou cobrança ou o 5S de algumas outras áreas é prejudicado com freqüência.",
});
Descricoes.create({
  descricao_id: "5.1",
  nota:"2",
  descricao: "Entre 50% e 70% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança ou o 5S de algumas outras áreas é prejudicado eventualmente",
});
Descricoes.create({
  descricao_id: "5.1",
  nota:"3",
  descricao: "Entre 71% e 80% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança ou o 5S de uma ou outra área é prejudicado com freqüência.",
});
Descricoes.create({
  descricao_id: "5.1",
  nota:"4",
  descricao: "Entre 81% e 90% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança ou o 5S de uma ou outra área é prejudicado eventualmente",
});
Descricoes.create({
  descricao_id: "5.1",
  nota:"5",
  descricao: "Mais de 90% das pessoas praticam os 3S no dia-a-dia, independente de monitoramento e cobrança e o 5S de nenhuma outra área é prejudicada pelo comportamento das pessoas auditadas",
});

Descricoes.create({
  descricao_id: "5.2",
  nota:"1",
  descricao: "Menos da metade das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Algumas outras áreas são prejudicadas com freqüência.",
});
Descricoes.create({
  descricao_id: "5.2",
  nota:"2",
  descricao: "Entre 50 e 70% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Algumas outras áreas são prejudicadas com eventualmente",
});
Descricoes.create({
  descricao_id: "5.2",
  nota:"3",
  descricao: "Entre 71 e 90% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Uma ou outra área é prejudicada com freqüência.",
});
Descricoes.create({
  descricao_id: "5.2",
  nota:"4",
  descricao: "Entre 91 e 95% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Uma ou outra área é prejudicada eventualmente.",
});
Descricoes.create({
  descricao_id: "5.2",
  nota:"5",
  descricao: "Acima de  95% das pessoas cumprem normas e procedimentos de trabalho, sem necessidade de monitoramento ou cobrança. Nenhuma área é prejudicada pelo comportamento das pessoas auditadas",
});

Descricoes.create({
  descricao_id: "5.3",
  nota:"1",
  descricao: "Menos da metade das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança ou a área não cumpre com rigor algumas Sistemáticas e Rotinas do 5S",
});
Descricoes.create({
  descricao_id: "5.3",
  nota:"2",
  descricao: "Entre 50 e 70% das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança e a área não cumpre com rigor algumas Sistemáticas e Rotinas do 5S.",
});
Descricoes.create({
  descricao_id: "5.3",
  nota:"3",
  descricao: "Entre 71 e 90% das pessoas cumprem regras de convivência, sem necessidade de monitoramento ou cobrança ou a área não cumpre com rigor uma ou outra Sistemática e Rotinas do 5S",
});
Descricoes.create({
  descricao_id: "5.3",
  nota:"4",
  descricao: "Entre 91 e 95% das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança e a área não cumpre com rigor todas as Sistemáticas e Rotinas do 5S",
});
Descricoes.create({
  descricao_id: "5.3",
  nota:"5",
  descricao: "Acima de  95% das pessoas cumprem as regras de convivência, sem necessidade de monitoramento ou cobrança e a área cumpre com rigor todas as  Sistemáticas e Rotinas do 5S",
});

Descricoes.create({
  descricao_id: "5.4",
  nota:"1",
  descricao: "Há várias anormalidades na utilização ou guarda de vários tipos de documentos ou mensagens eletrônicas. Não está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
});
Descricoes.create({
  descricao_id: "5.4",
  nota:"2",
  descricao: "Há várias anormalidades na utilização ou guarda de um ou outro tipo de documentos ou mensagens eletrônicas. Não está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
});
Descricoes.create({
  descricao_id: "5.4",
  nota:"3",
  descricao: "Há uma ou outra anormalidade na utilização ou guarda de documentos ou mensagens eletrônicas. Não está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
});
Descricoes.create({
  descricao_id: "5.4",
  nota:"4",
  descricao: "Há uma ou outra anormalidade na utilização ou guarda de documentos ou mensagens eletrônicas. Está sendo feita a limpeza de arquivos obsoletos de acordo com a freqüência definida",
});
Descricoes.create({
  descricao_id: "5.4",
  nota:"5",
  descricao: "Todos os documentos e mensagens eletrônicas são utilizadas e estão guardadas de acordo com a estruturação definida. São feitas limpezas de arquivos obsoletos de acordo com a freqüência definida.",
});
*/

module.exports = Descricoes;
