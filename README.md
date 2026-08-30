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
| `[(ngModel)]="propiedad"` | Sintaxis: banana in a box: [( )] |\n| `Requiere FormsModule importado` | Siempre verificar imports |\n| `Actualización automática en AMBAS direcciones` | No necesita @Input/@Output |\n

## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E04-enlazado-propiedades** - [propiedad] - One-way binding\n- **T05E05-enlazado-eventos** - (evento) - Event binding\n- **T05E03-interpolacion-strings** - {{ }} - Interpolación\n

## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [Two-Way Binding](https://angular.dev/guide/templates/two-way-binding)\n1. [ngModel](https://angular.dev/api/forms/NgModel)\n1. [Forms Guide](https://angular.dev/guide/forms)\n

## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [NgModel Tutorial](https://www.w3schools.com/angular/angular_ng-model.asp)\n- [Forms Examples](https://stackblitz.com/angular/two-way-binding)\n- [Form Validation (YouTube)](https://www.youtube.com/results?search_query=angular+ngmodel+forms)\n

## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Olvidar importar FormsModule ([(ngModel)] no funciona sin él)\n✅ **SÍ:** Usar en formularios, campos de entrada, controles\n💡 **Tip:** Equivalente a [ngModel]="prop" + (ngModelChange)="prop=$event"\n⚠️ **Rendimiento:** En listas grandes, puede ser lento (considera OnPush)\n

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
