# 📚 Component Communication: @Output (Hijo → Padre)

## 🎯 ¿Qué se usa en este ejercicio?

- **@Output decorator** - Para emitir eventos del hijo
- **EventEmitter** - Genera eventos personalizados
- **Event Binding** - (evento)= para capturar eventos

## ❓ ¿Por qué se usa?

@Output es el complemento de @Input para comunicación hijo → padre:
- Permite que el hijo **notifique al padre** de cambios importantes
- Proporciona **comunicación bidireccional completa**
- Mantiene **desacoplamiento** entre componentes
- Facilita **reusabilidad** de componentes genéricos

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `@Output() evento = new EventEmitter()` | Declara evento personalizado |\n| `evento.emit(valor)` | Emite evento con datos |\n| `(evento)="handler($event)"` | Captura evento en padre |\n

## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E10-input** - Comunicación padre → hijo\n- **T05E12-input-output** - Combinación @Input + @Output\n- **T05E05-enlazado-eventos** - Event Binding básico\n

## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [@Output Decorator](https://angular.dev/guide/directives-pipes#output-properties)\n1. [EventEmitter](https://angular.dev/api/core/EventEmitter)\n1. [Component Interaction](https://angular.dev/guide/components/inputs-outputs)\n

## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [NgOutput Tutorial](https://www.w3schools.com/angular/angular_outputs.asp)\n- [Component Events](https://stackblitz.com/angular/component-outputs)\n- [Parent-Child Communication (YouTube)](https://www.youtube.com/results?search_query=angular+output+decorator)\n

## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Modificar propiedades del padre desde el hijo (usa @Output)\n✅ **SÍ:** Emitir eventos y dejar que padre decida qué hacer\n💡 **Tip:** Nombres de eventos con 'Change': @Output() valueChange = new EventEmitter()\n

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
