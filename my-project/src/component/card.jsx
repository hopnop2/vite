import React, { useState } from 'react';
import '../css/FruitCard.css'
function Card({ fruit }) {
  const [isHovered, setIsHovered] = useState(false);

  // ถ้าไม่มีข้อมูลผลไม้ให้มา จะใช้ข้อมูลตัวอย่าง
  const defaultFruit = {
    name: "แอปเปิ้ลแดง",
    price: 59,
    unit: "บาท/กก.",
    description: "แอปเปิ้ลแดงสดใหม่ หวานกรอบ อุดมไปด้วยวิตามินและแร่ธาตุที่เป็นประโยชน์",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    origin: "นำเข้าจากนิวซีแลนด์",
    inStock: true,
  };

  const { name, price, unit, description, image, origin, inStock } = fruit || defaultFruit;

  const handleAddToCart = () => {
    console.log(`เพิ่ม ${name} ลงในตะกร้าแล้ว!`);
    // ตรงนี้สามารถเพิ่มฟังก์ชันสำหรับเพิ่มสินค้าลงตะกร้าได้
  };

  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* รูปภาพ */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {!inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            สินค้าหมด
          </div>
        )}
        <div className="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
          {origin}
        </div>
      </div>

      {/* เนื้อหา */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-green-700">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-500">{price} {unit}</span>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition ${
              inStock ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            {inStock ? '+ เพิ่มลงตะกร้า' : 'สินค้าหมด'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
