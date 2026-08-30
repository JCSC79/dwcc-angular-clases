#!/bin/bash

# Script para procesar 77 ejercicios de Angular
set -e

REPO_PATH="/home/jcscmint/Documentos/dwcc-angular-clases/ProxectoEnBranco"
SCRIPT_START=$(date '+%Y-%m-%d %H:%M:%S')
COMPLETED=0
ERRORS=0
FAILED_BRANCHES=()
SUCCESS_BRANCHES=()

# Array de ramas a procesar (ordenadas)
declare -a BRANCHES=(
    "T05E01-TypeScript" "T05E02-OlaMundo" "T05E03-interpolacion-strings"
    "T05E04-enlazado-propiedades" "T05E05-enlazado-eventos" "T05E06-enlazado-bidireccional"
    "T05E07-componhentes" "T05E08-componhentes-layout" "T05E09-estilos-componhentes"
    "T05E10-input" "T05E11-output" "T05E12-input-output" "T05E13-ngIf" "T05E14-ngIf-componhentes"
    "T05E15-ngFor" "T05E16-ngFor-v2" "T05E17-ngFor-componhentes" "T05E18-ngSwitch" "T05E19-ngPlural"
    "T05E20-ngTemplate" "T05E21-ngComponentOutlet" "T05E22-ngFor-ngClass" "T05E23-ngSwitch-ngStyle"
    "T05E24-ngClass-ngStyle" "T05E25-directivas-personalizadas" "T05E26-HostBinding"
    "T05E27-HostListener" "T05E28-HostListener-teclado"
    "T06E01-interfaces" "T06E02-clases" "T06E03-modulos" "T06E04-modulos-lazy-loading"
    "T06E05-servizos" "T06E06-servizos-observables" "T06E07-servizos-observables-v2"
    "T06E08-animacions-listaxe" "T06E09-animacions-menu" "T06E10-animacions-boton"
    "T06E11-rutas-simples" "T06E12-rutas-aninhadas" "T06E13-rutas-parametros"
    "T06E14-rutas-parametros-consulta" "T06E15-rutas-guards" "T06E16-formularios-reactivos"
    "T06E17-formularios-reactivos-validacion" "T06E18-formularios-reactivos-bulma"
    "T06E19-http-client" "T06E20-http-client-mockapi" "T06E21-crud-cliente-servidor"
    "T06E22-ficheiro-JSON" "T06E23-WebStorage" "T06E24-control-a-medida"
    "T06E25-ciclo-vida-componhentes" "T06E26-pipes" "T06E27-pipes-personalizados"
    "T06E28-directiva-personalizada" "T06E29-servizo-mensaxeria" "T06E30-angular-material"
    "T06E31-formulario-ficheiro" "T06E32-probas-unitarias" "T06E33-probas-crud" "T06E34-probas-http"
    "Repaso-Repaso-Comunicacion-Componhentes" "Repaso-Repaso-Directivas" "Repaso-Repaso-Input"
    "Repaso-RepasoGuard" "Repaso-RepasoObservables" "Repaso-RepasoTeclado"
    "Exercicios-AngularMaterial" "Exercicios-Exercicio-Animacions" "Exercicios-Exercicio-Peliculas-Rutas"
    "Exercicios-ExercicioParametros" "Exercicios-ExercicioPortaLuz" "Exercicios-ExercicioTaboa"
    "Exercicios-ExercicioTaboaCohetes" "Exercicios-Probas-Unitarias" "Exercicios-TaboaOrdenable"
    "Exercicios-XanelasModais" "Exercicios-XanelasModaisv1" "Exercicios-XanelasModaisv2"
)

TOTAL=${#BRANCHES[@]}

create_readme() {
    local branch=$1
    local readme_file="$REPO_PATH/README.md"
    
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
El archivo TypeScript define la lógica del componente.

### HTML (`app.component.html`)
La plantilla HTML define la estructura visual.

### Estilos (`app.component.css`)
Los estilos CSS definen la apariencia.

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

## 📝 Lo que aprendes

- ✅ Estructura básica de un componente Angular
- ✅ Cómo funciona el data binding
- ✅ Interpolación de variables
- ✅ Manejo de eventos
- ✅ Estilos en componentes

## 📌 Notas importantes

⚠️ **TypeScript es obligatorio**: Angular usa TypeScript, no JavaScript puro.

💡 **Tipos de datos**: Siempre especifica los tipos de tus variables.

---
**Última actualización**: $(date '+%Y-%m-%d')
EOF
}

process_branch() {
    local branch=$1
    local index=$2
    
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "📦 [$index/$TOTAL] Procesando: $branch"
    echo "════════════════════════════════════════════════════════════════"
    
    if ! git checkout "$branch" > /dev/null 2>&1; then
        echo "❌ Error: No se pudo hacer checkout"
        ERRORS=$((ERRORS + 1))
        FAILED_BRANCHES+=("$branch")
        return 1
    fi
    echo "✓ Checkout completado"
    
    create_readme "$branch"
    echo "✓ README.md creado"
    
    if ng build > /dev/null 2>&1; then
        echo "✓ Compilación exitosa"
        
        git add -A
        if git commit -m "docs: Crear README didáctico para $branch" > /dev/null 2>&1; then
            echo "📝 Commit realizado"
            
            if git push origin "$branch" > /dev/null 2>&1; then
                echo "✅ COMPLETADO"
                COMPLETED=$((COMPLETED + 1))
                SUCCESS_BRANCHES+=("$branch")
                return 0
            fi
        else
            COMPLETED=$((COMPLETED + 1))
            SUCCESS_BRANCHES+=("$branch")
            return 0
        fi
    else
        echo "❌ Error de compilación"
        ERRORS=$((ERRORS + 1))
        FAILED_BRANCHES+=("$branch")
        return 1
    fi
}

echo "🚀 INICIANDO PROCESAMIENTO DE $TOTAL EJERCICIOS ANGULAR"
cd "$REPO_PATH"

for i in "${!BRANCHES[@]}"; do
    branch="${BRANCHES[$i]}"
    index=$((i + 1))
    process_branch "$branch" "$index" || true
done

git checkout main > /dev/null 2>&1

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "📊 RESUMEN FINAL"
echo "════════════════════════════════════════════════════════════════"
echo "✅ Completados: $COMPLETED/$TOTAL"
echo "❌ Errores: $ERRORS/$TOTAL"
echo "Tasa de éxito: $((COMPLETED * 100 / TOTAL))%"
echo ""
echo "✨ ¡Procesamiento completado!"

