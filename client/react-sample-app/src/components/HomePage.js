import React from "react";
import { Link } from "react-router-dom"; // リンクを使用する場合はreact-router-domをインポート

const HomePage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/yuki.jpg')", // 雪の画像へのパスを指定
      }}
    >
      <h1 className="text-6xl font-bold text-white mb-8">holoX</h1>
      <Link
        to="/categories" // 遷移先のルート（例: /categories）
        className="text-2xl font-semibold text-white underline hover:text-gray-200 transition-colors"
      >
        -start-
      </Link>
    </div>
  );
};

export default HomePage;
