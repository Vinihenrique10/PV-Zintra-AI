import { Layout } from './components/Layout';
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


function App() {
  return (
    <Layout>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProblemSection />

        {/* Feature A: Nutrition Plan */}
        <div id="features">
          <FeatureSection
            title="Coma o que gosta e emagreça."
            description="Ninguém aguenta viver de salada. Nosso plano inclui arroz, feijão e o que você tiver em casa. O sistema de substituição permite trocar alimentos sem sair da dieta."
            image={<MealPlanVisual />}
            align="right"
          />
        </div>

        {/* Feature B: AI Scanner */}
        <ScannerSection />

        <SecondaryCTA text="Quero emagrecer comendo o que gosto" />

        {/* Feature C: Workout Plan */}
        <FeatureSection
          title="Treinos rápidos, onde você estiver."
          description="Não gosta de academia? Treine em casa. Tem dor no joelho? O app remove exercícios perigosos. O treino se adapta a você, não o contrário."
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

        <div id="testimonials">
          <Testimonials />
        </div>
        <SecondaryCTA text="Quero ter resultados como esses" variant="primary" />
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
