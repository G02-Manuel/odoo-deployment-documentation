import React from 'react';
import Code from './assets/code-brackets.svg';
import { Header } from './Header';
import './Install.css';

export const Install = () => {

    return (
        <article>
            <Header
                Tittle='Despliegue'
                Name='Instalar Odoo'
            />

            <section>
                <h2>Instalar Odoo Con Script  <img src={Code} alt="code" /></h2>
                <p>
                    Para realizar la instalacion del servicio de odoo, vamos a utilizar el script suministrado en la introductoria de la documentacion.
                    <br />
                    El proceso de instalacion de encuentra resumido en 4 simple pasos, explicados a continuacion:
                </p>
                <div>
                    <h4>Descarga del Script:</h4>
                </div>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo wget https://raw.githubusercontent.com/Yenthe666/InstallScript/16.0/odoo_install.sh
                        </li>
                    </ul>
                </div>
                <h4>Modificacion de los parametros del servicio:</h4>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo nano odoo_install.sh
                        </li>
                    </ul>
                </div>
                <h4>Hacer el script ejecutable:</h4>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo chmod +x odoo_install.sh
                        </li>
                    </ul>
                </div>
                <h4>Ejecutar el script: </h4>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo ./odoo_install.sh
                        </li>
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <h2>Administrar Servicio <img src={Code} alt="code" /></h2>
                <p>
                    Tomando en cuenta que el nombre del servicio creado por defecto en el script es "odoo-server" los siguientes ejemplos utilizaran este nombre para mantener el contexto.
                    <br />
                    Para la administracio del servicio que se genera con la instalacion de odoo erp podemos utilizar los siguiente comandos:
                </p>
                <h4>Verificar Estatus </h4>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo service "odoo-server" status
                        </li>
                    </ul>
                    <p>Con este comando se verifica si el servicio se encuentra en uno de sus dos estados, (activo o inactivo).</p>
                </div>
                <br />
                <h4>Iniciar servicio</h4>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo service "odoo-server" start
                        </li>
                    </ul>
                    <p>Este servicio se utiliza para iniciar el servicio en caso de que se encuentra inactivo.</p>
                </div>
                <br />
                <h4>Reiniciar el servicio</h4>
                <div className='inside-code-1'>
                    <ul className='code-class'>
                        <li>
                            sudo service "odoo-server" restart
                        </li>
                    </ul>
                    <p>Este servicio se utiliza para reiniciar el servicio independientemente del estado en el que se encuentre el mismo.</p>
                </div>
            </section>
        </article>
    );
};
