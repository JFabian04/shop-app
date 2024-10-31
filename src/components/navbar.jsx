const Navbar = () => {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">ShopApp</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Productos</a></li>
            <li><a href="#" className="hover:underline">Info</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  