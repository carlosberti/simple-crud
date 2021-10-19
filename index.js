const express = require("express");

const server = express();

server.use(express.json());

const techs = ["ReactJS", "NodeJS"];

server.get("/techs/:id", (req, res) => {
  const { id } = req.params;

  return res.json(techs[id]);
});

server.get("/techs", (req, res) => res.json(techs));

server.post("/techs", (req, res) => {
  const { name } = req.body;

  techs.push(name);

  return res.json(techs);
});

server.put("/techs/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  techs[id] = name;

  return res.json(techs);
});

server.delete("/techs/:id", (req, res) => {
  const { id } = req.params;

  const tech = techs[id];

  techs.splice(id, 1);
  return res.json({
    message: `O curso ${tech} foi deletado`,
  });
});

server.listen(3000);
