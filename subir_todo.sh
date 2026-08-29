#!/bin/bash

# Ruta base donde tienes las carpetas de los ejercicios en el disco externo
DIR_EJEMPLOS="/media/jcscmint/HD RESPALDO JC1GB/Compartida DWCC/Exemplos/Tema 5"

# Nos aseguramos de estar en main y actualizados
git checkout main

# Recorremos cada carpeta que empiece por T5 o T05 dentro de la ruta
for d in "$DIR_EJEMPLOS"/T05E*; do
    if [ -d "$d" ]; then
        # Extraemos solo el nombre de la carpeta (ej: T05E01-TypeScript)
        NOMBRE_RAMA=$(basename "$d")
        
        echo "----------------------------------------"
        echo "Procesando: $NOMBRE_RAMA"
        echo "----------------------------------------"

        # 1. Creamos y nos cambiamos a la nueva rama desde main
        git checkout main
        git checkout -b "$NOMBRE_RAMA"

        # 2. Copiamos el src y el tsconfig.json de ese ejercicio al directorio actual
        cp -r "$d/src" .
        if [ -f "$d/tsconfig.json" ]; then
            cp "$d/tsconfig.json" .
        fi

        # 3. Añadimos, hacemos commit y subimos la rama a GitHub
        git add .
        git commit -m "Automático: Añadido $NOMBRE_RAMA"
        git push -u origin "$NOMBRE_RAMA"
    fi
done

echo "¡Todos los ejercicios del Tema 5 han sido subidos a sus respectivas ramas!"