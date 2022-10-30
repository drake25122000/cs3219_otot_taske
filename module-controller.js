import redis from "redis";
import axios from "axios";
import "dotenv";

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect().then(() => console.log("connected to redis!"));
})();

export async function getModules(req, res) {

    const { ay } = req.params;
    
    let result;

    try {
        const fromRedis = await redisClient.get(ay);

        if (fromRedis) {
            result = JSON.parse(fromRedis);
        } else {
            const url = "https://cs3219-otot-taskb.azurewebsites.net/api/cs3219-otot-taskb4-functions?code=foeG1fGGZgKQJeoqnKMYYN5bfmiwwd6bOxM4DJeshUp0AzFuaDBpMQ==";
            let fromAzure = await axios.get(`${url}&ay=${ay}`);
            fromAzure = fromAzure.data;
            result = fromAzure;
            await redisClient.set(ay, JSON.stringify(fromAzure));
        }

        res.send({ result });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message : error });
    }

}