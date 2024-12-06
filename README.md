# Task Manager Application

Este es un proyecto de gestión de tareas personales, desarrollado con React, TypeScript y Vite. La aplicación permite visualizar y gestionar una lista de tareas, incluyendo la creación, actualización y visualización de detalles.

## Descripción

La aplicación se conecta con un backend para obtener, mostrar y gestionar tareas. Cada tarea tiene un título, una descripción, un estado (completada o pendiente) y fechas de creación y actualización. Los usuarios pueden navegar por las tareas y ver detalles más profundos.

### Requisitos de acceso

Para acceder a la aplicación, debes iniciar sesión con las siguientes credenciales predeterminadas:

- **Usuario**: `testuser@gmail.com`
- **Contraseña**: `testpass`

Estos valores se pueden cambiar en cualquier momento desde el backend.

## Tecnologías Utilizadas

- **React**: Librería para la construcción de interfaces de usuario.
- **TypeScript**: Superset de JavaScript que agrega tipado estático.
- **Vite**: Herramienta de construcción para aplicaciones web modernas, utilizada para una rápida recarga en desarrollo.
- **CSS**: Estilos de la interfaz de usuario.

## Instalación

Para instalar y ejecutar el proyecto en tu máquina local, sigue estos pasos:

### 1. Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Navega al directorio del proyecto:

```bash
cd <nombre_del_directorio>
```

### 3. Instala las dependencias:

```bash
npm install
```

### 4. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

### 5. Crea el proyecto para produccion:

```bash
npm run build
```

## Funcionalidades

- **Lista de tareas:** Muestra todas las tareas disponibles en la aplicación.
- **Detalles de la tarea:** Al hacer clic en una tarea, se redirige a una vista de detalles con información adicional, como su ID, fechas de creación y actualización.
- **Creación de tareas:** A través del botón "New Task" (en desarrollo).
- **Manejo de errores:** En caso de error al cargar las tareas desde el backend, se muestra un mensaje de error adecuado en la interfaz.
- **Acceso mediante login:** Se requiere autenticación con las credenciales predeterminadas para acceder a la aplicación.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables de la aplicación.
  - **api/**: Servicios de API que gestionan las solicitudes al backend.
  - **interfaces/**: Tipos y interfaces de TypeScript utilizados en el proyecto.
  - **styles/**: Archivos de estilo CSS.

- **public/**: Archivos estáticos y de configuración.
- **vite.config.ts**: Configuración de Vite.
