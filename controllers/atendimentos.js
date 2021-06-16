module.exports = (app) => {
  app.get("/atendimentos", (req, res) =>
    res.send("Você está na rota de atendimentos e está realizando um get")
  );
  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
  });
};

const Atendimento = require("../models/atendimento");
