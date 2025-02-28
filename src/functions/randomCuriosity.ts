const curiosity = [
  'O coração de uma baleia azul pode pesar mais de 180 quilos e bater apenas 10 vezes por minuto.',
  'O mel é o único alimento que nunca estraga, pois contém propriedades antibacterianas naturais.',
  'Os tubarões existem há mais tempo do que as árvores, surgindo há cerca de 400 milhões de anos.',
  'As impressões nasais dos cães são únicas, assim como as impressões digitais nos humanos.',
  'O polvo tem três corações e seu sangue é azul devido à presença de hemocianina em vez de hemoglobina.',
  'A luz do Sol demora cerca de 8 minutos e 20 segundos para chegar até a superfície da Terra.',
  'As formigas não dormem e podem carregar até 50 vezes o seu próprio peso corporal sem dificuldade.',
  'A cada segundo, cerca de 100 raios atingem a Terra, liberando enormes quantidades de energia.',
  'Os flamingos nascem cinza e só se tornam cor-de-rosa por causa dos pigmentos da comida que ingerem.',
  'A maior célula do mundo é o ovo de avestruz, podendo medir até 15 centímetros de diâmetro.',
  'Os cavalos não conseguem vomitar devido à estrutura do seu sistema digestivo altamente sensível.',
  'O vidro não é sólido nem líquido, mas sim um sólido amorfo que pode se deformar ao longo dos anos.',
  'As estrelas-do-mar podem regenerar seus braços e, em alguns casos, um novo corpo inteiro.',
  'A Lua está se afastando da Terra cerca de 3,8 centímetros por ano, devido às forças de maré.',
  'As abelhas se comunicam por meio de uma dança que indica a localização das melhores fontes de néctar.',
  'O olho de um avestruz é maior que seu cérebro, tornando-o um dos pássaros com melhor visão.',
  'Os camaleões não mudam de cor apenas para se camuflar, mas também para regular sua temperatura.',
  'O recorde de voo mais longo de uma galinha registrado foi de apenas 13 segundos de duração.',
  'Os coalas têm impressões digitais tão parecidas com as humanas que podem confundir peritos forenses.',
  'A Antártica é o único continente onde não existem répteis devido ao clima extremamente frio.',
  'A eletricidade pode ser gerada a partir de batatas, pois elas contêm eletrólitos condutores de corrente.',
  'Os crocodilos podem viver mais de 100 anos e continuam crescendo ao longo de toda a sua vida.',
  'A língua de uma baleia azul pode pesar tanto quanto um elefante adulto inteiro.',
  'Os caracóis podem dormir por até três anos se as condições ambientais não forem favoráveis.',
  'As girafas têm a mesma quantidade de vértebras no pescoço que os humanos, apesar do tamanho enorme.',
  'Os golfinhos dormem com apenas metade do cérebro para continuar respirando enquanto descansam.',
  'O som não pode viajar no vácuo do espaço, pois não há moléculas para transportar as vibrações.',
  'O Monte Everest cresce cerca de 4 milímetros por ano devido ao movimento das placas tectônicas.',
  'Os elefantes são os únicos mamíferos que não conseguem pular devido ao seu peso e estrutura óssea.',
  'As lulas gigantes têm olhos do tamanho de bolas de basquete, ajudando-as a enxergar no oceano profundo.',
  'As tartarugas podem respirar pelo ânus para extrair oxigênio da água em situações extremas.',
  'Os ursos polares têm pele preta sob sua pelagem branca para absorver melhor o calor do sol.',
  'Os bebês nascem com cerca de 300 ossos, mas muitos se fundem, resultando em 206 na fase adulta.',
  'As cebolas contêm compostos que fazem os olhos lacrimejarem, ativando uma reação química com o ar.',
  'As pegadas deixadas pelos astronautas na Lua podem durar milhões de anos, pois não há vento nem erosão.',
  'Os diamantes podem ser queimados se forem expostos a temperaturas extremamente altas por tempo suficiente.',
  'O coração de um camarão está localizado na cabeça, e alguns podem viver por mais de 50 anos.',
  'O corpo humano tem bactérias suficientes para encher uma garrafa de 1 litro, a maioria benéfica.',
  'Os corvos são extremamente inteligentes e podem usar ferramentas para resolver problemas complexos.',
  'O pescoço de um cisne tem mais vértebras do que o de uma girafa, dando-lhes grande flexibilidade.',
  'O som dos passos de um gato ao andar é quase imperceptível devido ao formato especial de suas patas.',
  'A água-viva Turritopsis dohrnii pode se regenerar indefinidamente, sendo considerada biologicamente imortal.',
  'As sombras na Lua são mais escuras do que na Terra, pois não há atmosfera para difundir a luz.',
  'As bananas são consideradas bagas, enquanto os morangos não se encaixam na definição botânica de baga.',
  'O Velociraptor tinha penas e era muito menor do que mostrado nos filmes da franquia Jurassic Park.',
  'Os camelos armazenam gordura, e não água, em suas corcovas, para sobreviver no deserto.',
  'Os pinguins-macaroni foram nomeados por causa de uma moda europeia do século XVIII chamada ‘Macaroni’.',
  'O tubarão da Groenlândia pode viver mais de 400 anos, sendo um dos vertebrados mais longevos do mundo.',
  'Os raios podem ser até cinco vezes mais quentes do que a superfície do Sol, atingindo 30.000 °C.',
  'Os corais são animais, e não plantas, formando recifes ao longo de milhares de anos.',
  'As minhocas têm cinco pares de corações, permitindo que seu sangue circule de maneira eficiente.',
  'O maior deserto do mundo não é o Saara, mas sim a Antártica, devido à sua extrema aridez.',
  'A Terra é atingida por cerca de 17 meteoros pequenos todos os dias, a maioria queimando na atmosfera.',
  'A velocidade máxima de um espirro humano pode chegar a até 160 km/h, espalhando gotículas no ar.',
  'A estátua da Liberdade foi originalmente marrom, mas ficou verde devido à oxidação do cobre.',
  'A gravidade na Lua é cerca de um sexto da gravidade da Terra, permitindo saltos muito mais altos.',
  'Os astronautas crescem alguns centímetros no espaço porque a ausência de gravidade expande a coluna vertebral.',
];

export default function ramdomCuriosity() {
  const indexes = [] as number[];

  while (indexes.length < 7) {
    const randomIndex = Math.floor(Math.random() * curiosity.length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }

  return indexes.map((index) => curiosity[index]);
}
