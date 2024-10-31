const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white  p-4 mb-5">
      <div className="container mx-auto flex gap-7 items-center w-[80%]">
        <ul className="flex space-x-4 w-full">
          {/* <li><a href="#" className="hover:underline">Inicio</a></li> */}
          <li><a href="#" className="hover:underline">ShopApp / Productos</a></li>
          {/* <li><a href="#" className="hover:underline">Info</a></li> */}
        </ul>

        <div className="bg-white w-40 rounded">
          <img src="logo/logo.png" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
