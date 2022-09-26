function Searchbar() {
  return (
    <div className="flex justify-center mt-5  w-screen">
      <input
        type="text"
        className="w-96 py-1 px-1  rounded-md  border-solid border-2 border-pink-300"
        placeholder="Busca eventos, personas, etc"
      ></input>
    </div>
  );
}
export default Searchbar;
