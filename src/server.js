// Routes

app.get("/product", (req, res) => {
  const { limit } = req.query;
  res.json();
});

app.get("product/:id", (req, res) => {
  const id = req.params;
  console.log(id);
  const product = productos;
  res.json(id);
});
