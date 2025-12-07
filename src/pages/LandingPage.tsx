
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { FeatureSection } from '../components/FeatureSection';
import { ScannerSection } from '../components/ScannerSection';
import { MealPlanVisual } from '../components/visuals/MealPlanVisual';
import { WorkoutVisual } from '../components/visuals/WorkoutVisual';
import { DashboardVisual } from '../components/visuals/DashboardVisual';
import { Testimonials } from '../components/Testimonials';
import { ComparisonTable } from '../components/ComparisonTable';
import { PricingBasic } from '../components/PricingBasic';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { SecondaryCTA } from '../components/SecondaryCTA';


import { MechanismSection } from '../components/MechanismSection';
import { QualificationSection } from '../components/QualificationSection';
import { OfferSection } from '../components/OfferSection';

export function LandingPage() {
    return (
        <Layout>
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
                        title="Nutrition: The Meal Plan that Works for YOU"
                        description="There's no universal 'perfect diet'. There's the diet you can actually follow. The app creates meals with foods you love. Want to swap dinner? The system recalculates macros to keep your goal intact."
                        image={<MealPlanVisual />}
                        align="right"
                    />
                </div>

                {/* Feature B: AI Scanner */}
                <ScannerSection />

                <SecondaryCTA text="I want to lose weight eating what I love" />

                {/* Feature C: Workout Plan */}
                <FeatureSection
                    title="Workout: Individual Body Engineering"
                    description="Is your goal muscle building? The workout focuses on load and volume. Is it weight loss? The focus changes. Total Safety: The only app that asks 'Where do you feel pain?' and removes dangerous exercises for your specific joint."
                    image={<WorkoutVisual />}
                    align="left"
                />

                <SecondaryCTA text="I want my safe and personalized workout" />

                {/* Feature D: Dashboard */}
                <FeatureSection
                    title="Goals Transformed into Actions."
                    description="The dashboard doesn't just show 'lose 10lbs'. It tells you what to do TODAY. Drink your 3L of water, hit your protein, and complete your workout. The gamification system keeps you consistent."
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
