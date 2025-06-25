import Clients from "./components/clients";
import Alliance from "./pages/alliance";
import FAQ from "./pages/faq";
import Footer from "./pages/footer";
import Hero from "./pages/hero";
import SignUp from "./pages/sign-up";
import VideoPage from "./pages/video-page";

export default function Home() {
  return (
    <main>
     <Hero/>
     <Clients/>
     <Alliance/>
     <VideoPage/>
     <SignUp/>
     <FAQ/>
     <Footer/>
    </main>
  );
}
