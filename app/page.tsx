import Yhero from "./components/Yhero";
import Ynav from "./components/Ynav";
import Yplaces from "./components/Yplaces";

export default function Home() {
  return (
    <main className="mx-6">
      <nav className="sticky backdrop-blur-lg top-2">
        <Ynav />
      </nav>
      <div className="my-4">
        <Yhero />
      </div>
      <div>
        <Yplaces />
      </div>
    </main>
  );
}
