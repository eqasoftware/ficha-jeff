export const EXERCISES = {
      'Supino Reto com Barra': {
        type: 'forca',
        muscles: ['Peitoral Maior', 'Tríceps', 'Deltóide Anterior'],
        secondary: ['Serrátil', 'Core'],
        cues: [
          'Pés firmes no chão, glúteos no banco e escápulas retraídas e deprimidas.',
          'Pegada levemente maior que ombros, pulsos neutros, cotovelos a ~75° do tronco.',
          'Desça a barra de forma controlada até o peitoral inferior, inspire na descida.',
          'Empurre de forma explosiva concentrando a contração no peitoral.'
        ],
        mistakes: [
          'Levantar glúteos do banco — perde estabilidade e sobrecarrega a lombar.',
          'Cotovelos em 90° — risco alto de lesão no ombro.',
          'Quicar a barra no peito — perde tensão e pode causar lesão.'
        ],
        ytQuery: 'supino+reto+barra+tecnica+correto'
      },
      'Supino Inclinado com Barra': {
        type: 'forca',
        muscles: ['Peitoral Superior', 'Tríceps', 'Deltóide Anterior'],
        secondary: ['Serrátil'],
        cues: [
          'Inclinação ideal do banco: 30–45°. Mais que isso vira desenvolvimento de ombro.',
          'Escápulas retraídas, peito aberto e pegada igual ao supino reto.',
          'Controle a descida e foque em sentir o peitoral superior alongar.',
          'Não deixe os ombros dominarem o movimento — pense em empurrar com o peito.'
        ],
        mistakes: [
          'Banco muito inclinado — transfere demais para o deltóide.',
          'Descida muito rápida — perde o controle e aumenta risco de lesão.',
          'Retração escapular insuficiente — ombros ficam instáveis.'
        ],
        ytQuery: 'supino+inclinado+barra+tecnica'
      },
      'Barra Fixa Lastrada': {
        type: 'forca',
        muscles: ['Grande Dorsal', 'Bíceps', 'Rombóides'],
        secondary: ['Infraespinal', 'Core'],
        cues: [
          'Pegada pronada, um pouco mais larga que os ombros.',
          'Inicie o movimento deprimindo as escápulas — evite encolher os ombros.',
          'Puxe o cotovelo em direção ao quadril, não para o lado.',
          'Suba até o queixo ou peito acima da barra. Desça de forma controlada.'
        ],
        mistakes: [
          'Iniciar sem organizar as escápulas — perde ativação do dorsal.',
          'Usar balanço do corpo — reduz estímulo e aumenta risco de lesão.',
          'Não completar a amplitude — corta o estiramento e o estímulo.'
        ],
        ytQuery: 'barra+fixa+lastrada+tecnica+costas'
      },
      'Remada Curvada com Barra': {
        type: 'forca',
        muscles: ['Grande Dorsal', 'Trapézio Médio', 'Rombóides'],
        secondary: ['Bíceps', 'Eretores'],
        cues: [
          'Inclinação do tronco a ~45°, joelhos levemente flexionados.',
          'Pegada pronada ou supinada, afastada na largura dos ombros.',
          'Puxe a barra em direção ao umbigo, cotovelos rentes ao corpo.',
          'Mantenha a coluna neutra e o core ativado durante todo o movimento.'
        ],
        mistakes: [
          'Arredondar a lombar — risco sério de lesão com carga alta.',
          'Usar o balanço do tronco para subir a barra — reduz o estímulo real.',
          'Puxar para o peito em vez do umbigo — muda o foco muscular.'
        ],
        ytQuery: 'remada+curvada+barra+tecnica'
      },
      'Desenvolvimento Militar com Barra': {
        type: 'forca',
        muscles: ['Deltóide (todas as porções)', 'Tríceps'],
        secondary: ['Trapézio Superior', 'Core'],
        cues: [
          'De pé ou sentado, barra na altura do queixo, cotovelos levemente à frente.',
          'Empurre a barra verticalmente enquanto inclina levemente a cabeça para trás.',
          'No topo, barra acima da cabeça com extensão total dos cotovelos.',
          'Desça de forma controlada — cotovelos à frente, não abre demais.'
        ],
        mistakes: [
          'Hiperextender a lombar — ative abdômen e glúteos durante o movimento.',
          'Cotovelos muito abertos na subida — pressiona o manguito rotador.',
          'Não completar a amplitude acima da cabeça.'
        ],
        ytQuery: 'desenvolvimento+militar+barra+tecnica'
      },
      'Face Pull com Corda': {
        type: 'neutral',
        muscles: ['Deltóide Posterior', 'Infraespinal', 'Trapézio Médio'],
        secondary: ['Rombóides'],
        cues: [
          'Polia na altura do rosto ou acima, corda com pegada neutra.',
          'Puxe a corda em direção à testa, separando as mãos no final.',
          'Gire externamente os ombros no final — cotovelos acima das mãos.',
          'Controle total na volta. Não deixe os pesos caírem sem tensão.'
        ],
        mistakes: [
          'Puxar para o pescoço — muda o ângulo e reduz ativação do rotador.',
          'Não abrir as mãos no final — perde a rotação externa.',
          'Usar carga alta demais — compromete a execução e o objetivo preventivo.'
        ],
        ytQuery: 'face+pull+corda+ombro+rotador+tecnica'
      },
      'Rosca Direta com Barra': {
        type: 'neutral',
        muscles: ['Bíceps Braquial', 'Braquial'],
        secondary: ['Braquiorradial', 'Antebraço'],
        cues: [
          'Em pé, barra com pegada supinada na largura dos ombros.',
          'Cotovelos fixos ao lado do corpo — não deixe eles avançarem.',
          'Contraia o bíceps na subida, pausar brevemente no topo.',
          'Desça lentamente — a excêntrica é onde o crescimento acontece.'
        ],
        mistakes: [
          'Balançar o corpo para ajudar na subida — usa lombar para compensar.',
          'Cotovelos avançando — usa deltóide anterior em vez de bíceps.',
          'Baixar a barra muito rápido — perde o estímulo excêntrico.'
        ],
        ytQuery: 'rosca+direta+barra+tecnica+biceps'
      },
      'Agachamento Livre com Barra': {
        type: 'forca',
        muscles: ['Quadríceps', 'Glúteo Máximo', 'Isquiotibiais'],
        secondary: ['Panturrilha', 'Core', 'Eretores'],
        cues: [
          'Pés na largura dos ombros ou levemente mais abertos, pontas levemente abertas.',
          'Barra no trapézio (low bar) ou no trapézio superior (high bar).',
          'Desça mantendo o peito ereto, joelhos acompanhando a direção dos dedos.',
          'Agache abaixo do paralelo (coxa abaixo do joelho) e suba de forma explosiva.'
        ],
        mistakes: [
          'Joelhos indo para dentro (valgismo) — colapso da estrutura inferior.',
          'Calcanhares subindo — falta de mobilidade no tornozelo.',
          'Inclinação excessiva do tronco — vira um good morning, não agachamento.'
        ],
        ytQuery: 'agachamento+livre+barra+tecnica+correto'
      },
      'Leg Press Pesado (Pé Neutro)': {
        type: 'forca',
        muscles: ['Quadríceps', 'Glúteo Máximo'],
        secondary: ['Isquiotibiais', 'Panturrilha'],
        cues: [
          'Pés no centro da plataforma, na largura dos ombros, paralelos ou levemente abertos.',
          'Desça até que os joelhos fiquem a ~90° — sem retirar a lombar do encosto.',
          'Empurre de forma uniforme com a planta inteira do pé.',
          'Não trave completamente os joelhos no topo — mantém tensão contínua.'
        ],
        mistakes: [
          'Lombar saindo do encosto — pressão indevida nos discos lombares.',
          'Amplitude muito pequena — não gera estímulo de hipertrofia suficiente.',
          'Pés muito baixos — foca só em quadríceps e ignora o quadril.'
        ],
        ytQuery: 'leg+press+tecnica+correto+quadriceps'
      },
      'Levantamento Terra Romeno': {
        type: 'forca',
        muscles: ['Isquiotibiais', 'Glúteo Máximo'],
        secondary: ['Eretores', 'Trapézio', 'Core'],
        cues: [
          'Em pé, pés na largura dos quadris, barra ou halteres na frente das coxas.',
          'Empurre o quadril para trás enquanto desce — não é uma flexão de joelho.',
          'Sinta o estiramento nos isquiotibiais; desça até onde mantiver a coluna neutra.',
          'Contraia o glúteo e puxe o quadril para frente para subir.'
        ],
        mistakes: [
          'Arredondar a lombar — risco de lesão grave com carga pesada.',
          'Dobrar os joelhos demais — vira agachamento, não terra romeno.',
          'Deixar a barra se afastar do corpo — aumenta o braço de alavanca sobre a lombar.'
        ],
        ytQuery: 'terra+romeno+tecnica+isquiotibial+correto'
      },
      'Cadeira Flexora': {
        type: 'forca',
        muscles: ['Isquiotibiais (todos os feixes)'],
        secondary: ['Gastrocnêmio'],
        cues: [
          'Posicione o rolo acima dos calcanhares, não na panturrilha.',
          'Hiper-estenda levemente o quadril apoiando nos quadris na borda da cadeira.',
          'Contraia forte no topo e desça de forma lenta e controlada.',
          'Mantenha os pés em dorsiflexão para maximizar ativação dos isquios.'
        ],
        mistakes: [
          'Levantar o quadril no movimento — usa glúteo em vez de posterior.',
          'Amplitude incompleta — perda do estiramento e do estímulo.',
          'Descida muito rápida — perde o excêntrico, que é o mais importante.'
        ],
        ytQuery: 'cadeira+flexora+tecnica+isquiotibial'
      },
      'Agachamento Búlgaro (Barra)': {
        type: 'forca',
        muscles: ['Quadríceps', 'Glúteo Máximo'],
        secondary: ['Isquiotibiais', 'Estabilizadores do Quadril'],
        cues: [
          'Pé traseiro apoiado no banco, pé da frente distante o suficiente para manter a tíbia vertical.',
          'Desça controlado até a coxa ficar paralela ao chão — joelho traseiro quase toca o chão.',
          'Empurre pelo calcanhar da perna da frente para subir.',
          'Tronco levemente inclinado para frente para maior ativação de glúteo.'
        ],
        mistakes: [
          'Pé da frente muito perto — joelho passa muito além dos dedos, carga no joelho.',
          'Fazer sem controle e estabilidade — risco de lesão alto.',
          'Subir muito rápido — perde tensão e controle unilateral.'
        ],
        ytQuery: 'agachamento+bulgaro+barra+tecnica'
      },
      'Panturrilha em Pé (Carga Alta)': {
        type: 'neutral',
        muscles: ['Gastrocnêmio'],
        secondary: ['Sóleo'],
        cues: [
          'Antepé no degrau, calcanhar abaixo do nível do degrau para amplitude total.',
          'Suba até a extensão máxima, segure 1s no topo.',
          'Desça lentamente até o alongamento máximo — fundamental para o crescimento.',
          'Joelhos estendidos durante o movimento ativa prioritariamente o gastrocnêmio.'
        ],
        mistakes: [
          'Amplitude pequena — perde o estímulo de estiramento.',
          'Movimentos em bounce — não há tensão real no músculo.',
          'Dobrar os joelhos — muda o foco para o sóleo.'
        ],
        ytQuery: 'panturrilha+pe+tecnica+gastrocnemio'
      },
      'Ab Wheel': {
        type: 'neutral',
        muscles: ['Reto Abdominal', 'Oblíquos', 'Core Profundo'],
        secondary: ['Grande Dorsal', 'Ombros'],
        cues: [
          'Início na posição de joelhos, wheel diretamente abaixo dos ombros.',
          'Role para frente mantendo a coluna neutra — não deixe a lombar afundar.',
          'Ative o core como se fosse receber um golpe no abdômen.',
          'Retorne contraindo fortemente o abdômen — não use impulso.'
        ],
        mistakes: [
          'Hiperextensão lombar durante a extensão — pressão severa nos discos.',
          'Não controlar o retorno — coloca toda a carga nos dorsais.',
          'Amplitude maior do que o core suporta — compromete a técnica.'
        ],
        ytQuery: 'ab+wheel+rollout+tecnica+core'
      },
      'Prancha com Carga nas Costas': {
        type: 'neutral',
        muscles: ['Core Anti-extensão', 'Reto Abdominal', 'Oblíquos'],
        secondary: ['Glúteos', 'Eretores'],
        cues: [
          'Posição de prancha com antebraços ou mãos, corpo em linha reta da cabeça ao calcanhar.',
          'Ative glúteos, quadríceps e core simultaneamente.',
          'Respire normalmente durante a isometria — não prenda a respiração.',
          'Com carga nas costas, a ativação do core deve ser máxima desde o início.'
        ],
        mistakes: [
          'Quadril caindo — perde a posição isométrica correta.',
          'Quadril muito alto — reduz a ativação do core.',
          'Prender a respiração — aumenta a pressão intra-abdominal desnecessariamente.'
        ],
        ytQuery: 'prancha+com+peso+core+tecnica'
      },
      'Supino Inclinado com Halter': {
        type: 'hiper',
        muscles: ['Peitoral Superior', 'Deltóide Anterior', 'Tríceps'],
        secondary: ['Serrátil'],
        cues: [
          'Banco a 30–45°. Halteres com pegada neutra ou pronada, cotovelos levemente abaixo da linha do ombro.',
          'Desça controlado até sentir o estiramento no peitoral superior.',
          'Pressione os halteres em arco suave de volta ao centro, contraindo o peito.',
          'Foco na conexão mente-músculo: sinta o peitoral superior trabalhar.'
        ],
        mistakes: [
          'Deixar os halteres cair demais — perde controle e sobrecarga no ombro.',
          'Banco muito inclinado — vira trabalho de ombro.',
          'Mover os cotovelos para fora — reduz o estímulo no peito.'
        ],
        ytQuery: 'supino+inclinado+halter+tecnica+peito'
      },
      'Supino Reto Máquina ou Smith': {
        type: 'hiper',
        muscles: ['Peitoral Maior', 'Tríceps', 'Deltóide Anterior'],
        secondary: ['Serrátil'],
        cues: [
          'Na Smith, posicione o banco para que a barra desça até o meio do peitoral.',
          'Ajuste a trajetória para simular o supino livre com leve arco.',
          'Bom para trabalho de volume: seguro para séries próximas da falha sem spotter.',
          'Concentre na contração do peitoral — amplitude completa em cada repetição.'
        ],
        mistakes: [
          'Usar a trajetória vertical pura da Smith sem ajuste — pode lesar o ombro.',
          'Não usar amplitude completa — perde estiramento.',
          'Usar a Smith como único exercício de peito — desequilíbrio de estabilidade.'
        ],
        ytQuery: 'supino+smith+maquina+tecnica+peito'
      },
      'Crucifixo Máquina (Peck Deck)': {
        type: 'hiper',
        muscles: ['Peitoral Maior (adução horizontal)'],
        secondary: ['Deltóide Anterior'],
        cues: [
          'Ajuste o assento para que os braços fiquem na linha do peitoral (nem acima nem abaixo).',
          'Controle o movimento — não deixe os cotovelos passarem muito para trás.',
          'No fechamento, contraia isometricamente o peitoral por 1 segundo.',
          'Mantenha ombros para baixo e longe das orelhas durante todo o movimento.'
        ],
        mistakes: [
          'Amplitude de abertura excessiva — estira demais o ombro.',
          'Ombros subindo — trapézio compensa o movimento.',
          'Usar impulso no fechamento — não há tensão real no peitoral.'
        ],
        ytQuery: 'crucifixo+maquina+peck+deck+peito'
      },
      'Crossover Cabo (Inferior)': {
        type: 'hiper',
        muscles: ['Peitoral Maior (porção superior e esternal)'],
        secondary: ['Deltóide Anterior'],
        cues: [
          'Polia na posição baixa — trajeto de baixo para cima ao cruzar.',
          'Ligeiro avanço de um pé, tronco levemente inclinado para frente.',
          'Cruze as mãos à frente do peito, contraindo o peitoral no topo.',
          'Controle o retorno — não deixe o peso puxar os braços de volta.'
        ],
        mistakes: [
          'Braços rígidos — deve haver leve flexão nos cotovelos.',
          'Não cruzar as mãos — perde o pico de contração do peito.',
          'Inclinação excessiva do tronco — usa o peso do corpo em vez do peitoral.'
        ],
        ytQuery: 'crossover+cabo+inferior+peitoral+tecnica'
      },
      'Desenvolvimento com Halter': {
        type: 'hiper',
        muscles: ['Deltóide Anterior', 'Deltóide Medial', 'Tríceps'],
        secondary: ['Trapézio', 'Core'],
        cues: [
          'Sentado ou em pé, halteres na altura das orelhas, cotovelos à frente ou laterais.',
          'Empurre verticalmente, aproximando os halteres acima da cabeça.',
          'Controle a descida — não deixe os halteres caírem abruptamente.',
          'Core ativado para evitar hiperextensão lombar.'
        ],
        mistakes: [
          'Cotovelos muito atrás — risco para o ombro e perde estabilidade.',
          'Hiperextender a lombar — glúteos e abdômen devem estabilizar.',
          'Trajetória muito fechada — halteres colidindo no topo.'
        ],
        ytQuery: 'desenvolvimento+halter+ombro+tecnica'
      },
      'Elevação Lateral (Cabo ou Halter)': {
        type: 'hiper',
        muscles: ['Deltóide Medial'],
        secondary: ['Deltóide Anterior', 'Trapézio Superior'],
        cues: [
          'Halter ou cabo ao lado do corpo, palma voltada para baixo ou levemente para frente.',
          'Levante até a linha dos ombros com o cotovelo levemente flexionado.',
          'O cotovelo deve ser o ponto mais alto do movimento — não a mão.',
          'Controle a descida — excêntrico lento é onde o músculo cresce.'
        ],
        mistakes: [
          'Usar o balanço do corpo — trapézio compensa, deltóide medial não trabalha.',
          'Levantar acima dos ombros — trapézio domina o movimento.',
          'Mãos mais altas que os cotovelos — muda o vetor de força.'
        ],
        ytQuery: 'elevacao+lateral+halter+deltóide+medial+tecnica'
      },
      'Elevação Lateral Inclinada (Halter)': {
        type: 'hiper',
        muscles: ['Deltóide Medial (maior estiramento)'],
        secondary: ['Deltóide Posterior'],
        cues: [
          'Segure em um suporte com uma mão, incline o corpo lateralmente.',
          'O halter fica pendurado — o deltóide fica em maior estiramento.',
          'Levante o braço lateralmente, cotovelo levemente flexionado.',
          'Controle total na descida para explorar o estiramento.'
        ],
        mistakes: [
          'Inclinar demais — perde o vetor de força ideal.',
          'Não usar o estiramento — fazer rápido derrota o objetivo.',
          'Usar carga muito alta — compromete a execução e a amplitude.'
        ],
        ytQuery: 'elevacao+lateral+inclinada+deltóide+medial'
      },
      'Tríceps Testa (Barra W)': {
        type: 'hiper',
        muscles: ['Tríceps (longo e medial)'],
        secondary: [],
        cues: [
          'Deitado, barra W acima do peito com pegada pronada.',
          'Dobre os cotovelos abaixando a barra em direção à testa — cotovelos fixos e verticais.',
          'Estenda totalmente no topo sem travar — tensão contínua.',
          'Controle a descida — carga na testa com velocidade é perigoso.'
        ],
        mistakes: [
          'Cotovelos se abrindo durante o movimento — perde isolamento do tríceps.',
          'Descer além da testa sem controle — risco de lesão.',
          'Não completar a extensão — corta o pico de contração.'
        ],
        ytQuery: 'triceps+testa+barra+w+tecnica'
      },
      'Tríceps Corda no Cabo': {
        type: 'hiper',
        muscles: ['Tríceps (todos os feixes)'],
        secondary: [],
        cues: [
          'Polia alta, pegada neutra na corda, cotovelos fixos ao lado do tronco.',
          'Empurre a corda para baixo, separando as mãos ao final para contrair o tríceps.',
          'Travar os cotovelos ao lado do corpo — não deixar que se movam.',
          'Controle o retorno até que os cotovelos fiquem a 90°.'
        ],
        mistakes: [
          'Cotovelos saindo para frente — usa deltóide anterior.',
          'Não separar a corda no final — perde a contração máxima.',
          'Usar o corpo para empurrar — não é um movimento de ombros.'
        ],
        ytQuery: 'triceps+corda+cabo+tecnica'
      },
      'Mergulho em Banco (Peso Corporal)': {
        type: 'hiper',
        muscles: ['Tríceps', 'Peitoral Inferior'],
        secondary: ['Deltóide Anterior'],
        cues: [
          'Mãos no banco atrás, pés em outro banco ou no chão.',
          'Desça dobrando os cotovelos até ~90°, mantendo o tronco próximo ao banco.',
          'Empurre para subir com foco no tríceps.',
          'Evite projetar os ombros muito à frente — mantém o trabalho no tríceps.'
        ],
        mistakes: [
          'Cotovelos muito abertos — pressão no ombro e reduz ativação do tríceps.',
          'Descer demais — hiperextensão do ombro.',
          'Compensar com o quadril para subir — perde o estímulo.'
        ],
        ytQuery: 'mergulho+banco+triceps+tecnica'
      },
      'Terra Romeno com Halter': {
        type: 'hiper',
        muscles: ['Isquiotibiais', 'Glúteo Máximo'],
        secondary: ['Eretores', 'Core'],
        cues: [
          'Halteres na frente das coxas, empurre o quadril para trás ao inclinar o tronco.',
          'Sinta o estiramento profundo nos isquiotibiais — o alongamento é o estímulo.',
          'Desça até onde mantiver a coluna neutra — entre 65 e 90% da amplitude.',
          'Contraia o glúteo e traga o quadril para a frente para subir.'
        ],
        mistakes: [
          'Arredondar a lombar — mais perigoso com halteres livres.',
          'Dobrar muito os joelhos — vira agachamento em vez de terra.',
          'Deixar os halteres se afastarem do corpo — aumenta o torque na lombar.'
        ],
        ytQuery: 'terra+romeno+halter+isquiotibial+tecnica'
      },
      'Curl Nórdico (se disponível)': {
        type: 'hiper',
        muscles: ['Isquiotibiais (feixe longo)'],
        secondary: ['Glúteo', 'Core'],
        cues: [
          'Pés presos no banco ou com parceiro. Joelhos no chão, tronco ereto.',
          'Desça controlado com os isquiotibiais — quanto mais devagar, mais eficiente.',
          'Segure-se com as mãos antes do chão para evitar queda.',
          'Suba usando o impulso das mãos e contraia os isquiotibiais para retornar.'
        ],
        mistakes: [
          'Descer muito rápido — perde o excêntrico, que é o objetivo principal.',
          'Quadril flexionando na descida — usa o glúteo em vez dos isquios.',
          'Executar cansado — risco de ruptura se o músculo não suportar a carga.'
        ],
        ytQuery: 'curl+nordico+tecnica+isquiotibial+posterior'
      },
      'Leg Press Pé Alto (Glúteo)': {
        type: 'hiper',
        muscles: ['Glúteo Máximo', 'Isquiotibiais'],
        secondary: ['Quadríceps'],
        cues: [
          'Pés posicionados no alto da plataforma — ativa mais o glúteo e isquio.',
          'Amplitude completa: desça até quase 90° nos joelhos (sem lombar sair do encosto).',
          'Empurre pelo calcanhar — ativa mais o glúteo.',
          'Excêntrico lento — 3–4s para descer, explosivo para subir.'
        ],
        mistakes: [
          'Lombar se afastando do encosto — flexão lombar com carga é perigoso.',
          'Amplitude muito curta — perde o estiramento do glúteo.',
          'Pés muito baixos — trabalho todo no quadríceps.'
        ],
        ytQuery: 'leg+press+pe+alto+gluteo+tecnica'
      },
      'Passada Andando com Halteres': {
        type: 'hiper',
        muscles: ['Glúteo Máximo', 'Quadríceps'],
        secondary: ['Isquiotibiais', 'Estabilizadores'],
        cues: [
          'Passo à frente amplo, desça o joelho traseiro quase ao chão.',
          'Tronco ereto, olhar à frente — não incline para frente.',
          'Empurre o calcanhar da perna da frente para subir e avançar.',
          'Halteres ao lado do corpo — não deixe balançar.'
        ],
        mistakes: [
          'Passo curto — joelho da frente passa muito além dos dedos.',
          'Inclinação do tronco para frente — usa lombar em vez do quadril.',
          'Perda de equilíbrio — dica: fixe o olhar em um ponto fixo à frente.'
        ],
        ytQuery: 'passada+andando+halter+gluteo+tecnica'
      },
      'Extensora (Amplitude Curta)': {
        type: 'hiper',
        muscles: ['Quadríceps (todos os feixes)'],
        secondary: [],
        cues: [
          'Amplitude curta: trabalha do ponto de maior estiramento (90°) até a metade.',
          'Foco no feixe reto do quadríceps — mais difícil de ativar.',
          'Controle total na excêntrica — desça em 3–4s.',
          'Pausar no ponto mais estirado para maximizar o tempo sob tensão.'
        ],
        mistakes: [
          'Usar impulso — o valor está no controle e no estiramento.',
          'Amplitude completa quando o objetivo é o estiramento longo — muda o estímulo.',
          'Executar rápido — perde o TUT que é o objetivo deste método.'
        ],
        ytQuery: 'extensora+quadriceps+amplitude+curta+tecnica'
      },
      'Panturrilha Sentado (Alta Repetição)': {
        type: 'neutral',
        muscles: ['Sóleo'],
        secondary: ['Gastrocnêmio (secundário)'],
        cues: [
          'Joelhos dobrados a 90°, antepé no degrau ou suporte da máquina.',
          'Desça até o máximo de estiramento possível no calcanhar.',
          'Suba até a extensão máxima e segure 1–2s no topo.',
          'Alta repetição (15–20) é ideal para o sóleo, que é altamente resistente.'
        ],
        mistakes: [
          'Amplitude parcial — o sóleo só cresce com estiramento completo.',
          'Velocidade excessiva — sem tensão real no músculo.',
          'Joelhos em extensão — trabalha o gastrocnêmio, não o sóleo.'
        ],
        ytQuery: 'panturrilha+sentado+soleo+tecnica'
      },
      'Elevação de Pernas Pendurado': {
        type: 'neutral',
        muscles: ['Reto Abdominal (inferior)', 'Flexores do Quadril', 'Oblíquos'],
        secondary: ['Core Profundo'],
        cues: [
          'Pendurado na barra, ombros deprimidos e escápulas ativas.',
          'Eleve as pernas (joelhos dobrados para iniciantes, estendidos para avançados).',
          'Incline a pelve posteriormente no topo — ativa o reto abdominal inferior.',
          'Desça de forma controlada — não use balanço.'
        ],
        mistakes: [
          'Usar o balanço para subir — perde o controle abdominal.',
          'Não inclinar a pelve — usa só os flexores do quadril.',
          'Ombros elevados — tensão desnecessária no pescoço.'
        ],
        ytQuery: 'elevacao+pernas+pendurado+abdomen+tecnica'
      },
      'Crunch na Polia': {
        type: 'neutral',
        muscles: ['Reto Abdominal', 'Oblíquos'],
        secondary: [],
        cues: [
          'Ajoelhado de frente para a polia alta, corda atrás da cabeça.',
          'Curve a coluna para baixo, tentando aproximar o cotovelo do joelho.',
          'Contraia o abdômen no ponto mais baixo — não é um movimento de quadril.',
          'Retorne de forma controlada, sentindo o estiramento do reto abdominal.'
        ],
        mistakes: [
          'Usar o quadril para puxar — transforma em flexão de quadril.',
          'Não curvar a coluna — falta o trabalho real do reto abdominal.',
          'Carga muito alta — compromete a técnica e usa outros músculos.'
        ],
        ytQuery: 'crunch+polia+abdomen+tecnica'
      },
      'Pulldown Pegada Larga (Frente)': {
        type: 'hiper',
        muscles: ['Grande Dorsal (largura)', 'Bíceps', 'Rombóides'],
        secondary: ['Infraespinal', 'Teres Maior'],
        cues: [
          'Pegada pronada larga, tronco levemente inclinado para trás (~10–15°).',
          'Deprima as escápulas antes de puxar — não encolha os ombros.',
          'Puxe a barra em direção ao peitoral superior, cotovelos apontando para baixo.',
          'Controle o retorno — deixe os dorsais se esticarem completamente.'
        ],
        mistakes: [
          'Usar o bíceps em vez do dorsal para puxar — falta de ativação escapular.',
          'Inclinação excessiva do tronco — vira uma remada, não pulldown.',
          'Não completar a amplitude — perde o estiramento do dorsal.'
        ],
        ytQuery: 'pulldown+pegada+larga+costas+tecnica'
      },
      'Remada Articulada (Hammer)': {
        type: 'hiper',
        muscles: ['Grande Dorsal', 'Rombóides', 'Trapézio Médio'],
        secondary: ['Bíceps', 'Infraespinal'],
        cues: [
          'Peito apoiado no suporte da máquina, pegada neutra (paralela).',
          'Puxe os cotovelos para trás e para cima, retraindo as escápulas.',
          'Contraia as escápulas no final do movimento — 1s de pausa.',
          'Retorne controlado sentindo o estiramento completo dos dorsais.'
        ],
        mistakes: [
          'Usar o impulso corporal para puxar — retira o estímulo das costas.',
          'Não retrair as escápulas no final — perde o trabalho do trapézio médio.',
          'Tronco saindo do apoio — perde a estabilidade do movimento.'
        ],
        ytQuery: 'remada+articulada+hammer+costas+tecnica'
      },
      'Remada Unilateral com Halter': {
        type: 'hiper',
        muscles: ['Grande Dorsal', 'Rombóides'],
        secondary: ['Bíceps', 'Trapézio'],
        cues: [
          'Mão e joelho apoiados no banco, coluna neutra e paralela ao chão.',
          'Puxe o halter em direção ao quadril (não ao ombro) com o cotovelo rente ao corpo.',
          'Retraia completamente a escápula no topo — pausa de 1s.',
          'Amplitude completa: deixe o dorsal se esticar completamente na descida.'
        ],
        mistakes: [
          'Rodar o tronco para ajudar na subida — compensa com rotadores.',
          'Puxar em direção ao ombro em vez do quadril — foco muda para deltóide posterior.',
          'Não completar a extensão na descida — corta o estiramento.'
        ],
        ytQuery: 'remada+unilateral+halter+dorsal+tecnica'
      },
      'Pullover no Cabo': {
        type: 'hiper',
        muscles: ['Grande Dorsal (estiramento)'],
        secondary: ['Peitoral', 'Serrátil'],
        cues: [
          'Em pé ou ajoelhado, polia alta, pegada com braços estendidos acima da cabeça.',
          'Puxe os braços em arco para baixo até a frente do corpo, cotovelos semiflexionados.',
          'Concentre a contração no dorsal — não nos braços.',
          'Retorne lentamente aproveitando o estiramento completo do dorsal.'
        ],
        mistakes: [
          'Dobrar demais os cotovelos — vira um trabalho de tríceps.',
          'Não sentir o dorsal — falta de conexão mente-músculo.',
          'Fazer rápido — perde o estiramento e a contração máxima.'
        ],
        ytQuery: 'pullover+cabo+dorsal+tecnica'
      },
      'Remada Sentado Cabo (Triângulo)': {
        type: 'hiper',
        muscles: ['Trapézio Médio', 'Rombóides', 'Grande Dorsal'],
        secondary: ['Bíceps', 'Infraespinal'],
        cues: [
          'Sentado, pés apoiados, joelhos levemente flexionados, tronco ereto.',
          'Puxe o triângulo em direção ao abdômen, cotovelos passando as costas.',
          'Retraia completamente as escápulas — esse é o ponto de ativação máxima.',
          'Retorne controlado e deixe as escápulas protruírem para sentir o estiramento.'
        ],
        mistakes: [
          'Jogar o tronco para trás — usa lombar em vez das costas.',
          'Não retrair as escápulas — perde o estímulo do trapézio médio.',
          'Cotovelos muito abertos — ativa mais o deltóide posterior.'
        ],
        ytQuery: 'remada+sentado+cabo+triangulo+costas+tecnica'
      },
      'Rosca Direta com Barra W': {
        type: 'hiper',
        muscles: ['Bíceps Braquial', 'Braquial'],
        secondary: ['Braquiorradial'],
        cues: [
          'Barra W reduz o estresse no pulso e permite carga maior que halteres.',
          'Pegada supinada, cotovelos fixos ao lado do corpo.',
          'Contraia completamente no topo, pausando 1s.',
          'Descida lenta e controlada — excêntrico de 3–4s para máximo crescimento.'
        ],
        mistakes: [
          'Balanço do corpo — usa lombar e deltóide para ajudar.',
          'Cotovelos avançando na subida — muda o vetor de força.',
          'Descida rápida — o excêntrico é o principal estímulo de hipertrofia.'
        ],
        ytQuery: 'rosca+direta+barra+w+biceps+tecnica'
      },
      'Rosca Martelo Alternada': {
        type: 'hiper',
        muscles: ['Braquiorradial', 'Braquial'],
        secondary: ['Bíceps Braquial'],
        cues: [
          'Em pé ou sentado, pegada neutra (palmas voltadas entre si).',
          'Suba alternando os braços, mantendo o cotovelo fixo ao lado do corpo.',
          'Não rode o pulso no topo — o diferencial do martelo é a pegada neutra.',
          'Controle a descida para maximizar o estímulo excêntrico.'
        ],
        mistakes: [
          'Girar o punho para cima — vira uma rosca direta, não um martelo.',
          'Balançar o corpo — não há carga real no braquiorradial.',
          'Amplitude incompleta — corta o estiramento do braquial.'
        ],
        ytQuery: 'rosca+martelo+alternada+braquial+tecnica'
      },
      'Rosca Concentrada ou Cabo': {
        type: 'hiper',
        muscles: ['Bíceps Braquial (pico)'],
        secondary: ['Braquial'],
        cues: [
          'Com halter: sentado, cotovelo apoiado na coxa interna, tronco levemente inclinado.',
          'Com cabo: polia baixa, cotovelo fixo, curva o braço em direção ao ombro.',
          'Supine completamente o pulso no topo para maximizar o pico do bíceps.',
          'Amplitude completa: estiramento total na descida.'
        ],
        mistakes: [
          'Cotovelo se movendo — perde o isolamento do bíceps.',
          'Não supinar o pulso — reduz o pico de contração.',
          'Usar carga alta — compromete o isolamento que é o objetivo.'
        ],
        ytQuery: 'rosca+concentrada+pico+biceps+tecnica'
      },
      'Face Pull Leve com Corda': {
        type: 'neutral',
        muscles: ['Deltóide Posterior', 'Infraespinal', 'Trapézio Médio'],
        secondary: ['Rombóides'],
        cues: [
          'Polia na altura do rosto ou acima, corda com pegada neutra.',
          'Puxe a corda em direção à testa, separando as mãos no final.',
          'Gire externamente os ombros no final — cotovelos acima das mãos.',
          'Carga leve — foco na execução e saúde do ombro, não em carga.'
        ],
        mistakes: [
          'Puxar para o pescoço — muda o ângulo e reduz ativação do rotador.',
          'Não abrir as mãos no final — perde a rotação externa.',
          'Usar carga alta — aqui o objetivo é preventivo, não de força.'
        ],
        ytQuery: 'face+pull+corda+rotador+externo+saude+ombro'
      }
    };
