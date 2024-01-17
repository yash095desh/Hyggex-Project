import "./App.css";
import CreateBar from "./Components/CreateBar";
import FAQ from "./Components/FAQ";
import Navbar from "./Components/Navbar/Navbar";
import PageHistory from "./Components/PageHistory";
import Screen from "./Components/Screen";

function App() {
  return (
    <div>
      <Navbar />
      <PageHistory />
      <h1 className="flex justify-left mt-[68px] heading text-[32px] font-[700]">
        Relations and Functions(Mathmatics)
      </h1>
      <Screen />
      <CreateBar />
      <FAQ />
    </div>
  );
}

export default App;
