import Yhero from "./components/Yhero";
import Ynav from "./components/Ynav";
import Yplaces from "./components/Yplaces";

export default function Home() {
  return (
    <main className="mx-6 my-2">
      <Ynav />
      <Yhero />
      <Yplaces />
    </main>
  );
}
