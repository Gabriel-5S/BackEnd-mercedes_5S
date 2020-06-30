const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Login = require("./Login");

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Recebendo dados do login e salvando no BD   
router.post("/cadastro", (req, res) => {   
    var User_name = req.body.User_name;    //Na requisição deve ser buscado o nome que consta no formulário
    var User_password = req.body.User_password;
    var User_email = req.body.User_email;
    var User_profile_photo = req.body.User_profile_photo;
    var User_role = req.body.User_role;

    //Colocando os dados na tabela de login
    Login.create({             
        User_name: User_name,
        User_password: User_password,
        User_email: User_email,
        User_profile_photo: User_profile_photo,
        User_role: User_role
    }); //.then para dar um redirect do back para o front
    res.json({ status: 'Usuário cadastrado!'})
}); 


//Verificando login
router.post("/login", (req, res) => {
    var email = req.body.User_email;
    var password = req.body.User_password;
    Login.findOne({
        where: {User_email: email}  //Verificando se há o email na coluna User_email
    }).then(logins => {            //A variável logins recebe o resultado de .findOne: se encontrar recebe o JSON, caso contrário recebe undefined
        if (logins != undefined){
            if(password == logins.User_password){
                res.send(true);
            }else{
                res.send(false); 
            }
        }else{
            res.sendStatus(404); //Email não encontrado
        }
    })
});



module.exports = router;