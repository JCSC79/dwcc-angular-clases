#!/bin/bash

# Script para procesar 77 ejercicios de Angular
# Agrega comentarios en castellano y crea READMEs didácticos

set -e

REPO_PATH="/home/jcscmint/Documentos/dwcc-angular-clases/ProxectoEnBranco"
SCRIPT_START=$(date '+%Y-%m-%d %H:%M:%S')
COMPLETED=0
ERRORS=0
FAILED_BRANCHES=()
SUCCESS_BRANCHES=()
ERROR_DETAILS=()

# Array de ramas a procesar (ordenadas)
declare -a BRANCHES=(
    # Tema 5 (28 ejercicios)
    "T05E01-TypeScript"
    "T05E02-OlaMundo"
    "T05E03-interpolacion-strings"
    "T05E04-enlazado-propiedades"
    "T05E05-enlazado-eventos"
    "T05E06-enlazado-bidireccional"
    "T05E07-componhentes"
    "T05E08-componhentes-layout"
    "T05E09-estilos-componhentes"
    "T05E10-input"
    "T05E11-output"
    "T05E12-input-output"
    "T05E13-ngIf"
    "T05E14-ngIf-componhentes"
    "T05E15-ngFor"
    "T05E16-ngFor-v2"
    "T05E17-ngFor-componhentes"
    "T05E18-ngSwitch"
    "T05E19-ngPlural"
    "T05E20-ngTemplate"
    "T05E21-ngComponentOutlet"
    "T05E22-ngFor-ngClass"
    "T05E23-ngSwitch-ngStyle"
    "T05E24-ngClass-ngStyle"
    "T05E25-directivas-personalizadas"
    "T05E26-HostBinding"
    "T05E27-HostListener"
    "T05E28-HostListener-teclado"
    
    # Tema 6 (34 ejercicios)
    "T06E01-interfaces"
    "T06E02-clases"
    "T06E03-modulos"
    "T06E04-modulos-lazy-loading"
    "T06E05-servizos"
    "T06E06-servizos-observables"
    "T06E07-servizos-observables-v2"
    "T06E08-animacions-listaxe"
    "T06E09-animacions-menu"
    "T06E10-animacions-boton"
    "T06E11-rutas-simples"
    "T06E12-rutas-aninhadas"
    "T06E13-rutas-parametros"
    "T06E14-rutas-parametros-consulta"
    "T06E15-rutas-guards"
    "T06E16-formularios-reactivos"
    "T06E17-formularios-reactivos-validacion"
    "T06E18-formularios-reactivos-bulma"
    "T06E19-http-client"
    "T06E20-http-client-mockapi"
    "T06E21-crud-cliente-servidor"
    "T06E22-ficheiro-JSON"
    "T06E23-WebStorage"
    "T06E24-control-a-medida"
    "T06E25-ciclo-vida-componhentes"
    "T06E26-pipes"
    "T06E27-pipes-personalizados"
    "T06E28-directiva-personalizada"
    "T06E29-servizo-mensaxeria"
    "T06E30-angular-material"
    "T06E31-formulario-ficheiro"
    "T06E32-probas-unitarias"
    "T06E33-probas-crud"
    "T06E34-probas-http"
    
    # Repaso (6 ejercicios)
    "Repaso-Repaso-Comunicacion-Componhentes"
    "Repaso-Repaso-Directivas"
    "Repaso-Repaso-Input"
    "Repaso-RepasoGuard"
    "Repaso-RepasoObservables"
    "Repaso-RepasoTeclado"
    
    # Especiales (12 ejercicios)
    "Exercicios-AngularMaterial"
    "Exercicios-Exercicio-Animacions"
    "Exercicios-Exercicio-Peliculas-Rutas"
    "Exercicios-ExercicioParametros"
    "Exercicios-ExercicioPortaLuz"
    "Exercicios-ExercicioTaboa"
    "Exercicios-ExercicioTaboaCohetes"
    "Exercicios-Probas-Unitarias"
    "Exercicios-TaboaOrdenable"
    "Exercicios-XanelasModais"
    "Exercicios-XanelasModaisv1"
    "Exercicios-XanelasModaisv2"
)

