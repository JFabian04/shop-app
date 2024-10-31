const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-700">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    );
  };
  
  export default ProductCard;
  