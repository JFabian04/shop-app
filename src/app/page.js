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
      }else{
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
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {loading && <p className="text-center">Cargando...</p>} {/* Mensaje de carga */}
    </div>
  );
};

export default Home;
