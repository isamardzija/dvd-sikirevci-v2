const ftp = require("basic-ftp");

if (!process.env.password) {
  console.log("No password");
  process.exit(1);
}

(async () => {
  const client = new ftp.Client();
  try {
    await client.access({
      host: "ftp.teuzcode.hr",
      user: "ivan@teuzcode.hr",
      password: process.env.password,
      secure: false,
    });

    await client.clearWorkingDir();

    client.trackProgress((info) => {
      console.log("File", info.name);
      console.log("Type", info.type);
      console.log("Transferred", info.bytes);
      console.log("Transferred Overall", info.bytesOverall);
    });

    await client.uploadFromDir("dist");
    await client.uploadFrom(".htaccess", ".htaccess");
  } catch (err) {
    console.log(err);
  }

  client.close();
})();
