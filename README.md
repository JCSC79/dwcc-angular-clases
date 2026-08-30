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

- **T05E04-enlazado-propiedades** - Property Binding [propiedad]\n- **T05E11-output** - Comunicación inversa: hijo → padre\n- **T05E12-input-output** - Combinación de @Input + @Output\n

## 📖 Documentación Oficial

Lecturas recomendadas en orden:

1. [Angular @Input](https://angular.dev/guide/directives-pipes#input-and-output-properties)\n1. [Component Interaction](https://angular.dev/guide/components/inputs-outputs)\n1. [Property Binding](https://angular.dev/guide/templates/property-binding)\n

## 🎥 Ejemplos y Videos

Recursos externos para aprender más:

- [Angular Input Example (Official)](https://angular.io/guide/inputs-outputs#input)\n- [Component Communication (YouTube)](https://www.youtube.com/results?search_query=angular+input+decorator)\n- [StackBlitz Example](https://stackblitz.com/angular/component-inputs-outputs)\n

## ⚠️ Notas Importantes - Qué Hacer y Qué NO Hacer

❌ **NO:** Modificar directamente la propiedad @Input en el hijo (usa OnChanges si necesitas reaccionar)\n✅ **SÍ:** Usar setter para detectar cambios: @Input() set valor(v) { ... }\n💡 **Tip:** Si pasa objeto, el hijo recibe referencia (cambios se reflejan en padre)\n

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
