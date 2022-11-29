import React from "react";
import DNS from '../assets/dns_icon.png'
import DNSRecord from '../assets/dns-record.png'
import { Header } from '../Header';
import { Tittle, TittleOdoo, Text, Body, Advertising, List } from '../Design';


export const DomainMethod = () => {
    return (
        <article>
            <Header
                Tittle='Dominio'
                Name='DNS'
            />
            <section>
                <TittleOdoo
                    Tittle='Registos DNS'
                    Code={DNS}
                />
                <Text
                    Name="El conceptop de odoo SAAS con multiples base de datos, se basa en utilizar las base de datos que se crean como subdominio del dominio que se especifico en el archivo de configuracion
                    con ruta relativa al nginx."
                />
                <Text
                    Name="El dominio esoecificado aca se toma como referencia para y se le agrega '*.' al dominio para especificar que va a recibir u subdominio."
                />
                <Text
                    Name="La parte importante aca es que se debe realizar una cofiguracion al dominio para que el mismo permita que las bases de datos creadas con el servicio de odoo, las reciba como un 
                    subdominio."
                />
                <Text
                    Name="Para realizar esta accion debemos dirigirnos a la plataforma de nuestro proveedor de dominio y buscar la configuracion del DNS."
                />
                <Body
                    Tittle="Ejemplo: GoDaddy"
                />
                <List
                    Element="Mis dominios / Configuración de Dominio"
                />
                <Text
                    Name="En este apartado podemos visualizar los registros DNS que tenemos agregados."
                />
                <Text
                    Name="Vamos a agregar uno que llevara por nombre '*' como valor la 'ip' del servidor y sera de tipo 'A'."
                />
                <Body
                    Tittle="Se ve de esta forma: "
                />
                <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} />
                <Text
                    Name="Luego de agregar este registro, si la configuracion en el archivo de nginx son correctas no deberia haber problemas."
                />
            </section>
        </article>
    );
}