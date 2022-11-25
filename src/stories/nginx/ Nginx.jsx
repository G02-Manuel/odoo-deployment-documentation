import React from 'react';
import StackAlt from '../assets/stackalt.svg';
import Repo from '../assets/repo.svg';
import DocNginx from '../configurationdocuments/NginxConfiguration.pdf';
import { Header } from '../Header';
import { Tittle, Text, Body, Advertising, List } from '../Design';

export const NginxMehotd = () => {

    const ConfigNginxMethod = () => {

        // using Java Script method to get PDF file
        fetch(DocNginx).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'NginxConfiguration.pdf';
                alink.click();
            })
        });
    }

    return (
        <article >
            <Header
                Tittle='Servidor'
                Name='Nginx'
            />
            <section>
                <Tittle
                    Tittle='Configuracion Nginx'
                    Code={StackAlt}
                />
                <Text
                    Name='En esta seccion de la documentacion vamos a definir la configuracion necesaria para subir el servicio de nginx con las configuraciones deseadas para nuestro ambiente y servicio de odoo.'
                />
                <Text
                    Name='El primer paso a tomar es la creacion de un nuevo archivo con un enlace simbolico en el que vamos a colocar la configuracion necesaria para nuetro servicio.'
                />
                <Advertising
                    EText='Al final de la pagina se adjuntara un documento con la configuracion!!'
                />
                <Body
                    Tittle='Crear archivo con enlace simbolico'
                />
                <List
                    Element=' sudo ln -s /etc/nginx/sites-available/"NOMBREARCHIVO" /etc/nginx/sites-enabled'
                />
                <Text
                    Name='Reiniciar el servicio de nginx.'
                />
                <List
                    Element='sudo service nginx restart'
                />
                <div className="subheading">Configuracion</div>
                <Text
                    Name='Para agregar los parametros de configuracion al archivo que acabamos de crear, necesitamos acceder al mismo.'
                />
                <Body
                    Tittle='Ruta'
                />
                <List
                    Element='sudo nano /etc/nginx/sites-available/"NOMBREARCHIVO"'
                />
                <Text
                    Name='Para editar ese archivo puede utilizar su editor preferido, puede ser nano, vim, etc...'
                />
                <Body
                    Tittle='Upstream Odoo'
                />
                <List
                    Element='upstream odoo12 {
                    }'
                />
                <Body
                    Tittle='Upstream Odoo Chat'
                />
                <List
                    Element='upstream odoo12chat {
                    }'
                />
                <div className="subheading">Dentro del parametro server</div>
                <Body
                    Tittle='Long Polling'
                />
                <List
                    Element='location /longpolling {}'
                />
                <Body
                    Tittle='Location'
                />
                <List
                    Element='location / {}'
                />
                <Body
                    Tittle='Location ~*'
                />
                <List
                    Element=' location ~* /[0-9a-zA-Z_]*/static/ {)'
                />
                <div className="link-list">
                    <div className="subheading">Parametros de Cofiguracion</div>
                    <a className="link-item" onClick={ConfigNginxMethod} target="_blank">
                        <img src={Repo} alt="repo" />
                        <span>
                            <strong>Configuracion Nginx</strong>
                        </span>
                    </a>

                </div>
            </section>
        </article >
    );
}