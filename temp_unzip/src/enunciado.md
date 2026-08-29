# REPASO COMUNICACIÓN ENTRE COMPOÑENTES

- Queremos unha aplicación con tres compoñentes: app, emisor, receptor.
- Emisor e Receptor serán fillas de app.
- En Receptor cargarase un cadrado cunha cor de fondo que será verde, azul ou vermella.
- En Emisor haberá 3 radiobotóns exclusivos entre si que nos permitirán escoller a cor do cadro que amosa o Receptor.

1ª SOLUCIÓN:
    - Pasamos o valor da cor escollida dende o Emisor cara o Receptor mediante un servizo con Observables

2ª SOLUCIÓN:
    - Pasamos o valor da cor escollida dende o Emisor cara o Receptor mediante output (dende o Emisor á Raíz) e Input (dende a Raíz ao Receptor)

3ª SOLUCIÓN:
    - Pasamos o valor da cor escollida dende o Emisor cara o Receptor mediante rutas (ao premer en cada radiobotón cárgase a ruta do Receptor pasándolle a cor escollida como parámetro)