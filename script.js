body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

#malla-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.semestre {
  border: 2px solid #000;
  padding: 10px;
  width: 200px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.semestre h2 {
  text-align: center;
  margin: 0 0 10px 0;
}

.ramo {
  padding: 8px;
  border: 1px solid #333;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: #f8bbd0; /* rosado para no aprobado */
  color: #000;
}

.ramo.aprobado {
  background-color: #6a1b9a; /* morado */
  color: #fff;
  text-decoration: line-through;
}

.ramo.bloqueado {
  background-color: #ccc; /* gris */
  color: #666;
  cursor: not-allowed;
  text-decoration: none;
}

