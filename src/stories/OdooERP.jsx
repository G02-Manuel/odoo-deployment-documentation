import React from "react";
import Flow from './assets/flow.svg';
import { Header } from './Header';
import { Tittle, Text, Body, Image, ImageShoot } from './Design';

export const OdooERP = () => {
    return (
        <article>
            <Header
                Tittle="Entorno De Odoo"
                Name="Ambiente desplegado"
            />
            <section>
                <Tittle
                    Tittle="Inicio"
                    Code={Flow}
                />
                <Text
                    Name='Posterior a crear la base de datos debemos instalar los modulos base que se especifican en el alcance de la implementacion, para posteriormente instalar los de la localizacion y 
                    manejo de los diferentes procesos financieros de la Rep. Dom.'
                />
            </section>
        </article>
    );
}
