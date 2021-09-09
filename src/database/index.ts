import { createConnection, getConnectionManager, getConnectionOptions } from 'typeorm'

const connect = async () => {
    const connectionManager = getConnectionManager();

    if(!connectionManager.has("default")){
        const connectionOptions = await getConnectionOptions();
        connectionManager.create(connectionOptions);
    }

    try {
        const db = connectionManager.get();
        await db.connect();
    } catch (error) {
        console.log(error);
        return;
    }
}

