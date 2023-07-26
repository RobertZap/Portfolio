const Header = () => {
  return (
    <header className=" py-8 ">
      <div className="container mx-auto">
        <div className="-ml-10 flex justify-between items-center">
          <a href="" className="font-bold m-0 text-3xl">
            <p className="bg-gradient-to-r from-pink-400 via-purple-800 to-indigo-500 text-transparent bg-clip-text">
              R O B
            </p>
            <p className="bg-gradient-to-r from-pink-400 via-purple-800 to-indigo-500 text-transparent bg-clip-text">
              Z A P
            </p>
          </a>
          <button className="-ml-3 btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
