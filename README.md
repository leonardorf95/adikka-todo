# adikka-todo

Para poder correr la aplicacion se necesitaran realizar los siguientes paso: .\

Realmente no se necesitan muchas configuraciones las cuales son las siguientes.\ 
## Back-End
*1-* Tener instalado postgres.\ 
*2-* Cambiar las configuraciones en el archivo config en el se encontraran las configuraciones de base de datos y puerto de la aplicación.\
*3-* Una vez realizado estos cambios implementar el comando `npm run dev` para inicializar el servidor de Node

## Front-End
*1-* Para poder realizar la conexión con el back-end sera necesario realizar la sustitución de la baseURl ubicado en el archivo axiosConfig ubicado en FrontEnd/adikka_todo/src/config se debera poner la misma ruta en la que esta corriendo el servidor para que pueda conectar. Posterior a este cambio solo se necesitara realizar la ejecución del comando `npm start`