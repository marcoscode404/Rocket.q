// importando do config.js
const Database =  require("./config")

const initDb = {
    async init(){
        // rode o database e espere o resultado para ir para a proxima linha
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT 
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);

        await db.close()
    }
}

initDb.init();
// executando a função`


