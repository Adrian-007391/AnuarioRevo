import { useNavigate } from "react-router-dom";
function Searchbar() {
  const nav = useNavigate();

  return (
    <div className="flex justify-center mt-5  w-screen">
      <input
        type="text"
        className="w-96 py-1 px-1  rounded-md  border-solid border-2 border-pink-300"
        placeholder="Busca eventos, personas, etc"
      ></input>
      <button
        onClick={() => {
          nav("/add");
        }}
        className="p-3 bg-pink-300 rounded-md absolute right-2 top-3"
      >
        Add
      </button>
    </div>
  );
}
export default Searchbar;
