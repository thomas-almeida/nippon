import Dexie from 'dexie';
import chimpers from './chimpers';

class MyDatabase extends Dexie {
    constructor() {
        super('MyDatabase');
        this.version(1).stores({
            users: '++id,name,profile',
        });
    }
}

const db = new MyDatabase()

function addDefaultUser() {

    db.users.get({ name: 'Nippon 🍥' })
        .then((user) => {
            if (!user) {
                db.users.add({ name: 'Nippon 🍥', profile: chimpers[0] })
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

addDefaultUser()

export default db;
