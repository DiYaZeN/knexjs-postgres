const express = require("express");
const PORT = 8080;

const router1 = require("./routes/index");

const app = express();
app.use(express.json());
app.use(router1);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
