# 📘 T05E03 - Interpolación de Strings y Expresiones en Angular

## 🎯 Objetivo del Ejercicio

Dominar la **interpolación de datos** en Angular, que es la forma más básica de mostrar valores dinámicos en templates. Aprenderás a:

- Mostrar valores de propiedades simples
- Realizar operaciones aritméticas en la vista
- Acceder a propiedades de objetos
- Iterar sobre arrays usando `*ngFor`

---

## 📚 Conceptos Clave

### 1. **¿Qué es la Interpolación?**

La **interpolación** es la técnica de insertar expresiones dinámicas en una plantilla HTML usando la sintaxis `{{ expresión }}`.

```html
<!-- Variable simple -->
<p>Hola {{ nombre }}</p>

<!-- Operación aritmética -->
<p>La suma es: {{ 5 + 3 }}</p>

<!-- Propiedad de objeto -->
<p>Tu nombre es: {{ persona.nombre }}</p>

<!-- Llamada a método -->
<p>{{ obtenerSaludo() }}</p>
```

### 2. **Limitaciones de la Interpolación**

| ✅ Permitido | ❌ No Permitido |
|-------------|-----------------|
| `{{ numero1 + numero2 }}` | `{{ var = 5 }}` (asignación) |
| `{{ nombre.toUpperCase() }}` | `{{ if(x > 5) {} }}` (condicionales) |
| `{{ persona.edad }}` | `{{ new Date() }}` (new operator) |
| `{{ metodo() }}` | `{{ console.log(x) }}` (efectos secundarios) |

> 💡 Para lógica compleja, usa métodos en la clase o directivas como `*ngIf`, `*ngFor`

### 3. **Acceso a Propiedades de Objetos**

```typescript
// Objeto con propiedades anidadas
persona: any = {
  nombre: 'Juan',
  edad: 30,
  direccion: {
    ciudad: 'Madrid',
    calle: 'Calle Principal'
  }
};
```

En el HTML:
```html
<p>{{ persona.nombre }}</p>                          <!-- Juan -->
<p>{{ persona.direccion.ciudad }}</p>                <!-- Madrid -->
<p>{{ persona.nombre.toUpperCase() }}</p>            <!-- JUAN -->
```

---

## 🔍 Desglose del Código

### Componente TypeScript (`app.component.ts`)

```typescript
export class AppComponent {
  // Variables numéricas para operaciones
  numero1: number = 12;
  numero2: number = 27;
  
  // Objeto con propiedades anidadas
  obxecto: any = {
    nome: 'Pepito Castro',
    idade: 22
  };
  
  // Array de strings para iteración
  fases: string[] = ["Chea", "Menguante", "Nova", "Creciente"];
}
```

### Plantilla HTML (`app.component.html`)

#### Ejemplo 1: Operaciones Aritméticas
```html
<p>El resultado de sumar {{ numero1 }} + {{ numero2 }} = {{ numero1 + numero2 }}</p>
<!-- Salida: El resultado de sumar 12 + 27 = 39 -->
```

#### Ejemplo 2: Acceso a Objetos
```html
<p>La persona {{ obxecto.nome }} tiene {{ obxecto.idade }} años</p>
<!-- Salida: La persona Pepito Castro tiene 22 años -->
```

#### Ejemplo 3: Iteración con *ngFor
```html
<ul>
    <li *ngFor="let fase of fases">
        {{ fase }}
    </li>
</ul>
<!-- Salida:
    - Chea
    - Menguante
    - Nova
    - Creciente
-->
```

---

## 🚀 Cómo Ejecutar

```bash
# 1. Cambiar a la rama
git checkout T05E03-interpolacion-strings

# 2. Instalar dependencias
npm install --legacy-peer-deps

# 3. Ejecutar servidor
ng serve -o

# 4. Verás la salida en http://localhost:4200/
```

**Resultado esperado:**
```
T05E03 - Interpolación de Strings y Expresiones

El resultado de sumar 12 + 27 = 39

Los datos del objeto pertenecen a la persona Pepito Castro de edad 22 años

Fases de la Luna
- Chea
- Menguante
- Nova
- Creciente
```

---

## 📝 Sintaxis Disponible en Interpolación

### Operaciones Aritméticas
```html
<p>{{ 10 + 5 }}</p>           <!-- 15 -->
<p>{{ 20 - 8 }}</p>           <!-- 12 -->
<p>{{ 3 * 4 }}</p>            <!-- 12 -->
<p>{{ 20 / 4 }}</p>           <!-- 5 -->
<p>{{ 17 % 5 }}</p>           <!-- 2 -->
```

