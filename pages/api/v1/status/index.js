function status(request, response) {
  response.status(200).json({ chave: "Amo minhas meninas" });
}

export default status;
