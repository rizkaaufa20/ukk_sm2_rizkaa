const db= require("mysql2");
const koneksi= db.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bukutamurizka_db",
});
koneksi.connect((err) => {
    if(err) {
        console.error("Error waktu konek ke database", err.stack)
        return;
    }
    console.log("berhasil konek ke database")
});
module.exports= koneksi;