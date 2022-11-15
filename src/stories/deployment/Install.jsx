import React from 'react';
import Code from '../assets/code-brackets.svg';
import { Header } from '../Header';
import { Tittle, Text, Body, List } from '../Design';

export const Install = () => {

    return (
        <article>
            <Header
                Tittle='Despliegue'
                Name='Instalar Odoo'
            />

            <section>
                <Tittle
                    Tittle='Instalar Odoo Con Script'
                    Code={Code}
                />
                <Text
                    Name='Para realizar la instalacion del servicio de odoo, vamos a utilizar el script suministrado en la introductoria de la documentacion.'
                />
                <Text
                    Name='El proceso de instalacion de encuentra resumido en 4 simple pasos, explicados a continuacion:'
                />
                <Body
                    Tittle='Descarga del Script:'
                />
                <List
                    Element="sudo wget https://raw.githubusercontent.com/Yenthe666/InstallScript/16.0/odoo_install.sh"
                />
                <Body
                    Tittle='Modificacion de los parametros del servicio:'
                />
                <List
                    Element="sudo nano odoo_install.sh"
                />
                <Body
                    Tittle='Hacer el script ejecutable:'
                />
                <List
                    Element="sudo chmod +x odoo_install.sh"
                />
                <Body
                    Tittle='Ejecutar el script:'
                />
                <List
                    Element="sudo ./odoo_install.sh"
                />
                <br />
                <br />
                <Tittle
                    Tittle='Administrar Servicio'
                    Code={Code}
                />
                <Text
                    Name='Tomando en cuenta que el nombre del servicio creado por defecto en el script es "odoo-server" los siguientes ejemplos utilizaran este nombre para mantener el contexto.'
                />
                <Text
                    Name='Para la administracio del servicio que se genera con la instalacion de odoo erp podemos utilizar los siguiente comandos:'
                />
                <Body
                    Tittle='Verificar Estatus '
                />
                <List
                    Element='sudo service "odoo-server" status'
                />
                <Text
                    Name='Con este comando se verifica si el servicio se encuentra en uno de sus dos estados, (activo o inactivo).'
                />
                <Body
                    Tittle='Iniciar servicio'
                />
                <List
                    Element='sudo service "odoo-server" start'
                />
                <Text
                    Name='Este servicio se utiliza para iniciar el servicio en caso de que se encuentra inactivo.'
                />
                <Body
                    Tittle='Reiniciar el servicio'
                />
                <List
                    Element='sudo service "odoo-server" restart'
                />
                <Text
                    Name='Este servicio se utiliza para reiniciar el servicio independientemente del estado en el que se encuentre el mismo.'
                />
            </section>
        </article>
    );
};
