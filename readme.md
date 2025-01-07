# Título del Proyecto

Esta aplicación se compone de tres componentes principales:

1. Un cuadro de búsqueda
2. Una lista de resultados
3. Una descripción detallada del producto

Dispone de un servidor y un cliente. El servidor es una API RESTful desarrollada con Express y Zod para la validación de tipos, mientras que el cliente está construido con React y React Router, utilizando CSS puro. 

El backend ha sido implementado con una arquitectura hexagonal. Aunque esta elección podría considerarse excesiva, resulta beneficiosa para fines educativos, ya que facilita la incorporación de nuevas funcionalidades. Cualquier persona que desee agregar una característica puede hacerlo simplemente modificando un adaptador; por ejemplo, es posible reemplazar los datos proporcionados por un archivo JSON por una base de datos relacional. 

La aplicación es intuitiva y fácil de usar. Actualmente, los datos provienen de DummyJSON, que incluía imágenes y miniaturas. Sin embargo, debido a una actualización, se ha perdido el acceso a muchas imágenes. Para evitar complicaciones adicionales, he optado por utilizar una misma miniatura para todos los elementos, con el fin de demostrar la funcionalidad y aplicar las propiedades de CSS.

## Pendiente
Queda pendiente realizar o implementar algun test con vitest que era lo que se tenia planeado al principio, o tambien realizar un test e2e con algo como cypress o playwright.
Ademas pendiente de implementar un adapter driven para traer los datos de una base de datos relacional o no relacional, o cualquier otra cosa donde se pueda guardar las miniaturas que faltaron.

## Construido con 🛠️

express, typescript, zod, react, pnpm

## Agradecimientos

Midudev por proporcionar el reto de la prueba tenica


## Autor ✒️

* **Dylan Guerrero** - *Desarrollo full-stack* -
