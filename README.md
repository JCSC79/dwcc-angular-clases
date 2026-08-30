# 📘 T05E02 - ¡Hola Mundo! en Angular

## 🎯 Objetivo del Ejercicio

Crear tu **primer componente Angular** completo que muestre el clásico mensaje "¡Hola Mundo!" y comprender:
- La estructura básica de un componente Angular
- Cómo funciona el decorador `@Component`
- La relación entre TypeScript y el HTML (plantilla)
- El ciclo de vida básico de un componente

---

## 📚 Conceptos Clave

### ¿Qué es un Componente Angular?

Un **componente** es la unidad básica de construcción en Angular. Consiste en:

1. **Clase TypeScript** - Contiene la lógica
2. **Plantilla HTML** - Define la vista
3. **Estilos CSS** - Define la apariencia (opcional)
4. **Metadatos** - Definidos con el decorador `@Component`

### El Decorador @Component

```typescript
@Component({
  selector: 'ola-mundo',              // 1. Nombre HTML del componente
  standalone: true,                   // 2. Es independiente (no necesita módulos)
  imports: [RouterOutlet],            // 3. Dependencias necesarias
  templateUrl: './app.component.html', // 4. Archivo HTML
  styleUrl: './app.component.css'     // 5. Archivo CSS
})
```

| Propiedad | Significado |
|-----------|------------|
| **selector** | Nombre del elemento HTML (como `<app-root></app-root>`) |
| **standalone** | Indica que es un componente independiente (Angular 14+) |
| **imports** | Módulos/componentes que necesita |
| **templateUrl** | Ruta relativa del archivo HTML |
| **styleUrl** | Ruta relativa del archivo CSS |

---

## 🔍 Desglose del Código

### Componente TypeScript (`app.component.ts`)

```typescript
import { Component } from '@angular/core';  // Importamos la clase Component
import { RouterOutlet } from '@angular/router';  // Importamos RouterOutlet

@Component({
  selector: 'ola-mundo',           // Nombre del elemento HTML
  standalone: true,               // Funciona independientemente
  imports: [RouterOutlet],        // Dependencias
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Propiedades que se pueden usar en la plantilla HTML
  title = 'T05E02 - Hola Mundo en Angular';
  mensaje = 'Bienvenido a Angular!';
}
```

### Plantilla HTML (`app.component.html`)

```html
<!-- Interpolación: muestra el valor de 'title' -->
<h1>{{ title }}</h1>

<!-- El clásico mensaje de "Hola Mundo" -->
<p>¡Ola Mundo!</p>

<!-- Interpolación: muestra el valor de 'mensaje' -->
<p>{{ mensaje }}</p>

<!-- Información explicativa -->
<p><strong>Concepto fundamental:</strong> 
   La sintaxis {{ }} permite insertar valores dinámicos de la clase en el HTML.</p>
```

---

## 🌐 ¿Cómo Funciona Angular?

```
1. Inicio de la aplicación
   ↓
2. Angular lee index.html
   ↓
3. Busca <app-root></app-root> o <ola-mundo></ola-mundo>
   ↓
4. Carga el componente AppComponent
   ↓
5. Reemplaza el selector con la plantilla HTML del componente
   ↓
6. Se ejecuta la lógica de TypeScript
   ↓
7. Se renderizan los datos dinámicos en la plantilla
```

---

## 🚀 Cómo Ejecutar

### Opción 1: Ejecutar localmente

```bash
# 1. Asegúrate de estar en la rama T05E02-OlaMundo
git checkout T05E02-OlaMundo

# 2. Instalar dependencias
npm install --legacy-peer-deps

# 3. Ejecutar servidor de desarrollo
ng serve -o

# 4. Abre http://localhost:4200/ automáticamente
```

### Opción 2: Verificar compilación sin ejecutar

```bash
# Solo compila, no ejecuta
ng build

# Verifica si hay errores de TypeScript
ng build --configuration=development
```

**Resultado esperado en el navegador:**
```
T05E02 - Hola Mundo en Angular

¡Ola Mundo!

Bienvenido a Angular!

Concepto fundamental: La sintaxis {{ }} permite insertar valores dinámicos de la clase en el HTML.
```

---

## 📝 Estructura de Archivos

```
ProxectoEnBranco/
├── src/
│   ├── app/
│   │   ├── app.component.ts      ← Clase del componente (lógica)
│   │   ├── app.component.html    ← Plantilla (vista)
│   │   ├── app.component.css     ← Estilos
│   │   └── ...
│   ├── index.html               ← Archivo HTML principal
│   ├── main.ts                  ← Punto de entrada de Angular
│   └── styles.css               ← Estilos globales
└── ...
```

---

## 💡 Ejercicios Propuestos

### Nivel 1: Modificaciones Simples

1. **Cambia el selector**:
   ```typescript
   selector: 'mi-primer-componente'
   ```

2. **Agrega más propiedades**:
   ```typescript
   nombre = 'Tu Nombre';
   edad = 20;
   ```

3. **Muéstralas en HTML**:
   ```html
   <p>Nombre: {{ nombre }}</p>
   <p>Edad: {{ edad }}</p>
   ```

### Nivel 2: Interactividad

4. **Agrega métodos a la clase**:
   ```typescript
   obtenerSaludo(): string {
     return `Hola ${this.nombre}, tienes ${this.edad} años`;
   }
   ```

5. **Úsalo en HTML**:
   ```html
   <p>{{ obtenerSaludo() }}</p>
   ```

### Nivel 3: Lógica Avanzada

6. **Calcula valores dinámicamente**:
   ```typescript
   mesActual = new Date().getMonth() + 1;
   ```

7. **Condicionales en HTML** (siguiente ejercicio):
   ```html
   <p *ngIf="edad >= 18">Eres mayor de edad</p>
   ```

---

## 🔗 Recursos Complementarios

- [Angular Official Docs - Components](https://angular.io/guide/component-overview)
- [TypeScript Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Angular Decorators](https://angular.io/guide/glossary#decorator)
- [Template Syntax - Interpolation](https://angular.io/guide/interpolation)

---

## 🎓 Conceptos Aprendidos

✅ Crear un componente Angular desde cero  
✅ Entender el decorador `@Component` y sus propiedades  
✅ Usar interpolación (`{{ }}`) en plantillas HTML  
✅ Conectar propiedades de TypeScript con la vista  
✅ Entender la diferencia entre componentes `standalone` y módulos  
✅ El flujo de compilación de Angular  

---

## 📌 Notas Importantes

- **Selector naming**: El nombre del selector debe usar formato `kebab-case` (guiones, no camelCase)
- **Standalone components**: Son más simples que componentes con módulos (la forma antigua)
- **Cambios en la clase**: Si modificas una propiedad en la clase TypeScript, Angular actualiza automáticamente la plantilla
- **Compilación**: Angular compila TypeScript a JavaScript automáticamente

---

## 🚀 Próximo Paso

Continúa con **T05E03-interpolacion-strings** para aprender a manipular strings y texto dinámico de forma más avanzada.

---

**¡Felicidades!** 🎉 Acabs de crear tu primer componente Angular funcional.
