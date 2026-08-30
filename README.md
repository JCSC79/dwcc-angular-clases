# 📚 Renderizado Condicional: *ngIf

## 🎯 ¿Qué se usa en este ejercicio?

- ***ngIf directive** - Renderizado condicional de elementos
- **Expresiones booleanas** - Evaluación de condiciones
- **else/then blocks** - Lógica condicional avanzada


## ❓ ¿Por qué se usa?

*ngIf es fundamental en Angular porque:
- Controla **cuándo renderizar** elementos (no solo ocultarlos)
- Elimina del DOM elementos innecesarios (**mejor rendimiento**)
- Diferente de ngShow/ngHide (que solo ocultan con CSS)
- Permite **flujos condicionales complejos** con else/then

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `*ngIf="condicion"` | Renderiza si true, elimina del DOM si false |
| `*ngIf="x; else plantilla"` | Usa else para casos falsos |
| `*ngIf="x as variable"` | Captura valor y lo asigna a variable |
| `DOM se crea/destruye ≠ CSS display none` | Diferencia clave con ngShow |


## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E14-ngIf-componhentes** - Uso avanzado con componentes
- **T05E18-ngSwitch** - Alternativa para múltiples condiciones
- **T05E20-ngTemplate** - Plantillas reusables con ng-template


## 📖 Documentación Oficial

Lecturas recomendadas en orden:

- [*ngIf Directive (Oficial)](https://angular.dev/api/common/NgIf)
- [Template Syntax (Oficial)](https://angular.dev/guide/templates)
- [Conditional Rendering (Oficial)](https://angular.dev/guide/directives-pipes#conditional-rendering)


## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [Tutorial NgIf (W3Schools)](https://www.w3schools.com/angular/angular_ng-if.asp)
- [Structural Directives (Oficial)](https://angular.io/guide/structural-directives)
- [StackBlitz - Conditional Rendering](https://stackblitz.com/)


## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Usar *ngIf para ocultar/mostrar (usa [hidden] o ngHide)
✅ **SÍ:** Usar *ngIf cuando el DOM sea pesado o costoso
💡 **Tip:** *ngIf con async pipe: *ngIf="datos$ | async as dato" para Observables


## 📚 Recursos en ESPAÑOL

Si prefieres aprender en español, aquí hay opciones:

- [Dev.to - Artículos Angular EN ESPAÑOL](https://dev.to/search?q=angular%20ngif%20español)
- [Comunidades Angular Hispanas](https://es.stackoverflow.com/questions/tagged/angular)
- [YouTube - Tutoriales en Español](https://www.youtube.com/results?search_query=angular+ngif+tutorial+español)

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
