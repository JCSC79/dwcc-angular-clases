# 📚 Repositorio de Clases de Angular (DWCC)

Bienvenido a una **colección completa y progresiva** de ejercicios de Angular, ejemplos prácticos y sesiones de repaso diseñados para el curso de **Desarrollo Web en Entorno Cliente (DWCC)**.

## 🎯 ¿Qué es este repositorio?

Este repositorio utiliza una **estructura multi-rama inteligente**: cada ejercicio, ejemplo práctico o sesión de repaso vive en su **propia rama Git dedicada**. Esto permite:

✅ **Aislamiento limpio** - Cada ejercicio está separado sin contaminar otros  
✅ **Progresión gradual** - Comenzar desde fundamentos básicos hasta temas avanzados  
✅ **Estructura compartida** - Todos usan la misma configuración base de Angular  
✅ **Fácil navegación** - Cambiar entre ejercicios sin problemas

---

## 📋 Tabla de Contenidos

- [Instalación Rápida](#instalación-rápida)
- [Cómo Usar Este Repositorio](#cómo-usar-este-repositorio)
- [📚 Recursos Didácticos (Documentación)](#-recursos-didácticos-documentación)
- [Lista Completa de Ejercicios](#lista-completa-de-ejercicios)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Solución de Problemas](#solución-de-problemas)

---

## 📚 Recursos Didácticos (Documentación)

Este repositorio incluye **documentación oficial en PDF** que cubre los conceptos principales de Angular por tema:

### 📖 Tema 5 - Fundamentos de Angular

**[📥 Descargar: Tema 5 - Introducción a Angular.pdf](docs/Tema%205%20-%20Introdución%20a%20Angular.pdf)**

Este documento cubre los conceptos fundamentales necesarios para entender los ejercicios T05E01 hasta T05E28:
- ✅ Introducción a TypeScript en Angular
- ✅ Interpolación y Data Binding
- ✅ Componentes y Propiedades
- ✅ Directivas integradas (*ngIf, *ngFor, *ngSwitch, etc.)
- ✅ Estilos y CSS en Componentes
- ✅ Event Binding y Two-Way Binding
- ✅ Directivas Personalizadas

### 📖 Tema 6 - Conceptos Avanzados

**[📥 Descargar: Tema 6 - Servicios, Módulos e Rutas en Angular.pdf](docs/Tema%206%20-%20Servizos%2C%20Módulos%20e%20Rutas%20en%20Angular.pdf)**

Este documento cubre temas avanzados para los ejercicios T06E01 hasta T06E34:
- ✅ Servicios y Inyección de Dependencias
- ✅ Observables y RxJS
- ✅ Rutas y Navegación
- ✅ Lazy Loading y Módulos
- ✅ Formularios Reactivos
- ✅ HttpClient y Comunicación Backend
- ✅ Animaciones y Ciclo de Vida
- ✅ Pipes y Transformaciones
- ✅ Testing y Unit Tests

> 💡 **Recomendación**: Descarga los PDFs y consulta los capítulos correspondientes mientras trabajas en cada ejercicio.

---

## ⚙️ Requisitos Previos

Antes de empezar, asegúrate de tener instalados en tu sistema:

| Requisito | Versión | Instalación |
|-----------|---------|-------------|
| **Node.js** | LTS (16+) | [nodejs.org](https://nodejs.org) |
| **Git** | 2.0+ | [git-scm.com](https://git-scm.com) |
| **Angular CLI** | 16+ | `npm install -g @angular/cli` |

> 💡 **Nota**: Funciona en **Windows, macOS y Linux**

---

## 🚀 Instalación Rápida

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/JCSC79/dwcc-angular-clases.git
cd dwcc-angular-clases/ProxectoEnBranco
```

### Paso 2: Verificar ejercicios disponibles

Para ver todas las ramas (ejercicios) disponibles:

```bash
git branch -a
```

---

## 📖 Cómo Usar Este Repositorio

### Opción A: Ejecutar un ejercicio por primera vez

```bash
# 1. Cambiar a la rama del ejercicio deseado
git checkout T05E01-TypeScript

# 2. Instalar dependencias
npm install --legacy-peer-deps

# 3. Ejecutar servidor de desarrollo
ng serve -o
```

La aplicación se abrirá automáticamente en `http://localhost:4200`

### Opción B: Cambiar entre ejercicios

```bash
# 1. Volver a la rama principal (limpia)
git checkout main

# 2. Cambiar al nuevo ejercicio
git checkout T05E02-OlaMundo

# 3. Instalar dependencias (si es necesario)
npm install --legacy-peer-deps

# 4. Ejecutar el nuevo ejercicio
ng serve -o
```

### Opción C: Comando rápido (una línea)

```bash
git checkout <nombre-de-rama> && npm install --legacy-peer-deps && ng serve -o
```

> ⚠️ **Importante**: Siempre vuelve a `main` antes de cambiar a otro ejercicio para evitar conflictos

---

## 📚 Lista Completa de Ejercicios

### 🟦 TEMA 5 - Fundamentos de Angular (Ejercicios T05)

| # | Rama | Tema |
|---|------|------|
| E01 | `T05E01-TypeScript` | Introducción a TypeScript |
| E02 | `T05E02-OlaMundo` | Hola Mundo con Angular |
| E03 | `T05E03-interpolacion-strings` | Interpolación de Strings |
| E04 | `T05E04-enlazado-propiedades` | Property Binding |
| E05 | `T05E05-enlazado-eventos` | Event Binding |
| E06 | `T05E06-enlazado-bidireccional` | Two-Way Binding |
| E07 | `T05E07-componhentes` | Componentes Básicos |
| E08 | `T05E08-componhentes-layout` | Layout con Componentes |
| E09 | `T05E09-estilos-componhentes` | Estilos en Componentes |
| E10 | `T05E10-input` | @Input |
| E11 | `T05E11-output` | @Output |
| E12 | `T05E12-input-output` | Input & Output juntos |
| E13 | `T05E13-ngIf` | Directiva *ngIf |
| E14 | `T05E14-ngIf-componhentes` | ngIf con Componentes |
| E15 | `T05E15-ngFor` | Directiva *ngFor |
| E16 | `T05E16-ngFor-v2` | ngFor Avanzado |
| E17 | `T05E17-ngFor-componhentes` | ngFor con Componentes |
| E18 | `T05E18-ngSwitch` | Directiva *ngSwitch |
| E19 | `T05E19-ngPlural` | Directiva *ngPlural |
| E20 | `T05E20-ngTemplate` | ng-template |
| E21 | `T05E21-ngComponentOutlet` | *ngComponentOutlet |
| E22 | `T05E22-ngFor-ngClass` | ngFor + ngClass |
| E23 | `T05E23-ngSwitch-ngStyle` | ngSwitch + ngStyle |
| E24 | `T05E24-ngClass-ngStyle` | ngClass + ngStyle |
| E25 | `T05E25-directivas-personalizadas` | Directivas Personalizadas |
| E26 | `T05E26-HostBinding` | @HostBinding |
| E27 | `T05E27-HostListener` | @HostListener |
| E28 | `T05E28-HostListener-teclado` | @HostListener (Teclado) |

### 🟩 TEMA 6 - Conceptos Avanzados (Ejercicios T06)

| # | Rama | Tema |
|---|------|------|
| E01 | `T06E01-interfaces` | Interfaces TypeScript |
| E02 | `T06E02-clases` | Clases TypeScript |
| E03 | `T06E03-modulos` | Módulos |
| E04 | `T06E04-modulos-lazy-loading` | Lazy Loading |
| E05 | `T06E05-servizos` | Servicios Básicos |
| E06 | `T06E06-servizos-observables` | Servicios con Observables |
| E07 | `T06E07-servizos-observables-v2` | Observables Avanzado |
| E08 | `T06E08-animacions-listaxe` | Animaciones (Listados) |
| E09 | `T06E09-animacions-menu` | Animaciones (Menú) |
| E10 | `T06E10-animacions-boton` | Animaciones (Botón) |
| E11 | `T06E11-rutas-simples` | Rutas Básicas |
| E12 | `T06E12-rutas-aninhadas` | Rutas Anidadas |
| E13 | `T06E13-rutas-parametros` | Parámetros en Rutas |
| E14 | `T06E14-rutas-parametros-consulta` | Query Parameters |
| E15 | `T06E15-rutas-guards` | Route Guards |
| E16 | `T06E16-formularios-reactivos` | Reactive Forms |
| E17 | `T06E17-formularios-reactivos-validacion` | Validación Reactiva |
| E18 | `T06E18-formularios-reactivos-bulma` | Formularios + Bulma CSS |
| E19 | `T06E19-http-client` | HttpClient Básico |
| E20 | `T06E20-http-client-mockapi` | HttpClient + MockAPI |
| E21 | `T06E21-crud-cliente-servidor` | CRUD Completo |
| E22 | `T06E22-ficheiro-JSON` | Trabajo con JSON |
| E23 | `T06E23-WebStorage` | LocalStorage & SessionStorage |
| E24 | `T06E24-control-a-medida` | Control Personalizado |
| E25 | `T06E25-ciclo-vida-componhentes` | Lifecycle Hooks |
| E26 | `T06E26-pipes` | Pipes Integrados |
| E27 | `T06E27-pipes-personalizados` | Pipes Personalizados |
| E28 | `T06E28-directiva-personalizada` | Directivas Avanzadas |
| E29 | `T06E29-servizo-mensaxeria` | Patrón Messenger |
| E30 | `T06E30-angular-material` | Angular Material |
| E31 | `T06E31-formulario-ficheiro` | Upload de Archivos |
| E32 | `T06E32-probas-unitarias` | Testing & Unit Tests |
| E33 | `T06E33-probas-crud` | Testing CRUD |
| E34 | `T06E34-probas-http` | Testing HttpClient |

### 🎯 Ejercicios Especiales

| Rama | Descripción |
|------|-------------|
| `Exercicios-AngularMaterial` | Proyecto completo con Angular Material |
| `Exercicios-Exercicio-Peliculas-Rutas` | Aplicación de películas con routing |
| `Exercicios-ExercicioParametros` | Trabajo con parámetros |
| `Exercicios-ExercicioPortaLuz` | Ejercicio PortaLuz |
| `Exercicios-ExercicioTaboa` | Tabla interactiva |
| `Exercicios-ExercicioTaboaCohetes` | Tabla de cohetes |
| `Exercicios-TaboaOrdenable` | Tabla con ordenamiento |
| `Exercicios-XanelasModais` | Paneles modales |
| `Exercicios-XanelasModaisv1` | Paneles modales v1 |
| `Exercicios-XanelasModaisv2` | Paneles modales v2 |
| `Exercicios-Exercicio-Animacions` | Animaciones complejas |
| `Exercicios-Probas-Unitarias` | Testing completo |

### 📖 Sesiones de Repaso

| Rama | Tema |
|------|------|
| `Repaso-Repaso-Comunicacion-Componhentes` | Comunicación entre componentes |
| `Repaso-Repaso-Directivas` | Directivas integradas |
| `Repaso-Repaso-Input` | @Input y propiedades |
| `Repaso-RepasoGuard` | Route Guards |
| `Repaso-RepasoObservables` | Observables y RxJS |
| `Repaso-RepasoTeclado` | Eventos de teclado |

---

## 📁 Estructura del Proyecto

```
ProxectoEnBranco/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Componente principal
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.routes.ts          # Configuración de rutas
│   │   ├── app.config.ts
│   │   └── app.config.server.ts
│   ├── main.ts                    # Punto de entrada
│   ├── main.server.ts             # SSR
│   ├── index.html
│   └── styles.css
├── angular.json                    # Configuración Angular
├── tsconfig.json                   # Configuración TypeScript
├── package.json                    # Dependencias
└── README.md
```

---

## 🔧 Comandos Útiles

```bash
# Iniciar servidor de desarrollo
ng serve -o

# Compilar para producción
ng build --configuration production

# Ejecutar tests unitarios
ng test

# Linter
ng lint

# Generar componente nuevo
ng generate component nombre-componente

# Generar servicio
ng generate service nombre-servicio
```

---

## ❓ Solución de Problemas

### Error: "node_modules" no encontrado
```bash
npm install --legacy-peer-deps
```

### Error: Puerto 4200 ya está en uso
```bash
ng serve -o --port 4300
```

### Error: "Angular CLI no encontrado"
```bash
npm install -g @angular/cli
```

### Git error al cambiar de rama
```bash
# Limpiar cambios no guardados
git clean -fd
git checkout -- .

# Luego cambiar de rama
git checkout nombre-de-rama
```

### ¿Cómo sé qué rama está activa?
```bash
git status
```
La rama actual aparecerá en la primera línea.

---

## 💡 Tips y Buenas Prácticas

- 📌 **Siempre vuelve a `main`** antes de cambiar de ejercicio
- 📦 **Ejecuta `npm install`** cuando cambies de rama si las dependencias son diferentes
- 🔍 **Revisa el README específico** de cada rama para detalles del ejercicio
- ✏️ **Experimenta y modifica** - El aprendizaje viene de la práctica
- 🐛 **Usa las DevTools de Chrome** (F12) para debuguear
- 📚 **Consulta la documentación oficial**: [Angular Docs](https://angular.io/docs)

---

## 📞 Contacto y Contribuciones

Si encuentras errores o tienes sugerencias, por favor abre un issue en el repositorio.

**¡Disfruta aprendiendo Angular! 🚀**