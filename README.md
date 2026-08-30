# 📚 Angular Animations: @angular/animations

## 🎯 ¿Qué se usa en este ejercicio?

- **@angular/animations** - API de animaciones
- **trigger()** - Define animación con nombre
- **state()** - Estados de la animación
- **transition()** - Cambio entre estados

## ❓ ¿Por qué se usa?

Las animaciones mejoran significativamente la UX:
- **Feedback visual** para acciones del usuario",
- **Transiciones suaves** mejoran percepción",
- **Atención visual** mediante movimiento",
- **Profesionalismo** de la aplicación",
- **Angular animations** - Optimizadas y performantes",

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `trigger('nombre', [...])` | Define animación nombrada |\n| `state('estado', style(...))` | Estado visual |\n| `transition('estado1 => estado2', animate(...))` | Cambio animado |\n| `[@trigger]="valor"` | Aplica animación en template |\n

## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E23-ngSwitch-ngStyle** - CSS y estilos\n- **T06E05-servizos** - Disparar animaciones desde servicio\n- **T06E06-servizos-observables** - Observables + animaciones\n

## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [Angular Animations](https://angular.dev/guide/animations)\n1. [Animation API](https://angular.dev/api/animations)\n1. [Animation Examples](https://angular.dev/guide/animations#quick-example)\n

## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [Animations Tutorial](https://www.w3schools.com/angular/angular_animations.asp)\n- [Advanced Animations](https://stackblitz.com/angular/animations)\n- [Animation Techniques (YouTube)](https://www.youtube.com/results?search_query=angular+animations+tutorial)\n

## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Confundir CSS transitions con Angular animations\n✅ **SÍ:** Usar Angular animations para control total\n💡 **Tip:** BrowserAnimationsModule debe estar en AppConfig\n

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
