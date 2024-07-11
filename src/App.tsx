import ContentArea from "./components/contentArea";

function App() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <ContentArea />
    </div>
  );
}

export default App;

const Navbar = () => {
  return <div className="bg-red-500">Navbar</div>;
};
