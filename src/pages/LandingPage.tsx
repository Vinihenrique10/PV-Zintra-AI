import { Suspense, lazy } from 'react';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

// Lazy load components below the fold
const ProblemSection = lazy(() => import('../components/ProblemSection').then(module => ({ default: module.ProblemSection })));
const FeatureSection = lazy(() => import('../components/FeatureSection').then(module => ({ default: module.FeatureSection })));
const ScannerSection = lazy(() => import('../components/ScannerSection').then(module => ({ default: module.ScannerSection })));
const MealPlanVisual = lazy(() => import('../components/visuals/MealPlanVisual').then(module => ({ default: module.MealPlanVisual })));
const WorkoutVisual = lazy(() => import('../components/visuals/WorkoutVisual').then(module => ({ default: module.WorkoutVisual })));
const DashboardVisual = lazy(() => import('../components/visuals/DashboardVisual').then(module => ({ default: module.DashboardVisual })));
const Testimonials = lazy(() => import('../components/Testimonials').then(module => ({ default: module.Testimonials })));
const ComparisonTable = lazy(() => import('../components/ComparisonTable').then(module => ({ default: module.ComparisonTable })));
const PricingBasic = lazy(() => import('../components/PricingBasic').then(module => ({ default: module.PricingBasic })));
const FAQ = lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));
const MechanismSection = lazy(() => import('../components/MechanismSection').then(module => ({ default: module.MechanismSection })));
const QualificationSection = lazy(() => import('../components/QualificationSection').then(module => ({ default: module.QualificationSection })));
const OfferSection = lazy(() => import('../components/OfferSection').then(module => ({ default: module.OfferSection })));

const LoadingFallback = () => (
    <div className="py-20 flex justify-center items-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
    </div>
);

export function LandingPage() {
    const { t } = useLanguage();

    return (
        <Layout>
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <Suspense fallback={<LoadingFallback />}>
                    <ProblemSection />
                    <div id="how-it-works">
                        <MechanismSection />
                    </div>

                    {/* Feature A: Nutrition Plan */}
                    <div id="features">
                        <FeatureSection
                            title={t.features.nutrition.title}
                            description={t.features.nutrition.description}
                            image={<MealPlanVisual />}
                            align="right"
                        />
                    </div>

                    {/* Feature B: AI Scanner */}
                    <ScannerSection />

                    {/* Feature C: Workout Plan */}
                    <FeatureSection
                        title={t.features.workout.title}
                        description={t.features.workout.description}
                        image={<WorkoutVisual />}
                        align="left"
                    />



                    {/* Feature D: Dashboard */}
                    <FeatureSection
                        title={t.features.dashboard.title}
                        description={t.features.dashboard.description}
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
                </Suspense>
            </main>
            <Footer />
        </Layout>
    );
}
