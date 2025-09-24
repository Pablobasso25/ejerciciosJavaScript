let url = 'https://api.imgflip.com/get_memes'

export const getMemes = async() => {

    const resp = await fetch (url)   // petición
    const {data} = await resp.json()   // respuesta
    //desestructuro data para poder traer solo el array memes

    return data.memes

}