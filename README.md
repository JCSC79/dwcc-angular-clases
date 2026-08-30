# 📚 Angular Services: @Injectable

## 🎯 ¿Qué se usa en este ejercicio?

- **@Injectable decorator** - Marca clase como servicio inyectable
- **Dependency Injection** - Angular proporciona instancia del servicio
- **Singleton pattern** - Una única instancia para toda la app
- **Compartir datos** entre componentes

## ❓ ¿Por qué se usa?

Los servicios son esenciales para compartir lógica y datos:
- **Reutilización** de código entre múltiples componentes
- **Inyección de dependencias** - Fácil testing y mocking
- **Singleton** - Una instancia para toda la aplicación
- **Separación de responsabilidades** - Lógica fuera de componentes
- **Comunicación** entre componentes sin relación padre/hijo

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `@Injectable({ providedIn: 'root' })` | Registra servicio globalmente |
| `constructor(private servicio: MiServicio)` | Inyecta servicio en componente |
| `providedIn: 'root' ≠ NgModule` | Nuevo en Angular 14+ |


## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T06E06-servizos-observables** - Servicios con RxJS Observables
- **T06E05-servizos** - Comunicación con servicios
- **T06E10-animacions-boton** - Servicios para lógica compartida


## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [Angular Services](https://angular.dev/guide/creating-services)
1. [@Injectable](https://angular.dev/api/core/Injectable)
1. [Dependency Injection](https://angular.dev/guide/dependency-injection)


## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [Services Tutorial](https://www.w3schools.com/angular/angular_services.asp)
- [Dependency Injection](https://stackblitz.com/angular/services)
- [Services Deep Dive (YouTube)](https://www.youtube.com/results?search_query=angular+services+dependency+injection)


## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Crear instancias manualmente (new MiServicio) - USA DI
✅ **SÍ:** Declarar en constructor para que Angular inyecte
💡 **Tip:** providedIn: 'root' para servicios globales


## 📚 Recursos en ESPAÑOL

Si prefieres aprender en español, aquí hay opciones:

- [Dev.to - Angular Services](https://dev.to/search?q=angular+services+español)
- [Stack Overflow ES - Services](https://es.stackoverflow.com/questions/tagged/angular)
- [YouTube - Tutoriales en Español](https://www.youtube.com/results?search_query=angular+servicios+tutorial+español)

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
