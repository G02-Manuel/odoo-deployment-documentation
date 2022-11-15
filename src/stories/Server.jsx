import React from 'react';
import StackAlt from './assets/stackalt.svg';
import Odoo from './assets/odoo-create-database.png'
import OdooService from './assets/odoo-service.png'
import { Header } from './Header';
import { Tittle, Text, Body, Image, ImageShoot, List } from './Design';

export const Server = () => {

    return (
        <article>
            <Header
                Tittle='Configuracion Del Servidor'
                Name='Verificacion del Servidor'
            />
            <section>
                <Tittle
                    Tittle='Puerto No Habilitado'
                    Code={StackAlt}
                />
                <Text
                    Name='Si intenta acceder al servicio mediante el puerto establecido en la configuracion del mismo y no logra acceder, mas el servicio se encuentra en un estatus ("Active") esto quiere decir que es muy probable
                    el puerto al que esta intentando acceder no se encuentra habilitado.'
                />
                <Text
                    Name='Para habilitar el puerto deseado y mantener la coherencia, el servicio instalado con el script especifica que le puerto por defecto para este es "8069", utilizaremos el mismo para el ejemplo de habilitar puertos.'
                />
                <Body
                    Tittle='Comando para habilitar el puerto:'
                />
                <List
                    Element='sudo ufw allow "8069"/tcp'
                />
                <Text
                    Name='El puerto se especifica din las comillas dobles.'
                />
                <Text
                    Name='Posterior a realizar la apertura de este puerto el servicio debe subir y poder visualizar el apartado de creacion de la base de datos.'
                />
                <Image
                    bin={Odoo}
                />
                <Tittle
                    Tittle='Usuario Postgresql'
                    Code={StackAlt}
                />
                <Text
                    Name='Al momento de intentar crear la base de datos, se genera una excepcion referente al usuario utilizado para la admistracion del servicio, es muy probable que el usuario no se encuetre
                    en la base de datos.'
                />
                <Text
                    Name='Para solucionar esto debemos proceder a la creacion del usuario en la base de datos:'
                />
                <Body
                    Tittle='Ingresamos a Postgresql:'
                />
                <List
                    Element='psql postgres'
                />
                <Body
                    Tittle='Crear usuario:'
                />
                <List
                    Element='CREATE ROLE "userExample" WITH LOGIN SUPERUSER PASSWORD `{"password"}`;'
                />
                <Text
                    Name='El nombre del usuario no va entre doble comillas "" y la contrasena debe ir entre comillas simples ``, se coloco de esta forma para especificar los parametros.'
                />
                <Text
                    Name='Posterior a realizar la creacion del usuario en la base de datos, reiniciamos el servicio y tratamos de crear la base de datos nuevamente.'
                />
                <Body
                    Tittle='Reiniciar Servicio'
                />
                <List
                    Element='sudo service odoo-server restart'
                />
                <br />
                <br />
                <Tittle
                    Tittle='Verificar Servicio'
                    Code={StackAlt}
                />
                <Text
                    Name='Luego de realizar las instrucciones mencionadas con anterioridad se procede a realizar una nueva instalacion del script y proceder a verificar si ya se puede acceder
                    al servico mediante el puerto especificado, en este ejemplo el puerto por defecto "8069".'
                />
                <Body
                    Tittle='Ejecutar script:'
                />
                <List
                    Element='sudo ./odoo_install.sh'
                />
                <Text
                    Name='Posterior a la ejecucion del script se procede a verificar el estatus del servicio y posteriormente acceder por el puerto en el navegador para la creacion
                    de la base de datos'
                />
                <Body
                    Tittle='Verificar estatus del servicio:'
                />
                <List
                    Element='sudo service odoo-server status'
                />
                <br />
                <ImageShoot
                    bin={OdooService}
                />
            </section>
        </article>
    );
};

