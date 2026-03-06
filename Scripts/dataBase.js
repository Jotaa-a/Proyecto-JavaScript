export const courses = [
    {
        title: 'Introduccion a la Programación',
        info: 'Fundamentos de lógica, algoritmos y programación orientada a objetos usando Python',
        profesor: 'Carlos Martínez',
        img: '../media/Carlos-Martinez.png',
        score: 90,
        sesions: 20,
        modulos: [
            {
                nombre: 'Fundamentos de Programación',
                descripcion: 'Introducción a la lógica, variables, tipos de datos y operadores',
                lecciones: [
                    { titulo: '¿Qué es programar?', horas: 2, contenido: 'Introducción a la lógica computacional y algoritmos', multimedia: '' },
                    { titulo: 'Variables y tipos de datos', horas: 3, contenido: 'Declaración de variables, strings, números y booleanos en Python', multimedia: '' },
                    { titulo: 'Operadores', horas: 2, contenido: 'Operadores aritméticos, lógicos y de comparación', multimedia: '' }
                ]
            },
            {
                nombre: 'Estructuras de Control',
                descripcion: 'Condicionales, ciclos y funciones básicas',
                lecciones: [
                    { titulo: 'Condicionales', horas: 3, contenido: 'If, else y elif en Python con ejemplos prácticos', multimedia: '' },
                    { titulo: 'Ciclos', horas: 3, contenido: 'For y while, iteración sobre listas y rangos', multimedia: '' },
                    { titulo: 'Funciones', horas: 4, contenido: 'Definición, parámetros, retorno y scope', multimedia: '' }
                ]
            },
            {
                nombre: 'Programación Orientada a Objetos',
                descripcion: 'Clases, objetos, herencia y encapsulamiento',
                lecciones: [
                    { titulo: 'Clases y objetos', horas: 4, contenido: 'Definición de clases, atributos y métodos', multimedia: '' },
                    { titulo: 'Herencia', horas: 3, contenido: 'Herencia simple, sobreescritura de métodos', multimedia: '' },
                    { titulo: 'Encapsulamiento', horas: 3, contenido: 'Atributos privados, getters y setters', multimedia: '' }
                ]
            }
        ]
    },
    {
        title: 'Diseño Web',
        info: 'Principios de maquetación con HTML y CSS, diseño responsive y nociones básicas de UI/UX',
        profesor: 'Laura Gómez',
        img: '../media/Luarua-Gomez.png',
        score: 70,
        sesions: 15,
        modulos: [
            {
                nombre: 'HTML Estructural',
                descripcion: 'Etiquetas, semántica y estructura de una página web',
                lecciones: [
                    { titulo: 'Estructura básica', horas: 2, contenido: 'DOCTYPE, head, body y etiquetas principales', multimedia: '' },
                    { titulo: 'Etiquetas semánticas', horas: 2, contenido: 'Header, nav, main, section, article y footer', multimedia: '' },
                    { titulo: 'Formularios', horas: 3, contenido: 'Inputs, labels, botones y validación básica', multimedia: '' }
                ]
            },
            {
                nombre: 'CSS y Diseño',
                descripcion: 'Selectores, flexbox, grid y diseño responsive',
                lecciones: [
                    { titulo: 'Selectores y propiedades', horas: 2, contenido: 'Selectores de clase, id, elemento y pseudoclases', multimedia: '' },
                    { titulo: 'Flexbox', horas: 3, contenido: 'Contenedor flex, dirección, alineación y distribución', multimedia: '' },
                    { titulo: 'Grid y Responsive', horas: 4, contenido: 'Grid template, media queries y diseño adaptable', multimedia: '' }
                ]
            },
            {
                nombre: 'Fundamentos de UI/UX',
                descripcion: 'Principios de diseño, colores, tipografía y experiencia de usuario',
                lecciones: [
                    { titulo: 'Principios de diseño', horas: 2, contenido: 'Contraste, jerarquía visual y espaciado', multimedia: '' },
                    { titulo: 'Teoría del color', horas: 2, contenido: 'Paletas, psicología del color y accesibilidad', multimedia: '' },
                    { titulo: 'Tipografía', horas: 2, contenido: 'Familias tipográficas, tamaños y legibilidad', multimedia: '' }
                ]
            }
        ]
    },
    {
        title: 'Base de Datos',
        info: 'Modelado entidad-relación, normalización y consultas con SQL en sistemas gestores como MySQL',
        profesor: 'Andrés Herrera',
        img: '../media/Andres-Herrera.png',
        score: 83.5,
        sesions: 26,
        modulos: [
            {
                nombre: 'Modelado de Datos',
                descripcion: 'Diagramas entidad-relación y normalización',
                lecciones: [
                    { titulo: 'Entidades y atributos', horas: 3, contenido: 'Identificación de entidades, atributos y claves primarias', multimedia: '' },
                    { titulo: 'Relaciones', horas: 3, contenido: 'Tipos de relaciones, cardinalidad y diagramas ER', multimedia: '' },
                    { titulo: 'Normalización', horas: 4, contenido: 'Primera, segunda y tercera forma normal', multimedia: '' }
                ]
            },
            {
                nombre: 'SQL Básico',
                descripcion: 'Consultas SELECT, INSERT, UPDATE y DELETE',
                lecciones: [
                    { titulo: 'SELECT', horas: 2, contenido: 'Consultas básicas, WHERE, ORDER BY y LIMIT', multimedia: '' },
                    { titulo: 'INSERT y UPDATE', horas: 2, contenido: 'Inserción y modificación de registros', multimedia: '' },
                    { titulo: 'DELETE', horas: 2, contenido: 'Eliminación de registros y restricciones', multimedia: '' }
                ]
            },
            {
                nombre: 'SQL Avanzado',
                descripcion: 'JOINs, subconsultas y procedimientos almacenados',
                lecciones: [
                    { titulo: 'JOINs', horas: 4, contenido: 'INNER, LEFT, RIGHT y FULL JOIN con ejemplos', multimedia: '' },
                    { titulo: 'Subconsultas', horas: 3, contenido: 'Subconsultas en SELECT, WHERE y FROM', multimedia: '' },
                    { titulo: 'Procedimientos', horas: 4, contenido: 'Creación y uso de procedimientos almacenados', multimedia: '' }
                ]
            }
        ]
    },
    {
        title: 'Inglés Técnico',
        info: 'Lectura y comprensión de documentación técnica, vocabulario y escritura de reportes en inglés',
        profesor: 'Sandra Ríos',
        img: '../media/Sandra-Rios.png',
        score: 68.2,
        sesions: 40,
        modulos: [
            {
                nombre: 'Vocabulario Técnico',
                descripcion: 'Términos comunes en tecnología y programación',
                lecciones: [
                    { titulo: 'Términos de hardware', horas: 2, contenido: 'Componentes físicos y su terminología en inglés', multimedia: '' },
                    { titulo: 'Términos de software', horas: 2, contenido: 'Vocabulario de desarrollo, interfaces y sistemas', multimedia: '' },
                    { titulo: 'Acrónimos técnicos', horas: 2, contenido: 'API, SDK, IDE, CLI y otros términos comunes', multimedia: '' }
                ]
            },
            {
                nombre: 'Lectura de Documentación',
                descripcion: 'Comprensión de manuales, APIs y guías técnicas',
                lecciones: [
                    { titulo: 'Lectura de APIs', horas: 3, contenido: 'Comprensión de documentación REST y endpoints', multimedia: '' },
                    { titulo: 'Manuales técnicos', horas: 3, contenido: 'Estrategias de lectura y comprensión de guías', multimedia: '' },
                    { titulo: 'Stack Overflow', horas: 2, contenido: 'Cómo buscar, leer y entender soluciones técnicas', multimedia: '' }
                ]
            },
            {
                nombre: 'Escritura Técnica',
                descripcion: 'Redacción de reportes, correos y documentación en inglés',
                lecciones: [
                    { titulo: 'Correos técnicos', horas: 2, contenido: 'Estructura y vocabulario para comunicación profesional', multimedia: '' },
                    { titulo: 'Documentación', horas: 3, contenido: 'Cómo escribir README, comentarios y wikis en inglés', multimedia: '' },
                    { titulo: 'Reportes', horas: 3, contenido: 'Estructura de un reporte técnico y lenguaje formal', multimedia: '' }
                ]
            }
        ]
    }
];

