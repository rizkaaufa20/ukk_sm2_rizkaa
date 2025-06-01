const Bukutamu= require("../models/bukutamu")

const index=(req, res)=>{
    Bukutamu.selectBukutamu((err, result)=>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        if(result===0){
            return res.status(400).json({message: "Data masih kosong"})
        }
        res.status(200).json(result)
    })
}

const storeBukutamu=(req, res)=>{
    const {nama_tamu, no_hp, jabatan, unit_kerja, tujuan, yang_dituju, keterangan}=req.body
    Bukutamu.insertBukutamu(nama_tamu, no_hp, jabatan, unit_kerja, tujuan, yang_dituju, keterangan, (err, result)=>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        res.status(201).json({message: "Buku tamu created", bukutamuId: result.insertId})
    })
}

const destroyBukutamu=(req, res)=>{
    const {id}= req.params
    Bukutamu.deleteBukutamu(id,(err, result)=>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        res.status(200).json("hapus buku tamu berhasil")
    })
}

module.exports={
    index,
    storeBukutamu,
    destroyBukutamu,
}