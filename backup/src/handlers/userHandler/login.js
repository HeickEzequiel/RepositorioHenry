const {User} = require ("../../db.js")

const loginHandler = async (req,res) =>{
  try{
    const {email, password} = req.body;
    if( email && password ){
        const actualUser = await User.findOne({
            where: { email: email }
        })
        if(actualUser){
            if(actualUser.password === password){
                return res.json({
                    access:true,
                    actualUser: actualUser.id 
                })
            }
            return res.status(403).send("Contraseña Incorrecta")
        }
        return res.status(404).send("Usuario no encontrado")
    }
    return res.status(400).send("Faltan Datos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = loginHandler;