/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { ChangeEvent, ReactNode, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { setSelection } from "../services/redux/selectionSlice";
import { RootState, useAppDispatch, useAppSelector } from "../services/redux/store";
import { Product as ProductModal } from "../modals/order";

const wait = (ms: number, signal?: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(() => resolve(), ms);
    if (signal) {
      signal.addEventListener("abort", () => {
        clearTimeout(timeoutId);
        reject(new DOMException("Aborted", "AbortError"));
      });
    }
  });

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
    <div className="mt-2 flex flex-col gap-4 lg:flex-row w-full">
      <div className="flex-1 ">
        <InputArea />
      </div>
      <div className="">
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
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, format: e.target.value };
    dispatch(setSelection(tamperedProduct));
  };

  return (
    <div>
      <label htmlFor="format">Format</label>
      <select id="format" value={selectedProduct.format} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="A3">A3</option>
        <option value="A4">A4</option>
        <option value="A5">A5</option>
        <option value="A2">A2</option>
        <option value="A1">A1</option>
        <option value="A0">A0</option>
      </select>
    </div>
  );
};
const Weight = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, weight: e.target.value };
    dispatch(setSelection(tamperedProduct));
  };
  return (
    <div>
      <label htmlFor="weight">Weight</label>
      <select id="weight" value={selectedProduct.weight} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="80g">80g</option>
        <option value="100g">100g</option>
        <option value="120g">120g</option>
        <option value="160g">160g</option>
        <option value="200g">200g</option>
        <option value="250g">250g</option>
        <option value="300g">300g</option>
      </select>
    </div>
  );
};
const PrintSetting = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, printSetting: e.target.value };
    dispatch(setSelection(tamperedProduct));
  };
  return (
    <div>
      <label htmlFor="printSetting">printSetting</label>
      <select id="printSetting" value={selectedProduct.printSetting} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="singleSided">singleSided</option>
        <option value="doubleSided">doubleSided</option>
      </select>
    </div>
  );
};
const FlipSetting = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, flipSetting: e.target.value };
    dispatch(setSelection(tamperedProduct));
  };
  return (
    <div>
      <label htmlFor="flipSetting">flipSetting</label>
      <select id="flipSetting" value={selectedProduct.flipSetting || ""} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="longSideFlip">longSideFlip</option>
        <option value="shortSideFlip">shortSideFlip</option>
      </select>
    </div>
  );
};
const NumberOfSets = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tamperedProduct = { ...selectedProduct, noOfSets: parseInt(e.target.value) };
    dispatch(setSelection(tamperedProduct));
  };
  return (
    <div className="flex items-center gap-4 ">
      <label className="flex-1">noOfSets</label>
      <input type="number" min="1" value={selectedProduct.noOfSets} className="flex-1  border p-2 rounded focus:outline-none focus:ring-0" onChange={handleChange} />
      <div className="flex-1">Sets</div>
    </div>
  );
};
const BWPages = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tamperedProduct = { ...selectedProduct, bwPages: parseInt(e.target.value) };
    dispatch(setSelection(tamperedProduct));
  };

  return (
    <div className="flex items-center gap-4">
      <label className="flex-1">BW</label>
      <input type="number" min="0" value={selectedProduct.bwPages} className="flex-1  border p-2 rounded focus:outline-none focus:ring-0" onChange={handleChange} />
      <div className="flex-1">Pages</div>
    </div>
  );
};

const ColorPages = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tamperedProduct = { ...selectedProduct, colorPages: parseInt(e.target.value) };
    dispatch(setSelection(tamperedProduct));
  };

  return (
    <div className="flex items-center gap-4">
      <label className="flex-1">colorPages</label>
      <input type="number" min="0" value={selectedProduct.colorPages} className="flex-1  border p-2 rounded focus:outline-none focus:ring-0" onChange={handleChange} />
      <div className="flex-1">Pages</div>
    </div>
  );
};

