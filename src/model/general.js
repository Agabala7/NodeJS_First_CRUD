const DB = require("../db/connection");
const moment = require("moment");

exports.iscilerGetir = (result) => {

    DB.query("SELECT * FROM isciler", (err,res) => {
        if(err) result(null,err);
        else {
            if(res.length === 0) {
                result(null,{
                    data : "İşçi tapılmadı",
                    status : true
                });
            }else {
                result(null,res);
            }
        }
    });
};

exports.iscilerElave = async (adsoyad,vezife,maas) => {
    return new Promise((resolve,reject) => {
        const query = `INSERT INTO isciler (adsoyad,vezife,maas,tarix) VALUES (?,?,?,?)`;
        const date = moment().local().format("YYYY-MM-DD HH:MM:SS");
        const filter = [adsoyad,vezife,maas,date];

        DB.query(query,filter,async(err,result,fields) => {
            if(err) {
                resolve(err);
                return 0;
            }
            if(result === undefined || !result || result.length === 0) {
                resolve(0);
                return 0;
            }
            resolve(1);
            return 1;
        });
    });
}

exports.iscilerSil = async (id) => {
    return new Promise((resolve,reject) => {
        const query = `DELETE FROM isciler WHERE id = ?`;
        const filter = [id];

        DB.query(query,filter, async(err, result, fields) => {
            if(err) {
                resolve(err);
                return 0;
            }else if(result === undefined || !result || result.length === 0) {
                resolve(err);
                return 0;
            }else {
                resolve(1);
                return 1;
            }
        });
    });
}

exports.iscilerRedakte = async (id,adsoyad,vezife,maas) => {
    return new Promise((resolve,reject) => {
        const query = `UPDATE isciler SET adsoyad = ?, vezife = ?, maas = ? where id = ?`;
        const filter = [adsoyad,vezife,maas,id];

        DB.query(query, filter, async(err, result, fields) => {
            if(err) {
                resolve(err);
                return 0;
            }else if(result === undefined || !result || result.length === 0) {
                resolve(err);
                return 0;
            }else {
                resolve(1);
                return 1;
            }
        });
    });
}