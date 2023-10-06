import mongoose from "mongoose"




const connection =async (username, password)=>{
    const URL = `mongodb://${username}:${password}@ac-0kpn7lh-shard-00-00.xgrxijf.mongodb.net:27017,ac-0kpn7lh-shard-00-01.xgrxijf.mongodb.net:27017,ac-0kpn7lh-shard-00-02.xgrxijf.mongodb.net:27017/?ssl=true&replicaSet=atlas-joj0i6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology : true, useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('error while connecting with Database',error);
    }

}

export default connection;