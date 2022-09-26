import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
function ImageArea() {
  const [images, setimages] = useState<string[]>([]);
  const sreference = ref(storage, "/images");
  useEffect(() => {
    setimages([]);
    listAll(sreference).then((res: any) => {
      res.items.forEach((item: any) => {
        getDownloadURL(item).then((e) => {
          setimages((oldarray) => [...oldarray, e]);
        });
      });
    });
  }, []);

  return (
    <div className="mt-5 flex justify-evenly flex-wrap">
      {images.map((e) => (
        <img
          className="h-28  border-solid border-2 border-pink-300 rounded"
          src={e}
        />
      ))}
    </div>
  );
}
export default ImageArea;
