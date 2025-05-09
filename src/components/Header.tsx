// src/components/Header.tsx
import { FaCheckCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="relative">
      {/* 🔹 Top background image */}
      <div
        className="h-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/soft.jpg')" }}
      ></div>

      {/* 🔹 Profile and bio section */}
      <div className="bg-black text-white pt-12 px-4 pb-4">
        {/* Profile image overlapping the banner */}
        <div className="absolute top-12 left-4">
          <img
            src="/marc.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-black"
          />
        </div>

        {/* Name and username BELOW the profile pic */}
        <div className="mt-1 pl-1">
          <h1 className="text-xl font-bold flex items-center gap-1">
            Solomon Marcus
            <span className="text-blue-500 pl-2">
              <FaCheckCircle size={16} />
            </span>
          </h1>
          <p className="text-sm text-gray-400">@SoftwareEngineer</p>
        </div>
      </div>
    </div>
  );
}
