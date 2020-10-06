const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
