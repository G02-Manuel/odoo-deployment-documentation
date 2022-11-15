import React from "react";
import Flow from './assets/flow.svg';
import OdooLogo from './assets/odoo_logo_1.png'
import { Header } from './Header';
import { Tittle, TittleOdoo, Text, Body, Image, ImageShoot, List } from './Design';

export const OdooERP = () => {
    return (
        <article>
            <Header
                Tittle="Entorno De Odoo"
                Name="Ambiente desplegado"
            />
            <section>
                <TittleOdoo
                    Tittle="Localizacion Dominicana"
                    Code={OdooLogo}
                />
                <Text
                    Name='Posterior a crear la base de datos debemos instalar los modulos base que se especifican en el alcance de la implementacion, para posteriormente instalar los de la localizacion y 
                    manejo de los diferentes procesos financieros de la Rep. Dom.'
                />
                <Text
                    Name="A continuacion se mostraran los modulos a instalar y el orden jerarquico que generalmente se utiliza."
                />
                <Body
                    Tittle="Primero"
                />
                <List
                    Element="ncf_manager"
                />
                <Text
                    Name="Este módulo implementa la administración y gestión de los números de comprobantes fiscales para el cumplimento de la norma 06-18 de la Dirección de Impuestos Internos en la República Dominicana."
                />
                <Body
                    Tittle="Segundo"
                />
                <List
                    Element="ncf_invoice_template"
                />
                <Text
                    Name="Este modulo sobre escribe el formato de las facturas para adaptarlo a la Norma General 06-2018 de la DGII."
                />
                <Body
                    Tittle="Tercero"
                />
                <List
                    Element="dgii_reports"
                />
                <Text
                    Name="Este módulo extiende las funcionalidades del ncf_manager, integrando los reportes de declaraciones fiscales"
                />
                <Text
                    Name="Entre el segundo y tercero no importa cual se instale primero, ya que ambos dependen del primero."
                />
                <Body
                    Tittle="Manejo de los ncf en los modulos (Compras, Facturacion y POS)"
                />
                <List
                    Element="ncf_purchase"
                />
                <List
                    Element="ncf_sale"
                />
                <List
                    Element="ncf_pos"
                />
                <Text
                    Name="Estos modulos se instalaran en base a las necesidades y requerimientos del alcance del sistema a implementar."
                />
            </section>
        </article>
    );
}
