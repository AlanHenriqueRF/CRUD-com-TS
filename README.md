# CRUD-com-TS

Para que o projeto funcione deve-se adicionar uma pasta chamada "database" e dentro de database colocar um arquivo chamado "connection.ts", não pude colocar esse arquivo no git hub pois contem minha senha e meu usuario de PostgreSQL.

Entretanto criando a pasta("database") e o arquivo("connection.ts") dito acima, deve-se apenas colocar o seguinte código, mudando apenas onde é dito para mudar: 

  ```
import pg from "pg";
  
const { Pool } = pg;
  
const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "SeuUserPostgress", // Mude Aqui com o seu user
  password: "SuaSenhaPostgress", // Mude Aqui com sua senha
  database: "Movies"
 })

export default db
```
