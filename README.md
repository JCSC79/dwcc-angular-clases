# 📚 Custom Directives: @Directive

## 🎯 ¿Qué se usa en este ejercicio?

- **@Directive decorator** - Para crear directivas personalizadas
- **ElementRef** - Acceso al elemento DOM
- **Renderer2** - Manipulación segura del DOM
- **@HostListener** - Escucha eventos del host

## ❓ ¿Por qué se usa?

Las directivas personalizadas permiten reutilizar lógica en la plantilla:
- Encapsulan comportamiento **reutilizable** sin crear componentes
- Manipulan el DOM de forma **segura** (Renderer2)
- Mejoran **legibilidad** del código HTML
- Son más **ligeras** que componentes

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `@Directive({ selector: '[appNombre]' })` | Sintaxis [appNombre] |
| `constructor(private el: ElementRef)` | Acceso al elemento DOM |
| `this.renderer.setStyle(this.el.nativeElement, ...)` | Manipulación segura del DOM |
| `[appNombre] vs <app-nombre>` | Directiva vs Componente |


## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E26-HostBinding** - Vincular propiedades del host
- **T05E27-HostListener** - Escuchar eventos del host
- **T05E24-ngClass-ngStyle** - Directivas built-in de Angular


## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [Custom Directives](https://angular.dev/guide/directives#creating-custom-directives)
1. [@Directive](https://angular.dev/api/core/Directive)
1. [ElementRef & Renderer2](https://angular.dev/guide/security#DOM-manipulation)


## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [Custom Directives Tutorial](https://www.w3schools.com/angular/angular_directive_custom.asp)
- [Attribute Directives](https://stackblitz.com/angular/attribute-directives)
- [Advanced Directives (YouTube)](https://www.youtube.com/results?search_query=angular+custom+directives)


## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Manipular DOM con nativeElement (usa Renderer2)
✅ **SÍ:** Usar [appNombre] en templates para aplicar directiva
💡 **Tip:** Directivas de atributo vs estructurales (*ngIf, *ngFor)


## 📚 Recursos en ESPAÑOL

Si prefieres aprender en español, aquí hay opciones:

- [Dev.to - Artículos Angular en Español](https://dev.to/search?q=angular)
- [Stack Overflow en Español - Angular](https://es.stackoverflow.com/questions/tagged/angular)
- [YouTube - Tutoriales en Español](https://www.youtube.com/results?search_query=angular+tutorial+en+español)

## 🚀 Cómo Ejecutar

```bash
npm install --legacy-peer-deps
ng serve
# Abre http://localhost:4200
```

## 💡 Ejercicios Propuestos

### Nivel 1: Reproduce y Entiende
1. Ejecuta el código y observa el comportamiento
2. Lee los comentarios en el código fuente
3. Experimenta con valores diferentes

### Nivel 2: Modifica y Experimenta
1. Cambia la lógica existente
2. Agrega nuevas funcionalidades
3. Combina con otros conceptos

### Nivel 3: Crea y Aplica
1. Implementa desde cero
2. Resuelve un problema real
3. Integra en un proyecto mayor

---
**Ejercicio de DWCC - Angular**
