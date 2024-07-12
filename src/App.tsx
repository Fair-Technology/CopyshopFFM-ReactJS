import ContentArea from "./components/contentArea";
import "./App.css";

function App() {
  return (
    <div className="app container mx-auto">
      <Navbar />
      <ContentArea />
    </div>
  );
}

export default App;

const Navbar = () => {
  return <div className="bg-red-500">Navbar</div>;
};
