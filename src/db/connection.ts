import { connect,disconnect } from "mongoose";
async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL as string);
    }catch(error){
        throw new Error("cannot Conect to mongoDB");
    }
}

async function disconnectFromDatabase(){
    try{
        await disconnect();
    }catch(error){
        throw new Error("Could not cannot Conect to mongoDB");
    }
}

export { connectToDatabase, disconnectFromDatabase}