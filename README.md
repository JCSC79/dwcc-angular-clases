# 📚 Two-Way Data Binding: [(ngModel)]

## 🎯 ¿Qué se usa en este ejercicio?

- **[(ngModel)]** - Two-Way Binding (padre ↔ hijo)
- **FormsModule** - Necesario para ngModel
- **ngModel** - Vincula input HTML con propiedad TypeScript

## ❓ ¿Por qué se usa?

Two-Way Binding es esencial cuando necesitas sincronización bidireccional:
- Input de usuario **actualiza automáticamente** la propiedad
- Cambios en propiedad **actualizan automáticamente** el input
- Reduce código repetitivo (sin necesidad de event listeners)
- Mejora la **UX** de formularios

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `[(ngModel)]="propiedad"` | Sintaxis: banana in a box: [( )] |
| `Requiere FormsModule importado` | Siempre verificar imports |
| `Actualización automática en AMBAS direcciones` | No necesita @Input/@Output |


## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E04-enlazado-propiedades** - [propiedad] - One-way binding
- **T05E05-enlazado-eventos** - (evento) - Event binding
- **T05E03-interpolacion-strings** - {{ }} - Interpolación


## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [Two-Way Binding](https://angular.dev/guide/templates/two-way-binding)
1. [ngModel](https://angular.dev/api/forms/NgModel)
1. [Forms Guide](https://angular.dev/guide/forms)


## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [NgModel Tutorial](https://www.w3schools.com/angular/angular_ng-model.asp)
- [Forms Examples](https://stackblitz.com/angular/two-way-binding)
- [Form Validation (YouTube)](https://www.youtube.com/results?search_query=angular+ngmodel+forms)


## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Olvidar importar FormsModule ([(ngModel)] no funciona sin él)
✅ **SÍ:** Usar en formularios, campos de entrada, controles
💡 **Tip:** Equivalente a [ngModel]="prop" + (ngModelChange)="prop=$event"
⚠️ **Rendimiento:** En listas grandes, puede ser lento (considera OnPush)


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
