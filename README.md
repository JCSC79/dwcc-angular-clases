# 📚 Iteración de Listas: *ngFor

## 🎯 ¿Qué se usa en este ejercicio?

- ***ngFor directive** - Itera sobre arrays/iterables
- **let item of array** - Sintaxis de loop
- **trackBy** - Optimización de rendimiento
- **Index, even, odd** - Variables de contexto

## ❓ ¿Por qué se usa?

*ngFor es esencial porque:
- Renderiza **dinámicamente listas** sin código repetitivo
- Proporciona **contexto de loop** (index, first, last, etc)
- Permite **optimización** con trackBy para cambios en arrays
- Sincronización automática entre datos y DOM

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `*ngFor="let item of items"` | Itera sobre array, item = elemento actual |
| `*ngFor="let item of items; let i = index"` | Obtén índice de iteración |
| `*ngFor="let x of items; trackBy: trackFn"` | Optimiza: actualiza solo cambios |
| `item is first/last/even/odd` | Variables de contexto disponibles |


## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E16-ngFor-v2** - Casos de uso avanzados\n- **T05E17-ngFor-componhentes** - ngFor con componentes hijos\n- **T05E22-ngFor-ngClass** - Combinado con ngClass\n

## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [*ngFor Directive](https://angular.dev/api/common/NgFor)\n1. [Rendering Lists](https://angular.dev/guide/templates#rendering-lists)\n1. [TrackBy Function](https://angular.dev/api/common/NgForOf#trackby)\n

## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [NgFor Tutorial](https://www.w3schools.com/angular/angular_ng-for.asp)\n- [List Rendering Examples](https://stackblitz.com/angular/list-rendering)\n- [Performance: TrackBy (YouTube)](https://www.youtube.com/results?search_query=angular+ngfor+trackby)\n

## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Usar ngFor sin trackBy en listas grandes (rendimiento malo)\n✅ **SÍ:** Usar trackBy: trackByFn (devuelve id único para cada item)\n💡 **Tip:** *ngFor + async pipe: *ngFor="item of items$ | async"\n⚠️ **Cuidado:** Agregar/quitar items actualiza índices\n

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
