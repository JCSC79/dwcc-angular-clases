# 📚 RxJS Observables: Reactive Programming

## 🎯 ¿Qué se usa en este ejercicio?

- **Observable** - Stream de datos asincrónico
- **RxJS operators** - map, filter, switchMap, etc
- **Subscribe** - Consumir datos del Observable
- **Unsubscribe** - Evitar memory leaks

## ❓ ¿Por qué se usa?

Los Observables son fundamentales en Angular moderno:
- Manejan **datos asincrónico** (HTTP, eventos, timers)",
- Permiten **composición** de lógica (operators)",
- Facilitan **transformación** de datos en stream",
- Previenen **memory leaks** con OnDestroy",
- Mejoran **rendimiento** con async pipe",

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `const obs$ = of(valor)` | Observable que emite un valor |
| `obs$.subscribe(valor => { })` | Suscribirse a Observable |
| `obs$.pipe(map(...), filter(...))` | Transformar datos |
| `| async` | Auto-subscribe en template |


## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T06E05-servizos** - Servicios usando Observables
- **T06E07-servizos-observables** - Casos avanzados
- **T06E10-animacions-boton** - Animaciones con Observables


## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [RxJS Observables](https://rxjs.dev/)
1. [Angular & RxJS](https://angular.dev/guide/observables)
1. [Common Operators](https://rxjs.dev/api)


## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [RxJS Tutorial](https://www.learnrxjs.io/)
- [Observable Examples](https://stackblitz.com/rxjs/observable)
- [Observables in Angular (YouTube)](https://www.youtube.com/results?search_query=angular+rxjs+observables)


## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Olvidar unsubscribe (memory leak)
✅ **SÍ:** Usar async pipe o takeUntil en OnDestroy
💡 **Tip:** $ por convención: datos$ = Observable


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
