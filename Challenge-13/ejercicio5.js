

/* Switch de idiomas

Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas). */



let idioma = prompt("¿En que idioma te saludo?").toLowerCase();


    switch (idioma) {
        case "español":
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
        case "alemán":
        alert("Hallo, wie geht es dir?")
            break;
        case "italiano":
        alert("Ciao, come stai?")
            break;
        case "japonés":
        alert("こんにちは、元気ですか")
            break;             
        default:
            alert("Ingresá un idioma válido");
            break;
    }
