import { Layout } from './components/Layout';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeatureSection } from './components/FeatureSection';
import { ScannerSection } from './components/ScannerSection';
import { MealPlanVisual } from './components/visuals/MealPlanVisual';
import { WorkoutVisual } from './components/visuals/WorkoutVisual';
import { DashboardVisual } from './components/visuals/DashboardVisual';
import { Testimonials } from './components/Testimonials';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingBasic } from './components/PricingBasic';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SecondaryCTA } from './components/SecondaryCTA';


import { MechanismSection } from './components/MechanismSection';
import { QualificationSection } from './components/QualificationSection';
import { OfferSection } from './components/OfferSection';

function App() {
  return (
    <Layout>
      <SpeedInsights />
      <Analytics />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <div id="how-it-works">
          <MechanismSection />
        </div>

        {/* Feature A: Nutrition Plan */}
        <div id="features">
          <FeatureSection
            title="Nutrição: O Cardápio que Funciona para VOCÊ"
            description="Não existe 'dieta perfeita' universal. Existe a dieta que você consegue seguir. O app monta refeições com o que você gosta de comer. Quer trocar o jantar? O sistema recalcula os macros para manter seu objetivo intacto."
            image={<MealPlanVisual />}
            align="right"
          />
        </div>

        {/* Feature B: AI Scanner */}
        <ScannerSection />

        <SecondaryCTA text="Quero emagrecer comendo o que gosto" />

        {/* Feature C: Workout Plan */}
        <FeatureSection
          title="Treino: Engenharia Corporal Individual"
          description="Seu objetivo é hipertrofia? O treino foca em carga e volume. É emagrecimento? O foco muda. Segurança Total: O único app que pergunta 'Onde você sente dor?' e remove exercícios perigosos para sua articulação específica."
          image={<WorkoutVisual />}
          align="left"
        />

        <SecondaryCTA text="Quero meu treino seguro e personalizado" />

        {/* Feature D: Dashboard */}
        <FeatureSection
          title="Metas transformadas em Ações."
          description="O dashboard não mostra apenas 'perder 5kg'. Ele diz o que fazer HOJE. Beba seus 3L de água, bata sua proteína e complete o treino. O sistema de gamificação mantém você consistente."
          image={<DashboardVisual />}
          align="right"
        />

        <div id="for-who">
          <QualificationSection />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <OfferSection />

        <ComparisonTable />
        <PricingBasic />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
