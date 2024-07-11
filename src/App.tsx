import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <ContentArea />
    </div>
  );
}

export default App;

const ContentArea = () => {
  return <div className="bg-green-300">ContentArea</div>;
};
