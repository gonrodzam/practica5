const LECCION = {
    titulo: "Práctica 5: JavaScript en Páginas Web",
    pasos: [
        {
            titulo: "1. Preparar el terreno",
            archivo: "index.html",
            explicacion: `
                <p>En esta práctica vamos a pasar de una web estática a una web que responde a lo que hace el usuario.</p>
                <p>JavaScript se encarga del comportamiento: escuchar clicks, cambiar textos, leer formularios y crear elementos nuevos.</p>
                <div class="nota-profe">
                    <strong>Idea clave:</strong> HTML estructura, CSS decora y JavaScript da vida.
                </div>
                <p>Empieza creando un <code>index.html</code> con un título, un párrafo, unos botones y el enlace al archivo <code>script.js</code>.</p>
            `,
            codigo: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel JS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main class="panel">
        <h1>Mi primer panel interactivo</h1>
        <p id="mensaje">Pulsa un botón para empezar.</p>
        <script src="script.js"></script>
    </main>
</body>
</html>`,
            interaccion: {
                tipo: "checkpoint",
                pregunta: "¿Tienes ya el HTML base y el enlace a script.js preparado?",
                boton: "Sí, base lista",
                feedback: "Perfecto. Ya tenemos el escenario donde actuará JavaScript."
            }
        },
        {
            titulo: "2. Tu primer código JavaScript",
            archivo: "script.js",
            explicacion: `
                <p>Ahora vamos a escribir código dentro de <code>script.js</code>.</p>
                <p>La instrucción <code>console.log()</code> no se ve en la página, pero sí en la consola del navegador. Sirve para comprobar que el archivo está cargando.</p>
            `,
            codigo: `console.log("JavaScript conectado correctamente");`,
            interaccion: {
                tipo: "quiz",
                pregunta: "¿Dónde aparece lo que escribes con console.log()?",
                opciones: [
                    "En la consola del navegador",
                    "Dentro del título h1",
                    "Se descarga como archivo"
                ],
                correcta: 0,
                mensaje_ok: "Exacto. La consola es la zona de pruebas del programador."
            }
        },
        {
            titulo: "3. Seleccionar elementos del DOM",
            archivo: "script.js",
            explicacion: `
                <p>Para cambiar una página necesitamos capturar elementos del DOM.</p>
                <p>DOM significa <strong>Document Object Model</strong>: la representación de la página como objetos que JavaScript puede manipular.</p>
                <p>Vamos a guardar el párrafo en una variable.</p>
            `,
            codigo: `const mensaje = document.querySelector("#mensaje");`,
            interaccion: {
                tipo: "quiz",
                pregunta: "¿Qué devuelve document.querySelector('#mensaje')?",
                opciones: [
                    "El elemento HTML con id mensaje",
                    "Todos los párrafos de la web",
                    "Solo el texto sin la etiqueta"
                ],
                correcta: 0,
                mensaje_ok: "Correcto. Así conseguimos una referencia directa al elemento."
            }
        },
        {
            titulo: "4. Cambiar texto desde JavaScript",
            archivo: "script.js",
            explicacion: `
                <p>Una vez seleccionado el elemento, podemos modificar su contenido.</p>
                <p>La propiedad <code>textContent</code> cambia el texto que se muestra dentro del nodo.</p>
            `,
            codigo: `const mensaje = document.querySelector("#mensaje");

mensaje.textContent = "JavaScript ya está modificando la página.";`,
            interaccion: {
                tipo: "checkpoint",
                pregunta: "¿Al recargar la web cambia el texto del párrafo automáticamente?",
                boton: "Sí, cambia",
                feedback: "Muy bien. Acabas de hacer tu primera modificación real del DOM."
            }
        },
        {
            titulo: "5. Escuchar un click",
            archivo: "script.js",
            explicacion: `
                <p>Ahora pasamos del cambio automático a reaccionar ante una acción del usuario.</p>
                <p>Con <code>addEventListener</code> escuchamos eventos como <code>click</code>.</p>
            `,
            codigo: `const mensaje = document.querySelector("#mensaje");
const botonSaludar = document.querySelector("#btn-saludar");

botonSaludar.addEventListener("click", function() {
    mensaje.textContent = "Hola. El botón ya responde al click.";
});`,
            interaccion: {
                tipo: "quiz",
                pregunta: "¿Qué evento usamos para detectar que el usuario pulsa un botón?",
                opciones: [
                    "click",
                    "hover",
                    "changeColor"
                ],
                correcta: 0,
                mensaje_ok: "Exacto. click es uno de los eventos más usados en JavaScript web."
            }
        },
        {
            titulo: "6. Variables que cambian: contador",
            archivo: "script.js",
            explicacion: `
                <p>Vamos a crear una variable que cambie con el tiempo: un contador.</p>
                <p>Usamos <code>let</code> cuando el valor va a modificarse.</p>
                <p>Después mostramos el valor en pantalla.</p>
            `,
            codigo: `let contador = 0;

const numero = document.querySelector("#numero");
const botonSumar = document.querySelector("#btn-sumar");

botonSumar.addEventListener("click", function() {
    contador = contador + 1;
    numero.textContent = contador;
});`,
            interaccion: {
                tipo: "quiz",
                pregunta: "¿Por qué aquí usamos let y no const para contador?",
                opciones: [
                    "Porque el valor cambia cada vez que hacemos click",
                    "Porque let es más moderno",
                    "Porque const no funciona en script.js"
                ],
                correcta: 0,
                mensaje_ok: "Correcto. const es para referencias que no deben reasignarse."
            }
        },
        {
            titulo: "7. Varios botones, varias acciones",
            archivo: "script.js",
            explicacion: `
                <p>Una interfaz real suele tener más de un control. Añadiremos botones para sumar, restar y reiniciar.</p>
                <p>Fíjate en que todos trabajan sobre la misma variable <code>contador</code>.</p>
            `,
            codigo: `let contador = 0;

const numero = document.querySelector("#numero");
const botonSumar = document.querySelector("#btn-sumar");
const botonRestar = document.querySelector("#btn-restar");
const botonReset = document.querySelector("#btn-reset");

function pintarContador() {
    numero.textContent = contador;
}

botonSumar.addEventListener("click", function() {
    contador++;
    pintarContador();
});

botonRestar.addEventListener("click", function() {
    contador--;
    pintarContador();
});

botonReset.addEventListener("click", function() {
    contador = 0;
    pintarContador();
});`,
            interaccion: {
                tipo: "checkpoint",
                pregunta: "¿Tus tres botones están cambiando el número que aparece en pantalla?",
                boton: "Sí, funciona",
                feedback: "Perfecto. Ya tienes un flujo de interacción más completo."
            }
        },
        {
            titulo: "8. Leer lo que escribe el usuario",
            archivo: "script.js",
            explicacion: `
                <p>JavaScript también puede leer datos desde un <code>input</code>.</p>
                <p>La propiedad <code>value</code> contiene lo que el usuario ha escrito.</p>
            `,
            codigo: `const inputTarea = document.querySelector("#input-tarea");
const botonAgregar = document.querySelector("#btn-agregar");

botonAgregar.addEventListener("click", function() {
    console.log(inputTarea.value);
});`,
            interaccion: {
                tipo: "quiz",
                pregunta: "¿Qué propiedad usamos para leer el contenido de un input?",
                opciones: [
                    "value",
                    "textContent",
                    "innerWidth"
                ],
                correcta: 0,
                mensaje_ok: "Exacto. value es la puerta de entrada a lo que escribe el usuario."
            }
        },
        {
            titulo: "9. Validar antes de actuar",
            archivo: "script.js",
            explicacion: `
                <p>No conviene añadir tareas vacías. Aquí entra en juego <code>if</code>.</p>
                <p>Primero limpiamos espacios con <code>trim()</code> y luego comprobamos si ha quedado vacío.</p>
            `,
            codigo: `botonAgregar.addEventListener("click", function() {
    const texto = inputTarea.value.trim();

    if (texto === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";
        return;
    }

    mensaje.textContent = "Tarea lista para añadirse.";
});`,
            interaccion: {
                tipo: "quiz",
                pregunta: "¿Para qué usamos return dentro del if?",
                opciones: [
                    "Para detener la función si el dato no es válido",
                    "Para borrar el input",
                    "Para reiniciar toda la página"
                ],
                correcta: 0,
                mensaje_ok: "Muy bien. return corta la ejecución cuando no debemos seguir."
            }
        },
        {
            titulo: "10. Crear elementos nuevos",
            archivo: "script.js",
            explicacion: `
                <p>Ya podemos leer el input. El siguiente paso es crear un elemento <code>li</code> y meterlo dentro de una lista.</p>
                <p>Aquí empezamos a construir contenido nuevo desde JavaScript.</p>
            `,
            codigo: `const lista = document.querySelector("#lista-tareas");

botonAgregar.addEventListener("click", function() {
    const texto = inputTarea.value.trim();

    if (texto === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";
        return;
    }

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = texto;
    lista.appendChild(nuevaTarea);

    inputTarea.value = "";
    mensaje.textContent = "Tarea agregada correctamente.";
});`,
            interaccion: {
                tipo: "checkpoint",
                pregunta: "¿Se van creando elementos nuevos en la lista al pulsar el botón?",
                boton: "Sí, aparecen",
                feedback: "Excelente. Estás generando HTML desde JavaScript."
            }
        },
        {
            titulo: "11. Reutilizar lógica con funciones",
            archivo: "script.js",
            explicacion: `
                <p>Cuando una tarea se repite, lo mejor es meterla en una función.</p>
                <p>Así evitamos duplicar código y el archivo queda mucho más limpio.</p>
            `,
            codigo: `const tareas = [];

function renderTareas() {
    lista.innerHTML = "";

    for (const tarea of tareas) {
        const elemento = document.createElement("li");
        elemento.textContent = tarea;
        lista.appendChild(elemento);
    }
}

botonAgregar.addEventListener("click", function() {
    const texto = inputTarea.value.trim();

    if (texto === "") {
        mensaje.textContent = "Escribe una tarea antes de agregar.";
        return;
    }

    tareas.push(texto);
    renderTareas();
    inputTarea.value = "";
});`,
            interaccion: {
                tipo: "quiz",
                pregunta: "¿Qué ventaja tiene usar una función como renderTareas()?",
                opciones: [
                    "Podemos reutilizar la misma lógica cada vez que cambian los datos",
                    "Hace que JavaScript pese menos al descargar",
                    "Evita usar arrays"
                ],
                correcta: 0,
                mensaje_ok: "Exacto. Reutilizar funciones hace el código más claro y mantenible."
            }
        },
        {
            titulo: "12. Cambiar clases para cambiar estilos",
            archivo: "script.js",
            explicacion: `
                <p>Una técnica muy usada es activar o quitar clases CSS desde JavaScript.</p>
                <p>Con eso podemos cambiar apariencia sin tocar estilos en línea.</p>
                <div class="nota-profe">
                    <strong>Patrón profesional:</strong> JavaScript decide <em>qué estado hay</em> y CSS decide <em>cómo se ve ese estado</em>.
                </div>
            `,
            codigo: `const botonTema = document.querySelector("#btn-tema");
const panel = document.querySelector(".panel");

botonTema.addEventListener("click", function() {
    panel.classList.toggle("panel-oscuro");
});`,
            interaccion: {
                tipo: "checkpoint",
                pregunta: "¿Al pulsar el botón de tema cambia la apariencia del panel?",
                boton: "Sí, cambia el estilo",
                feedback: "Perfecto. Ya controlas eventos, DOM, condiciones, arrays y clases CSS."
            }
        }
    ]
};
