import Sequelize from 'sequelize';

const db = new Sequelize('travelnow','root','manager',{
    host:'127.0.0.1',
    port:'3306',
    dialect:'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:3000,
        indle:1000
    },
    operatorAliases:false
})

export default db;