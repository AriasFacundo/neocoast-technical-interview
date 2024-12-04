# Solución Prueba Javascript

### Explicación

1.  **Formateo del mes/año**:  
    Se utiliza `getMonth` (añadiendo 1 porque los meses en JavaScript son base 0) y `getFullYear` para obtener el mes/año en formato `MM/YYYY`.
2.  **Uso de `reduce`**:

    - Iteramos por el arreglo `data` y acumulamos los resultados en un objeto.
    - Creamos una key para cada mes/año si no existe y añadimos los elementos correspondientes.

3.  **Agregar elementos**:  
    Usamos el spread operator `...` para añadir los items del array al grupo correspondiente.
4.  **Ordenar por fecha ascendente**:  
    Cada vez que añadimos elementos a un grupo, lo ordenamos utilizando `sort` basandonos en la fecha.
