const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 3030;

app.use(cors()); 
app.use(express.json());

const deportes = [
    { id: 1, deporte: "futbol", equipo: "barcelona", jugadores: 12 },
    { id: 2, deporte: "voley", equipo: "invictus", jugadores: 10 },
    ];

app.get("/", (req, res) => {

    res.send("Hola deportistas, asi es la creacion de mi API"); 
    });

app.get("/api/deportes", (req, res) => {
res.send(deportes);
    });

app.get("/api/deportes/:id", (req, res) => {
    const depor = deportes.find((e) => e.id === parseInt(req.params.id));
    if (!depor) 
        return res
        .status(404)
        .send("Estudiante no encontrado en nuestra base datos"); 
    else res.send(depor);    
}); 
// crear estudiante
app.post("/api/deportes", (req, res) => { 
    const depor = {
        id: deportes.length + 1, 
        deporte: req.body.nombre, 
        equipo: req.body.apellido, 
        jugadores: parseInt(req.body.edad) 
    };

    deportes.push(depor);
    res.send(depor);
});
// eliminar estudiante 
app.delete("/api/deportes/:id", (req, res) => {
    const depor = deportes.find((d) => d.id === parseInt(req.params.id));
    
    if (!depor) return res.status (404).send("Deporte no encontrado"); 
    else res.send(depor);
    
    const index = deportes.indexOf(depor);
    deportes.splice (index, 1);
    res.send(depor); 
    });

    // actualizar estudiante
app.put("/api/estudiantes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deporIndex = deportes.findIndex((depor) => depor.id === id);

    if (deporIndex !== -1) {
        const updateDepor = {
            id: deportes.length + 1, 
            deporte: req.body.nombre, 
            equipo: req.body.apellido, 
            jugadores: parseInt(req.body.edad) 
        };

    deportes[deporIndex] = updateDepor;

    res.send(updateDepor);
}   else {
    res.status(404).send("Deporte no encontrado");
}});

app.listen(port,() => console.log("Escuchando el puerto:",port));