const ProductArea = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);
  const selectedname = selectedProduct.option.name;
  const frontCoverOptions = ["red", "green", "blue", "yellow", "black", "white"];
  const backCoverOptions = ["red", "green", "blue", "yellow", "black", "white"];
  const coverPrintOptions = ["Yes", "No"];
  const flipSideOptions = ["longSideFlip", "shortSideFlip"];
  const coverColorOptions = ["red", "blue", "black"];
  const embossColorOptions = ["gold", "silver"];
  const coverWeightOptions = ["80g", "100g", "120g", "160g", "200g", "250g", "300g"];
  const stitchSideOptions = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
  const holePunchTypeOptions = ["2holes", "4holes"];
  const holePunchSideOptions = ["longSideFlip", "shortSideFlip"];

  const handleFrontCoverChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, frontCover: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleBackCoverChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, backCover: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleIsCoverPrintChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "yes" ? true : false;
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, coverPrint: value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleFlipSideChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, flipSide: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleCoverColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, coverColor: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleIsEmbossedChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "yes" ? true : false;
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, isEmbossed: value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleEmbossedColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, embossColor: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleCoverWeightChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, coverWeight: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleStitchSideChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, stitchSide: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleHolePunchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, holePunchType: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };
  const handleHolePunchSideChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const tamperedProduct = { ...selectedProduct, option: { ...selectedProduct.option, holePunchSide: e.target.value } };
    dispatch(setSelection(tamperedProduct));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center gap-4">
        <div className="flex-1 flex flex-col items-center gap-4">
          <Product title="print" isSelected={selectedname === "print"}></Product>
          <Product title="booklet" isSelected={selectedname === "booklet"}>
            <ProductOptions title="coverWeight" options={coverWeightOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleCoverWeightChange(e)} />
          </Product>
        </div>
        <div className="flex-1 flex flex-col items-center  gap-4">
          <Product title="spiral" isSelected={selectedname === "spiral"}>
            <ProductOptions title="frontCover" options={frontCoverOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleFrontCoverChange(e)} />
            <ProductOptions title="backCover" options={backCoverOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleBackCoverChange(e)} />
            <ProductOptions title="coverPrint" options={coverPrintOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleIsCoverPrintChange(e)} />
            <ProductOptions title="flipSide" options={flipSideOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleFlipSideChange(e)} />
          </Product>
          <Product title="stitch" isSelected={selectedname === "stitch"}>
            <ProductOptions title="stichSide" options={stitchSideOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleStitchSideChange(e)} />
          </Product>
        </div>
      </div>
      <div className="flex-1 flex justify-center gap-4 md:ml-4">
        <div className="flex-1 flex flex-col items-center  gap-4">
          <Product title="softcover" isSelected={selectedname === "softcover"}>
            <ProductOptions title="frontCover" options={frontCoverOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleFrontCoverChange(e)} />
            <ProductOptions title="backCover" options={backCoverOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleBackCoverChange(e)} />
            <ProductOptions title="isCoverPrint" options={coverPrintOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleIsCoverPrintChange(e)} />
            <ProductOptions title="flipSide" options={flipSideOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleFlipSideChange(e)} />
          </Product>
          <Product title="holePunch" isSelected={selectedname === "holePunch"}>
            <ProductOptions title="holePunchType" options={holePunchTypeOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleHolePunchTypeChange(e)} />
            <ProductOptions title="holePunchSide" options={holePunchSideOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleHolePunchSideChange(e)} />
          </Product>
        </div>
        <div className="flex-1 flex flex-col items-center  gap-4">
          <Product title="hardcover" isSelected={selectedname === "hardcover"}>
            <ProductOptions title="coverColor" options={coverColorOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleCoverColorChange(e)} />
            <ProductOptions title="isEmbossed" options={coverPrintOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleIsEmbossedChange(e)} />
            <ProductOptions title="embossColor" options={embossColorOptions} handleOnChange={(e: ChangeEvent<HTMLSelectElement>) => handleEmbossedColorChange(e)} />
          </Product>
          <Product title="lamination" isSelected={selectedname === "lamination"}></Product>
        </div>
      </div>
    </div>
  );
};
const Product = ({ title, isSelected, children }: { title: string; isSelected: boolean; children?: ReactNode }) => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector((store: RootState) => store.selection.selectedProduct);

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

  const handleClick = () => {
    const tamperedProduct: ProductModal = { ...selectedProduct, option: { name: title } };
    if (title === "spiral" || title === "softcover") {
      tamperedProduct.option = {
        name: title,
        frontCover: "red",
        backCover: "green",
        coverPrint: true,
        flipSide: "longSideFlip",
      };
    } else if (title === "hardcover") {
      tamperedProduct.option = {
        name: title,
        coverColor: "red",
        isEmbossed: true,
        embossColor: "gold",
      };
    } else if (title === "booklet") {
      tamperedProduct.option = {
        name: title,
        coverWeight: "80g",
      };
    } else if (title === "stitch") {
      tamperedProduct.option = {
        name: title,
        stitchSide: "topLeft",
      };
    } else if (title === "holePunch") {
      tamperedProduct.option = {
        name: title,
        holePunchType: "4holes",
        holePunchSide: "longSideFlip",
      };
    }

    dispatch(setSelection(tamperedProduct));
  };

  return (
    <div className={cn("flex flex-col items-center bg-slate-50 rounded-lg w-36 py-2 border ", isSelected ? "bg-slate-50" : "bg-slate-50")}>
      <input type="checkbox" hidden />

      <div className="relative">
        <img className="" alt={title} src={imageToShow} width={100} onClick={handleClick} />

        {isSelected && (
          <div className="absolute inset-0 opacity-70 flex justify-center items-center">
            <img className="" alt="Print" src={Checkmark} width={80} height={80} />
          </div>
        )}
      </div>

      <div className="text-center text-sm font-bold text-slate-700 py-2">{title}</div>
      <div className={isSelected ? "w-full" : "hidden"}>{children}</div>
    </div>
  );
};
const ProductOptions = ({ title, options, handleOnChange }: { title: string; options: string[] | boolean[]; handleOnChange: (e: ChangeEvent<HTMLSelectElement>) => void }) => {
  return (
    <div className="mb-2 px-2">
      <div className="flex flex-col justify-center items-center ">
        <label htmlFor="coverWeight" className="text-sm">
          {title}
        </label>
        <select id="coverWeight" className="w-full border p-1 rounded focus:outline-none focus:ring-0" onChange={handleOnChange}>
          {options.map((option, index) => (
            <option key={index} value={typeof option !== "boolean" ? option : option ? "Yes" : "No"}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
