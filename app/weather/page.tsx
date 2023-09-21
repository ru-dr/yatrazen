import Ynav from "../components/Ynav";
import Yweather from "./components/Yweather";

export default function Weather() {
  return (
    <main className="mx-6 my-2">
      <Ynav />
      <Yweather />
    </main>
  );
}
