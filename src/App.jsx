import "./App.css";
import Image from "../src/assets/img.jpg";

const ListLink = [
   {
    name: "LANGGANAN COPY TRADE CHAT ADMIN",
    href: "https://t.me/teamsktradersbro",
  },
   {
    name: "BROKER SPREAD 0 TANPA KOMISI",
    href: "https://one.justmarkets.link/a/39n240uaqa/id/registration/trader",
  },
  {
    name: "BROKER AMAN DAN SERING AKU PAKEK",
    href: "https://account.tradersfamily.id/aff/552861/",
  },
  {
    name: "YOUTUBE",
    href: "https://www.youtube.com/channel/UCBOCcBSy_Gwuxg9N-WyoLgA",
  },
];

function App() {
  return (
    <div className="py-5">
      <div className="container mx-auto px-5 lg:px-0 flex flex-col justify-center items-center">
        <div className="mb-5">
          <img
            src={Image}
            className="rounded-full"
            width={70}
            height={70}
            alt="..."
          />
        </div>
        <div className="flex flex-col gap-3 text-center">
          {ListLink.map((i, index) => {
            return (
              <a
                key={index}
                href={i.href}
                className="p-4 px-10 bg-green-600 hover:bg-green-500 block text-white roboto-regular text-sm lg:text-md rounded"
              >
                {i.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
