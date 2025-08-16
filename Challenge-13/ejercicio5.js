

/* Switch de idiomas

Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas). */



let idioma = prompt("¿En qué idioma te saludo?");     // se pide el idioma

if (idioma === null || idioma.trim() === "") {        // se valida si se canceló o está vacío
  alert("No ingresaste ningún idioma");
} else {

    idioma = idioma.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");  // pasa a minúsculas y quita las tildes

    switch (idioma) {
        case "espanol":
        alert("Hola, ¿como estás?")
            break;
        case "portugues":
        alert("Oi, como vai?")
            break;        
        case "frances":
        alert("Salut comment vas-tu?")
            break;
        case "ingles":
        alert("Hi, how are you?")
            break;
        case "aleman":
        alert("Hallo, wie geht es dir?")
            break;
        case "italiano":
        alert("Ciao, come stai?")
            break;
        case "japones":
        alert("こんにちは、元気ですか")
            break;             
        default:
            alert("Ingresá un idioma válido");
            break;
    }
}