import React from 'react';
import StackAlt from './assets/stackalt.svg';
import Repo from './assets/repo.svg';
import Plugin from './assets/plugin.svg';
import Branch from './assets/git-branch.png';
import OdooDirectory from './assets/odoo-directory.png';
import addons_path from './assets/addons-path.png';
import Odoo from './assets/odoo-create-database.png';
import OdooService from './assets/odoo-service.png';
import Repository from './assets/repository.png';
import { Header } from './Header';
import { Tittle, Text, Body, Image, SmallImage, ImageShoot, List } from './Design';

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

