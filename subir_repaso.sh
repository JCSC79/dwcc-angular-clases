#!/bin/bash

# Ruta base donde tienes los zips de Repaso
DIR_ZIPS="/media/jcscmint/HD RESPALDO JC1GB/Compartida DWCC/Repaso"
TEMP_DIR="temp_unzip"

# Nos aseguramos de estar en main
git checkout main

# Creamos una carpeta temporal para descomprimir
mkdir -p "$TEMP_DIR"

# Recorremos cada archivo .zip en la ruta
for zipfile in "$DIR_ZIPS"/*.zip; do
    if [ -f "$zipfile" ]; then
        # Extraemos el nombre limpio sin la ruta y sin la extensión .zip
        NOMBRE_ZIP=$(basename "$zipfile" .zip)
        NOMBRE_RAMA="Repaso-$NOMBRE_ZIP"

        echo "----------------------------------------"
        echo "Procesando ZIP: $NOMBRE_RAMA"
        echo "----------------------------------------"

        # Limpiamos la carpeta temporal y descomprimimos usando -o para sobrescribir sin preguntar
        rm -rf "$TEMP_DIR/*"
        unzip -q -o "$zipfile" -d "$TEMP_DIR"

        # 1. Creamos y nos cambiamos a la nueva rama desde main
        git checkout main
        git checkout -b "$NOMBRE_RAMA"

        # 2. Buscamos la carpeta src dentro del contenido descomprimido y la copiamos
        if [ -d "$TEMP_DIR/src" ]; then
            cp -r "$TEMP_DIR/src" .
        elif [ -d "$TEMP_DIR/$NOMBRE_ZIP/src" ]; then
            cp -r "$TEMP_DIR/$NOMBRE_ZIP/src" .
        else
            # Si el src viene con otra estructura interna, buscamos el primer src que encontremos
            SRC_ENCONTRADO=$(find "$TEMP_DIR" -type d -name "src" -print -quit)
            if [ -n "$SRC_ENCONTRADO" ]; then
                cp -r "$SRC_ENCONTRADO" .
            fi
        fi

        # Copiamos el tsconfig.json si existe en la raíz descomprimida
        if [ -f "$TEMP_DIR/tsconfig.json" ]; then
            cp "$TEMP_DIR/tsconfig.json" .
        fi

        # 3. Añadimos, hacemos commit y subimos la rama a GitHub
        git add .
        git commit -m "Automático: Añadido ejercicio de repaso $NOMBRE_RAMA"
        git push -u origin "$NOMBRE_RAMA"
    fi
done

# Borramos la carpeta temporal
rm -rf "$TEMP_DIR"

echo "¡Todos los ejercicios de Repaso han sido subidos a sus respectivas ramas!"