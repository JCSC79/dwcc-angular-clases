# 📚 TypeScript Interfaces: Type Safety

## 🎯 ¿Qué se usa en este ejercicio?

- **interface** - Define contratos de tipo
- **Type checking** - Validación en compile-time
- **Propiedades opcionales** (propiedad?)
- **Métodos en interfaces** - Define comportamiento esperado

## ❓ ¿Por qué se usa?

Las interfaces son fundamentales en TypeScript/Angular:
- Proporcionan **type safety** (errores en desarrollo, no runtime)
- Documentan **contratos claros** entre componentes
- Facilitan **refactoring seguro** (cambios detectados en compile-time)
- Mejoran el **autocompletado** del IDE
- Permiten **testing más fácil** (mocks tipados)

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `interface Usuario { nombre: string; edad: number; }` | Sintaxis básica |\n| `edad?: number` | Propiedad opcional (? = opcional) |\n| `propiedadSoloLectura: readonly string` | Propiedad inmutable |\n

## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T06E02-clases** - Implementar interfaces en clases\n- **T06E05-servizos** - Interfaces para tipos de datos en servicios\n- **T05E01-TypeScript** - Tipos básicos de TypeScript\n

## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)\n1. [Angular Style Guide](https://angular.dev/guide/styleguide#interfaces)\n1. [Type Safety in Angular](https://angular.dev/guide/strict-mode)\n

## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [Interfaces Explained](https://www.w3schools.com/typescript/typescript_interfaces.php)\n- [TypeScript Course](https://stackblitz.com/typescript/interfaces)\n- [Angular Type Safety (YouTube)](https://www.youtube.com/results?search_query=typescript+interfaces+angular)\n

## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Confundir interfaces con clases (interfaces no se compilan)\n✅ **SÍ:** Usar interfaces para tipos de datos, clases para lógica\n💡 **Tip:** Interfaces son type hints, no generan código JavaScript\n

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
