# Solución Prueba Node

## Estructura del proyecto

    project/
    ├── models/         # Contiene el modelo creado para MongoDB
    │   └── post.js
    ├── routes/         # Contiene los routes handlers
    │   └── posts.js
    ├── config/         # Contiene los archivos de configuracion de la DB
    │   └── db.js
    ├── tests/          # Contiene los tests implementados
    │   └── posts.test.js
    ├── app.js          # Seteo de rutas y middlewares
    └── server.js       # Inicio del servidor y conexion a DB`

---

### 1. **Organización Modular del Código**

Dividí el proyecto en archivos y carpetas separados para garantizar una mejor **separación de responsabilidades**:

- **Models**: Contiene todas las definiciones de esquemas y modelos de MongoDB.
- **Routes**: Contiene los endpoints de la API y la lógica asociada.
- **Config**: La lógica de conexión a la base de datos está encapsulada dentro de la carpeta `config`.
- **App y Server**: `app.js` maneja la lógica de la aplicación, mientras que `server.js` inicia el servidor. Esta separación facilita las pruebas y los cambios de configuración.

**Justificación**: La organización modular mejora la legibilidad, mantenibilidad y escalabilidad. También facilita las pruebas y el uso de un posible debugger.

---

### 2. **Diseño de API RESTful**

Refactorice las rutas de la API para seguir las convenciones REST:

- **Crear un Post**: `POST /posts`
- **Obtener Todos los Posts**: `GET /posts`
- **Obtener un Post por ID**: `GET /posts/:id`
- **Actualizar un Post**: `PUT /posts/:id`
- **Eliminar un Post**: `DELETE /posts/:id`

**Justificación**: Utilice el estandar de RESTful para garantizar que la API sea intuitiva y ademas siga estándares de la industria, facilitando su uso y extensión.

---

### 3. **Manejo Mejorado de Errores**

Añadi bloques `try/catch` en todas las operaciones asíncronas para manejar errores de base de datos y servidor de manera adecuada. Los errores se registran y se devuelven respuestas acordes (por ejemplo, `404 Not Found`, `500 Internal Server Error`) al cliente.

**Justificación**: Un manejo adecuado de errores garantiza que problemas inesperados no paren el servidor y ademas proporciona un feedback útil para los usuarios.

---

### 4. **Entorno de Pruebas**

Introduje una base de datos dedicada para pruebas, separada de las bases de datos de desarrollo o producción. Se actualizó la lógica de conexión a la base de datos (`config/db.js`) para cambiar dinámicamente entre bases de datos.

**Justificación**: Probar en un entorno separado garantiza la integridad de los datos y evita modificaciones no deseadas en los datos reales.

---

### 5. **Pruebas Automatizadas**

Implemente pruebas unitarias e integradas usando **Jest** y **Supertest**. Las pruebas validan las siguientes funcionalidades:

- **Crear un Post**: Verifica que los posts se agreguen correctamente.
- **Obtener Posts**: Asegura que se puedan recuperar todos los posts o un post específico.
- **Actualizar un Post**: Verifica que los datos de un post se actualicen correctamente.
- **Eliminar un Post**: Confirma que un post sea eliminado y no pueda recuperarse.

**Justificación**: Las pruebas automatizadas garantizan la estabilidad de la aplicación y detectan errores de regresiones a medida que se añaden nuevas funcionalidades.

---

### 6. **Utilizacion de variables de entorno**

Agregue un archivo .env con todas las variables de entorno.

**Justificación**: Utilizar variables de entorno en lugar de tenerlas hardcodeadas en el codigo garantiza mayor seguridad de todas las claves y es un estandar de la industria, ademas de facilitarnos el hecho de no tenerlas repetidas por todo el codigo.
