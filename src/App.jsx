import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Proyects from "./sections/Proyects";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
// eslint-disable-next-line no-unused-vars
import { Analytics } from "@vercel/analytics/next"
const app = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Proyects />
      <Experience />
      <Footer />
    </main>
  )
}

export default app;