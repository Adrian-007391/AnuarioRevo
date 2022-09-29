import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../firebase";

function Add() {
  //file
  const [file, setFile] = useState<File[]>([]);
  // url for displaying the image
  const [imageUrl, setImageUrl] = useState<any[]>([]);
  // tags
  const [tags, setTags] = useState<string[]>([]);
  // function to run when adding the file
  const handlefilechange = (e: any) => {
    setFile(e.target.files);
  };
  // change in the image url when the file variable is changed
  useEffect(() => {
    setImageUrl([]);
    for (let index = 0; index < file.length; index++) {
      setImageUrl((e) => [...e, URL.createObjectURL(file[index])]);
    }
  }, [file]);
  const handleTagInput = (e: any) => {
    setTags(e.target.value.split(","));
    console.log(e.target.value.split(","));
  };
  // when upload
  const handlesubmit = (e: any) => {
    e.preventDefault();
    // mandar datos a storage
    for (let index = 0; index < file.length; index++) {
      let fileUploaded = ref(storage, `/images/${file[index].name}`);
      uploadBytesResumable(fileUploaded, file[index]);
      getDownloadURL(fileUploaded).then((e) => {
        addDoc(collection(db, "images"), {
          key: Math.random(),
          url: e,
          tags: tags,
        });
      });
    }
    setFile([]);
    setTags([]);
  };
  return (
    <div className="w-screen flex flex-col  items-center p-10 justify-center">
      <div className=" w-full flex justify-center flex-wrap gap-5">
        {" "}
        {imageUrl.map((e) => (
          <img
            key={Math.random()}
            className="w-44  h-fit border-solid border-2 border-pink-300 rounded-md"
            src={e}
          ></img>
        ))}
      </div>

      <form
        className="h-80 flex justify-center flex-col w-96 gap-3"
        onSubmit={(e) => handlesubmit(e)}
      >
        <input
          type="file"
          value={file}
          multiple
          className=""
          onChange={(e) => handlefilechange(e)}
        />

        <input
          type="text"
          multiple
          className="border-solid border-2 border-pink-300 rounded-md"
          placeholder="e.g. pau , hitec , capi"
          onChange={(e) => handleTagInput(e)}
        />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
export default Add;
