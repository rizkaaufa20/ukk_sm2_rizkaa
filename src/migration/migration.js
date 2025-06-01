const koneksi = require('../models/db.js')


const createUserTable = () => {
    const q = `
    CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama varchar(100),
        email VARCHAR(100) UNIQUE, 
        password varchar(100)
    )
`;
    koneksi.query(q, (err, result) => {
        if (err) {
            console.error("error waktu buat table user", err.stack)
            return
        }
        console.log("table user berhasil dibuat")
    })
}

const migration = ()=>{
    koneksi.connect((err)=>{
        if(err){
            console.error("error koneksi ke db", err.stack)
            return
        }
        console.log("koneksi ke db berhasil")
        createUserTable(koneksi)
    })
}
module.exports = migration;