# 📘 T05E05 - Event Binding (Enlazado de Eventos)

## 🎯 Objetivo del Ejercicio

Aprender a **capturar eventos del usuario** (clics, cambios de inputs, etc.) y ejecutar métodos en respuesta. Dominarás:
- La sintaxis `(evento)="método()"`
- Eventos comunes: (click), (change), (input), (blur), etc.
- Comunicación usuario → componente

---

## 📚 Conceptos Clave

### Event Binding: `(evento)="método()"`

Event Binding **vincula eventos HTML** con **métodos de la clase**, permitiendo que el componente reaccione a las interacciones del usuario.

```html
<!-- Cuando el usuario hace clic, se ejecuta mudarCor() -->
<button (click)="mudarCor()">Cambiar</button>

<!-- Cuando el usuario cambia el estado del checkbox, se ejecuta mudarTitulo() -->
<input type="checkbox" (change)="mudarTitulo()" />
```

### Eventos Comunes

| Evento | Cuándo Ocurre | Ejemplo |
|--------|---------------|---------|
| **(click)** | Cuando haces clic en un elemento | `<button (click)="metodo()">` |
| **(change)** | Cuando cambia el valor de un input/select/checkbox | `<input (change)="metodo()">` |
| **(input)** | Cuando escribes en un input (más frecuente que change) | `<input (input)="metodo()">` |
| **(blur)** | Cuando el input pierde el foco | `<input (blur)="metodo()">` |
| **(keyup)** | Cuando sueltas una tecla | `<input (keyup)="metodo()">` |
| **(keydown)** | Cuando presionas una tecla | `<input (keydown)="metodo()">` |
| **(submit)** | Cuando envías un formulario | `<form (submit)="metodo()">` |
| **(mouseover)** | Cuando pasas el ratón sobre un elemento | `<div (mouseover)="metodo()">` |
| **(mouseout)** | Cuando el ratón sale de un elemento | `<div (mouseout)="metodo()">` |

---

## 🔍 Desglose del Código

### TypeScript

```typescript
export class AppComponent {
  title = 'T05E05 - Event Binding';
  cor: string = "blue";

  // Se ejecuta cuando el checkbox cambia de estado
  mudarTitulo(): void {
    this.title = 'El evento (change) fue disparado!';
  }

  // Se ejecuta cuando haces clic en el botón
  mudarCor(): void {
    this.cor === "blue" ? this.cor = "purple" : this.cor = "blue";
  }
}
```

### HTML

```html
<!-- Vinculación de estilos dinámicos + evento -->
<h1 [ngStyle]="{ 'color': cor }">{{ title }}</h1>

<!-- Event Binding: (change)="mudarTitulo()" -->
<input type="checkbox" (change)="mudarTitulo()" />

<!-- Event Binding: (click)="mudarCor()" -->
<button (click)="mudarCor()">CAMBIAR COLOR</button>
```

---

## 🚀 Cómo Ejecutar

```bash
git checkout T05E05-enlazado-eventos
npm install --legacy-peer-deps
ng serve -o
```

**Resultado:** Un título que cambia de color cuando haces clic en el botón, y su texto cambia cuando cambias el checkbox.

---

## 💡 Ejercicios Propuestos

### Nivel 1: Agregar Más Eventos

1. **Contador de clics**:
   ```typescript
   contador = 0;
   incrementar(): void {
     this.contador++;
   }
   ```
   ```html
   <button (click)="incrementar()">Clics: {{ contador }}</button>
   ```

### Nivel 2: Múltiples Eventos

2. **Mostrar/ocultar elemento**:
   ```typescript
   visible = true;
   toggle(): void {
     this.visible = !this.visible;
   }
   ```
   ```html
   <button (click)="toggle()">Mostrar/Ocultar</button>
   <div *ngIf="visible">Visible</div>
   ```

### Nivel 3: Capturar Datos del Evento

3. **Leer valor de input en el evento**:
   ```typescript
   mensaje = '';
   capturar(evento: any): void {
     this.mensaje = evento.target.value;
   }
   ```
   ```html
   <input (input)="capturar($event)" />
   <p>{{ mensaje }}</p>
   ```

---

## 🔗 Recursos

- [Angular Event Binding](https://angular.io/guide/event-binding)
- [Template Syntax - Events](https://angular.io/guide/template-syntax#event-binding)
- [DOM Events List](https://developer.mozilla.org/en-US/docs/Web/Events)

---

## 🎓 Conceptos Aprendidos

✅ Usar la sintaxis `(evento)="método()"`  
✅ Conocer eventos comunes (click, change, input, etc.)  
✅ Ejecutar métodos en respuesta a eventos del usuario  
✅ Combinar Event Binding con Property Binding  
✅ Actualizar el estado del componente dinámicamente  

---

## 📌 Notas Importantes

- **Event Binding es unidireccional**: Usuario → Componente
- **$event**: Contiene información del evento (puedes recibirlo como parámetro)
- **Detección de cambios**: Angular actualiza automáticamente la vista cuando el método modifica propiedades
- **Rendimiento**: Los eventos se disparan muchas veces, evita lógica pesada

---

## 🚀 Próximo Paso

Continúa con **T05E06-enlazado-bidireccional** para aprender Two-Way Binding, que combina Property Binding + Event Binding.

---

**¡Felicidades!** 🎉 Ya captura eventos del usuario como un profesional.
