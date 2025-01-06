# JS DEPORT

## Descripción

JS DEPORT es un e-commerce diseñado para ofrecer una amplia gama de calzado para damas, caballeros y niños. Su objetivo principal es brindar una experiencia interactiva que permita alcanzar ventas a nivel mundial.

## Características

- Catálogo interactivo de calzado.
- Navegación intuitiva y fluida.
- Tecnología moderna para garantizar un rendimiento óptimo.

## Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías y herramientas:

- **Lenguajes y Frameworks:**

  - JavaScript
  - React
  - Tailwind CSS

- **Librerías y herramientas adicionales:**
  - Tostify:
  - React Hooks: `useParams`, `useContext`, `useState`, `useEffect`, `useNavigate`, `createContext`, `useLocation`
  - `Link` para navegación.
  - Express para el backend.

## Instalación

Sigue los pasos a continuación para configurar el proyecto en tu entorno local:

1. Clona el repositorio:

   ```bash
   git clone <URL_del_repositorio>
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd js-deport
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

## Uso

Una vez que el servidor esté ejecutándose, abre tu navegador y dirígete a:

```
http://localhost:5175
```

Podrás explorar el catálogo de productos, agregar artículos al carrito y realizar compras.

## Ejemplo de Código

A continuación, un fragmento de ejemplo que muestra cómo utilizar `useContext` para gestionar el estado global:

```javascript
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
```

## Autor

Este proyecto fue desarrollado por **SDCCdev**.

## Contribuciones

Contribuciones son bienvenidas. Si deseas colaborar, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios a tu fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un pull request hacia el repositorio original.

---

Gracias por apoyar este proyecto. ¡Esperamos que disfrutes JS DEPORT!
