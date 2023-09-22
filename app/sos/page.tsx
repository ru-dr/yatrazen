import Ynav from "../components/Ynav";

export default function Sos() {
  return (
    <main className="mx-6 my-2">
      <Ynav />
      <div className="machine-wrap body-constrcution">
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
