import React from "react";
import OdooLogo from '../assets/OCA_Contributor_Logo.png';
import Odoobackground from '../assets/background.png'
import BackendColor from '../assets/backend-color.png'
import BackendPic from '../assets/background-pic.png'
import { Header } from '../Header';
import { Tittle, Text, Body, List } from '../Design';

export const WebApp = () => {
    return (
        <article>
            <Header
                Tittle="Apariencia"
                Name="Web Responsiva"
            />
            <section>
                <Tittle
                    Tittle="Cambiar Visualizacion"
                    Code={OdooLogo}
                />
                <Text
                    Name="El odoo community por defecto no trae la capacidad de mostrar las aplicaciones instaladas de forma responsive al igual que la version Enterprise de este ERP."
                />
                <Text
                    Name="La solucion para convertir el manejo arcaico a responsive basta con hacer la instalacion del modulo web_respondive en la version correcta."
                />
                <Body
                    Tittle="Pasar Community a Responsive"
                />
                <List
                    Element="web_responsive"
                />
                <Text
                    Name="Posterior a esto puede visualizar como se muestran los modulos de forma responsive en la pantalla de inicio."
                />
                <img style={{ width: 800, height: 550 }} src={Odoobackground} />
                <Text
                    Name="Este seria el resultado sin el fondo de pantalla en el ambiente."
                />
            </section>
        </article>
    );
}

export const BackendApp = () => {
    return (
        <article>
            <Header
                Tittle="Backend"
                Name="Tema"
            />
            <section>
                <Tittle
                    Tittle="Cambiar Fondo Y Color"
                    Code={OdooLogo}
                />
                <Text
                    Name="Posterior a la convertir el ambiente a responsive, el color de fondo que se coloca por defecto es el blanco."
                />
                <Text
                    Name="Para darle un toque personalizado a los ambientes que implementemos de ahora en adelante podemos utilizar el siguiente modulo."
                />
                <Body
                    Tittle="Color y fondo al backend"
                />
                <List
                    Element="backend_theme_v12"
                />
                <Text
                    Name="Posterior a esto puede visualizar como el backend cambia de color y en adicion a esto agrega una imagen por default como fondo de pantalla."
                />
                <Body
                    Tittle="Backend Color"
                />
                <img style={{ width: 820, height: 590 }} src={BackendColor} />
                <br />
                <Body
                    Tittle="Backend Pic"
                />
                <img style={{ width: 820, height: 590 }} src={BackendPic} />
            </section>
        </article>
    );
}
