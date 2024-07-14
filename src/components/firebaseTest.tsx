import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase/firebase-config";
import { useState } from "react";

const FirebaseTest = () => {
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingFetch, setLoadingFetch] = useState(false);

  const getRandomValueFromArray = (array: string[] | number[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const sampleNames = ["Manish", "Runqing", "Ajul", "Tom", "Jerry"];
  const randomNames = getRandomValueFromArray(sampleNames);

  const sampleNumbers = [75, 250, 500, 58, 225, 560, 960];
  const randomValue = getRandomValueFromArray(sampleNumbers);

  const createDocument = async () => {
    setLoadingCreate(true);
    console.log("createDocument");
    try {
      const orderData = {
        customerName: randomNames,
        total: randomValue,
      };
      await addDoc(collection(db, "orders"), orderData);
      setLoadingCreate(false);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoadingCreate(false);
      alert("Error placing order");
    }
  };

  const fetchDocument = () => {
    setLoadingFetch(true);
    console.log("fetchDocument");
  };

  return (
    <div>
      <div className="font-bold text-xl underline">Firebase Test</div>
      <div className="flex gap-5">
        <button onClick={createDocument} className="bg-slate-400 rounded-md p-2 cursor-pointer">
          {loadingCreate ? "loading..." : "Create a document"}
        </button>
        <div>Response</div>
      </div>
      <div className="h-5"></div>
      <div className="flex gap-5">
        <button onClick={fetchDocument} className="bg-slate-400 rounded-md p-2 cursor-pointer">
          {loadingFetch ? "loading..." : "Fetch a document"}
        </button>
        <div>Response</div>
      </div>
    </div>
  );
};

export default FirebaseTest;
