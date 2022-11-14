import React from 'react';
import StackAlt from './assets/stackalt.svg';
import Odoo from './assets/odoo-create-database.png'
import OdooService from './assets/odoo-service.png'
import { Header } from './Header';
import './Server.css';

export const Server = () => {

    return (
        <article>
            <Header
                Tittle='Configuracion Del Servidor'
                Name='Verificacion del Servidor'
            />

            <section>
                <h2>Puerto No Habilitado <img src={StackAlt} alt="build" /></h2>
                <p>
                    Si intenta acceder al servicio mediante el puerto establecido en la configuracion del mismo y no logra acceder, mas el servicio se encuentra en un estatus ("Active") esto quiere decir que es muy probable
                    el puerto al que esta intentando acceder no se encuentra habilitado.
                    <br />
                    Para habilitar el puerto deseado y mantener la coherencia, el servicio instalado con el script especifica que le puerto por defecto para este es "8069", utilizaremos el mismo para el ejemplo de habilitar puertos.
                </p>
                <div>
                    <h4>Comando para habilitar el puerto:</h4>
                </div>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo ufw allow "8069"/tcp
                        </li>
                    </ul>
                    <p>
                        El puerto se especifica din las comillas dobles.
                    </p>
                </div>
                <br />
                <p>
                    Posterior a realizar la apertura de este puerto el servicio debe subir y poder visualizar el apartado de creacion de la base de datos.
                </p>
                <div>
                    <div>
                        <img style={{ width: 850, height: 650 }} src={Odoo} />
                    </div>
                </div>
                <br />
                <h2>Verificar Servicio <img src={StackAlt} alt="build" /></h2>
                <p>
                    Luego de realizar las instrucciones mencionadas con anterioridad se procede a realizar una nueva instalacion del script y proceder a verificar si ya se puede acceder
                    al servico mediante el puerto especificado, en este ejemplo el puerto por defecto "8069".
                </p>
                <div>
                    <h4>Ejecutar script:</h4>
                </div>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo ./odoo_install.sh
                        </li>
                    </ul>
                </div>
                <p>Posterior a la ejecucion del script se procede a verificar el estatus del servicio y posteriormente acceder por el puerto en el navegador para la creacion
                    de la base de datos
                </p>
                <div>
                    <h4>Verificar estatus del servicio:</h4>
                </div>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo service odoo-server status
                        </li>
                    </ul>
                </div>
                <br />
                <div>
                    <div>
                        <img style={{ width: 700, height: 300 }} src={OdooService} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h2>Usuario Postgresql <img src={StackAlt} alt="build" /></h2>
                <p>
                    Al momento de intentar crear la base de datos, se genera una excepcion referente al usuario utilizado para la admistracion del servicio, es muy probable que el usuario no se encuetre
                    en la base de datos.
                    <br />
                    Para solucionar esto debemos proceder a la creacion del usuario en la base de datos:
                </p>
                <div>
                    <h4>Ingresamos a Postgresql:</h4>
                </div>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            psql postgres
                        </li>
                    </ul>
                </div>
                <br />
                <div>
                    <h4>Crear usuario:</h4>
                </div>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            CREATE ROLE "userExample" WITH LOGIN SUPERUSER PASSWORD '{"password"}';
                        </li>
                    </ul>
                </div>
                <p>
                    El nombre del usuario no va entre doble comillas "" y la contrasena debe ir entre comillas simples '', se coloco de esta forma para especificar los parametros.
                    <br />
                    Posterior a realizar la creacion del usuario en la base de datos, reiniciamos el servicio y tratamos de crear la base de datos nuevamente.
                </p>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo service odoo-server restart
                        </li>
                    </ul>
                </div>
            </section>
        </article>
    );
};

