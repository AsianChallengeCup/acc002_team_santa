import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const [nickname, setNickname] = useState("");

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/yuki.jpg')" }} // 背景画像を設定
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <Link
          to="/dashboard" // リンク先
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          onClick={(e) => {
            if (nickname.trim() === "") {
              e.preventDefault();
              alert("Please enter your nickname!");
            }
          }}
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default CategoriesPage;
