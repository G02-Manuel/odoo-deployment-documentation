import React from "react";
import CaribeLogo from '../assets/caribe-logo.png'
import CompanyProperty from '../assets/company-property.png'
import AccountProperty from '../assets/account-property.png'
import PropertyDetail from '../assets/property-detail.png'
import AccountImage from '../assets/Account.png'
import { Header } from '../Header';
import { Tittle, Text, Body, Image, SmallImage, ImageShoot, List, TittleOdoo } from '../Design';


export const Accounting = () => {
    return (
        <article>
            <Header
                Tittle="Configuracion"
                Name="Plan Contable"
            />
            <section>
                <TittleOdoo
                    Tittle="Plan Contable"
                    Code={CaribeLogo}
                />
                <Text
                    Name="En este apartado de la documentacion realizamos el proceso de carga de un plan contable customizado por el cliente, lo que significa que el plan contable generado por los modulos
                    de la localizacion se debe retirar del ambiente y darle paso al nuevo plan contable que se desea importar."
                />
                <Text
                    Name="Para realizar la carga del plan contable vamos a necesitar hacer una desconfiguracion de la mayoria de los elementos contables que utilicen las cuentas en cuestion, posterior a esto
                    realizar la operacion inversa y realizar la configuracion de todos los elementos contables a los que se le procedio a desconfigurar."
                />
                <Text
                    Name="El primer paso a realizar es el siguiente:"
                />
                <Body
                    Tittle="Modificar las propiedades de la compania"
                />

                <List
                    Element="Ajustes > Tecnico > Propiedades de la compania"
                />
                <br />
                <img style={{ width: 690, height: 360 }} src={CompanyProperty} />
                <Text
                    Name="Vamos a filtrar por el nombre y que el mismo contenga el valor (account)"
                />
                <img style={{ width: 690, height: 360 }} src={AccountProperty} />
                <Text
                    Name="Antes de continuar con el siguiente paso es fundamental resaltar que para realizar el proceso es necesario hacer una verificacion y determiar una equivalencia."
                />
                <Text
                    Name="Es necesario ingresar registro por registro para hacer las modificaciones."
                />
                <img style={{ width: 690, height: 300 }} src={PropertyDetail} />
                <Body
                    Tittle="Verificar y modificar valores"
                />
                <List
                    Element="account.account,24"
                />
                <Text
                    Name="El numero al final del modelo es el 'id' del registro al que esta asociada esta propiedad, para el proceso de verificacion vamos a tomar este 'id' y lo vamos a buscar en el modelo 
                    account.account; en este ejemplo el 'id' 24 esta asociado a la cuenta '1105600' en mi ambiente."
                />
                <img style={{ width: 690, height: 400 }} src={AccountImage} />
                {/* <Text
                    Name="El odoo community por defecto no trae la capacidad de mostrar las aplicaciones instaladas de forma responsive al igual que la version Enterprise de este ERP."
                />
                <Text
                    Name="La solucion para convertir el manejo arcaico a responsive basta con hacer la instalacion del modulo web_respondive en la version correcta."
                />
                <Body
                    Tittle="Pasar Community a Responsive"
                />
                <List
                    Element="web_responsive"
                />
                <Text
                    Name="Posterior a esto puede visualizar como se muestran los modulos de forma responsive en la pantalla de inicio."
                />
                <img style={{ width: 800, height: 550 }} src={Odoobackground} />
                <Text
                    Name="Este seria el resultado sin el fondo de pantalla en el ambiente."
                /> */}
            </section>
        </article>
    );
}