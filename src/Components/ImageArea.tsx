import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./../firebase";
function ImageArea() {
  const [images, setimages] = useState<DocumentData[]>([]);
  const getfiles = async () => {
    const querysnapshot = await getDocs(collection(db, "images"));
    querysnapshot.forEach((e) => {
      setimages((c) => [...c, e.data()]);
    });
  };
  useEffect(() => {
    getfiles();
  }, []);

  return (
    <div className="mt-5 flex justify-evenly flex-wrap">
      {images.map((e) => (
        <img
          onClick={() => window.open(e.url)}
          key={e.key}
          className="h-28  border-solid border-2 border-pink-300 rounded"
          src={e.url}
        />
      ))}
    </div>
  );
}
export default ImageArea;
