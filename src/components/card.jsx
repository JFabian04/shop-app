import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,  } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { host } from "@/utils/axios";


import 'swiper/css/pagination';


const ProductCard = ({ product, images }) => {
  const truncateDescription = (description, maxLength) => {
    if (!description) return '';
    return description.length > maxLength
      ? `${description.substring(0, maxLength)}...`
      : description;
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 w-72 mx-auto mb-8">
      <div className="flex justify-center mb-3">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {Array.isArray(images) && images.length > 0 ? (
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`${host}/image_file/${product.id}/${image.name}`}
                  alt={product.name}
                  className="h-64 w-full object-cover rounded-t-lg"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img
                src={`${host}/image_file/default/${'default.png'}`}
                alt="Imagen por defecto"
                className="h-64 w-full object-cover rounded-t-lg"
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="grid grid-cols-1 px-2">
        <div className="border border-x-0 p-3 bg-white">
          <h2 className="text-xl font-semibold text-blue-800 capitalize truncate">{product.name}</h2>
          <p className="text-gray-500 text-sm h-6 mb-6">
            {truncateDescription(product.observation, 80)}
          </p>
          <div className="my-2">
            <label className="text-xs text-blue-500">Marca:</label>
            <p className="text-gray-600 font-semibold capitalize">{product.brand.name}</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="my-1 bg-slate-100 shadow rounded px-2 py-1 w-full">
              <label className="text-xs text-gray-500">Unidad Medida:</label>
              <h3 className="text-sm font-medium text-blue-600">{product.unit_measure}</h3>
            </div>
            <div className="my-1 bg-slate-100 shadow px-2 py-1 w-full rounded">
              <label className="text-xs text-gray-500">Cantidad:</label>
              <p className="text-sm text-gray-600 font-semibold">{product.stock} unidades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
