# React + Vite

# Sitio Web de Desatascos Benito

### Resumen
Este proyecto es un sitio web moderno y responsivo para **Desatascos Benito**, una empresa de servicios de fontanería, desatascos y cerrajería en Gran Canaria. La aplicación está construida con **React** para una experiencia de usuario dinámica y utiliza **Firebase** como base de datos en tiempo real para gestionar las solicitudes de presupuesto.

### Características Principales

* **Página de Inicio:** La página principal presenta un claro resumen de los servicios de fontanería y cerrajería de la empresa, destacando la disponibilidad 24/7 para emergencias, la garantía de servicio y la atención inmediata. Incluye tarjetas interactivas que enlazan a los servicios principales.
* **Sección de Ventajas y Noticias:** Una sección dedicada que muestra el compromiso de la empresa con la comunidad a través de un carrusel de imágenes y tarjetas de noticias. Se mencionan iniciativas como la colaboración en desinfecciones gratuitas o el suministro de agua con camión cuba.
* **Sección "Quiénes Somos":** Esta página cuenta la historia de la empresa, resaltando sus más de 10 años de experiencia en Gran Canaria. Además, lista las empresas estratégicas que confían en sus servicios.
* **Formulario de Contacto:** Un formulario de solicitud de presupuesto que se conecta a una base de datos de **Firebase** para gestionar las peticiones de los clientes en tiempo real.
* **Diseño Adaptable:** El diseño es completamente responsivo, adaptándose a diferentes dispositivos (móviles, tabletas y ordenadores de escritorio).

---

### Tecnologías Utilizadas

* **React:** Biblioteca de JavaScript para la construcción de la interfaz de usuario.
* **CSS:** Para el diseño y estilo de la aplicación.
* **Firebase:** Base de datos en tiempo real para el formulario de contacto.

---

### Instalación y Uso

1.  **Clona el repositorio:**
    ```bash
    git clone [URL-DE-TU-REPOSITORIO]
    cd [nombre-del-proyecto]
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura Firebase:**
    * Crea un nuevo proyecto en la **Consola de Firebase**.
    * Habilita la **Firestore Database** o la **Realtime Database**.
    * Crea un archivo de configuración para tus credenciales de Firebase (por ejemplo, en `src/firebase-config.js`).

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm start
    ```
    La aplicación se abrirá en tu navegador en `http://localhost:3000`.

---

### Estructura del Proyecto

* `src/components/`: Componentes reutilizables como `Header` y `Footer`.
* `src/pages/`: Componentes principales de las páginas: `Home.jsx`, `Advantages.jsx`, `We.jsx`.
* `src/assets/`: Archivos estáticos como imágenes y logos.
* `src/*.css`: Archivos CSS para los estilos.

---

### Posibles Mejoras Futuras

* Implementar un panel de administración para gestionar las solicitudes de presupuesto.
* Añadir una sección de blog para publicar consejos y noticias de la empresa.
* Mejorar la optimización SEO para una mejor visibilidad en los motores de búsqueda.
* Añadir animaciones y transiciones más fluidas para una mejor experiencia de usuario.
