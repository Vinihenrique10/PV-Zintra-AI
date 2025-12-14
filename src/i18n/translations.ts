export type Language = 'en' | 'pt' | 'es';

export type TranslationKeys = {
    // Navbar
    nav: {
        howItWorks: string;
        features: string;
        forWho: string;
        testimonials: string;
        plans: string;
        faq: string;
        login: string;
    };
    // Hero Section
    hero: {
        badge: string;
        title: {
            start: string;
            highlight: string;
            end: string;
        };
        subtitle: string;
        cta: string;
    };
    // Scanner Section
    scanner: {
        title: {
            start: string;
            highlight: string;
            end: string;
        };
        subtitle: string;
        visual: {
            analyzing: string;
            salmon: string;
            salmonInfo: string;
            salad: string;
            saladInfo: string;
            tapToScan: string;
        };
    };
    problem: {
        title: {
            start: string;
            highlight: string;
            end: string;
        };
        description1: string;
        solutionBadge: string;
        description2: string;
    };
    mechanism: {
        header: {
            title: {
                start: string;
                highlight: string;
            };
            subtitle: string;
        };
        steps: {
            step1: {
                title: string;
                description: string;
            };
            step2: {
                title: string;
                description: string;
            };
            step3: {
                title: string;
                description: string;
            };
        };
    };
    features: {
        nutrition: {
            title: string;
            description: string;
        };
        workout: {
            title: string;
            description: string;
        };
        dashboard: {
            title: string;
            description: string;
        };
    };
    cta: {
        secondary1: string;
        secondary2: string;
    };
    qualification: {
        title: {
            start: string;
            highlight: string;
            end: string;
        };
        subtitle: string;
        items: string[];
    };
    testimonials: {
        title: {
            highlight: string;
            end: string;
        };
        items: {
            quote: string;
            name: string;
            designation: string;
        }[];
    };
    offer: {
        title: {
            start: string;
            highlight: string;
            end: string;
        };
        subtitle: string;
        button: string;
    };
    comparison: {
        title: {
            start: string;
            highlight: string;
        };
        subtitle: string;
        headers: {
            zintra: string;
            recommended: string;
            personal: string;
            generic: string;
        };
        rows: {
            investment: {
                feature: string;
                zintra: { text: string; sub: string };
                personal: string;
                generic: string;
            };
            injuries: {
                feature: string;
                zintra: { text: string; sub: string };
                personal: string;
                generic: { text: string; sub: string };
            };
            flexibility: {
                feature: string;
                zintra: string;
                personal: string;
                generic: { text: string; sub: string };
            };
            evolution: {
                feature: string;
                zintra: string;
                personal: string;
                generic: string;
            };
            scanner: {
                feature: string;
                zintra: string;
                personal: string;
                generic: string;
            };
        };
    };
    pricing: {
        title: string;
        description: string;
        basic: {
            name: string;
            description: string;
            button: string;
            features: string[];
        };
        pro: {
            name: string;
            description: string;
            button: string;
            features: string[];
        };
    };
    faq: {
        title: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
    footer: {
        rights: string;
        terms: string;
        privacy: string;
        support: string;
    };
};

export const translations: Record<Language, TranslationKeys> = {
    en: {
        nav: {
            howItWorks: "How It Works",
            features: "Features",
            forWho: "Who It's For",
            testimonials: "Testimonials",
            plans: "Plans",
            faq: "FAQ",
            login: "Login",
        },
        hero: {
            badge: "Zero generic. 100% You.",
            title: {
                start: "Stop trying to fit into plans made for ",
                highlight: '"everyone"',
                end: ".",
            },
            subtitle: "Get a Nutrition and Workout protocol designed exclusively for your biology, your routine, and your goal — whether it's losing weight, getting lean, or building muscle.",
            cta: "Generate My Personalized Plan",
        },
        scanner: {
            title: {
                start: "AI Scanner: The ",
                highlight: "Freedom",
                end: " to Eat Out",
            },
            subtitle: "Don't be a prisoner to meal prep. Point your camera at any dish and our AI tells you if it fits your plan. Personalization means having freedom with control.",
            visual: {
                analyzing: "Analyzing Meal...",
                salmon: "Grilled Salmon",
                salmonInfo: "150g • 310 kcal",
                salad: "Quinoa & Avocado Salad",
                saladInfo: "120g • 180 kcal",
                tapToScan: "Tap to Scan",
            },
        },
        problem: {
            title: {
                start: "Why do internet diets ",
                highlight: "fail",
                end: " you?",
            },
            description1: "Because they don't know you. Generic apps and internet PDFs treat everyone as a statistic. They ignore that you have knee pain, hate broccoli, or that your metabolism is different.",
            solutionBadge: "The Zintra Solution:",
            description2: " We don't \"guess\" numbers. Our Artificial Intelligence analyzes dozens of variables from your profile to create the shortest and most efficient path between you and your goal.",
        },
        mechanism: {
            header: {
                title: {
                    start: "How We Create the ",
                    highlight: "Perfect Plan",
                },
                subtitle: "Zintra adapts to ANY goal.",
            },
            steps: {
                step1: {
                    title: "We Understand Who You Are",
                    description: "We don't just ask for weight and height. We analyze your routine, stress level, training experience, and food preferences.",
                },
                step2: {
                    title: "We Define Your Goal",
                    description: "Want to lose 20lbs? Want to build leg muscle? Just want better health? The algorithm adjusts calories and training intensity for your specific goal.",
                },
                step3: {
                    title: "The Plan Comes to Life",
                    description: "We generate a unique protocol. If you change your mind or routine, the plan changes with you.",
                },
            },
        },
        features: {
            nutrition: {
                title: "Nutrition: The Meal Plan that Works for YOU",
                description: "There's no universal 'perfect diet'. There's the diet you can actually follow. The app creates meals with foods you love. Want to swap dinner? The system recalculates macros to keep your goal intact.",
            },
            workout: {
                title: "Workout: Individual Body Engineering",
                description: "Is your goal muscle building? The workout focuses on load and volume. Is it weight loss? The focus changes. Total Safety: The only app that asks 'Where do you feel pain?' and removes dangerous exercises for your specific joint.",
            },
            dashboard: {
                title: "Goals Transformed into Actions.",
                description: "The dashboard doesn't just show 'lose 10lbs'. It tells you what to do TODAY. Drink your 3L of water, hit your protein, and complete your workout. The gamification system keeps you consistent.",
            },
        },
        cta: {
            secondary1: "I want to lose weight eating what I love",
            secondary2: "I want my safe and personalized workout",
        },
        qualification: {
            title: {
                start: "Who is ",
                highlight: "Zintra",
                end: " For?",
            },
            subtitle: "This app was made for you if you:",
            items: [
                "Want to lose weight, but won't give up eating delicious food.",
                "Have a busy routine and little time to plan meals.",
                "Are afraid of getting injured with generic internet workouts.",
                "Have tried everything and need organization and consistency.",
            ],
        },
        testimonials: {
            title: {
                highlight: "Real",
                end: " Results.",
            },
            items: [
                {
                    quote: "I used to think I was eating right, but my belly never went away, so frustrating! When I downloaded Zintra, I saw I was making big mistakes with my food distribution. I'm very visual, so waking up and seeing 'Today's Tasks' there to check off ✅ helped me a lot with discipline. It was that daily control that made the magic happen and I finally got defined abs.",
                    name: "Mariana, 24",
                    designation: "University Student",
                },
                {
                    quote: "Honestly, I look at the before photo and don't even recognize myself. I was so tired, had tried all those crazy diets and always gained double the weight back. Zintra was different because it asked everything about my life during signup. And what kept me going was seeing the 'Daily Motivation' and watching my streak flame grow. It was amazing, I lost a lot of weight and this time it was for real.",
                    name: "Carla, 32",
                    designation: "Sales Representative",
                },
                {
                    quote: "Seriously... I was desperate because my wedding dress wasn't closing and I only had a few months left. The 'Scientific Consultation' it generates at the start is actually real, it calculated exactly. I became obsessed with the Nutritional Summary trying to hit my targets perfectly. Oh, and having to 'fill the water glass' in the app helped me so much with bloating. I fit into the dress and felt amazing.",
                    name: "Fernanda, 29",
                    designation: "Architect (Bride)",
                },
                {
                    quote: "With my hectic work schedule and taking care of the house, I had no time to weigh food. The game changer for me was that 'Analyze Meal' button. I'm at a restaurant, take a photo of the plate and the app already tells me if it fits my plan. This made my life so much easier! Highly recommend for anyone with a crazy life.",
                    name: "Patricia, 35",
                    designation: "Project Manager",
                },
                {
                    quote: "Amazing. I thought I was training seriously, but Zintra's workout plan showed me what real training looks like, with the right weights and reps for me. Besides the diet, seeing the Weight Graph line going down every week on the dashboard is addicting and kept me focused.",
                    name: "Bruna, 27",
                    designation: "Designer (NY)",
                },
            ],
        },
        offer: {
            title: {
                start: "Your body's science, ",
                highlight: "decoded",
                end: ".",
            },
            subtitle: "Don't waste more time with trial and error. Start today with a plan that was tailor-made for you.",
            button: "Start Now",
        },
        comparison: {
            title: {
                start: "Much more than an app. ",
                highlight: "Much cheaper than a Personal Trainer.",
            },
            subtitle: "You don't need to pay a fortune to lose weight, nor risk your back with generic workouts.",
            headers: {
                zintra: "Zintra AI",
                recommended: "RECOMMENDED",
                personal: "Personal Trainer + Nutritionist",
                generic: "Generic Apps / YouTube",
            },
            rows: {
                investment: {
                    feature: "Monthly Investment",
                    zintra: { text: "$19.90", sub: "(Affordable)" },
                    personal: "$300+",
                    generic: "$9.90",
                },
                injuries: {
                    feature: "Considers Your Pains/Injuries?",
                    zintra: { text: "Yes", sub: "(Automatic Protection)" },
                    personal: "Yes",
                    generic: { text: "No", sub: "(Dangerous)" },
                },
                flexibility: {
                    feature: "Diet Flexibility",
                    zintra: "Swap foods instantly",
                    personal: "Depends on response",
                    generic: { text: "Fixed PDF", sub: "(Boring)" },
                },
                evolution: {
                    feature: "Route Adjustment (Evolution)",
                    zintra: "Biweekly or Weekly",
                    personal: "Monthly",
                    generic: "Never",
                },
                scanner: {
                    feature: "Plate Scanner (Photo)",
                    zintra: "Yes (AI Included)",
                    personal: "No",
                    generic: "No",
                },
            },
        },
        pricing: {
            title: "Invest in yourself.",
            description: "Choose the plan that works for your routine and your budget.",
            basic: {
                name: "BASIC",
                description: "Perfect to start your journey",
                button: "Start Now",
                features: [
                    "Meal Plan with Real Food (Budget-Friendly)",
                    "Home or Gym Workouts",
                    "Unlimited Food Scanner",
                    "2 Plan Updates/month (Biweekly)",
                ],
            },
            pro: {
                name: "PRO",
                description: "For those who want fast results",
                button: "Subscribe Pro",
                features: [
                    "4 Plan Updates/month (Weekly Adjustment)",
                    "Priority Plan Generation",
                    "Priority Support",
                    "Everything in Basic Plan",
                ],
            },
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                {
                    question: "How do I receive access?",
                    answer: "The system automatically creates your user after payment and sends it by email. You'll receive your login and password in less than 2 minutes.",
                },
                {
                    question: "Does the meal plan consider my restrictions?",
                    answer: "Yes. During the initial setup, you can mark allergies (lactose, gluten, etc.) and preferences (vegan, vegetarian). The AI will never suggest something you can't eat.",
                },
                {
                    question: "Can I cancel anytime?",
                    answer: "Yes. There's no commitment on the monthly plan. You can cancel directly through the app in 'Settings' without needing to talk to anyone.",
                },
                {
                    question: "Is it suitable for beginners?",
                    answer: "Absolutely. Zintra adjusts the workout volume and exercise complexity based on your experience level.",
                },
            ],
        },
        footer: {
            rights: "© 2024 Zintra AI. All rights reserved.",
            terms: "Terms",
            privacy: "Privacy",
            support: "Support",
        },
    },
    pt: {
        nav: {
            howItWorks: "Como Funciona",
            features: "Funcionalidades",
            forWho: "Para Quem",
            testimonials: "Depoimentos",
            plans: "Planos",
            faq: "FAQ",
            login: "Entrar",
        },
        hero: {
            badge: "Zero genérico. 100% Você.",
            title: {
                start: "Pare de tentar se encaixar em planos feitos para ",
                highlight: '"todo mundo"',
                end: ".",
            },
            subtitle: "Tenha um protocolo de Nutrição e Treino desenhado exclusivamente para sua biologia, sua rotina e seu objetivo — seja emagrecer, definir ou ganhar massa muscular.",
            cta: "Gerar Meu Plano Personalizado",
        },
        scanner: {
            title: {
                start: "Scanner IA: A ",
                highlight: "Liberdade",
                end: " de Comer Fora",
            },
            subtitle: "Não seja refém da marmita. Aponte sua câmera para qualquer prato e nossa IA diz se ele cabe no seu plano. Personalização é ter liberdade com controle.",
            visual: {
                analyzing: "Analisando Refeição...",
                salmon: "Salmão Grelhado",
                salmonInfo: "150g • 310 kcal",
                salad: "Salada de Quinoa",
                saladInfo: "120g • 180 kcal",
                tapToScan: "Toque para Escanear",
            },
        },
        problem: {
            title: {
                start: "Por que dietas de internet ",
                highlight: "falham",
                end: " com você?",
            },
            description1: "Porque elas não te conhecem. Apps genéricos e PDFs de internet tratam todo mundo como estatística. Eles ignoram que você tem dor no joelho, odeia brócolis ou que seu metabolismo é diferente.",
            solutionBadge: "A Solução Zintra:",
            description2: " Nós não \"chutamos\" números. Nossa Inteligência Artificial analisa dezenas de variáveis do seu perfil para criar o caminho mais curto e eficiente entre você e seu objetivo.",
        },
        mechanism: {
            header: {
                title: {
                    start: "Como Criamos o ",
                    highlight: "Plano Perfeito",
                },
                subtitle: "Zintra se adapta a QUALQUER objetivo.",
            },
            steps: {
                step1: {
                    title: "Entendemos Quem Você É",
                    description: "Não pedimos apenas peso e altura. Analisamos sua rotina, nível de estresse, experiência de treino e preferências alimentares.",
                },
                step2: {
                    title: "Definimos Seu Objetivo",
                    description: "Quer perder 10kg? Quer ganhar coxa? Só quer mais saúde? O algoritmo ajusta calorias e intensidade de treino para seu alvo específico.",
                },
                step3: {
                    title: "O Plano Ganha Vida",
                    description: "Geramos um protocolo único. Se você muda de ideia ou rotina, o plano muda com você.",
                },
            },
        },
        features: {
            nutrition: {
                title: "Nutrição: O Plano Alimentar que Funciona pra VOCÊ",
                description: "Não existe 'dieta perfeita' universal. Existe a dieta que você consegue seguir. O app monta pratos com alimentos que você ama. Quer trocar o jantar? O sistema recalcula os macros para manter seu objetivo intacto.",
            },
            workout: {
                title: "Treino: Engenharia Corporal Individual",
                description: "Seu objetivo é hipertrofia? O treino foca em carga e volume. É emagrecimento? O foco muda. Segurança Total: O único app que pergunta 'Onde você sente dor?' e remove exercícios perigosos para sua articulação específica.",
            },
            dashboard: {
                title: "Metas Transformadas em Ações.",
                description: "O dashboard não mostra apenas 'perder 5kg'. Ele diz o que fazer HOJE. Beber seus 3L de água, bater a proteína e cumprir o treino. O sistema de gamificação te mantém constante.",
            },
        },
        cta: {
            secondary1: "Quero emagrecer comendo o que gosto",
            secondary2: "Quero meu treino seguro e personalizado",
        },
        qualification: {
            title: {
                start: "Para Quem é o ",
                highlight: "Zintra",
                end: "?",
            },
            subtitle: "Este app foi feito para você se:",
            items: [
                "Quer emagrecer, mas não abre mão de comer coisas gostosas.",
                "Tem rotina corrida e pouco tempo para planejar refeições.",
                "Tem medo de se lesionar com treinos genéricos de internet.",
                "Já tentou de tudo e precisa de organização e constância.",
            ],
        },
        testimonials: {
            title: {
                highlight: "Resultados",
                end: " Reais.",
            },
            items: [
                {
                    quote: "Eu achava que comia certo, mas a barriga nunca sumia, que ódio! Quando baixei o Zintra, vi que eu errava feio na distribuição. Sou muito visual, então acordar e ver as 'Tarefas de Hoje' ali pra dar o check ✅ me ajudou muito na disciplina. Foi esse controle diário que fez a mágica e finalmente trinquei o abdômen.",
                    name: "Mariana, 24",
                    designation: "Estudante Universitária",
                },
                {
                    quote: "Namoral... eu olho a foto de antes e nem me reconheço. Eu tava muito cansada, já tinha feito essas dietas malucas e sempre ganhava o dobro. O Zintra foi diferente porque perguntou tudo da minha vida no cadastro. E o que me segurou foi ver a 'Motivação Diária' e ver meu foguinho de ofensiva crescer. Foi top, perdi muito peso e dessa vez foi real.",
                    name: "Carla, 32",
                    designation: "Representante Comercial",
                },
                {
                    quote: "Sério... eu tava desesperada porque meu vestido de noiva não fechava e faltavam poucos meses. A 'Consultoria Científica' que ele gera no começo é real mesmo, calculou certinho. Fiquei obcecada pelo Resumo Nutricional tentando bater as metas perfeitinho. Ah, e ter que 'encher o copo' de água no app me ajudou muito no inchaço. Entrei no vestido e me senti maravilhosa.",
                    name: "Fernanda, 29",
                    designation: "Arquiteta (Noiva)",
                },
                {
                    quote: "Com a correria do escritório e cuidando da casa, eu não tinha tempo de pesar comida. O 'pulo do gato' pra mim foi esse botão de 'Analisar Refeição'. Tô no restaurante, tiro foto do prato e o app já me fala se cabe no plano. Isso facilitou demais minha vida! Indico muito pra quem tem vida doida.",
                    name: "Patrícia, 35",
                    designation: "Gerente de Projetos",
                },
                {
                    quote: "Surreal. Eu achava que treinava pesado, mas o treino do Zintra me mostrou o que é treino de verdade, com as cargas e repetições certas pra mim. Fora a dieta, ver a linha do Gráfico de Peso descendo toda semana no dashboard vicia e me manteve focada.",
                    name: "Bruna, 27",
                    designation: "Designer (NY)",
                },
            ],
        },
        offer: {
            title: {
                start: "A ciência do seu corpo, ",
                highlight: "decodificada",
                end: ".",
            },
            subtitle: "Não perca mais tempo com tentativa e erro. Comece hoje com um plano que foi feito sob medida para você.",
            button: "Começar Agora",
        },
        comparison: {
            title: {
                start: "Muito mais que um app. ",
                highlight: "Muito mais barato que Personal.",
            },
            subtitle: "Você não precisa pagar uma fortuna para emagrecer, nem arriscar sua coluna com treinos genéricos.",
            headers: {
                zintra: "Zintra AI",
                recommended: "RECOMENDADO",
                personal: "Personal + Nutri",
                generic: "Apps Genéricos / YouTube",
            },
            rows: {
                investment: {
                    feature: "Investimento Mensal",
                    zintra: { text: "R$ 19,90", sub: "(Acessível)" },
                    personal: "R$ 300+",
                    generic: "R$ 9,90",
                },
                injuries: {
                    feature: "Considera dores/lesões?",
                    zintra: { text: "Sim", sub: "(Proteção Automática)" },
                    personal: "Sim",
                    generic: { text: "Não", sub: "(Perigoso)" },
                },
                flexibility: {
                    feature: "Flexibilidade na Dieta",
                    zintra: "Troca alimentos na hora",
                    personal: "Depende da resposta",
                    generic: { text: "PDF Fixo", sub: "(Chato)" },
                },
                evolution: {
                    feature: "Ajuste de Rota (Evolução)",
                    zintra: "Quinzenal ou Semanal",
                    personal: "Mensal",
                    generic: "Nunca",
                },
                scanner: {
                    feature: "Scanner de Prato (Foto)",
                    zintra: "Sim (IA Inclusa)",
                    personal: "Não",
                    generic: "Não",
                },
            },
        },
        pricing: {
            title: "Invista em você.",
            description: "Escolha o plano que funciona para sua rotina e seu bolso.",
            basic: {
                name: "BÁSICO",
                description: "Perfeito para começar a jornada",
                button: "Começar Agora",
                features: [
                    "Plano Alimentar com Comida de Verdade (Barato)",
                    "Treinos em Casa ou Academia",
                    "Scanner de Alimentos Ilimitado",
                    "2 Atualizações de Plano/mês (Quinzenal)",
                ],
            },
            pro: {
                name: "PRO",
                description: "Para quem quer resultados rápidos",
                button: "Assinar Pro",
                features: [
                    "4 Atualizações de Plano/mês (Ajuste Semanal)",
                    "Geração de Plano Prioritária",
                    "Suporte Prioritário",
                    "Tudo do Plano Básico",
                ],
            },
        },
        faq: {
            title: "Perguntas Frequentes",
            items: [
                {
                    question: "Como recebo o acesso?",
                    answer: "O sistema cria seu usuário automaticamente após o pagamento e envia por e-mail. Você recebe seu login e senha em menos de 2 minutos.",
                },
                {
                    question: "O plano alimentar considera minhas restrições?",
                    answer: "Sim. Na configuração inicial você pode marcar alergias (lactose, glúten, etc) e preferências (vegano, vegetariano). A IA nunca vai sugerir algo que você não possa comer.",
                },
                {
                    question: "Posso cancelar a qualquer momento?",
                    answer: "Sim. Não tem fidelidade no plano mensal. Você cancela direto pelo app em 'Configurações' sem precisar falar com ninguém.",
                },
                {
                    question: "Serve para iniciantes?",
                    answer: "Com certeza. O Zintra ajusta o volume de treino e a complexidade dos exercícios baseando-se no seu nível de experiência.",
                },
            ],
        },
        footer: {
            rights: "© 2024 Zintra AI. Todos os direitos reservados.",
            terms: "Termos",
            privacy: "Privacidade",
            support: "Suporte",
        },
    },
    es: {
        nav: {
            howItWorks: "Cómo Funciona",
            features: "Funcionalidades",
            forWho: "Para Quién",
            testimonials: "Testimonios",
            plans: "Planes",
            faq: "FAQ",
            login: "Entrar",
        },
        hero: {
            badge: "Cero genérico. 100% Tú.",
            title: {
                start: "Deja de intentar encajar en planes hechos para ",
                highlight: '"todo el mundo"',
                end: ".",
            },
            subtitle: "Obtén un protocolo de Nutrición y Entrenamiento diseñado exclusivamente para tu biología, rutina y objetivo — ya sea perder peso, definir o ganar masa muscular.",
            cta: "Generar Mi Plan Personalizado",
        },
        scanner: {
            title: {
                start: "Escáner IA: La ",
                highlight: "Libertad",
                end: " de Comer Fuera",
            },
            subtitle: "No seas rehén del tupper. Apunta tu cámara a cualquier plato y nuestra IA te dice si encaja en tu plan. Personalización es tener libertad con control.",
            visual: {
                analyzing: "Analizando Comida...",
                salmon: "Salmón a la Parrilla",
                salmonInfo: "150g • 310 kcal",
                salad: "Ensalada de Quinoa",
                saladInfo: "120g • 180 kcal",
                tapToScan: "Toca para Escanear",
            },
        },
        problem: {
            title: {
                start: "¿Por qué las dietas de internet te ",
                highlight: "fallan",
                end: "?",
            },
            description1: "Porque no te conocen. Las apps genéricas y los PDFs de internet tratan a todos como una estadística. Ignoran que tienes dolor de rodilla, odias el brócoli o que tu metabolismo es diferente.",
            solutionBadge: "La Solución Zintra:",
            description2: " No \"adivinamos\" números. Nuestra Inteligencia Artificial analiza docenas de variables de tu perfil para crear el camino más corto y eficiente entre tú y tu objetivo.",
        },
        mechanism: {
            header: {
                title: {
                    start: "Cómo Creamos el ",
                    highlight: "Plan Perfecto",
                },
                subtitle: "Zintra se adapta a CUALQUIER objetivo.",
            },
            steps: {
                step1: {
                    title: "Entendemos Quién Eres",
                    description: "No pedimos solo peso y altura. Analizamos tu rutina, nivel de estrés, experiencia de entrenamiento y preferencias alimentarias.",
                },
                step2: {
                    title: "Definimos Tu Objetivo",
                    description: "¿Quieres perder 10kg? ¿Ganar pierna? ¿Solo más salud? El algoritmo ajusta calorías e intensidad de entrenamiento para tu meta específica.",
                },
                step3: {
                    title: "El Plan Cobra Vida",
                    description: "Generamos un protocolo único. Si cambias de idea o rutina, el plan cambia contigo.",
                },
            },
        },
        features: {
            nutrition: {
                title: "Nutrición: El Plan Alimenticio que Funciona para TI",
                description: "No existe la 'dieta perfecta' universal. Existe la dieta que puedes seguir de verdad. La app crea platos con alimentos que amas. ¿Quieres cambiar la cena? El sistema recalcula los macros para mantener tu objetivo intacto.",
            },
            workout: {
                title: "Entrenamiento: Ingeniería Corporal Individual",
                description: "¿Tu objetivo es hipertrofia? El entrenamiento se enfoca en carga y volumen. ¿Es pérdida de peso? El foco cambia. Seguridad Total: La única app que pregunta '¿Dónde sientes dolor?' y elimina ejercicios peligrosos para tu articulación específica.",
            },
            dashboard: {
                title: "Metas Transformadas en Acciones.",
                description: "El dashboard no muestra solo 'perder 5kg'. Te dice qué hacer HOY. Beber tus 3L de agua, cumplir la proteína y el entrenamiento. El sistema de gamificación te mantiene constante.",
            },
        },
        cta: {
            secondary1: "Quiero adelgazar comiendo lo que me gusta",
            secondary2: "Quiero mi entrenamiento seguro y personalizado",
        },
        qualification: {
            title: {
                start: "¿Para Quién es ",
                highlight: "Zintra",
                end: "?",
            },
            subtitle: "Esta app fue hecha para ti si:",
            items: [
                "Quieres adelgazar, pero no renuncias a comer cosas ricas.",
                "Tienes una rutina ajetreada y poco tiempo para planear comidas.",
                "Tienes miedo de lesionarte con entrenamientos genéricos de internet.",
                "Ya has intentado todo y necesitas organización y constancia.",
            ],
        },
        testimonials: {
            title: {
                highlight: "Resultados",
                end: " Reales.",
            },
            items: [
                {
                    quote: "Pensaba que comía bien, pero la barriga nunca se iba, ¡qué frustración! Cuando bajé Zintra, vi que me equivocaba mucho en la distribución. Soy muy visual, así que despertar y ver las 'Tareas de Hoy' para marcar ✅ me ayudó mucho con la disciplina. Fue ese control diario lo que hizo la magia y finalmente definí el abdomen.",
                    name: "Mariana, 24",
                    designation: "Estudiante Universitaria",
                },
                {
                    quote: "Honestamente... miro la foto de antes y ni me reconozco. Estaba muy cansada, había probado esas dietas locas y siempre recuperaba el doble. Zintra fue diferente porque preguntó todo de mi vida al registrarme. Y lo que me mantuvo fue ver la 'Motivación Diaria' y mi racha de fuego crecer. Fue increíble, perdí mucho peso y esta vez fue real.",
                    name: "Carla, 32",
                    designation: "Representante Comercial",
                },
                {
                    quote: "En serio... estaba desesperada porque mi vestido de novia no cerraba y faltaban pocos meses. La 'Consultoría Científica' que genera al inicio es real, calculó exacto. Me obsesioné con el Resumen Nutricional intentando cumplir mis metas perfecto. Ah, y tener que 'llenar el vaso' de agua en la app me ayudó mucho con la hinchazón. Entré en el vestido y me sentí maravillosa.",
                    name: "Fernanda, 29",
                    designation: "Arquitecta (Novia)",
                },
                {
                    quote: "Con el ajetreo de la oficina y cuidando la casa, no tenía tiempo de pesar comida. El 'truco' para mí fue ese botón de 'Analizar Comida'. Estoy en el restaurante, tomo foto del plato y la app ya me dice si encaja en el plan. ¡Eso facilitó demasiado mi vida! Lo recomiendo mucho para quien tiene una vida loca.",
                    name: "Patricia, 35",
                    designation: "Gerente de Proyectos",
                },
                {
                    quote: "Increíble. Pensaba que entrenaba pesado, pero el entrenamiento de Zintra me mostró lo que es entrenar de verdad, con las cargas y repeticiones correctas para mí. Aparte de la dieta, ver la línea del Gráfico de Peso bajando cada semana en el dashboard vicia y me mantuvo enfocada.",
                    name: "Bruna, 27",
                    designation: "Diseñadora (NY)",
                },
            ],
        },
        offer: {
            title: {
                start: "La ciencia de tu cuerpo, ",
                highlight: "decodificada",
                end: ".",
            },
            subtitle: "No pierdas más tiempo con prueba y error. Empieza hoy con un plan hecho a tu medida.",
            button: "Empezar Ahora",
        },
        comparison: {
            title: {
                start: "Mucho más que una app. ",
                highlight: "Mucho más barato que un Personal.",
            },
            subtitle: "No necesitas pagar una fortuna para adelgazar, ni arriesgar tu columna con entrenamientos genéricos.",
            headers: {
                zintra: "Zintra AI",
                recommended: "RECOMENDADO",
                personal: "Personal + Nutri",
                generic: "Apps Genéricas / YouTube",
            },
            rows: {
                investment: {
                    feature: "Inversión Mensual",
                    zintra: { text: "$19.90", sub: "(Accesible)" },
                    personal: "$300+",
                    generic: "$9.90",
                },
                injuries: {
                    feature: "¿Considera dolores/lesiones?",
                    zintra: { text: "Sí", sub: "(Protección Automática)" },
                    personal: "Sí",
                    generic: { text: "No", sub: "(Peligroso)" },
                },
                flexibility: {
                    feature: "Flexibilidad en la Dieta",
                    zintra: "Cambia alimentos al instante",
                    personal: "Depende de la respuesta",
                    generic: { text: "PDF Fijo", sub: "(Aburrido)" },
                },
                evolution: {
                    feature: "Ajuste de Ruta (Evolución)",
                    zintra: "Quincenal o Semanal",
                    personal: "Mensual",
                    generic: "Nunca",
                },
                scanner: {
                    feature: "Escáner de Plato (Foto)",
                    zintra: "Sí (IA Incluida)",
                    personal: "No",
                    generic: "No",
                },
            },
        },
        pricing: {
            title: "Invierte en ti.",
            description: "Elige el plan que funciona para tu rutina y tu bolsillo.",
            basic: {
                name: "BÁSICO",
                description: "Perfecto para empezar la jornada",
                button: "Empezar Ahora",
                features: [
                    "Plan Alimenticio con Comida Real (Económico)",
                    "Entrenamientos en Casa o Gimnasio",
                    "Escáner de Alimentos Ilimitado",
                    "2 Actualizaciones de Plan/mes (Quincenal)",
                ],
            },
            pro: {
                name: "PRO",
                description: "Para quien quiere resultados rápidos",
                button: "Suscribir Pro",
                features: [
                    "4 Actualizaciones de Plan/mes (Ajuste Semanal)",
                    "Generación de Plan Prioritaria",
                    "Soporte Prioritario",
                    "Todo del Plan Básico",
                ],
            },
        },
        faq: {
            title: "Preguntas Frecuentes",
            items: [
                {
                    question: "¿Cómo recibo el acceso?",
                    answer: "El sistema crea tu usuario automáticamente tras el pago y lo envía por e-mail. Recibes tu login y contraseña en menos de 2 minutos.",
                },
                {
                    question: "¿El plan alimenticio considera mis restricciones?",
                    answer: "Sí. En la configuración inicial puedes marcar alergias (lactosa, gluten, etc) y preferencias (vegano, vegetariano). La IA nunca sugerirá algo que no puedas comer.",
                },
                {
                    question: "¿Puedo cancelar en cualquier momento?",
                    answer: "Sí. No hay permanencia en el plan mensual. Cancelas directo por la app en 'Configuraciones' sin necesitar hablar con nadie.",
                },
                {
                    question: "¿Sirve para principiantes?",
                    answer: "Con certeza. Zintra ajusta el volumen de entrenamiento y la complejidad de los ejercicios basándose en tu nivel de experiencia.",
                },
            ],
        },
        footer: {
            rights: "© 2024 Zintra AI. Todos los derechos reservados.",
            terms: "Términos",
            privacy: "Privacidad",
            support: "Soporte",
        },
    },
};
