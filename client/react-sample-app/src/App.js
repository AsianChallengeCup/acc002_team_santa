import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoriesPage from "./components/CategoriesPage";
import DashboardPage from "./components/DashboardPage";
import TreeDetailPage from "./components/TreeDetailPage"; // TreeDetailPageのインポート

// 木のデータ
const trees = [
  { id: 1, name: "Pine Tree", image: "/tree1.png", link: "/pine-tree" },
  { id: 2, name: "Oak Tree", image: "/tree2.png", link: "/oak-tree" },
  { id: 3, name: "Maple Tree", image: "/tree3.png", link: "/maple-tree" },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* 各木の詳細ページへのルート */}
        {trees.map((tree) => (
          <Route
            key={tree.id}
            path={tree.link} // リンクに基づいてルートを設定
            element={<TreeDetailPage tree={tree} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
