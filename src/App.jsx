import "./App.css";
import Image from "../src/assets/img.jpg";


const ListLink = [
  {
    name:"BROKER YANG SERING GUA PAKEK",
    href:"https://fbs.partners?ibl=865482&ibp=33988576"
  },
  {
    name:" BROKER DENGAN AKUN ZERO SPREAD RENDAH",
    href:"https://one.exnesstrack.org/boarding/sign-up/a/7di01z8hol?lng=id"
  }
]

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
       <div>
        {ListLink.map((i, index) => {
						return (
							<li key={index}>
								<a href={i.href}>
									{i.name}
								</a>
							</li>
						);
					})}
       </div>
    </div>
  );
}

export default App;
