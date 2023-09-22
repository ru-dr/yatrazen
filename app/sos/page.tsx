import Ynav from "../components/Ynav";

export default function Sos() {
  return (
    <main className="mx-6 my-2">
      <Ynav />
      <div>
        <p className="text-2xl font-bold text-center flex justify-center items-center">Under Construction</p>
      </div>
      <div className="machine-wrap body-constrcution mx-6 my-6">
        <div className="machine">
          <div className="machine-roof">
            <div className="machine-silencer">
              <div className="machine-smoke" />
            </div>
          </div>
          <div className="machine-main">
            <div className="machine-body" />
            <div className="machine-back" />
            <div className="machine-front" />
          </div>
        </div>
        <div className="road">
          <div className="mud-wrap clearfix">
            <div className="mud" />
            <div className="mud" />
            <div className="mud" />
            <div className="mud" />
          </div>
        </div>
      </div>
    </main>
  );
}
