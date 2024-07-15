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
import { ChangeEvent, ReactNode, useState } from "react";
import { cn } from "../lib/utils";
import {
  defaultSelection,
  setBackCover,
  setBWPages,
  setColorPages,
  setCoverColor,
  setCoverPrint,
  setCoverWeight,
  setEmbossColor,
  setFlipSetting,
  setFlipSide,
  setFormat,
  setFrontCover,
  setHolePunchSide,
  setHolePunchType,
  setIsEmbossed,
  setNoOfSets,
  setOnlyName,
  setPrintSetting,
  setStitchSide,
  setWeight,
} from "../services/redux/selectionSlice";
import { RootState, useAppDispatch, useAppSelector } from "../services/redux/store";
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
  // const [selectedFormat, setSelectedFormat] = useState<string>(defaultSelection.format);
  const selectedFormat = useAppSelector((store: RootState) => store.selection.selectedProduct.format);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFormat(e.target.value));
  };

  return (
    <div>
      <label htmlFor="format">Format</label>
      <select id="format" value={selectedFormat} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="A3">A3</option>
        <option value="A4">A4</option>
        <option value="A5">A5</option>
      </select>
    </div>
  );
};
const Weight = () => {
  const dispatch = useAppDispatch();
  const [selectedWeight, setSelectedWeight] = useState<string>(defaultSelection.weight);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeight(e.target.value);
    dispatch(setWeight(e.target.value));
  };
  return (
    <div>
      <label htmlFor="weight">Weight</label>
      <select id="weight" value={selectedWeight} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="80g">80g</option>
        <option value="100g">100g</option>
        <option value="120g">120g</option>
      </select>
    </div>
  );
};
const PrintSetting = () => {
  const dispatch = useAppDispatch();
  const [selectedPrintSetting, setSelectedPrintSetting] = useState<string>(defaultSelection.printSetting);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrintSetting(e.target.value);
    dispatch(setPrintSetting(e.target.value));
  };
  return (
    <div>
      <label htmlFor="printSetting">printSetting</label>
      <select id="printSetting" value={selectedPrintSetting} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="singleSided">singleSided</option>
        <option value="doubleSided">doubleSided</option>
      </select>
    </div>
  );
};
const FlipSetting = () => {
  const dispatch = useAppDispatch();
  const [selectedFlipSetting, setSelectedFlipSetting] = useState<string | null>(defaultSelection.flipSetting);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFlipSetting(e.target.value);
    dispatch(setFlipSetting(e.target.value));
  };
  return (
    <div>
      <label htmlFor="flipSetting">flipSetting</label>
      <select id="flipSetting" value={selectedFlipSetting || ""} className="w-full border h-10 pl-1 rounded focus:outline-none focus:ring-0" onChange={handleChange}>
        <option value="longSideFlip">longSideFlip</option>
        <option value="shortSideFlip">shortSideFlip</option>
      </select>
    </div>
  );
};
const NumberOfSets = () => {
  const dispatch = useAppDispatch();
  const [selectedNoOfSets, setSelectedNoOfSets] = useState<number>(defaultSelection.noOfSets);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSelectedNoOfSets(value);
    dispatch(setNoOfSets(value));
  };
  return (
    <div className="flex items-center gap-4 ">
      <label className="flex-1">noOfSets</label>
      <input type="number" min="1" value={selectedNoOfSets} className="flex-1  border p-2 rounded focus:outline-none focus:ring-0" onChange={handleChange} />
      <div className="flex-1">Sets</div>
    </div>
  );
};
const BWPages = () => {
  const dispatch = useAppDispatch();
  const [selectedBWPages, setSelectedBWPages] = useState<number>(defaultSelection.bwPages);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSelectedBWPages(value);
    dispatch(setBWPages(value));
  };

  return (
    <div className="flex items-center gap-4">
      <label className="flex-1">BW</label>
      <input type="number" min="0" value={selectedBWPages} className="flex-1  border p-2 rounded focus:outline-none focus:ring-0" onChange={handleChange} />
      <div className="flex-1">Pages</div>
    </div>
  );
};
const ColorPages = () => {
  const dispatch = useAppDispatch();
  const [selectedColorPages, setSelectedColorPages] = useState<number>(defaultSelection.colorPages);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSelectedColorPages(value);
    dispatch(setColorPages(value));
  };
  return (
    <div className="flex items-center gap-4">
      <label className="flex-1">colorPages</label>
      <input type="number" min="0" value={selectedColorPages} className="flex-1  border p-2 rounded focus:outline-none focus:ring-0" onChange={handleChange} />
      <div className="flex-1">Pages</div>
    </div>
  );
};
const ProductArea = () => {
  const selected = useAppSelector((store: RootState) => store.selection.selectedProduct.option.name);
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

  const handleFrontCoverChange = () => {
    console.log("changed");
  };
  const handleBackCoverChange = () => {
    console.log("changed");
  };
  const handleIsCoverPrintChange = () => {
    console.log("changed");
  };
  const handleFlipSideChange = () => {
    console.log("changed");
  };
  const handleCoverColorChange = () => {
    console.log("changed");
  };
  const handleIsEmbossedChange = () => {
    console.log("changed");
  };
  const handleEmbossedColorChange = () => {
    console.log("changed");
  };
  const handleCoverWeightChange = () => {
    console.log("changed");
  };
  const handleStitchSideChange = () => {
    console.log("changed");
  };
  const handleHolePunchTypeChange = () => {
    console.log("changed");
  };
  const handleHolePunchSideChange = () => {
    console.log("changed");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center gap-4">
        <div className="flex-1 flex flex-col items-center gap-4">
          <Product title="print" isSelected={selected === "print"}></Product>
          <Product title="booklet" isSelected={selected === "booklet"}>
            <ProductOptions title="coverWeight" options={coverWeightOptions} handleOnChange={handleCoverWeightChange} />
          </Product>
        </div>
        <div className="flex-1 flex flex-col items-center  gap-4">
          <Product title="spiral" isSelected={selected === "spiral"}>
            <ProductOptions title="frontCover" options={frontCoverOptions} handleOnChange={handleFrontCoverChange} />
            <ProductOptions title="backCover" options={backCoverOptions} handleOnChange={handleBackCoverChange} />
            <ProductOptions title="coverPrint" options={coverPrintOptions} handleOnChange={handleIsCoverPrintChange} />
            <ProductOptions title="flipSide" options={flipSideOptions} handleOnChange={handleFlipSideChange} />
          </Product>
          <Product title="stitch" isSelected={selected === "stitch"}>
            <ProductOptions title="stichSide" options={stitchSideOptions} handleOnChange={handleStitchSideChange} />
          </Product>
        </div>
      </div>
      <div className="flex-1 flex justify-center gap-4 md:ml-4">
        <div className="flex-1 flex flex-col items-center  gap-4">
          <Product title="softcover" isSelected={selected === "softcover"}>
            <ProductOptions title="frontCover" options={frontCoverOptions} handleOnChange={handleFrontCoverChange} />
            <ProductOptions title="backCover" options={backCoverOptions} handleOnChange={handleBackCoverChange} />
            <ProductOptions title="isCoverPrint" options={coverPrintOptions} handleOnChange={handleIsCoverPrintChange} />
            <ProductOptions title="flipSide" options={flipSideOptions} handleOnChange={handleFlipSideChange} />
          </Product>
          <Product title="holePunch" isSelected={selected === "holePunch"}>
            <ProductOptions title="holePunchType" options={holePunchTypeOptions} handleOnChange={handleHolePunchTypeChange} />
            <ProductOptions title="holePunchSide" options={holePunchSideOptions} handleOnChange={handleHolePunchSideChange} />
          </Product>
        </div>
        <div className="flex-1 flex flex-col items-center  gap-4">
          <Product title="hardcover" isSelected={selected === "hardcover"}>
            <ProductOptions title="coverColor" options={coverColorOptions} handleOnChange={handleCoverColorChange} />
            <ProductOptions title="isEmbossed" options={coverPrintOptions} handleOnChange={handleIsEmbossedChange} />
            <ProductOptions title="embossColor" options={embossColorOptions} handleOnChange={handleEmbossedColorChange} />
          </Product>
          <Product title="lamination" isSelected={selected === "lamination"}></Product>
        </div>
      </div>
    </div>
  );
};
const Product = ({ title, isSelected, children }: { title: string; isSelected: boolean; children?: ReactNode }) => {
  const dispatch = useAppDispatch();

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
    dispatch(setOnlyName(title));
    if (title === "spiral" || title === "softcover") {
      dispatch(setFrontCover("red"));
      dispatch(setBackCover("green"));
      dispatch(setCoverPrint(true));
      dispatch(setFlipSide("longSideFlip"));
    }
    if (title === "hardcover") {
      dispatch(setCoverColor("blue"));
      dispatch(setIsEmbossed(true));
      dispatch(setEmbossColor("gold"));
    }
    if (title === "booklet") {
      dispatch(setCoverWeight("100g"));
    }
    if (title === "stitch") {
      dispatch(setStitchSide("topLeft"));
    }
    if (title === "holePunch") {
      dispatch(setHolePunchType("2holes"));
      dispatch(setHolePunchSide("longSideFlip"));
    }
  };

  return (
    <div className={cn("flex flex-col items-center bg-slate-50 rounded-lg w-36 py-2 border ", isSelected ? "bg-slate-50" : "bg-slate-50")}>
      <input type="checkbox" hidden />

      <div className="relative">
        <img className="" alt={title} src={imageToShow} width={100} onClick={handleClick} />

				{isSelected && (
					<div className="absolute inset-0 opacity-70 flex justify-center items-center">
						<img
							className=""
							alt="Print"
							src={Checkmark}
							width={80}
							height={80}
						/>
					</div>
				)}
			</div>

      <div className="text-center text-sm font-bold text-slate-700 py-2">{title}</div>
      <div className={isSelected ? "w-full" : "hidden"}>{children}</div>
    </div>
  );
};
const ProductOptions = ({ title, options, handleOnChange }: { title: string; options: string[] | boolean[]; handleOnChange: () => void }) => {
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
