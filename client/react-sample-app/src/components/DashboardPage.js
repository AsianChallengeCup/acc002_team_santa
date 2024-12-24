import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const trees = [
    {
      id: 1,
      name: "Pine Tree",
      image: "/tree1.png",
      description: "A tall evergreen tree known for its needles and cones.",
      link: "/pine-tree", // Yesボタンで飛ぶリンク先
    },
    {
      id: 2,
      name: "Oak Tree",
      image: "/tree2.png",
      description: "A sturdy deciduous tree that is a symbol of strength and endurance.",
      link: "/oak-tree", // Yesボタンで飛ぶリンク先
    },
    {
      id: 3,
      name: "Maple Tree",
      image: "/tree3.png",
      description: "A tree known for its beautiful fall foliage and sweet sap for syrup.",
      link: "/maple-tree", // Yesボタンで飛ぶリンク先
    },
  ];

  const [selectedTree, setSelectedTree] = useState(null);
  const navigate = useNavigate();

  const handleTreeClick = (tree) => {
    setSelectedTree(tree);
  };

  const handleNavigate = () => {
    if (selectedTree) {
      navigate(selectedTree.link); // リンク先に遷移
    }
  };

  const handleClose = () => {
    setSelectedTree(null); // 選択解除
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/house.jpg')" }}
    >
      {/* 左上の画面アイコン */}
      <div className="absolute top-4 left-4">
        <img
          src="/holox_AI.png"
          alt="Screen Icon"
          className="w-12 h-12 border border-gray-300 rounded"
        />
      </div>

      {/* 右上の検索バー */}
      <div className="absolute top-4 right-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* メインコンテンツ */}
      <div className="flex justify-center items-center min-h-screen gap-8">
        {trees.map((tree) => (
          <div
            key={tree.id}
            className="relative cursor-pointer"
            onClick={() => handleTreeClick(tree)}
          >
            {/* 木の画像 */}
            <img
              src={tree.image}
              alt={tree.name}
              className="w-32 h-32"
            />
            {/* 丸形のアイコン画像 */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <img
                src="/chara.png"
                alt="Tree Icon"
                className="w-12 h-12 rounded-full"
              />
            </div>
            {/* 木の名前 */}
            <div className="text-center mt-4 text-sm font-bold">
              {tree.name}
            </div>
          </div>
        ))}
      </div>

      {/* 選択された木の詳細表示 */}
      {selectedTree && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-90 text-black">
          <img
            src={selectedTree.image}
            alt={selectedTree.name}
            className="w-48 h-48 mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedTree.name}</h2>
          <p className="mb-4 text-center">{selectedTree.description}</p>
          <p className="mb-4 text-center">この木に飛びますか？</p>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={handleNavigate} // Yes を押したときにリンク先に遷移
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={handleClose} // No を押したときに閉じる
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
