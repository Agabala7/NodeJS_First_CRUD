const generalModel = require("../model/general");

const iscilerGetir = async (req,res) => {

    generalModel.iscilerGetir((err,isciler) =>{
        if(err) {
            res.status(404).json(err);
        }else {
            res.render("home",{
                isciler
            });
        }
    });
}

const iscilerElave = async(req, res) => {

    const addEmp = await generalModel.iscilerElave(req.body.adsoyad,req.body.vezife,req.body.maas);

    if(addEmp) {
        res.redirect("/");
    }else {
        res.status(404).json({
            "message" : "Error"
        });
    }
}

const iscilerSil = async (req, res) => {
    const deleteEmp = await generalModel.iscilerSil(req.params.id);
    if(deleteEmp) {
        res.redirect("/");
    }else {
        res.status(404).json({
            "message" : "Error"
        });
    }
}

module.exports = {
    iscilerGetir,
    iscilerElave,
    iscilerSil
}