async function main() 
{
    // we'll add code here soon
    /**
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
    */
    try {
            const { MongoClient } = require('mongodb');
            console.log("-------------------------------------");
            console.log(MongoClient);
            console.log("-------------------------------------");
            const uri = "mongodb://localhost:27017/?directConnection=true";       
            console.log("-------------------------------------");
            console.log(uri);
            console.log("-------------------------------------");
            const client = new MongoClient(uri);
            console.log("-------------------------------------");
            console.log(client);
            console.log("-------------------------------------");
            await client.connect();

            await listDatabases(client);

        } catch (e) {
            console.error(e);
        }
        finally {
            await client.close();
        }
}

main().catch(console.error);