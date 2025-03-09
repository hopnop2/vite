import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // จัดการการ scroll เพื่อเปลี่ยนสีพื้นหลังเมื่อเลื่อนลงมา
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gradient-to-r from-green-700 to-green-600 shadow-xl' : 'bg-gradient-to-r from-green-600 to-green-500'
    } text-white`}>
      {/* โลโก้ร้าน */}
      <div className="flex-1">
        <a className="flex items-center gap-2 btn btn-ghost normal-case text-2xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3.5a6.5 6.5 0 00-6.5 6.5h13a6.5 6.5 0 00-6.5-6.5zM3.5 12a6.5 6.5 0 006.5 6.5 6.5 6.5 0 006.5-6.5h-13z" />
          </svg>
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 text-transparent bg-clip-text">
            Fruit Paradise
          </span>
        </a>
      </div>

      {/* เมนูสำหรับหน้าจอขนาดใหญ่ */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal space-x-2 px-1">
          <li>
            <a href="/home" className="hover:bg-green-700 rounded-full font-medium transition duration-200 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              หน้าหลัก
            </a>
          </li>
          <li>
            <a href="/fruits" className="hover:bg-green-700 rounded-full font-medium transition duration-200 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              ผลไม้ทั้งหมด
            </a>
          </li>
          <li>
            <details>
              <summary className="hover:bg-green-700 rounded-full font-medium transition duration-200 flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                หมวดหมู่
              </summary>
              <ul className="p-2 bg-green-700 rounded-lg mt-2">
                <li>
                  <a href="/seasonal" className="hover:bg-green-600 transition duration-200 rounded-lg">
                    ผลไม้ตามฤดูกาล
                  </a>
                </li>
                <li>
                  <a href="/exotic" className="hover:bg-green-600 transition duration-200 rounded-lg">
                    ผลไม้นำเข้า
                  </a>
                </li>
                <li>
                  <a href="/organic" className="hover:bg-green-600 transition duration-200 rounded-lg">
                    ผลไม้ออร์แกนิค
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/contact" className="hover:bg-green-700 rounded-full font-medium transition duration-200 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ติดต่อเรา
            </a>
          </li>
        </ul>
      </div>

      {/* ช่องค้นหา */}
      <div className="hidden md:flex flex-none mx-2">
        <div className="form-control">
          <input type="text" placeholder="ค้นหาผลไม้..." className="input input-sm input-bordered w-32 md:w-auto bg-green-700 border-green-600 text-white placeholder-green-200 focus:border-yellow-300" />
        </div>
      </div>

      {/* ปุ่มไอคอน */}
      <div className="flex-none">
        {/* ไอคอนตะกร้าสินค้า */}
        <button className="btn btn-ghost btn-circle relative">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item bg-yellow-400 text-black border-yellow-400 font-bold">3</span>
          </div>
        </button>

        {/* ปุ่มเมนูมือถือ */}
        <button 
          className="btn btn-ghost btn-circle md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* เมนูมือถือ */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-green-700 text-white p-4 shadow-xl z-50 transition-all duration-300 ease-in-out">
          <div className="form-control mb-4">
            <input type="text" placeholder="ค้นหาผลไม้..." className="input input-bordered bg-green-800 border-green-600 text-white placeholder-green-200 w-full" />
          </div>
          <ul className="menu">
            <li>
              <a href="/home" className="flex gap-2 items-center py-3 hover:bg-green-600 rounded-lg transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                หน้าหลัก
              </a>
            </li>
            <li>
              <a href="/fruits" className="flex gap-2 items-center py-3 hover:bg-green-600 rounded-lg transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                ผลไม้ทั้งหมด
              </a>
            </li>
            <li className="menu-title mt-2">
              <span>หมวดหมู่</span>
            </li>
            <li>
              <a href="/seasonal" className="pl-4 py-3 hover:bg-green-600 rounded-lg transition duration-200">
                ผลไม้ตามฤดูกาล
              </a>
            </li>
            <li>
              <a href="/exotic" className="pl-4 py-3 hover:bg-green-600 rounded-lg transition duration-200">
                ผลไม้นำเข้า
              </a>
            </li>
            <li>
              <a href="/organic" className="pl-4 py-3 hover:bg-green-600 rounded-lg transition duration-200">
                ผลไม้ออร์แกนิค
              </a>
            </li>
            <li className="mt-2">
              <a href="/contact" className="flex gap-2 items-center py-3 hover:bg-green-600 rounded-lg transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
