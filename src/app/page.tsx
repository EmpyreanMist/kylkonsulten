import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import ExamCards from "./components/ExamCards";
import PriceList from "./components/PriceList";
import PrepCourses from "./components/PrepCourses";
import UpcomingEvents from "./components/UpcomingEvents";
import ContactFormMailto from "./components/ContactFormMailTo";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import Footer from "./components/Footer";
import AboutPreview from "./components/AboutPreview";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <ExamCards />
        <PriceList />
        <PrepCourses />

        <UpcomingEvents />

        <ContactFormMailto />
        <AboutPreview />
        <CTA />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </>
  );
}
