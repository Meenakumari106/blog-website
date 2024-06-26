import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-dhbq1ay-shard-00-00.xpt3mma.mongodb.net:27017,ac-dhbq1ay-shard-00-01.xpt3mma.mongodb.net:27017,ac-dhbq1ay-shard-00-02.xpt3mma.mongodb.net:27017/?ssl=true&replicaSet=atlas-fkj9lk-shard-0&authSource=admin&retryWrites=true&w=majority`
      try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;