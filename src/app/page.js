"use client";

import { useEffect, useState } from 'react';
import ProductCard from '../components/card';
import Navbar from '../components/navbar';
import api from '@/utils/axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(false);

  // Función para obtener productos desde el endpoint
  const fetchProducts = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await api.post(`/product/getJson?page=${page}`);
      console.log('DATA GET:', response.data.data);

      const data = response.data.data;
      if (data.length > 0) {
        setProducts(prevProducts => [...prevProducts, ...response.data.data]);
      } else {
        setFinish(true)
      }

    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, [page]);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;


    if (scrollTop + windowHeight >= documentHeight - 100 && !loading && !finish) {
      setPage(prevPage => prevPage + 1);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <Navbar />

      <div className='container m-4 flex justify-center'>
        <div className='w-[70%] '>
          <p className="text-[20px] hover:underline mb-7 ">ShopApp / <b className='text-[#6095EB]'>Productos</b></p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} images={product.product_files} />
            ))}
          </div>
        ) : (

          <div className="text-center text-gray-600 bg-gray-100 flex justify-center items-center flex-col p-8 shadow rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 24 24"><path fill="#6095EB" d="M12 2.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M13.25 9a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m-6.246 3.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.996 0c.297 0 .57.104.784.277a6.5 6.5 0 0 0-1.336 2.095A1.25 1.25 0 0 1 12 12.75m4.996-5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M8.254 9a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m9.992-5a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0M7.004 2.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 7.751a.625.625 0 1 0 0 1.249a.625.625 0 0 0 0-1.249m0-5.877c-1.048 0-1.864.817-1.854 1.954a.5.5 0 0 0 1-.01c-.005-.578.36-.944.854-.944c.472 0 .853.392.853.95c0 .192-.055.342-.224.561l-.094.116l-.099.113l-.265.29l-.136.157c-.384.457-.535.793-.535 1.31a.5.5 0 0 0 1 0c0-.203.058-.358.239-.59l.085-.104l.1-.115l.266-.29l.135-.156c.378-.45.528-.783.528-1.292c0-1.104-.822-1.95-1.853-1.95" /></svg>

            <p className='mt-5'>
              No hay productos disponibles, inténtalo más tarde.
            </p>
          </div>
        )}
      </div>

      {loading &&
        <div role="status" className='flex w-full justify-center'>
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div>
      }

    </div>
  );
};

export default Home;
