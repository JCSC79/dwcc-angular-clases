#!/bin/bash

# Script de prueba para procesar 3 ejercicios
# Para verificar que el proceso funciona antes de procesar todos

set -e

REPO_PATH="/home/jcscmint/Documentos/dwcc-angular-clases/ProxectoEnBranco"
COMPLETED=0
ERRORS=0

declare -a TEST_BRANCHES=(
    "T05E04-enlazado-propiedades"
    "T05E05-enlazado-eventos"
    "T05E06-enlazado-bidireccional"
)

create_readme() {
    local branch=$1
    local readme_file="$REPO_PATH/README.md"
    
    local titulo="Ejercicio: $branch"
    
    cat > "$readme_file" << 'EOF'
# 📚 Ejercicio de Angular

## 🎯 Objetivo del ejercicio
Este ejercicio te enseña conceptos fundamentales de Angular aplicados en un caso práctico.

## 📚 Conceptos clave
- **Componentes**: Bloques reutilizables de la interfaz
- **Data Binding**: Sincronización entre datos y vista
- **Directivas**: Instrucciones que modifican el comportamiento del DOM

## 🚀 Cómo ejecutar
```bash
npm install
ng serve
```

## 📝 Lo que aprendes
- ✅ Estructura básica de un componente Angular
- ✅ Cómo funciona el data binding
- ✅ Interpolación de variables

---
**Última actualización**: $(date '+%Y-%m-%d')
EOF
}

process_branch() {
    local branch=$1
    local index=$2
    
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "📦 [$index/3] Procesando: $branch"
    echo "════════════════════════════════════════════════════════════════"
    
    # Hacer checkout
    if ! git checkout "$branch" > /dev/null 2>&1; then
        echo "❌ Error: No se pudo hacer checkout de $branch"
        ERRORS=$((ERRORS + 1))
        return 1
    fi
    echo "✓ Checkout completado"
    
    # Ver estructura
    echo "📁 Estructura de archivos:"
    ls -la src/app/ | head -8
    
    # Crear README
    create_readme "$branch"
    echo "✓ README.md creado"
    
    # Intentar compilar
    echo "🔨 Compilando con ng build (esto puede tomar 1-2 minutos)..."
    if ng build > /dev/null 2>&1; then
        echo "✓ Compilación exitosa"
        
        # Git add, commit y push
        git add -A
        if git commit -m "docs: Crear README didáctico para $branch" > /dev/null 2>&1; then
            echo "📝 Commit realizado"
            
            if git push origin "$branch" > /dev/null 2>&1; then
                echo "✅ COMPLETADO: $branch"
                COMPLETED=$((COMPLETED + 1))
                return 0
            else
                echo "⚠️  Push falló"
                ERRORS=$((ERRORS + 1))
                return 1
            fi
        else
            echo "⚠️  No hay cambios para commit"
            COMPLETED=$((COMPLETED + 1))
            return 0
        fi
    else
        echo "❌ Error de compilación"
        ERRORS=$((ERRORS + 1))
        
        # Mostrar últimas líneas del error
        echo "📋 Últimas líneas del error:"
        ng build 2>&1 | tail -5
        
        return 1
    fi
}

# MAIN
echo ""
echo "🧪 PRUEBA: Procesando 3 ejercicios"
echo ""

cd "$REPO_PATH"

# Procesar cada rama de prueba
for i in "${!TEST_BRANCHES[@]}"; do
    branch="${TEST_BRANCHES[$i]}"
    index=$((i + 1))
    process_branch "$branch" "$index" || true
done

# Volver a main
echo ""
echo "🔄 Volviendo a rama main..."
git checkout main > /dev/null 2>&1

# Resumen
echo ""
echo "════════════════════════════════════════════════════════════════"
echo "📊 RESUMEN DE PRUEBA"
echo "════════════════════════════════════════════════════════════════"
echo "✅ Completados: $COMPLETED/3"
echo "❌ Errores: $ERRORS/3"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo "✨ ¡Prueba exitosa! El proceso está listo para procesar los 77 ejercicios."
else
    echo "⚠️  Hubo errores en la prueba. Revisa los logs antes de procesar todo."
fi
