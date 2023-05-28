var Userdb = require(`../models/Userdb`);
var Classdb = require(`../models/Classdb`);

//create and save new user
exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        status:req.body.status 
    });

    // save user in data base

    user
        .save(user)
        .then(data=>{
            //res.send(data);
            // we can redirect to a profile/add classes page
            res.redirect('/add-class');

        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Some error occured while creating user"
            });
        });
};


exports.find = (req, res) => {

    if(req.query.id) {
        const id = req.query.id;
        
        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            });

    } else {
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=> {
            res.status(500).send({message: err.message || "Error occured while retrieving user info"});
        })
    }
};

exports.update = (req, res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"});
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {})
        .then(data=>{
            if(!data) {
                res.status(404).send({message:`Cannot update user with id: ${id}. Maybe user not found`});
            } else {
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message: "Error update user info"})
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

// ___________________________________________________________________________________________________________________
exports.create_class = (req, res) => {
    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const newClass = new Classdb({
        class_name:req.body.class_name,
        professor:req.body.professor
    });

    // save user in data base

    newClass
        .save(newClass)
        .then(data=>{
            //res.send(data);
            // we can redirect to a profile/add classes page
            res.redirect('/add-class');
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Some error occured while creating user"
            });
        });
};


// exports.find = (req, res) => {

//     if(req.query.id) {
//         const id = req.query.id;
        
//         Userdb.findById(id)
//             .then(data =>{
//                 if(!data){
//                     res.status(404).send({ message : "Not found user with id "+ id})
//                 }else{
//                     res.send(data)
//                 }
//             })
//             .catch(err =>{
//                 res.status(500).send({ message: "Erro retrieving user with id " + id})
//             });

//     } else {
//         Userdb.find()
//         .then(user=>{
//             res.send(user)
//         })
//         .catch(err=> {
//             res.status(500).senc({message: err.message || "Error occured while retrieving user info"});
//         })
//     }
// };



// exports.update = (req, res) => {
//     if(!req.body) {
//         return res
//             .status(400)
//             .send({message: "Data to update cannot be empty"});
//     }

//     const id = req.params.id;
//     Userdb.findByIdAndUpdate(id, req.body, {})
//         .then(data=>{
//             if(!data) {
//                 res.status(404).send({message:`Cannot update user with id: ${id}. Maybe user not found`});
//             } else {
//                 res.send(data);
//             }
//         }).catch(err=>{
//             res.status(500).send({message: "Error update user info"})
//         });

// };

// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Userdb.findByIdAndDelete(id)
//         .then(data => {
//             if(!data){
//                 res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
//             }else{
//                 res.send({
//                     message : "User was deleted successfully!"
//                 })
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 message: "Could not delete User with id=" + id
//             });
//         });
// };


