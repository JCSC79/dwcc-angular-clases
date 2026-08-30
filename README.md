# 📘 T05E01 - Introducción a TypeScript en Angular

## 🎯 Objetivo del Ejercicio

Comprender los **fundamentos de TypeScript** en el contexto de Angular, específicamente:
- Declaración de variables con tipos explícitos
- Inicialización de propiedades de clase
- La diferencia entre variables inicializadas y no inicializadas
- Cómo se usan las variables en plantillas HTML con **interpolación**

---

## 📚 Conceptos Clave

### 1. **Tipado de Variables en TypeScript**

TypeScript es un superconjunto de JavaScript que añade **tipos estáticos**. En lugar de:

```javascript
// JavaScript - Sin tipos (puede causar errores)
let numero = 5;
numero = "texto"; // ✅ Permitido en JavaScript, pero problemático
```

Usamos:

```typescript
// TypeScript - Con tipos explícitos
let numero: number = 5;
numero = "texto"; // ❌ Error en compilación - El compilador lo detecta
```

### 2. **Propiedades de Clase**

En este ejercicio declaramos propiedades directamente en la clase del componente:

```typescript
export class AppComponent {
  numero1: number = 5;      // ✅ Inicializada
  numero2: number;          // ⚠️ No inicializada
}
```

### 3. **Inicialización vs No Inicialización**

| Tipo | Ejemplo | Ventaja | Desventaja |
|------|---------|---------|-----------|
| **Inicializada** | `numero1: number = 5` | Tiene valor desde el principio | Más código |
| **No Inicializada** | `numero2: number` | Más flexible | Requiere inicializar después |

---

## 🔍 Desglose del Código

### Componente TypeScript (`app.component.ts`)

```typescript
// Importamos lo necesario para crear un componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',        // Nombre del selector HTML: <app-root></app-root>
  standalone: true,            // Componente independiente (Angular 14+)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'T05E01 - Introducción a TypeScript en Angular';
  
  // Variable 1: Declarada e inicializada con tipo number
  numero1: number = 5;
  
  // Variable 2: Declarada con tipo number, inicializada en constructor
  numero2: number;
  
  constructor() {
    this.numero2 = 10;  // Asignamos el valor aquí
  }
}
```

### Plantilla HTML (`app.component.html`)

```html
<!-- Muestra el título de la aplicación -->
<h1>{{ title }}</h1>

<!-- Interpolación: Muestra el valor de numero1 -->
<p>Número 1 (inicializado en la declaración): {{ numero1 }}</p>

<!-- Interpolación: Muestra el valor de numero2 -->
<p>Número 2 (inicializado en el constructor): {{ numero2 }}</p>
```

La sintaxis `{{ }}` se llama **interpolación** y permite mostrar valores dinámicos de la clase en la plantilla.

---

## ⚙️ Configuración TypeScript

Para que TypeScript permita propiedades no inicializadas, el archivo `tsconfig.json` debe tener:

```json
{
  "compilerOptions": {
    "strictPropertyInitialization": false
  }
}
```

> **Nota**: En modo estricto (`true`), TypeScript obliga a inicializar todas las propiedades.

---

## 🚀 Cómo Ejecutar

```bash
# 1. Instalar dependencias (si no las tienes)
npm install --legacy-peer-deps

# 2. Ejecutar servidor de desarrollo
ng serve -o

# 3. Abre http://localhost:4200/ en tu navegador
```

**Resultado esperado:**
```
T05E01 - Introducción a TypeScript en Angular
Número 1 (inicializado en la declaración): 5
Número 2 (inicializado en el constructor): 10
```

---

## 📝 Lo que Aprendes

✅ Declarar variables con tipos específicos en TypeScript  
✅ Entender la diferencia entre inicialización en declaración vs en constructor  
✅ Usar interpolación (`{{ }}`) para mostrar datos en plantillas  
✅ Comprender cómo TypeScript previene errores de tipo  

---

## 💡 Ejercicios Propuestos

1. **Añade más tipos**: Crea variables de tipo `string`, `boolean`, `any`
   ```typescript
   nombre: string = "Angular";
   activo: boolean = true;
   valor: any = 42;
   ```

2. **Cambia valores en el constructor**:
   ```typescript
   constructor() {
     this.numero1 = 100;  // Modifica el valor inicial
   }
   ```

3. **Añade más interpolaciones en HTML**:
   ```html
   <p>La suma es: {{ numero1 + numero2 }}</p>
   ```

---

## 🔗 Recursos Complementarios

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [Tipos en Angular](https://angular.io/guide/typescript-configuration)
- [Guía de tipos de TypeScript](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

---

## 📌 Notas Importantes

- **TypeScript es solo en desarrollo**: En producción, se compila a JavaScript puro
- **Los tipos se verifican en compilación, no en ejecución**: Los errores se detectan antes de ejecutar el código
- **Angular 14+ usa componentes standalone**: No necesitas módulos explícitos

---

**¡Siguiente paso**: Continúa con **T05E02-OlaMundo** para aprender interpolación de strings 🎉
