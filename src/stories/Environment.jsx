import React from "react";
import Repo from './assets/repo.svg';
import Plugin from './assets/plugin.svg';
import Branch from './assets/git-branch.png';
import OdooDirectory from './assets/odoo-directory.png';
import addons_path from './assets/addons-path.png'
import Repository from './assets/repository.png';
import { Header } from './Header';
import { Tittle, Text, Body, Image, ImageShoot, SmallImage, List } from './Design';

export const Enviroment = () => {
    return (
        <article>
            <Header
                Tittle='Ambiente'
                Name='Modulos Externos'
            />
            <section>
                <Tittle
                    Tittle='Agregar Modulos de Terceros'
                    Code={Plugin}
                />
                <Text
                    Name='En Esta seccion se expone el proceso de agregar modulos de terceros al servicio de odoo y realizar el proceso para actualizar e instalar.'
                />
                <Text
                    Name='Dentro del servidor vamos a localizar la carpeta odoo que se ecuentra en la raiz de los directorios.'
                />
                <SmallImage
                    bin={OdooDirectory}
                />
                <Text
                    Name="Dentro de este directorio hay dos directorios mas, 'custom' y 'odoo-server' "
                />
                <Body
                    Tittle="Abrir directorio"
                />
                <List
                    Element="cd custom"
                />
                <Text
                    Name='Dentro de este directorio vamos a clonar los modulos o aplicaciones que queremos agregar a nuestro servicio de odoo.'
                />
                <Text
                    Name='Podemos tomar tomar cada uno de los repositorios especificados para la localizacion del ambiente en la seccion de introduccion y clonarlos.'
                />
                <Image
                    bin={Repository}
                />
                <Text
                    Name='Copiar la direccion del repositorio y posteriormente clonar en el directorio especificado con canterioridad.'
                />
                <Body
                    Tittle="Clonar repositorio"
                />
                <List
                    Element="sudo git clone https://github.com/indexa-git/l10n-dominicana.git"
                />
                <Text
                    Name='Posterior a clonar el directorio de modulos, es necesario acceder a este directorio y verificar el branch o rama en la que se encuentra el repositorio.'
                />
                <Text
                    Name="Para realizar esta verificacion puede ejecutar el siguiente comando:"
                />
                <Body
                    Tittle="Verificar rama del repositorio"
                />
                <List
                    Element="sudo git branch"
                />
                <br />
                <SmallImage
                    bin={Branch}
                />
                <Text
                    Name="Debe asegurarse que la rama sea la correspondiente a la version de Odoo que se esta implementando; de no encontrarse en esta puede ejecutar el 
                    siguiente comando para cambiar a la rama deseada."
                />
                <Body
                    Tittle="Cambiar rama del repositorio"
                />
                <List
                    Element="sudo git checkout 12.0"
                />
                <Text
                    Name="Es muy importante que todos los modulos que clone o agregue a este directorio se encuentren en la version correcta, ya que si uno de estos se encuentra en una version distinta
                     se generara una excepcion al momento de intentar instalarlo."
                />
                <br />
                <Tittle
                    Tittle="Agregar Apps Externas Al Servicio"
                    Code={Repo}
                />
                <Text
                    Name="Luego de clonar los modulos necesarios para la implementacion, el siguiente paso es agregarlos al archivo de configuracion (odoo.conf), especificamente en el parametro 'addons_path'."
                />
                <Text
                    Name="Para realizar esta accion es necesario localizar y editar el archivo antes mencionado."
                />
                <Body
                    Tittle="Editar archivo .conf"
                />
                <List
                    Element="sudo nano /etc/odoo-server.conf"
                />
                <Text
                    Name="En este casi el nombre del archivo es 'odoo-server.conf' porque se crea con el nombre del servicio al momento de ejecutar el script de instalacion. "
                />
                <Text
                    Name="Dentro del archivo debemos localizar el parametro 'addons_path' y en este parametro agregamos las rutas de los distintos directorios de los modulos, ejemplo: "
                />
                <SmallImage
                    bin={addons_path}
                />
                <Body
                    Tittle="Actualizar servicio"
                />
                <List
                    Element="sudo service odoo-server restart"
                />
            </section>
        </article>
    );
}