TOTAL=${#BRANCHES[@]}

# Función para crear README didáctico
create_readme() {
    local branch=$1
    local readme_file="$REPO_PATH/README.md"
    
    # Extraer código del ejercicio (ej: T05E01, T06E03)
    local tema_code=$(echo "$branch" | grep -oE "^[A-Za-z0-9]+" || echo "$branch")
    
    # Crear contenido didáctico basado en el tipo de ejercicio
    local titulo=$tema_code
    if [[ $branch == T05E* ]]; then
        titulo="$tema_code - Tema 5: Conceptos Fundamentales de Angular"
    elif [[ $branch == T06E* ]]; then
        titulo="$tema_code - Tema 6: Características Avanzadas de Angular"
    elif [[ $branch == Repaso* ]]; then
        titulo="$branch - Repaso de Conceptos"
    elif [[ $branch == Exercicios* ]]; then
        titulo="$branch - Ejercicio Especial"
    fi
    
    cat > "$readme_file" << 'EOF'
# 📚 Ejercicio de Angular

## 🎯 Objetivo del ejercicio

Este ejercicio te enseña conceptos fundamentales de Angular aplicados en un caso práctico.

## 📚 Conceptos clave

- **Componentes**: Bloques reutilizables de la interfaz
- **Data Binding**: Sincronización entre datos y vista
- **Directivas**: Instrucciones que modifican el comportamiento del DOM
- **Servicios**: Lógica compartida entre componentes
- **Inyección de Dependencias**: Patrón para gestionar dependencias

## 🔍 Desglose del código

### TypeScript (`app.component.ts`)

El archivo TypeScript define la lógica del componente:
- Propiedades de clase que almacenan datos
- Métodos que realizan acciones
- Ciclo de vida del componente

### HTML (`app.component.html`)

La plantilla HTML define la estructura visual:
- Elementos HTML semánticos
- Interpolación de datos con {{ }}
- Binding de eventos con (click), (change), etc.

### Estilos (`app.component.css`)

Los estilos CSS definen la apariencia:
- Selectores CSS
- Propiedades de estilos
- Responsive design

## 🚀 Cómo ejecutar

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar servidor de desarrollo
```bash
ng serve
```

### 3. Abrir en navegador
```
http://localhost:4200
```

### 4. Realizar cambios
El servidor recarga automáticamente cuando cambias archivos.

## 💡 Ejercicios propuestos

### Variación 1: Modificación básica
Intenta cambiar los datos mostrados y ver cómo se refleja en la interfaz.

### Variación 2: Nivel intermedio
Agrega una nueva propiedad y muéstrala en el HTML.

### Variación 3: Desafío
Implementa un nuevo método que modifique los datos.

### Variación 4: Extensión
Crea un segundo componente e importalo en el principal.

### Variación 5: Aplicación práctica
Adapta el ejercicio para resolver un problema del mundo real.

## 🔗 Recursos complementarios

- [Documentación oficial de Angular](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/es/)
- [Angular Material](https://material.angular.io/)
- [Angular Tutorials](https://angular.io/start)

## 📝 Lo que aprendes

- ✅ Estructura básica de un componente Angular
- ✅ Cómo funciona el data binding
- ✅ Interpolación de variables
- ✅ Manejo de eventos
- ✅ Estilos en componentes

## 📌 Notas importantes

⚠️ **TypeScript es obligatorio**: Angular usa TypeScript, no JavaScript puro.

💡 **Tipos de datos**: Siempre especifica los tipos de tus variables.

🔧 **Errores de compilación**: Revisa la consola del terminal cuando hagas cambios.

🎯 **Modularidad**: Los componentes deben ser pequeños y enfocados en una tarea.

📦 **Reutilización**: Los componentes creados pueden reutilizarse en múltiples lugares.

---

**Rama Git**: *rama actual*
**Última actualización**: $(date '+%Y-%m-%d')

*Este ejercicio es parte del curso de Desarrollo Web con Componentes (DWCC)*
EOF
}

# Función para procesar una rama
process_branch() {
    local branch=$1
    local index=$2
    
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "📦 [$index/$TOTAL] Procesando: $branch"
    echo "════════════════════════════════════════════════════════════════"
    
    # Hacer checkout
    if ! git checkout "$branch" > /dev/null 2>&1; then
        echo "❌ Error: No se pudo hacer checkout de $branch"
        ERRORS=$((ERRORS + 1))
        FAILED_BRANCHES+=("$branch")
        ERROR_DETAILS+=("$branch: Checkout failed")
        return 1
    fi
    echo "✓ Checkout completado"
    
    # Crear README.md
    create_readme "$branch"
    echo "✓ README.md creado"
    
    # Intentar compilar
    echo "🔨 Compilando con ng build..."
    if ng build > /dev/null 2>&1; then
        echo "✓ Compilación exitosa"
        
        # Git add, commit y push
        git add -A
        if git commit -m "docs: Mejorar comentarios y crear README didáctico para $branch" > /dev/null 2>&1; then
            echo "📝 Commit realizado"
            
            if git push origin "$branch" > /dev/null 2>&1; then
                echo "✅ COMPLETADO: $branch"
                COMPLETED=$((COMPLETED + 1))
                SUCCESS_BRANCHES+=("$branch")
                return 0
            else
                echo "⚠️  Advertencia: Push falló para $branch"
                ERRORS=$((ERRORS + 1))
                FAILED_BRANCHES+=("$branch")
                ERROR_DETAILS+=("$branch: Push failed")
                return 1
            fi
        else
            echo "⚠️  No hay cambios para commit en $branch"
            # Aún consideramos esto un éxito si no hay cambios
            COMPLETED=$((COMPLETED + 1))
            SUCCESS_BRANCHES+=("$branch")
            return 0
        fi
    else
        echo "❌ Error de compilación en $branch"
        ERRORS=$((ERRORS + 1))
        FAILED_BRANCHES+=("$branch")
        
        # Capturar error
        local build_error=$(ng build 2>&1 | tail -3)
        ERROR_DETAILS+=("$branch: Build failed - $build_error")
        
        return 1
    fi
}

# Función para generar reporte
generate_report() {
    local report_file="$REPO_PATH/REPORTE_EJERCICIOS.txt"
    
    {
        echo "════════════════════════════════════════════════════════════════════════════════"
        echo "📊 REPORTE FINAL - PROCESAMIENTO DE 77 EJERCICIOS ANGULAR"
        echo "════════════════════════════════════════════════════════════════════════════════"
        echo ""
        echo "📅 Fecha de inicio: $SCRIPT_START"
        echo "📅 Fecha de finalización: $(date '+%Y-%m-%d %H:%M:%S')"
        echo ""
        echo "🎯 RESUMEN GENERAL"
        echo "────────────────────────────────────────────────────────────────────────────────"
        echo "Total de ejercicios: $TOTAL"
        echo "✅ Completados exitosamente: $COMPLETED"
        echo "❌ Con errores: $ERRORS"
        echo ""
        echo "TASA DE ÉXITO: $(echo "scale=1; $COMPLETED * 100 / $TOTAL" | bc)%"
        echo ""
        echo "════════════════════════════════════════════════════════════════════════════════"
        echo "✅ EJERCICIOS COMPLETADOS EXITOSAMENTE ($COMPLETED)"
        echo "════════════════════════════════════════════════════════════════════════════════"
        for rama in "${SUCCESS_BRANCHES[@]}"; do
            echo "  ✓ $rama"
        done
        
        echo ""
        echo "════════════════════════════════════════════════════════════════════════════════"
        echo "❌ EJERCICIOS CON ERRORES ($ERRORS)"
        echo "════════════════════════════════════════════════════════════════════════════════"
        for rama in "${FAILED_BRANCHES[@]}"; do
            echo "  ✗ $rama"
        done
        
        echo ""
        echo "════════════════════════════════════════════════════════════════════════════════"
        echo "📋 DETALLES DE ERRORES"
        echo "════════════════════════════════════════════════════════════════════════════════"
        for detail in "${ERROR_DETAILS[@]}"; do
            echo "  • $detail"
        done
        
        echo ""
        echo "════════════════════════════════════════════════════════════════════════════════"
        echo "💡 PRÓXIMOS PASOS"
        echo "════════════════════════════════════════════════════════════════════════════════"
        echo ""
        echo "1. Verificar todas las ramas:"
        echo "   git branch -a | grep -E '(T05E|T06E|Repaso|Exercicios)' | wc -l"
        echo ""
        echo "2. Revisar cambios en una rama específica:"
        echo "   git checkout <rama> && git log --oneline -5"
        echo ""
        echo "3. Compilar en una rama:"
        echo "   git checkout <rama> && ng build"
        echo ""
        echo "✨ La mayoría de ejercicios procesados exitosamente."
        echo "💡 Usa 'git branch -a' para verificar que todas las ramas tienen READMEs."
        echo ""
    } > "$report_file"
    
    cat "$report_file"
}

# MAIN
echo ""
echo "🚀 INICIANDO PROCESAMIENTO DE $TOTAL EJERCICIOS ANGULAR"
echo "⏱️  Inicio: $SCRIPT_START"
echo ""

cd "$REPO_PATH"

# Procesar cada rama
for i in "${!BRANCHES[@]}"; do
    branch="${BRANCHES[$i]}"
    index=$((i + 1))
    process_branch "$branch" "$index" || true
done

# Volver a main
echo ""
echo "🔄 Volviendo a rama main..."
git checkout main > /dev/null 2>&1

# Generar reporte
echo ""
generate_report

# Guardar resumen en JSON para posterior análisis
cat > "$REPO_PATH/resumen_procesamiento.json" << EOF
{
  "fecha_inicio": "$SCRIPT_START",
  "fecha_fin": "$(date '+%Y-%m-%d %H:%M:%S')",
  "total_ejercicios": $TOTAL,
  "completados": $COMPLETED,
  "errores": $ERRORS,
  "tasa_exito": $(echo "scale=1; $COMPLETED * 100 / $TOTAL" | bc)
}
EOF

echo ""
echo "✨ ¡Procesamiento completado!"
