const express = require('express');
const router = express.Router();

router.get("/categories", (req,res) => {
    res.send("ROTA CATEGORIAS")
});

router.get("/admin/categories", (req, res) => {
    res.send("ROTA PARA CRIAR UMA NOVA CATEGORIAS   ")
});

module.exports = router;