
fetch("menu.json")
    .then(respuesta => respuesta.json())
    .then(datos => {

        const menu = document.getElementById("menu");

        function crearMenu(opciones) {

            return opciones.map(opcion => {

                let html = `
                    <li>
                        <a href="${opcion.enlace}">
                            ${opcion.nombre}
                        </a>
                `;

                if (opcion.submenu) {
                    html += `
                        <ul>
                            ${crearMenu(opcion.submenu)}
                        </ul>
                    `;
                }

                html += "</li>";

                return html;

            }).join("");
        }

        menu.innerHTML = crearMenu(datos.menu);

    })
    .catch(error => {
        console.log("Error al cargar el menú:", error);
    });
