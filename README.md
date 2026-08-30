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

- **T05E14-ngIf-componhentes** - Uso avanzado con componentes\n- **T05E18-ngSwitch** - Alternativa para múltiples condiciones\n- **T05E20-ngTemplate** - Plantillas reusables con ng-template\n

## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [*ngIf Directive](https://angular.dev/api/common/NgIf)\n1. [Template Syntax](https://angular.dev/guide/templates)\n1. [Conditional Rendering](https://angular.dev/guide/directives-pipes#conditional-rendering)\n

## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [NgIf Tutorial](https://www.w3schools.com/angular/angular_ng-if.asp)\n- [Angular Structural Directives](https://angular.io/guide/structural-directives)\n- [Conditional Rendering Examples](https://stackblitz.com/angular/conditional-rendering)\n

## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Usar *ngIf para ocultar/mostrar (usa [hidden] o ngHide)\n✅ **SÍ:** Usar *ngIf cuando el DOM sea pesado o costoso\n💡 **Tip:** *ngIf con async pipe: *ngIf="datos$ | async as dato" para Observables\n

## 🚀 Cómo Ejecutar

```bash
npm install --legacy-peer-deps
ng serve
# Abre http://localhost:4200
```

## 💡 Ejercicios Propuestos

### Nivel 1: Reproduce y Entiende
1. Ejecuta el código y observa qué pasa
2. Abre DevTools (F12) → Elements
3. Verifica los cambios en el DOM

### Nivel 2: Modifica y Experimenta
1. Cambia los valores iniciales
2. Agrega nuevas propiedades
3. Prueba diferentes tipos de datos

### Nivel 3: Crea y Aplica
1. Crea un componente similar desde cero
2. Implementa tu propio caso de uso
3. Combina con otros conceptos

---
**Ejercicio de DWCC - Angular**