### Operadores Lógicos
```html
<p>{{ true && false }}</p>    <!-- false -->
<p>{{ true || false }}</p>    <!-- true -->
<p>{{ !false }}</p>           <!-- true -->
```

### Métodos de String
```html
<p>{{ 'hola'.toUpperCase() }}</p>       <!-- HOLA -->
<p>{{ 'MUNDO'.toLowerCase() }}</p>      <!-- mundo -->
<p>{{ 'Angular'.length }}</p>           <!-- 7 -->
<p>{{ 'Angular'.substring(0, 3) }}</p>  <!-- Ang -->
```

### Operador Ternario
```html
<p>{{ edad >= 18 ? 'Mayor' : 'Menor' }}</p>
```

### Acceso a Índices
```html
<p>{{ array[0] }}</p>         <!-- Primer elemento -->
<p>{{ objeto.propiedad }}</p> <!-- Propiedad del objeto -->
```

---

## 💡 Ejercicios Propuestos

### Nivel 1: Modificaciones Simples

1. **Cambia los números**:
   ```typescript
   numero1: number = 100;
   numero2: number = 50;
   ```

2. **Agrega más operaciones**:
   ```html
   <p>Multiplicación: {{ numero1 * numero2 }}</p>
   <p>División: {{ numero1 / numero2 }}</p>
   ```

3. **Modifica el objeto**:
   ```typescript
   obxecto = {
     nome: 'Tu Nombre',
     idade: 25,
     ciudad: 'Tu Ciudad'
   };
   ```

### Nivel 2: Arrays Dinámicos

4. **Agrega más arrays**:
   ```typescript
   colores: string[] = ["Rojo", "Verde", "Azul"];
   numeros: number[] = [1, 2, 3, 4, 5];
   ```

5. **Itera sobre ellos**:
   ```html
   <p>Colores disponibles:</p>
   <ul>
     <li *ngFor="let color of colores">{{ color }}</li>
   </ul>
   ```

### Nivel 3: Operaciones Complejas

6. **Usa métodos en interpolación**:
   ```typescript
   obtenerSuma(): number {
     return this.numero1 + this.numero2;
   }
   ```
   ```html
   <p>Suma mediante método: {{ obtenerSuma() }}</p>
   ```

7. **Formato de números**:
   ```html
   <p>Edad en años: {{ obxecto.idade }}</p>
   <p>Año de nacimiento: {{ 2024 - obxecto.idade }}</p>
   ```

---

## 🔗 Recursos Complementarios

- [Angular Template Syntax](https://angular.io/guide/template-syntax)
- [Interpolation Guide](https://angular.io/guide/interpolation)
- [Template Expressions](https://angular.io/guide/template-expressions)
- [Built-in Directives](https://angular.io/guide/built-in-directives)

---

## ⚡ Rendimiento: ¿Cuándo Evitar Interpolación?

⚠️ Evita lógica compleja en interpolaciones:

```html
<!-- ❌ MAL - Lógica compleja -->
<p *ngFor="let item of array; let i = index">
  {{ i % 2 === 0 ? (item.precio * 1.21) : item.precio }}
</p>

<!-- ✅ BIEN - Usar método -->
<p *ngFor="let item of array">
  {{ aplicarIVA(item) }}
</p>
```

En la clase:
```typescript
aplicarIVA(item: any): number {
  return item.precio * 1.21;
}
```

---

## 🎓 Conceptos Aprendidos

✅ Usar la sintaxis de interpolación `{{ }}`  
✅ Realizar operaciones aritméticas en templates  
✅ Acceder a propiedades de objetos  
✅ Iterar sobre arrays con `*ngFor`  
✅ Aplicar métodos y transformaciones en interpolación  
✅ Entender las limitaciones de la interpolación  

---

## 📌 Notas Importantes

- **Actualización automática**: Angular actualiza la vista automáticamente cuando cambian las propiedades
- **Sin asignaciones**: No puedes asignar valores dentro de {{ }}
- **Sin operadores new**: No puedes crear objetos con `new` dentro de interpolación
- **Sin efectos secundarios**: No hagas llamadas a APIs o cambios de estado en métodos usados en interpolación
- **Rendimiento**: Cada interpolación se evalúa en cada ciclo de detección de cambios

---

## 🚀 Próximo Paso

Continúa con **T05E04-enlazado-propiedades** para aprender **Property Binding**, una forma más poderosa de enlazar datos a propiedades HTML.

---

**¡Felicidades!** 🎉 Ya dominas la interpolación, el corazón de la reactividad en Angular.
