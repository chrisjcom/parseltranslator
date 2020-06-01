(function abecedario() {
    let abecedario = {
        a: 'esh',
        b: 'ch',
        c: 'eish',
        d: 'shi',
        e: 'ash',
        f: 'asha',
        g: 'ei',
        h: 'shi',
        i: 'osh',
        j: 'xim',
        k: 'ss',
        l: 'suh',
        m: 'xan',
        n: 'sh',
        o: 'ush',
        p: 'cah',
        q: 'xii',
        r: 'in',
        s: 'sh',
        t: 'cass',
        u: 'ish',
        v: 'aus',
        w: 'xi',
        x: 'shh',
        y: 'ss',
        z: 'xiy'
    };

    let traducir_caracter_a_parsel = function (caracter = '') {
        caracter = caracter.toLowerCase();
        let nuevo_caracter = abecedario[caracter];
        if (nuevo_caracter == undefined) {
            return caracter;
        }

        return nuevo_caracter;
    }

    let traducir_texto_a_parsel = function (texto = '') {
        let caracteres = texto.split('');
        let nueva_palabra = '';

        caracteres.forEach(caracter => {
            nueva_palabra += traducir_caracter_a_parsel(caracter);
        })

        return nueva_palabra;
    }

    /* let render_abecedario = function () {
        let htmlContent = '';
        let abecedario_keys = Object.keys(abecedario);

    } */

    if (!window.hasOwnProperty('parselTranslator')) {
        window.parselTranslator = {
            traducir_a_parsel: traducir_texto_a_parsel
        };
    }
})()

window.onload = function () {
    let boton_traducir = document.getElementById('boton_traducir');
    boton_traducir.onclick = traducir_click;
};

function traducir_click(event) {
    let ta_normal = document.getElementById('ta_normal');
    let ta_parsel = document.getElementById('ta_parsel');

    let texto_normal = ta_normal.value;
    let texto_parsel = parselTranslator.traducir_a_parsel(texto_normal);
    ta_parsel.value = texto_parsel;
}