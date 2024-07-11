import CalculationArea from "./calculationArea";
import Heading from "./heading";
import print from "../assets/print.jpg";
import spiral from "../assets/spiral.jpg";
import softcover from "../assets/softcover.jpg";
import hardcover from "../assets/hardcover.jpg";
import booklet from "../assets/booklet.jpg";
import stitch from "../assets/stitch.jpg";
import holepunch from "../assets/holepunch.jpg";
import lamination from "../assets/lamination.jpg";
import Checkmark from "../assets/check-mark.png";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

const ContentArea = () => {
  return (
    <div className="flex flex-col gap-2 mt-2 xl:flex-row">
      <div className="flex-1 border p-2 rounded-md">
        <Heading text="orderForm" />
        <div className="flex flex-col xl:flex-row">
          <OrderForm />
        </div>
      </div>
      <div className="min-w-72 border p-2 rounded-md">
        <Heading text="calculation" />
        <CalculationArea />
      </div>
    </div>
  );
};

export default ContentArea;

const OrderForm = () => {
  return (
    <div className="mt-2 flex flex-col gap-2 lg:flex-row">
      <div className="min-w-96 ">
        <InputArea />
      </div>
      <div className="flex-1">
        <ProductArea />
      </div>
    </div>
  );
};

const InputArea = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="flex-1">
          <Format />
        </div>
        <div className="flex-1">
          <Weight />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <PrintSetting />
        </div>
        <div className="flex-1">
          <FlipSetting />
        </div>
      </div>
      <div>
        <NumberOfSets />
      </div>
      <div className="flex flex-col gap-3">
        <BWPages />
        <ColorPages />
      </div>
    </div>
  );
};

const Format = () => {
  return (
    <select defaultValue="A4" className="w-full border p-2 rounded focus:outline-none focus:ring-0">
      <option value="A3">A3</option>
      <option value="A4">A4</option>
      <option value="A5">A5</option>
    </select>
  );
};
const Weight = () => {
  return (
    <select defaultValue="80g" className="w-full border p-2 rounded focus:outline-none focus:ring-0">
      <option value="80g">80g</option>
      <option value="100g">100g</option>
      <option value="120g">120g</option>
    </select>
  );
};
const PrintSetting = () => {
  return (
    <select defaultValue="singleSided" className="w-full border p-2 rounded focus:outline-none focus:ring-0">
      <option value="singleSided">singleSided</option>
      <option value="doubleSided">doubleSided</option>
    </select>
  );
};
const FlipSetting = () => {
  return (
    <select defaultValue="longSideFlip" className="w-full border p-2 rounded focus:outline-none focus:ring-0">
      <option value="longSideFlip">longSideFlip</option>
      <option value="shortSideFlip">shortSideFlip</option>
    </select>
  );
};
const NumberOfSets = () => {
  return (
    <div className="flex items-center gap-4">
      <div>noOfSets</div>
      <input type="number" min="1" defaultValue="1" className="w-full border p-2 rounded focus:outline-none focus:ring-0" />
    </div>
  );
};
const BWPages = () => {
  return (
    <div className="flex items-center gap-4">
      <div>bwPages</div>
      <input type="number" min="0" defaultValue="1" className="w-full border p-2 rounded focus:outline-none focus:ring-0" />
    </div>
  );
};
const ColorPages = () => {
  return (
    <div className="flex items-center gap-4">
      <div>colorPages</div>
      <input type="number" min="0" defaultValue="1" className="w-full border p-2 rounded focus:outline-none focus:ring-0" />
    </div>
  );
};

const ProductArea = () => {
  let selected = "";
  selected = "print";
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center">
        <div className="flex-1 flex flex-col items-center">
          <Product title="print" isSelected={selected === "print"}></Product>
          <Product title="booklet" isSelected={selected === "booklet"}>
            <div>cover options</div>
          </Product>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Product title="spiral" isSelected={selected === "spiral"}></Product>
          <Product title="stitch" isSelected={selected === "stitch"}></Product>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex-1 flex flex-col items-center">
          <Product title="softcover" isSelected={selected === "softcover"}></Product>
          <Product title="holePunch" isSelected={selected === "holePunch"}></Product>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Product title="hardcover" isSelected={selected === "hardcover"}></Product>
          <Product title="lamination" isSelected={selected === "lamination"}></Product>
        </div>
      </div>
    </div>
  );
};

const Product = ({ title, isSelected }: { title: string; isSelected: boolean; children?: ReactNode }) => {
  let imageToShow = print;
  if (title === "spiral") {
    imageToShow = spiral;
  } else if (title === "softcover") {
    imageToShow = softcover;
  } else if (title === "hardcover") {
    imageToShow = hardcover;
  } else if (title === "booklet") {
    imageToShow = booklet;
  } else if (title === "stitch") {
    imageToShow = stitch;
  } else if (title === "holePunch") {
    imageToShow = holepunch;
  } else if (title === "lamination") {
    imageToShow = lamination;
  }
  return (
    <div className={cn("flex flex-col items-center bg-slate-50 rounded-lg w-36 py-2 border mb-4", isSelected ? "bg-slate-50" : "bg-slate-50")}>
      <input type="checkbox" hidden />

      <div className="relative">
        <img className="" alt={title} src={imageToShow} width={100} onClick={() => {}} />

        {isSelected && (
          <div className="absolute inset-0 opacity-70 flex justify-center items-center">
            <img className="" alt="Print" src={Checkmark} width={80} height={80} />
          </div>
        )}
      </div>

      <div className="text-center text-sm font-bold text-slate-700 py-2">{title}</div>
      <div className={isSelected ? "" : "hidden"}>children</div>
    </div>
  );
};
