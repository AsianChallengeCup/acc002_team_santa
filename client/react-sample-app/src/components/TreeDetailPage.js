import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TreeDetailPage = ({ tree }) => {
  const navigate = useNavigate();
  const [pushCount, setPushCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(tree.image);
  const [decorations, setDecorations] = useState([]); // 装飾画像を管理

  // 木の画像リスト
  const treeImages = [
    "/tree1.png", // 初期画像
    "/change1.png", // 5回目
    "/change2.png", // 10回目
  ];

  // 背景装飾リスト
  const decorationImages = [
    "/decoration1.png", // 15回目
    "/decoration2.png", // 20回目
    "/decoration3.png", // 25回目
    "/decoration4.png", // 30回目
  ];

  // UI要素の位置（ボタンや木の画像）
  const uiElements = [
    { top: 10, left: 10, width: 64, height: 64 }, // 例: 木の画像
    { top: 20, left: 300, width: 200, height: 50 }, // 例: PUSHボタン
    { top: 50, left: 100, width: 50, height: 50 }, // 例: アイコン画像
  ];

  // 装飾画像の位置をランダムに決定
  const getRandomPosition = (imageWidth, imageHeight) => {
    const minX = 0;
    const minY = 0;
    const maxX = window.innerWidth - imageWidth; // 画面幅から画像幅を引く
    const maxY = window.innerHeight - imageHeight; // 画面高さから画像高さを引く

    let randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    // UI要素と重ならないように調整
    for (let i = 0; i < uiElements.length; i++) {
      const element = uiElements[i];
      if (
        randomX < element.left + element.width &&
        randomX + imageWidth > element.left &&
        randomY < element.top + element.height &&
        randomY + imageHeight > element.top
      ) {
        // 重なっていたら再度ランダムな位置を計算
        return getRandomPosition(imageWidth, imageHeight);
      }
    }

    return { x: randomX, y: randomY };
  };

  const handlePush = () => {
    const newCount = pushCount + 1;
    setPushCount(newCount);

    // 画像切り替え（木の画像）
    if (newCount <= 10 && newCount % 5 === 0) {
      const nextImageIndex = newCount / 5; // 次の画像インデックス
      if (treeImages[nextImageIndex]) {
        setCurrentImage(treeImages[nextImageIndex]);
      }
    }

    // 装飾追加（背景装飾画像）
    if (newCount >= 15 && newCount % 5 === 0) {
      const decorationIndex = Math.floor((newCount - 15) / 5); // 15回目から開始
      if (decorationImages[decorationIndex]) {
        const imageWidth = 100;  // 小さな画像サイズ（幅）
        const imageHeight = 100; // 小さな画像サイズ（高さ）
        const { x, y } = getRandomPosition(imageWidth, imageHeight);

        setDecorations([
          ...decorations,
          { src: decorationImages[decorationIndex], x, y, width: imageWidth, height: imageHeight },
        ]);
      }
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/house.jpg')" }}
    >
      {/* 背景装飾 */}
      {decorations.map((decoration, index) => (
        <img
          key={index}
          src={decoration.src}
          alt={`Decoration ${index + 1}`}
          className="absolute"
          style={{
            top: decoration.y,
            left: decoration.x,
            width: decoration.width,
            height: decoration.height,
            zIndex: 1, // 背景より手前に表示
            mixBlendMode: "nomal", // 背景の装飾が重なるように設定
          }}
        />
      ))}

      {/* その他の要素 */}
      <div className="absolute top-4 left-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => navigate("/")} // ホームに戻る
        >
          ホームに戻る
        </button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative">
          <img src={currentImage} alt={tree.name} className="w-64 h-64 mb-4" />
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full text-black">
            {pushCount} 回推されました
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">{tree.name}</h1>
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <img src="/chara.png" alt="Icon" className="w-16 h-16 rounded-full" />
        </div>
        <button
          onClick={handlePush}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700"
        >
          PUSH
        </button>
      </div>
    </div>
  );
};

export default TreeDetailPage;
