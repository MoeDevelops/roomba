import sqlite3 from "sqlite3";

class Database {
    private static _instance: Database;

    static get instance(): Database {
        if (!Database._instance) {
            Database._instance = new Database();
        }

        return Database._instance
    }

    private _db: sqlite3.Database;

    public get db() {
        return this._db;
    }

    constructor() {
        this._db = new sqlite3.Database("data/database.db");
        this.initDatabase();
    }

    private initDatabase() {
        this.db.serialize(() => {
            this.db.run("CREATE TABLE IF NOT EXISTS Channels (ChannelId TEXT PRIMARY KEY, MessageId TEXT, RoomAmount INT, ResidentsPerRoom INT)");
        })
    }
}