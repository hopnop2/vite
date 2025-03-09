import React, { useState } from 'react';
import './FruitCard.css'; // สร้างไฟล์ CSS แยกต่างหาก

function card({ fruit }) {
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
      className="fruit-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="fruit-image-container">
        <img 
          src={image} 
          alt={name} 
          className={`fruit-image ${isHovered ? 'zoomed' : ''}`}
        />
        {!inStock && <div className="out-of-stock-badge">สินค้าหมด</div>}
        <div className="origin-badge">{origin}</div>
      </div>
      
      <div className="fruit-content">
        <h3 className="fruit-name">{name}</h3>
        <div className="fruit-price">{price} {unit}</div>
        <p className="fruit-description">{description}</p>
        
        <button 
          className="add-to-cart-button"
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          {inStock ? '+ เพิ่มลงตะกร้า' : 'สินค้าหมด'}
        </button>
      </div>
    </div>
  );
}

export default card;
