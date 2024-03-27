import { Inter } from "next/font/google";
import Header from "../../components/header";
import About from "../../components/about";
import Works from "../../components/works";
import News from "../../components/news";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="mainImg">
        gazou
      </div>
      <About />
      <Works />
      <News />
      <Contact />
      <Footer />
    </>
  )
}
