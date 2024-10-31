const Navbar = () => {
  return (
    <nav className="bg-[#6095EB] text-white   p-4 mb-5">
      <div className="flex justify-center">
        <div className="w-[76%]">
          <div className="bg-white w-40 rounded">
            <img src="logo/logo.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex gap-7 items-center w-[80%]">
        <ul className="flex space-x-4 w-full">
          {/* <li><a href="#" className="hover:underline">Inicio</a></li> */}
          {/* <li><a href="#" className="hover:underline">Info</a></li> */}
        </ul>


      </div>
    </nav>
  );
};

export default Navbar;
