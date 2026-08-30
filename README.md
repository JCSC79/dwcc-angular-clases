# 📘 T05E04 - Property Binding (Enlazado de Propiedades)

## 🎯 Objetivo del Ejercicio

Aprender a **vincular dinámicamente propiedades** de la clase TypeScript con **atributos HTML**, que es la forma más poderosa de enlazar datos. Comprenderás:

- Qué es Property Binding y cuándo usarlo
- La sintaxis `[atributo]="propiedad"`
- Diferencia entre Property Binding e Interpolación
- Vinculación de atributos comunes (src, href, disabled, etc.)

---

## 📚 Conceptos Clave

### Property Binding vs Interpolación

| Aspecto | Interpolación `{{ }}` | Property Binding `[  ]` |
|--------|----------------------|------------------------|
| Sintaxis | `<h1>{{ titulo }}</h1>` | `<img [src]="logo" />` |
| Uso | Mostrar texto dinámico | Vincular atributos HTML |
| Atributos | Solo texto | Cualquier atributo HTML |
| Ejemplo | `{{ 5 + 3 }}` | `[disabled]="isDisabled"` |

### ¿Cuándo Usar Cada Una?

```html
<!-- ✅ Interpolación - para mostrar valores en el contenido -->
<p>El usuario es: {{ nombreUsuario }}</p>

<!-- ✅ Property Binding - para atributos HTML -->
<img [src]="logoUrl" />
<a [href]="linkDocumentacion" />
<button [disabled]="estaDeshabilitado" />

<!-- ✅ Combinación - ambas son válidas en contextos diferentes -->
<div [title]="descripcion">{{ mensaje }}</div>
```

### Atributos Comunes para Property Binding

```html
<!-- Atributo src (imágenes) -->
<img [src]="urlImagen" />

<!-- Atributo href (enlaces) -->
<a [href]="url">Enlace</a>

<!-- Atributo disabled (botones, inputs) -->
<button [disabled]="estoyOcupado">Enviar</button>

<!-- Atributo placeholder (inputs) -->
<input [placeholder]="textoPlaceholder" />

<!-- Atributo value (inputs) -->
<input [value]="valorPorDefecto" />

<!-- Atributo class (clases CSS) -->
<div [class]="clasesDinamicas" />

<!-- Atributo style (estilos inline) -->
<div [style.color]="colorFondo" />
```

---

## 🔍 Desglose del Código

### TypeScript (`app.component.ts`)

```typescript
export class AppComponent {
  // URL de documentación
  documentacion: string = 'https://angular.dev/docs';
  
  // URL de imagen
  logo: string = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
}
```

### HTML (`app.component.html`)

```html
<!-- Property Binding: vincula la propiedad 'documentacion' al atributo 'href' -->
<a [href]="documentacion">Documentación de Angular</a>

<!-- Property Binding: vincula la propiedad 'logo' al atributo 'src' -->
<img [src]="logo" alt="Logo de Angular" />
```

### Cómo Funciona

```
Clase TypeScript          Plantilla HTML        Navegador
    ↓                          ↓                    ↓
documentacion:         <a [href]="documentacion">
'https://...'          ↓
  ├─ Angular detecta cambios
  ├─ Lee el valor de la propiedad
  ├─ Lo asigna al atributo HTML
  └─> <a href="https://angular.dev/docs">
```

---

## 🚀 Cómo Ejecutar

```bash
# 1. Ir a la rama
git checkout T05E04-enlazado-propiedades

# 2. Instalar dependencias
npm install --legacy-peer-deps

# 3. Ejecutar servidor
ng serve -o
```

**Resultado esperado:**
```
T05E04 - Property Binding (Enlazado de Propiedades)

[Enlace clicable] Documentación de Angular
[Logo de Angular visible]

Concepto: Property Binding permite conectar propiedades de la clase TypeScript 
con atributos HTML de forma dinámica.
```

---

## 💡 Ejercicios Propuestos

### Nivel 1: Modificaciones Simples

1. **Cambia las URLs**:
   ```typescript
   documentacion = 'https://www.google.es';
   logo = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
   ```

2. **Agrega más atributos**:
   ```html
   <a [href]="documentacion" [title]="'Ir a documentación'">Enlace</a>
   ```

### Nivel 2: Propiedades Dinámicas

3. **Agrega propiedades booleanas**:
   ```typescript
   estaDeshabilitado = false;
   ```

4. **Úsalas en Property Binding**:
   ```html
   <button [disabled]="estaDeshabilitado">Haz clic</button>
   ```

5. **Cambia dinámicamente**:
   ```typescript
   constructor() {
     setTimeout(() => {
       this.estaDeshabilitado = true;
     }, 3000);
   }
   ```

### Nivel 3: Operaciones en Property Binding

6. **Concatena URLs dinámicamente**:
   ```typescript
   dominio = 'https://angular.dev';
   rutaDocumentacion = '/docs';
   
   get documentacionCompleta() {
     return this.dominio + this.rutaDocumentacion;
   }
   ```

7. **Úsalo en el HTML**:
   ```html
   <a [href]="documentacionCompleta">Docs completa</a>
   ```

---

## 🔗 Recursos Complementarios

- [Angular Property Binding](https://angular.io/guide/property-binding)
- [Template Syntax Guide](https://angular.io/guide/template-syntax)
- [Attribute Binding vs Property Binding](https://angular.io/guide/attribute-binding)

---

## ⚠️ Limitaciones y Consideraciones

### ❌ Lo que NO puedes hacer

```html
<!-- ❌ MAL - No puedes asignar valores -->
<div [propiedad]="x = 5">Error</div>

<!-- ❌ MAL - No puedes usar new -->
<div [title]="new Date()">Error</div>

<!-- ❌ MAL - Property Binding no funciona con expresiones complejas -->
<img [src]="if(x > 5) { return url1 } else { return url2 }" />
```

### ✅ Las soluciones

```typescript
// Usa métodos en la clase
calcularUrl(): string {
  return this.x > 5 ? this.url1 : this.url2;
}
```

```html
<!-- Usa el método en Property Binding -->
<img [src]="calcularUrl()" />
```

---

## 🎓 Conceptos Aprendidos

✅ Entender qué es Property Binding  
✅ Usar la sintaxis `[atributo]="propiedad"`  
✅ Vincular atributos HTML comunes (href, src, disabled)  
✅ Diferencia entre Property Binding e Interpolación  
✅ Crear propiedades dinámicas que se reflejan en la vista  
✅ Usar getters para lógica de Property Binding  

---

## 📌 Notas Importantes

- **One-way binding**: Property Binding es unidireccional (clase → HTML)
- **Detección de cambios**: Angular actualiza automáticamente cuando cambia la propiedad
- **Rendimiento**: Property Binding es más eficiente que Interpolación para atributos
- **Tipado**: TypeScript verifica los tipos de las propiedades
- **Atributos vs Propiedades**: No todos los atributos HTML son propiedades del DOM

---

## 🚀 Próximo Paso

Continúa con **T05E05-enlazado-eventos** para aprender a capturar eventos del usuario (clics, inputs, etc.) con **Event Binding**.

---

**¡Felicidades!** 🎉 Ya dominas Property Binding, un concepto fundamental en Angular.
