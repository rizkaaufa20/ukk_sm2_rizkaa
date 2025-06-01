const db=require("./db")

const createBukutamuTable=()=>{
    const query="CREATE TABLE IF NOT EXISTS bukutamu(id INT AUTO_INCREMENT PRIMARY KEY, nama_tamu Varchar(60), no_hp VARCHAR(16), jabatan VARCHAR(60), unit_kerja VARCHAR(100), tujuan VARCHAR(100), yang_dituju VARCHAR(100), keterangan VARCHAR(100), created_at DATETIME DEFAULT CURRENT_TIMESTAMP, deteted_at DATETIME NULL)"
    db.query(query, (err, result)=>{
        if(err){
            console.log("Error membuat tabel bukutamu", err.stack)
            return
        }
        console.log("Tabel bukutamu berhasil dibuat")
    })
}

const selectBukutamu=(callback)=>{
    const query="SELECT * FROM bukutamu ORDER BY created_at DESC"
    db.query(query, callback)
}


const insertBukutamu=(nama_tamu, no_hp, jabatan, unit_kerja, tujuan, yang_dituju, keterangan, callback)=>{
const query="INSERT INTO bukutamu(nama_tamu, no_hp, jabatan, unit_kerja, tujuan, yang_dituju, keterangan) VALUES(?,?,?,?,?,?,?)" 
db.query(query,[nama_tamu, no_hp, jabatan, unit_kerja, tujuan, yang_dituju, keterangan], callback)  
}

const deleteBukutamu=(id, callback)=>{
    const query="DELETE FROM bukutamu WHERE id=?"
    db.query(query,[id], callback)
}

module.exports={
    createBukutamuTable,
    selectBukutamu,
    insertBukutamu,
    deleteBukutamu,
}