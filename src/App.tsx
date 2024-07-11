import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <ContentArea />
    </div>
  );
}

export default App;

const Navbar = () => {
  return <div className="bg-red-500">Navbar</div>;
};

const ContentArea = () => {
  return <div className="bg-green-300">ContentArea</div>;
};
