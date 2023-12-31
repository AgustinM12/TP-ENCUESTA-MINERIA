const form = document.getElementById("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //PAGINA 1
    const id_genero = document.getElementById('id_genero').value;
    const id_localidad = document.getElementById('id_localidad').value;
    const id_educacion = document.getElementById('id_educacion').value;
    const edad = document.getElementById("edad").value

    console.log("genero: ", id_genero, "localidad: ", id_localidad, "nivel de educacion: ", id_educacion, "edad: ", edad,);

    //PAGINA 2
    const genero_musical = document.getElementById("genero_musical").value
    const momento_escucha_musica = document.getElementById("momento_escucha_musica").value
    const decada_musical = document.getElementById("decada_musical").value
    const frecuencia_escucha = document.getElementById("frecuencia_escucha").value
    const incluir_programas = document.getElementById("incluir_programas").value
    const descubrir_musica = document.getElementById("descubrir_musica").value
    const donde_escuchas_musica = document.getElementById("donde_escuchas_musica").value;

    console.log(
        "genero musical preferido: ", genero_musical, "momento en el que escucha musica: ", momento_escucha_musica,
        "deada musical preferida: ", decada_musical, "frecuencia en la que escuchas musica: ", frecuencia_escucha,
        "deseaas que se incluyan mas programas: ", incluir_programas, "deseaas que se descubra nueva musica: ", descubrir_musica,
        "donde escuchas musica?: ", donde_escuchas_musica,);

    const encuestaData = {
        id_genero: id_genero,
        id_localidad: id_localidad,
        id_educacion: id_educacion,
        edad: edad,
        genero_musical: genero_musical,
        momento_escucha_musica: momento_escucha_musica,
        decada_musical: decada_musical,
        frecuencia_escucha: frecuencia_escucha,
        incluir_programas: incluir_programas,
        descubrir_musica: descubrir_musica,
        donde_escuchas_musica: donde_escuchas_musica
    }

    try {
        const response = await fetch('/createEncuesta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(encuestaData)
        });

        const data = await response.json();
        console.log({ data });

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Los datos han sido enviados correctamente.",
                text: "Espero un momento a ser redireccionado...",
                showConfirmButton: false
            });
            setTimeout(() => {
                window.location.href = '/fin';
            }, 2000);
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
                confirmButtonText: 'Aceptar'
            });

        }

    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'No fue posible enviar los datos.',
            text: 'Revisa los campos en el formulario'
        });
    }
})
