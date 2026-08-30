# 📚 Component Communication: @Input (Padre → Hijo)

## 🎯 ¿Qué se usa en este ejercicio?

- **@Input decorator** - Para recibir datos en el componente hijo
- **Property Binding** - Sintaxis [propiedad]= para pasar datos
- **Componentes padre/hijo** - Relación jerárquica


## ❓ ¿Por qué se usa?

En Angular, los datos fluyen de padre a hijo mediante @Input. Este patrón es fundamental porque:
- Mantiene componentes **reutilizables** (reciben diferentes datos)
- Proporciona **unidireccionalidad** (flujo claro de datos)
- Facilita el **testing** (fácil de probar con diferentes inputs)
- Evita **acoplamiento** entre componentes

## 💾 Recordar - Sintaxis Clave para Memorizar

| Sintaxis | Significado |
|----------|------------|
| `@Input() propiedad: tipo` | Declara una entrada en el hijo |
| `[propiedad]="valor"` | Vincula un valor del padre al hijo |
| `Cambio en padre → Actualiza automáticamente en hijo` | Data Binding automático |


## 🔗 Conexiones con Otros Conceptos

Este concepto se relaciona con:

- **T05E04-enlazado-propiedades** - Property Binding [propiedad]
- **T05E11-output** - Comunicación inversa: hijo → padre
- **T05E12-input-output** - Combinación de @Input + @Output


## 📖 Documentación Oficial

Lecturas recomendadas en orden:

- [Angular @Input (Oficial)](https://angular.dev/guide/directives-pipes#input-and-output-properties)
- [Component Interaction (Oficial)](https://angular.dev/guide/components/inputs-outputs)
- [Property Binding (Oficial)](https://angular.dev/guide/templates/property-binding)


## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [Tutorial Angular Input (W3Schools)](https://www.w3schools.com/angular/angular_inputs.asp)
- [StackBlitz - Component Inputs](https://stackblitz.com/angular/component-inputs-outputs)
- [YouTube: Component Communication (inglés)](https://www.youtube.com/results?search_query=angular+input+decorator)


## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Modificar directamente la propiedad @Input en el hijo (usa OnChanges si necesitas reaccionar)
✅ **SÍ:** Usar setter para detectar cambios: @Input() set valor(v) { ... }
💡 **Tip:** Si pasa objeto, el hijo recibe referencia (cambios se reflejan en padre)


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
