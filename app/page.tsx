import Yhero from "./components/Yhero";
import Ynav from "./components/Ynav";
import Yplaces from "./components/Yplaces";

export default function Home() {
  return (
    <main className="mx-6">
        <Ynav />
      <div className="my-4 -z-0">
        <Yhero />
      </div>
      <div className="-z-0">
        <Yplaces />
      </div>
    </main>
  );
}
