---
description: Reglas de interacción y diseño para todos los proyectos de Elías
---

// turbo-all

# 📋 REGLAS DE INTERACCIÓN

## Antes de cualquier modificación:

### 1️⃣ Hacer 5 preguntas esenciales
Antes de modificar algo, debo hacer **5 preguntas clave** al usuario para entender exactamente qué necesita. Las preguntas deben ser:
- Claras y organizadas
- Relevantes al pedido
- Ayudar a definir el alcance

### 2️⃣ Investigar primero
- Buscar en internet si es necesario (como hace Emergent AI)
- Revisar el código existente para entender la lógica
- Ver si la modificación es factible y cómo implementarla

### 3️⃣ Crear un plan estructurado
Antes de escribir código, presentar un **plan de implementación**:
- Qué voy a hacer
- Dónde lo voy a hacer
- Qué archivos modificar
- Qué "plus" adicional voy a agregar

### 4️⃣ Explicar en español
- Todo en español
- Sin código en las explicaciones (el usuario no entiende código)
- Solo texto y explicaciones claras

### 5️⃣ Siempre dar un plus
- Agregar algo extra que el usuario no pidió pero que mejora el resultado
- Sugerir mejoras adicionales

---

# 🎨 REGLAS DE DISEÑO: SLATE PRECISION

## Sistema visual base para todos los diseños:

### Colores
- **Fondo principal:** Slate-950 (#020617)
- **Fondo secundario:** Slate-900 (#0f172a)
- **Bordes:** rgba(255, 255, 255, 0.1)
- **Acentos:** Azul eléctrico sutil, cyan/primary del proyecto

### Glassmorphism (botones y paneles)
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px) - blur(12px);
```

### Bordes redondeados
- Cards: 12px (rounded-xl)
- Botones: 10px (rounded-lg)
- Inputs: 8px (rounded-md)

### Botones
- Tamaño Medium: padding 10px 20px
- Border-radius: 10px
- Transiciones suaves: cubic-bezier(0.4, 0, 0.2, 1)

### Layout
- Bento Grid asimétrico (no cuadrícula tipo Excel)
- Proporciones variadas: col-span-2, col-span-3, row-span-2
- Espaciado amplio

### Efectos especiales
- **Backglows:** Resplandores difusos detrás de las tarjetas (blur-2xl)
- **Hover:** Los glows se intensifican al pasar el mouse
- **Textura de grano (noise):** 3% para acabado táctil de lujo

### Tipografía
- Fuente: Inter, Sans-serif
- Pesos: Regular (400), Medium (500), Bold (700), Black (900)

### Modo claro
- Resplandores como sombras suaves de colores pastel
- Evitar que se vea "sucio"

### Estilo general
- **Juvenil empresarial**
- **Limpio y de alta gama**
- **NO colorido ni de juguete**
- **Serio y profesional**
- **Iconos lineales finos** (Lucide React)

### ⛔ PROHIBIDO
- **NO usar emojis como iconos** (🏪📊⚡💬 etc.)
- Solo usar iconos SVG de Lucide React
- Si no hay icono adecuado, NO poner icono

---

# ⚡ EJECUCIÓN AUTOMÁTICA
Este workflow tiene `// turbo-all` activado.
Todos los comandos se ejecutan automáticamente sin pedir confirmación.
