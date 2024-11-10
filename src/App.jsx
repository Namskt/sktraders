import "./App.css";
import Image from "../src/assets/img.jpg";

function App() {
  return (
    <div className="py-5">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-5">
          <img
            src={Image}
            className="rounded-full"
            width={70}
            height={70}
            alt="..."
          />
        </div>
        <div className="flex flex-col justify-center items-center relative">
        <div className="relative">
          <a
            href="https://fbs.partners?ibl=865482&ibp=33988576"
            className="py-3 px-5 bg-green-700 rounded text-white text-sm font-semibold hover:bg-green-800 hover:text-white"
          >
            BROKER YANG SERING GUA PAKEK
          </a>
        </div>
        <div className="relative">
         <a
            href="https://one.exnesstrack.org/boarding/sign-up/a/7di01z8hol?lng=id"
            className="py-3 px-5 bg-green-700 rounded text-white text-sm font-semibold hover:bg-green-800 hover:text-white"
          >
            BROKER DENGAN AKUN ZERO SPREAD RENDAH
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
