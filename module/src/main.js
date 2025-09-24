
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../css/styles.css';

import {getMemes} from '../js/apiMemes';
import { crearTarjetas } from '../js/funciones';


const cargarMemes = async () => {

  const memes = await getMemes();
  crearTarjetas(memes);
  
};

cargarMemes()