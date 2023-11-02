const { Client } = require("cassandra-driver");

const client = new Client({
    cloud: {
      secureConnectBundle: "secure-connect-restaurant.zip",
    },
    credentials: {
      username: "KSeItikXESsltkZqSqodIYMJ",
      password: "pNJ_H4tAfyWQoECdsyc+S7fAoq8vnoDCL.H6ZfHqNy_,i4,v-3yiqO5uH8soY,JuOxpIN88GgUNcvLFTLDZYNsOdAmi,DxEi2mfF+NGIlexLb.BesC6XfpJPDFSFRPny",
    },
  });


const dbConnect = async () => {
  try {

    await client.connect();

    // // Execute a query
    // const rs = await client.execute("SELECT * FROM system.local");
    // console.log(`Your cluster returned ${rs.rowLength} row(s)`);
    // await client.shutdown();
    
  } catch (e) {
    console.error("data connection error", e);
    throw e; // Re-throw the error for higher-level handling
  }
};

module.exports = dbConnect;
