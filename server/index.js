const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3001;

// CORSとJSONデータ処理を有効化
app.use(cors());
app.use(express.json());

// MySQL接続設定
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test2",
});

// MySQL接続確認
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL connected!");
  connection.release();
});

// ルートエンドポイント
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// APIエンドポイント: ユーザーデータを取得
app.get("/api/get/users", (req, res) => {
  const query = "SELECT UserName, Tap, Count FROM db";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching user data:", err);
      return res.status(500).send("Error fetching user data");
    }
    res.json(results); // JSON形式でクライアントにデータを返す
  });
});

// サーバー起動
//変更
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
