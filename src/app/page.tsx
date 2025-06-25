import Clients from "./components/clients";
import Alliance from "./pages/alliance";
import Hero from "./pages/hero";

export default function Home() {
  return (
    <main>
     <Hero/>
     <Clients/>
     <Alliance/>
    </main>
  );
}
