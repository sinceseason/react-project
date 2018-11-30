import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Wharf } from "./entity/Wharf";
import { Menu } from "./entity/Menu";

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'react_node',
    entities: [
        User, Wharf, Menu,
    ],
    synchronize: true,
    logging: false,
}).then(connection => {

}).catch(err => { })

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);
    
//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);
     
//     console.log("Here you can setup and run express/koa/any other framework.");
    
// }).catch(error => console.log(error));
