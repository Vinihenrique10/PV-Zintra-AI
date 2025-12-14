export type Language = 'en' | 'pt' | 'es' | 'de' | 'fr' | 'it';

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
        visual: {
            progress: string;
            protein: string;
            calories: string;
            goal: string;
            workoutDone: string;
            waterDone: string;
        };
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
            visual: {
                title: string;
                planName: string;
                carbs: string;
                prot: string;
                fat: string;
                breakfast: string;
                breakfastItem: string;
                breakfastSub: string;
                lunch: string;
                lunchItem: string;
                lunchSub: string;
            };
        };
        workout: {
            title: string;
            description: string;
            visual: {
                title: string;
                focus: string;
                protection: string;
                exercise1: string;
                reps1: string;
                weight: string;
                rest: string;
                exercise2: string;
                reps2: string;
                exercise3: string;
                reps3: string;
            };
        };
        dashboard: {
            title: string;
            description: string;
            visual: {
                title: string;
                focus: string;
                weightTitle: string;
                streak: string;
                adherence: string;
                milestoneTitle: string;
                milestoneName: string;
                milestoneSub: string;
            };
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
            subtitle: "Get a Nutrition and Workout protocol designed exclusively for your biology, routine, and goal — whether it's weight loss, getting shredded, or gaining muscle.",
            cta: "Generate My Custom Plan",
            visual: {
                progress: "Progress",
                protein: "Protein",
                calories: "Calories",
                goal: "Goal",
                workoutDone: "Workout B: Done",
                waterDone: "Water 3L: Done",
            },
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
            description2: " We don't \"guess\" numbers. Our Artificial Intelligence analyzes dozens of variables from your profile to create the shortest and efficient path between you and your goal.",
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
                title: "Nutrition: The Diet Plan That Works for YOU",
                description: "There is no universal 'perfect diet'. There is the diet you can actually stick to. The app builds meals with foods you love. Want to switch dinner? The system recalculates macros to keep your goal intact.",
                visual: {
                    title: "Meal Plan",
                    planName: "Lean Gain",
                    carbs: "Carbs",
                    prot: "Prot",
                    fat: "Fat",
                    breakfast: "Breakfast",
                    breakfastItem: "3 Whole Eggs",
                    breakfastSub: "+ 50g Oatmeal",
                    lunch: "Lunch",
                    lunchItem: "150g Chicken Breast",
                    lunchSub: "+ 200g White Rice",
                },
            },
            workout: {
                title: "Workout: Individual Body Engineering",
                description: "Is your goal hypertrophy? Training focuses on load and volume. Weight loss? The focus shifts. Total Safety: The only app that asks 'Where do you have pain?' and removes dangerous exercises for your specific joint.",
                visual: {
                    title: "Workout A",
                    focus: "Lower Body (Quad Focus)",
                    protection: "Joint Protection: Active",
                    exercise1: "Barbell Squat",
                    reps1: "4 Sets x 10-12 Reps",
                    weight: "Weight",
                    rest: "Rest",
                    exercise2: "Leg Press 45º",
                    reps2: "3 Sets x 12-15 Reps",
                    exercise3: "Leg Extension",
                    reps3: "3 Sets x 15 Reps",
                },
            },
            dashboard: {
                title: "Goals Transformed into Actions.",
                description: "The dashboard doesn't just show 'lose 10lbs'. It tells you what to do TODAY. Drink your 3L of water, hit your protein, and do your workout. The gamification system keeps you consistent.",
                visual: {
                    title: "My Goals",
                    focus: "Focus: Weight Loss",
                    weightTitle: "Current Weight",
                    streak: "Day Streak",
                    adherence: "Adherence",
                    milestoneTitle: "Next Milestone",
                    milestoneName: "Lose 10lbs",
                    milestoneSub: "1.8lbs to go",
                },
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
            subtitle: "Obtenha um protocolo de Nutrição e Treino desenhado exclusivamente para sua biologia, rotina e objetivo — seja emagrecer, definir ou ganhar massa.",
            cta: "Gerar Meu Plano Personalizado",
            visual: {
                progress: "Progresso",
                protein: "Proteína",
                calories: "Calorias",
                goal: "Meta",
                workoutDone: "Treino B: Feito",
                waterDone: "Água 3L: Feito",
            },
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
                title: "Nutrição: O Plano Alimentar que Funciona para VOCÊ",
                description: "Não existe a 'dieta perfeita' universal. Existe a dieta que você consegue seguir de verdade. O app monta pratos com alimentos que você ama. Quer trocar o jantar? O sistema recalcula os macros para manter seu objetivo intacto.",
                visual: {
                    title: "Plano Alimentar",
                    planName: "Ganho Limpo",
                    carbs: "Carb",
                    prot: "Prot",
                    fat: "Gord",
                    breakfast: "Café da Manhã",
                    breakfastItem: "3 Ovos Inteiros",
                    breakfastSub: "+ 50g Aveia",
                    lunch: "Almoço",
                    lunchItem: "150g Peito de Frango",
                    lunchSub: "+ 200g Arroz Branco",
                },
            },
            workout: {
                title: "Treino: Engenharia Corporal Individual",
                description: "Seu objetivo é hipertrofia? O treino foca em carga e volume. É emagrecimento? O foco muda. Segurança Total: O único app que pergunta 'Onde você tem dor?' e remove exercícios perigosos para sua articulação específica.",
                visual: {
                    title: "Treino A",
                    focus: "Membros Inf. (Foco Quadríceps)",
                    protection: "Proteção Articular: Ativa",
                    exercise1: "Agachamento Barra",
                    reps1: "4 Séries x 10-12 Reps",
                    weight: "Carga",
                    rest: "Descanso",
                    exercise2: "Leg Press 45º",
                    reps2: "3 Séries x 12-15 Reps",
                    exercise3: "Cadeira Extensora",
                    reps3: "3 Séries x 15 Reps",
                },
            },
            dashboard: {
                title: "Metas Transformadas em Ações.",
                description: "O dashboard não mostra apenas 'perder 5kg'. Ele te diz o que fazer HOJE. Beber seus 3L de água, bater a proteína e fazer o treino. O sistema de gamificação te mantém constante.",
                visual: {
                    title: "Minhas Metas",
                    focus: "Foco: Perda de Peso",
                    weightTitle: "Peso Atual",
                    streak: "Sequência",
                    adherence: "Aderência",
                    milestoneTitle: "Próximo Marco",
                    milestoneName: "Perder 5kg",
                    milestoneSub: "0.8kg restante",
                },
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
            visual: {
                progress: "Progreso",
                protein: "Proteína",
                calories: "Calorías",
                goal: "Meta",
                workoutDone: "Entrenamiento B: Hecho",
                waterDone: "Agua 3L: Hecho",
            },
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
                visual: {
                    title: "Plan Alimenticio",
                    planName: "Ganancia Limpia",
                    carbs: "Carb",
                    prot: "Prot",
                    fat: "Grasa",
                    breakfast: "Desayuno",
                    breakfastItem: "3 Huevos Enteros",
                    breakfastSub: "+ 50g Avena",
                    lunch: "Almuerzo",
                    lunchItem: "150g Pechuga de Pollo",
                    lunchSub: "+ 200g Arroz Blanco",
                },
            },
            workout: {
                title: "Entrenamiento: Ingeniería Corporal Individual",
                description: "¿Tu objetivo es hipertrofia? El entrenamiento se enfoca en carga y volumen. ¿Es pérdida de peso? El foco cambia. Seguridad Total: La única app que pregunta '¿Dónde sientes dolor?' y elimina ejercicios peligrosos para tu articulación específica.",
                visual: {
                    title: "Entrenamiento A",
                    focus: "Miembros Inf. (Enfoque Cuádriceps)",
                    protection: "Protección Articular: Activa",
                    exercise1: "Sentadilla con Barra",
                    reps1: "4 Series x 10-12 Reps",
                    weight: "Carga",
                    rest: "Descanso",
                    exercise2: "Prensa de Piernas 45º",
                    reps2: "3 Series x 12-15 Reps",
                    exercise3: "Extensión de Piernas",
                    reps3: "3 Series x 15 Reps",
                },
            },
            dashboard: {
                title: "Metas Transformadas en Acciones.",
                description: "El dashboard no muestra solo 'perder 5kg'. Te dice qué hacer HOY. Beber tus 3L de agua, cumplir la proteína y el entrenamiento. El sistema de gamificación te mantiene constante.",
                visual: {
                    title: "Mis Metas",
                    focus: "Enfoque: Pérdida de Peso",
                    weightTitle: "Peso Actual",
                    streak: "Racha",
                    adherence: "Adherencia",
                    milestoneTitle: "Próximo Hito",
                    milestoneName: "Perder 5kg",
                    milestoneSub: "0.8kg restante",
                },
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
    de: {
        nav: {
            howItWorks: "Wie es funktioniert",
            features: "Funktionen",
            forWho: "Für wen",
            testimonials: "Erfahrungsberichte",
            plans: "Pläne",
            faq: "FAQ",
            login: "Anmelden",
        },
        hero: {
            badge: "Null generisch. 100% Du.",
            title: {
                start: "Hör auf, dich in Pläne zu zwängen, die für ",
                highlight: '"jedermann"',
                end: " gemacht sind.",
            },
            subtitle: "Erhalte ein Ernährungs- und Trainingsprotokoll, das exklusiv für deine Biologie, deine Routine und dein Ziel entwickelt wurde — sei es Abnehmen, Definieren oder Muskelaufbau.",
            cta: "Meinen personalisierten Plan erstellen",
            visual: {
                progress: "Fortschritt",
                protein: "Protein",
                calories: "Kalorien",
                goal: "Ziel",
                workoutDone: "Training B: Fertig",
                waterDone: "Wasser 3L: Fertig",
            },
        },
        scanner: {
            title: {
                start: "KI-Scanner: Die ",
                highlight: "Freiheit",
                end: ", auswärts zu essen",
            },
            subtitle: "Sei kein Gefangener deiner Tupperware. Richte deine Kamera auf ein beliebiges Gericht und unsere KI sagt dir, ob es in deinen Plan passt. Personalisierung bedeutet Freiheit mit Kontrolle.",
            visual: {
                analyzing: "Mahlzeit analysieren...",
                salmon: "Gegrillter Lachs",
                salmonInfo: "150g • 310 kcal",
                salad: "Quinoa-Salat",
                saladInfo: "120g • 180 kcal",
                tapToScan: "Zum Scannen tippen",
            },
        },
        problem: {
            title: {
                start: "Warum Internet-Diäten bei dir ",
                highlight: "scheitern",
                end: "?",
            },
            description1: "Weil sie dich nicht kennen. Generische Apps und Internet-PDFs behandeln jeden als Statistik. Sie ignorieren, dass du Knieschmerzen hast, Brokkoli hasst oder einen anderen Stoffwechsel hast.",
            solutionBadge: "Die Zintra-Lösung:",
            description2: " Wir \"raten\" keine Zahlen. Unsere Künstliche Intelligenz analysiert Dutzende von Variablen aus deinem Profil, um den kürzesten und effizientesten Weg zwischen dir und deinem Ziel zu erstellen.",
        },
        mechanism: {
            header: {
                title: {
                    start: "Wie wir den ",
                    highlight: "perfekten Plan",
                },
                subtitle: "Zintra passt sich JEDEM Ziel an.",
            },
            steps: {
                step1: {
                    title: "Wir verstehen, wer du bist",
                    description: "Wir fragen nicht nur nach Gewicht und Größe. Wir analysieren deine Routine, dein Stresslevel, deine Trainingserfahrung und deine Essvorlieben.",
                },
                step2: {
                    title: "Wir definieren dein Ziel",
                    description: "Willst du 10kg abnehmen? Beinmuskeln aufbauen? Einfach gesünder leben? Der Algorithmus passt Kalorien und Trainingsintensität genau an dein Ziel an.",
                },
                step3: {
                    title: "Der Plan erwacht zum Leben",
                    description: "Wir generieren ein einzigartiges Protokoll. Wenn du deine Meinung oder Routine änderst, ändert sich der Plan mit dir.",
                },
            },
        },
        features: {
            nutrition: {
                title: "Ernährung: Der Ernährungsplan, der für DICH funktioniert",
                description: "Es gibt keine universelle 'perfekte Diät'. Es gibt nur die Diät, die du tatsächlich durchhalten kannst. Die App erstellt Gerichte mit Lebensmitteln, die du liebst. Willst du das Abendessen tauschen? Das System berechnet die Makros neu, um dein Ziel intakt zu halten.",
                visual: {
                    title: "Ernährungsplan",
                    planName: "Lean Gain",
                    carbs: "Kohlenhydrate",
                    prot: "Prot",
                    fat: "Fett",
                    breakfast: "Frühstück",
                    breakfastItem: "3 Ganze Eier",
                    breakfastSub: "+ 50g Haferflocken",
                    lunch: "Mittagessen",
                    lunchItem: "150g Hähnchenbrust",
                    lunchSub: "+ 200g Weißer Reis",
                },
            },
            workout: {
                title: "Training: Individuelle Körper-Ingenieurskunst",
                description: "Ist dein Ziel Hypertrophie? Das Training konzentriert sich auf Last und Volumen. Ist es Gewichtsverlust? Der Fokus ändert sich. Totale Sicherheit: Die einzige App, die fragt 'Wo hast du Schmerzen?' und gefährliche Übungen für dein spezifisches Gelenk entfernt.",
                visual: {
                    title: "Training A",
                    focus: "Unterkörper (Quad-Fokus)",
                    protection: "Gelenkschutz: Aktiv",
                    exercise1: "Langhantel-Kniebeuge",
                    reps1: "4 Sätze x 10-12 Wh",
                    weight: "Gewicht",
                    rest: "Pause",
                    exercise2: "Beinpresse 45º",
                    reps2: "3 Sätze x 12-15 Wh",
                    exercise3: "Beinstrecken",
                    reps3: "3 Sätze x 15 Wh",
                },
            },
            dashboard: {
                title: "Ziele in Aktionen verwandelt.",
                description: "Das Dashboard zeigt nicht nur '5kg verlieren'. Es sagt dir, was du HEUTE tun musst. Trink deine 3L Wasser, triff dein Protein-Ziel und absolviere dein Training. Das Gamification-System hält dich konstant dabei.",
                visual: {
                    title: "Meine Ziele",
                    focus: "Fokus: Gewichtsverlust",
                    weightTitle: "Aktuelles Gewicht",
                    streak: "Tages-Serie",
                    adherence: "Einhaltung",
                    milestoneTitle: "Nächster Meilenstein",
                    milestoneName: "5kg verlieren",
                    milestoneSub: "noch 0.8kg",
                },
            },
        },
        cta: {
            secondary1: "Ich will abnehmen und essen, was ich mag",
            secondary2: "Ich will mein sicheres und personalisiertes Training",
        },
        qualification: {
            title: {
                start: "Für wen ist ",
                highlight: "Zintra",
                end: "?",
            },
            subtitle: "Diese App wurde für dich gemacht, wenn:",
            items: [
                "Du abnehmen willst, aber nicht auf leckeres Essen verzichten möchtest.",
                "Du eine stressige Routine hast und wenig Zeit für Essensplanung.",
                "Du Angst hast, dich mit generischen Internet-Trainings zu verletzen.",
                "Du schon alles versucht hast und Organisation und Konstanz brauchst.",
            ],
        },
        testimonials: {
            title: {
                highlight: "Echte",
                end: " Ergebnisse.",
            },
            items: [
                {
                    quote: "Ich dachte, ich ernähre mich richtig, aber mein Bauch ging nie weg, so frustrierend! Als ich Zintra herunterlud, sah ich, dass ich große Fehler bei der Verteilung machte. Ich bin sehr visuell, also morgens aufzuwachen und die 'Aufgaben für heute' zum Abhaken ✅ zu sehen, half mir sehr bei der Disziplin.",
                    name: "Mariana, 24",
                    designation: "Studentin",
                },
                {
                    quote: "Ehrlich gesagt... ich schaue das Vorher-Foto an und erkenne mich nicht wieder. Ich war so müde, hatte all diese verrückten Diäten probiert und immer das Doppelte wieder zugenommen. Zintra war anders, hat alles über mein Leben gefragt. Die 'Tägliche Motivation' und meine Flammen-Serie wachsen zu sehen, hielt mich dran.",
                    name: "Carla, 32",
                    designation: "Vertriebsmitarbeiterin",
                },
                {
                    quote: "Im Ernst... ich war verzweifelt, weil mein Hochzeitskleid nicht zuging. Die 'Wissenschaftliche Beratung' am Anfang ist wirklich echt, hat genau berechnet. Ich wurde besessen von der Nährwertzusammenfassung. Und das 'Wasserglas füllen' in der App hat mir so sehr gegen Blähungen geholfen.",
                    name: "Fernanda, 29",
                    designation: "Architektin (Braut)",
                },
                {
                    quote: "Mit dem Stress im Büro und Haushalt hatte ich keine Zeit, Essen zu wiegen. Der Gamechanger war dieser 'Mahlzeit analysieren' Button. Ich bin im Restaurant, mache ein Foto vom Teller und die App sagt mir schon, ob es in den Plan passt. Das hat mein Leben so erleichtert!",
                    name: "Patricia, 35",
                    designation: "Projektmanagerin",
                },
                {
                    quote: "Unglaublich. Ich dachte, ich trainiere hart, aber das Zintra-Training zeigte mir, was echtes Training ist. Neben der Diät macht es süchtig, die Gewichtskurve im Dashboard jede Woche nach unten gehen zu sehen.",
                    name: "Bruna, 27",
                    designation: "Designerin (NY)",
                },
            ],
        },
        offer: {
            title: {
                start: "Die Wissenschaft deines Körpers, ",
                highlight: "entschlüsselt",
                end: ".",
            },
            subtitle: "Verschwende keine Zeit mehr mit Versuch und Irrtum. Starte heute mit einem Plan, der für dich maßgeschneidert wurde.",
            button: "Jetzt starten",
        },
        comparison: {
            title: {
                start: "Viel mehr als eine App. ",
                highlight: "Viel günstiger als ein Personal Trainer.",
            },
            subtitle: "Du musst kein Vermögen zahlen, um abzunehmen, oder deinen Rücken mit generischen Trainings riskieren.",
            headers: {
                zintra: "Zintra AI",
                recommended: "EMPFOHLEN",
                personal: "Personal Trainer + Ernährungsberater",
                generic: "Generische Apps / YouTube",
            },
            rows: {
                investment: {
                    feature: "Monatliche Investition",
                    zintra: { text: "19,90 €", sub: "(Erschwinglich)" },
                    personal: "300 €+",
                    generic: "9,90 €",
                },
                injuries: {
                    feature: "Berücksichtigt Schmerzen/Verletzungen?",
                    zintra: { text: "Ja", sub: "(Automatischer Schutz)" },
                    personal: "Ja",
                    generic: { text: "Nein", sub: "(Gefährlich)" },
                },
                flexibility: {
                    feature: "Flexibilität in der Diät",
                    zintra: "Lebensmittel sofort tauschen",
                    personal: "Hängt von Antwort ab",
                    generic: { text: "Fixes PDF", sub: "(Langweilig)" },
                },
                evolution: {
                    feature: "Routenanpassung (Evolution)",
                    zintra: "Alle zwei Wochen oder Wöchentlich",
                    personal: "Monatlich",
                    generic: "Nie",
                },
                scanner: {
                    feature: "Teller-Scanner (Foto)",
                    zintra: "Ja (KI inklusive)",
                    personal: "Nein",
                    generic: "Nein",
                },
            },
        },
        pricing: {
            title: "Investiere in dich selbst.",
            description: "Wähle den Plan, der für deine Routine und deinen Geldbeutel funktioniert.",
            basic: {
                name: "BASIS",
                description: "Perfekt, um deine Reise zu beginnen",
                button: "Jetzt starten",
                features: [
                    "Ernährungsplan mit echtem Essen (Günstig)",
                    "Training zu Hause oder im Fitnessstudio",
                    "Unbegrenzter Lebensmittel-Scanner",
                    "2 Plan-Updates/Monat (Alle zwei Wochen)",
                ],
            },
            pro: {
                name: "PRO",
                description: "Für diejenigen, die schnelle Ergebnisse wollen",
                button: "Pro abonnieren",
                features: [
                    "4 Plan-Updates/Monat (Wöchentliche Anpassung)",
                    "Priorisierte Plan-Generierung",
                    "Priorisierter Support",
                    "Alles im Basis-Plan",
                ],
            },
        },
        faq: {
            title: "Häufig gestellte Fragen",
            items: [
                {
                    question: "Wie erhalte ich Zugang?",
                    answer: "Das System erstellt deinen Benutzer automatisch nach der Zahlung und sendet ihn per E-Mail. Du erhältst deinen Login und dein Passwort in weniger als 2 Minuten.",
                },
                {
                    question: "Berücksichtigt der Ernährungsplan meine Einschränkungen?",
                    answer: "Ja. Bei der Ersteinrichtung kannst du Allergien (Laktose, Gluten usw.) und Vorlieben (vegan, vegetarisch) angeben. Die KI wird niemals etwas vorschlagen, das du nicht essen kannst.",
                },
                {
                    question: "Kann ich jederzeit kündigen?",
                    answer: "Ja. Es gibt keine Bindung im Monatsplan. Du kannst direkt über die App in den 'Einstellungen' kündigen, ohne mit jemandem sprechen zu müssen.",
                },
                {
                    question: "Ist es für Anfänger geeignet?",
                    answer: "Absolut. Zintra passt das Trainingsvolumen und die Komplexität der Übungen basierend auf deinem Erfahrungslevel an.",
                },
            ],
        },
        footer: {
            rights: "© 2024 Zintra AI. Alle Rechte vorbehalten.",
            terms: "AGB",
            privacy: "Datenschutz",
            support: "Support",
        },
    },
    fr: {
        nav: {
            howItWorks: "Comment ça marche",
            features: "Fonctionnalités",
            forWho: "Pour qui",
            testimonials: "Témoignages",
            plans: "Plans",
            faq: "FAQ",
            login: "Se connecter",
        },
        hero: {
            badge: "Zéro générique. 100% Vous.",
            title: {
                start: "Arrêtez d'essayer de rentrer dans des plans faits pour ",
                highlight: '"tout le monde"',
                end: ".",
            },
            subtitle: "Obtenez un protocole de Nutrition et d'Entraînement conçu exclusivement pour votre biologie, votre routine et votre objectif — que ce soit perdre du poids, sécher ou prendre du muscle.",
            cta: "Générer Mon Plan Personnalisé",
            visual: {
                progress: "Progrès",
                protein: "Protéine",
                calories: "Calories",
                goal: "Objectif",
                workoutDone: "Entraînement B : Fait",
                waterDone: "Eau 3L : Fait",
            },
        },
        scanner: {
            title: {
                start: "Scanner IA : La ",
                highlight: "Liberté",
                end: " de Manger Dehors",
            },
            subtitle: "Ne soyez pas otage de votre tupperware. Pointez votre caméra sur n'importe quel plat et notre IA vous dit s'il rentre dans votre plan. La personnalisation, c'est la liberté avec contrôle.",
            visual: {
                analyzing: "Analyse du repas...",
                salmon: "Saumon Grillé",
                salmonInfo: "150g • 310 kcal",
                salad: "Salade de Quinoa",
                saladInfo: "120g • 180 kcal",
                tapToScan: "Appuyez pour Scanner",
            },
        },
        problem: {
            title: {
                start: "Pourquoi les régimes d'internet ",
                highlight: "échouent",
                end: "-ils avec vous ?",
            },
            description1: "Parce qu'ils ne vous connaissent pas. Les actus génériques et les PDF d'internet traitent tout le monde comme une statistique. Ils ignorent que vous avez mal au genou, détestez le brocoli ou que votre métabolisme est différent.",
            solutionBadge: "La Solution Zintra :",
            description2: " Nous ne \"devinons\" pas les chiffres. Notre Intelligence Artificielle analyse des douzaines de variables de votre profil pour créer le chemin le plus court et efficace entre vous et votre objectif.",
        },
        mechanism: {
            header: {
                title: {
                    start: "Comment Nous Créons le ",
                    highlight: "Plan Parfait",
                },
                subtitle: "Zintra s'adapte à TOUT objectif.",
            },
            steps: {
                step1: {
                    title: "Nous Comprenons Qui Vous Êtes",
                    description: "Nous ne demandons pas juste le poids et la taille. Nous analysons votre routine, niveau de stress, expérience d'entraînement et préférences alimentaires.",
                },
                step2: {
                    title: "Nous Définissons Votre Objectif",
                    description: "Vous voulez perdre 5kg ? Gagner des cuisses ? Juste plus de santé ? L'algorithme ajuste les calories et l'intensité d'entraînement pour votre cible spécifique.",
                },
                step3: {
                    title: "Le Plan Prend Vie",
                    description: "Nous générons un protocole unique. Si vous changez d'avis ou de routine, le plan change avec vous.",
                },
            },
        },
        features: {
            nutrition: {
                title: "Nutrition : Le Plan Alimentaire qui Marche pour VOUS",
                description: "Il n'y a pas de 'régime parfait' universel. Il y a le régime que vous pouvez réellement suivre. L'app crée des plats avec des aliments que vous aimez. Vous voulez changer le dîner ? Le système recalcule les macros pour garder votre objectif intact.",
                visual: {
                    title: "Plan Alimentaire",
                    planName: "Gain Sec",
                    carbs: "Glucides",
                    prot: "Prot",
                    fat: "Gras",
                    breakfast: "Petit Déjeuner",
                    breakfastItem: "3 Œufs Entiers",
                    breakfastSub: "+ 50g Avoine",
                    lunch: "Déjeuner",
                    lunchItem: "150g Blanc de Poulet",
                    lunchSub: "+ 200g Riz Blanc",
                },
            },
            workout: {
                title: "Entraînement : Ingénierie Corporelle Individuelle",
                description: "Votre objectif est l'hypertrophie ? L'entraînement se concentre sur la charge et le volume. Perte de poids ? Le focus change. Sécurité Totale : La seule app qui demande 'Où avez-vous mal ?' et retire les exercices dangereux pour votre articulation spécifique.",
                visual: {
                    title: "Entraînement A",
                    focus: "Bas du Corps (Focus Quads)",
                    protection: "Protection Articulaire : Active",
                    exercise1: "Squat Barre",
                    reps1: "4 Séries x 10-12 Reps",
                    weight: "Poids",
                    rest: "Repos",
                    exercise2: "Presse à Cuisses 45º",
                    reps2: "3 Séries x 12-15 Reps",
                    exercise3: "Extension Jambes",
                    reps3: "3 Séries x 15 Reps",
                },
            },
            dashboard: {
                title: "Objectifs Transformés en Actions.",
                description: "Le tableau de bord ne montre pas juste 'perdre 5kg'. Il vous dit quoi faire AUJOURD'HUI. Boire vos 3L d'eau, atteindre votre protéine et faire votre entraînement. Le système de gamification vous garde constant.",
                visual: {
                    title: "Mes Objectifs",
                    focus: "Focus : Perte de Poids",
                    weightTitle: "Poids Actuel",
                    streak: "Série",
                    adherence: "Adhérence",
                    milestoneTitle: "Prochaine Étape",
                    milestoneName: "Perdre 5kg",
                    milestoneSub: "0.8kg restant",
                },
            },
        },
        cta: {
            secondary1: "Je veux maigrir en mangeant ce que j'aime",
            secondary2: "Je veux mon entraînement sûr et personnalisé",
        },
        qualification: {
            title: {
                start: "Pour Qui est ",
                highlight: "Zintra",
                end: " ?",
            },
            subtitle: "Cette app a été faite pour vous si :",
            items: [
                "Vous voulez maigrir, mais ne renoncez pas à manger des choses délicieuses.",
                "Vous avez une routine chargée et peu de temps pour planifier les repas.",
                "Vous avez peur de vous blesser avec des entraînements génériques d'internet.",
                "Vous avez déjà tout essayé et avez besoin d'organisation et de constance.",
            ],
        },
        testimonials: {
            title: {
                highlight: "Résultats",
                end: " Réels.",
            },
            items: [
                {
                    quote: "Je pensais manger sainement, mais mon ventre ne partait jamais, frustrant ! En téléchargeant Zintra, j'ai vu que je faisais de grosses erreurs. Je suis très visuelle, donc voir les 'Tâches d'Aujourd'hui' à cocher ✅ m'a beaucoup aidée.",
                    name: "Mariana, 24",
                    designation: "Étudiante",
                },
                {
                    quote: "Honnêtement... je regarde la photo d'avant et je ne me reconnais pas. Zintra a été différent car il a tout demandé sur ma vie à l'inscription. Voir ma série de flammes grandir m'a gardée motivée. J'ai perdu beaucoup de poids et cette fois c'était réel.",
                    name: "Carla, 32",
                    designation: "Zintra AI User",
                },
                {
                    quote: "J'étais désespérée car ma robe de mariée ne fermait plus. La 'Consultation Scientifique' est réelle, elle a calculé exactement. J'ai réussi à entrer dans la robe et je me sentais merveilleuse.",
                    name: "Fernanda, 29",
                    designation: "Architecte",
                },
                {
                    quote: "Avec le boulot, je n'avais pas le temps de peser. Le bouton 'Analyser Repas' a changé la donne. Je prends une photo et l'app me dit si ça rentre dans le plan. Je recommande !",
                    name: "Patricia, 35",
                    designation: "Chef de Projet",
                },
                {
                    quote: "Incroyable. L'entraînement Zintra m'a montré ce qu'est un vrai entraînement. Voir la courbe de poids descendre chaque semaine est addictif.",
                    name: "Bruna, 27",
                    designation: "Designer",
                },
            ],
        },
        offer: {
            title: {
                start: "La science de votre corps, ",
                highlight: "décodée",
                end: ".",
            },
            subtitle: "Ne perdez plus de temps. Commencez aujourd'hui avec un plan fait sur mesure pour vous.",
            button: "Commencer Maintenant",
        },
        comparison: {
            title: {
                start: "Bien plus qu'une app. ",
                highlight: "Bien moins cher qu'un Coach.",
            },
            subtitle: "Vous n'avez pas besoin de payer une fortune pour maigrir, ni risquer votre dos.",
            headers: {
                zintra: "Zintra AI",
                recommended: "RECOMMANDÉ",
                personal: "Coach + Nutri",
                generic: "Apps Génériques / YouTube",
            },
            rows: {
                investment: {
                    feature: "Investissement Mensuel",
                    zintra: { text: "19,90 €", sub: "(Abordable)" },
                    personal: "300 €+",
                    generic: "9,90 €",
                },
                injuries: {
                    feature: "Considère douleurs/blessures ?",
                    zintra: { text: "Oui", sub: "(Protection Auto)" },
                    personal: "Oui",
                    generic: { text: "Non", sub: "(Dangereux)" },
                },
                flexibility: {
                    feature: "Flexibilité Alimentaire",
                    zintra: "Échange instantané",
                    personal: "Dépend de la réponse",
                    generic: { text: "PDF Fixe", sub: "(Ennuyeux)" },
                },
                evolution: {
                    feature: "Ajustement de Route",
                    zintra: "Bi-hebdo ou Hebdo",
                    personal: "Mensuel",
                    generic: "Jamais",
                },
                scanner: {
                    feature: "Scanner d'Asiette (Photo)",
                    zintra: "Oui (IA Incluse)",
                    personal: "Non",
                    generic: "Non",
                },
            },
        },
        pricing: {
            title: "Investissez en vous.",
            description: "Choisissez le plan qui fonctionne pour votre routine et votre budget.",
            basic: {
                name: "BASIQUE",
                description: "Parfait pour commencer",
                button: "Commencer Maintenant",
                features: [
                    "Plan Alimentaire (Économique)",
                    "Entraînements Maison/Gym",
                    "Scanner Illimité",
                    "2 Mises à jour/mois",
                ],
            },
            pro: {
                name: "PRO",
                description: "Pour des résultats rapides",
                button: "S'abonner Pro",
                features: [
                    "4 Mises à jour/mois (Hebdo)",
                    "Génération Prioritaire",
                    "Support Prioritaire",
                    "Tout du Plan Basique",
                ],
            },
        },
        faq: {
            title: "Questions Fréquentes",
            items: [
                {
                    question: "Comment je reçois l'accès ?",
                    answer: "Le système crée votre utilisateur après paiement et l'envoie par email en moins de 2 minutes.",
                },
                {
                    question: "Le plan considère mes restrictions ?",
                    answer: "Oui. Vous pouvez marquer allergies et préférences. L'IA ne suggérera jamais quelque chose que vous ne pouvez pas manger.",
                },
                {
                    question: "Puis-je annuler à tout moment ?",
                    answer: "Oui. Sans engagement. Vous annulez directement dans l'app.",
                },
                {
                    question: "Est-ce adapté aux débutants ?",
                    answer: "Absolument. Zintra ajuste le volume et la complexité selon votre niveau.",
                },
            ],
        },
        footer: {
            rights: "© 2024 Zintra AI. Tous droits réservés.",
            terms: "Conditions",
            privacy: "Confidentialité",
            support: "Support",
        },
    },
    it: {
        nav: {
            howItWorks: "Come Funziona",
            features: "Funzionalità",
            forWho: "Per Chi",
            testimonials: "Testimonianze",
            plans: "Piani",
            faq: "FAQ",
            login: "Accedi",
        },
        hero: {
            badge: "Zero generico. 100% Tu.",
            title: {
                start: "Smetti di cercare di adattarti a piani fatti per ",
                highlight: '"tutti"',
                end: ".",
            },
            subtitle: "Ottieni un protocollo di Nutrizione e Allenamento progettato esclusivamente per la tua biologia, routine e obiettivo — che sia dimagrire, definire o mettere massa.",
            cta: "Genera Il Mio Piano Personalizzato",
            visual: {
                progress: "Progresso",
                protein: "Proteine",
                calories: "Calorie",
                goal: "Obiettivo",
                workoutDone: "Allenamento B: Fatto",
                waterDone: "Acqua 3L: Fatto",
            },
        },
        scanner: {
            title: {
                start: "Scanner IA: La ",
                highlight: "Libertà",
                end: " di Mangiare Fuori",
            },
            subtitle: "Non essere ostaggio del portapranzo. Punta la fotocamera su qualsiasi piatto e la nostra IA ti dice se rientra nel tuo piano.",
            visual: {
                analyzing: "Analisi Pasto...",
                salmon: "Salmone Grigliato",
                salmonInfo: "150g • 310 kcal",
                salad: "Insalata di Quinoa",
                saladInfo: "120g • 180 kcal",
                tapToScan: "Tocca per Scansionare",
            },
        },
        problem: {
            title: {
                start: "Perché le diete di internet ",
                highlight: "falliscono",
                end: " con te?",
            },
            description1: "Perché non ti conoscono. Le app generiche e i PDF trattano tutti come una statistica.",
            solutionBadge: "La Soluzione Zintra:",
            description2: " Non \"indoviniamo\" i numeri. La nostra IA analizza decine di variabili per creare il percorso più breve verso il tuo obiettivo.",
        },
        mechanism: {
            header: {
                title: {
                    start: "Come Creiamo il ",
                    highlight: "Piano Perfetto",
                },
                subtitle: "Zintra si adatta a QUALSIASI obiettivo.",
            },
            steps: {
                step1: {
                    title: "Capiamo Chi Sei",
                    description: "Non chiediamo solo peso e altezza. Analizziamo la tua routine, stress e preferenze.",
                },
                step2: {
                    title: "Definiamo Il Tuo Obiettivo",
                    description: "Vuoi perdere 10kg? Mettere massa? Solo salute? L'algoritmo si adatta.",
                },
                step3: {
                    title: "Il Piano Prende Vita",
                    description: "Generiamo un protocollo unico. Se cambi idea, il piano cambia con te.",
                },
            },
        },
        features: {
            nutrition: {
                title: "Nutrizione: Il Piano che Funziona per TE",
                description: "Non esiste la dieta perfetta universale. L'app crea piatti che ami. Vuoi cambiare cena? Il sistema ricalcola i macro.",
                visual: {
                    title: "Piano Alimentare",
                    planName: "Massa Pulita",
                    carbs: "Carb",
                    prot: "Prot",
                    fat: "Grassi",
                    breakfast: "Colazione",
                    breakfastItem: "3 Uova Intere",
                    breakfastSub: "+ 50g Avena",
                    lunch: "Pranzo",
                    lunchItem: "150g Petto di Pollo",
                    lunchSub: "+ 200g Riso Bianco",
                },
            },
            workout: {
                title: "Allenamento: Ingegneria Corporea",
                description: "Ipertrofia o dimagrimento? Sicurezza Totale: L'unica app che chiede 'Dove hai dolore?' ed elimina esercizi pericolosi.",
                visual: {
                    title: "Allenamento A",
                    focus: "Parte Inf. (Focus Quadricipiti)",
                    protection: "Protezione Articolare: Attiva",
                    exercise1: "Squat Bilanciere",
                    reps1: "4 Serie x 10-12 Reps",
                    weight: "Peso",
                    rest: "Riposo",
                    exercise2: "Leg Press 45º",
                    reps2: "3 Serie x 12-15 Reps",
                    exercise3: "Leg Extension",
                    reps3: "3 Serie x 15 Reps",
                },
            },
            dashboard: {
                title: "Obiettivi Trasformati in Azioni.",
                description: "Il dashboard ti dice cosa fare OGGI. Bere acqua, proteine e allenamento. La gamification ti mantiene costante.",
                visual: {
                    title: "I Miei Obiettivi",
                    focus: "Focus: Dimagrimento",
                    weightTitle: "Peso Attuale",
                    streak: "Serie",
                    adherence: "Aderenza",
                    milestoneTitle: "Prossimo Traguardo",
                    milestoneName: "Perdere 5kg",
                    milestoneSub: "0.8kg rimanenti",
                },
            },
        },
        cta: {
            secondary1: "Voglio dimagrire mangiando ciò che amo",
            secondary2: "Voglio il mio allenamento sicuro e personalizzato",
        },
        qualification: {
            title: {
                start: "Per Chi è ",
                highlight: "Zintra",
                end: "?",
            },
            subtitle: "Questa app è per te se:",
            items: [
                "Vuoi dimagrire senza rinunciare al gusto.",
                "Hai poco tempo per pianificare.",
                "Hai paura di infortunarti.",
                "Hai bisogno di organizzazione.",
            ],
        },
        testimonials: {
            title: {
                highlight: "Risultati",
                end: " Reali.",
            },
            items: [
                {
                    quote: "Pensavo di mangiare bene, ma il mio addome non si definiva. Con Zintra ho capito i miei errori. Vedere i compiti giornalieri mi ha dato disciplina.",
                    name: "Mariana, 24",
                    designation: "Studentessa",
                },
                {
                    quote: "Non mi riconosco nella foto di prima. Zintra ha chiesto tutto della mia vita. La motivazione giornaliera mi ha tenuta in carreggiata.",
                    name: "Carla, 32",
                    designation: "Rappresentante",
                },
                {
                    quote: "Ero disperata per l'abito da sposa. La consulenza scientifica è reale. Sono entrata nel vestito e mi sentivo meravigliosa.",
                    name: "Fernanda, 29",
                    designation: "Architetto",
                },
                {
                    quote: "Non avevo tempo di pesare il cibo. Il bottone 'Analizza Pasto' è magico. Foto al piatto e via. Consigliatissimo.",
                    name: "Patrizia, 35",
                    designation: "Project Manager",
                },
                {
                    quote: "L'allenamento Zintra mi ha mostrato cos'è il vero allenamento. Vedere il grafico del peso scendere crea dipendenza.",
                    name: "Bruna, 27",
                    designation: "Designer",
                },
            ],
        },
        offer: {
            title: {
                start: "La scienza del tuo corpo, ",
                highlight: "decodificata",
                end: ".",
            },
            subtitle: "Non perdere tempo. Inizia oggi con un piano su misura.",
            button: "Inizia Ora",
        },
        comparison: {
            title: {
                start: "Molto più di un'app. ",
                highlight: "Molto meno caro di un Personal.",
            },
            subtitle: "Non serve pagare una fortuna per dimagrire.",
            headers: {
                zintra: "Zintra AI",
                recommended: "RACCOMANDATO",
                personal: "Personal + Nutri",
                generic: "App Generiche",
            },
            rows: {
                investment: {
                    feature: "Investimento Mensile",
                    zintra: { text: "19,90 €", sub: "(Accessibile)" },
                    personal: "300 €+",
                    generic: "9,90 €",
                },
                injuries: {
                    feature: "Considera dolori?",
                    zintra: { text: "Sì", sub: "(Protezione Auto)" },
                    personal: "Sì",
                    generic: { text: "No", sub: "(Pericoloso)" },
                },
                flexibility: {
                    feature: "Flessibilità Dieta",
                    zintra: "Cambio istantaneo",
                    personal: "Dipende",
                    generic: { text: "PDF Fisso", sub: "(Noioso)" },
                },
                evolution: {
                    feature: "Aggiustamento Rotta",
                    zintra: "Bisettimanale",
                    personal: "Mensile",
                    generic: "Mai",
                },
                scanner: {
                    feature: "Scanner Piatto",
                    zintra: "Sì",
                    personal: "No",
                    generic: "No",
                },
            },
        },
        pricing: {
            title: "Investi su di te.",
            description: "Scegli il piano adatto a te.",
            basic: {
                name: "BASE",
                description: "Perfetto per iniziare",
                button: "Inizia Ora",
                features: [
                    "Piano Alimentare",
                    "Allenamenti Casa/Palestra",
                    "Scanner Illimitato",
                    "2 Aggiornamenti/mese",
                ],
            },
            pro: {
                name: "PRO",
                description: "Per risultati rapidi",
                button: "Abbonati Pro",
                features: [
                    "4 Aggiornamenti/mese",
                    "Generazione Prioritaria",
                    "Supporto Prioritario",
                    "Tutto del Piano Base",
                ],
            },
        },
        faq: {
            title: "Domande Frequenti",
            items: [
                {
                    question: "Come ricevo l'accesso?",
                    answer: "Il sistema crea il tuo utente e te lo invia per email in 2 minuti.",
                },
                {
                    question: "Considera le restrizioni?",
                    answer: "Sì. Puoi segnare allergie e preferenze. L'IA non suggerirà ciò che non puoi mangiare.",
                },
                {
                    question: "Posso cancellare?",
                    answer: "Sì. Senza vincoli. Cancelli dall'app.",
                },
                {
                    question: "Va bene per principianti?",
                    answer: "Assolutamente. Zintra adatta volume e difficoltà.",
                },
            ],
        },
        footer: {
            rights: "© 2024 Zintra AI. Tutti i diritti riservati.",
            terms: "Termini",
            privacy: "Privacy",
            support: "Supporto",
        },
    },
};
