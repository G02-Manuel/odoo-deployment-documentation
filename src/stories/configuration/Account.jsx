import React from "react";
import CaribeLogo from '../assets/caribe-logo.png'
import CompanyProperty from '../assets/company-property.png'
import AccountProperty from '../assets/account-property.png'
import PropertyDetail from '../assets/property-detail.png'
import AccountImage from '../assets/Account.png'
import PropertyValue from '../assets/property-value.png'
import NewPropertyValue from '../assets/new-property-value.png'
import IdAccount from '../assets/id-account.png'
import ChartAccount from '../assets/new-chart-account.png'
import Diarios from '../assets/Diarios.png'
import DiarioNCF from '../assets/Diario-NCF.png'
import DiarioSecuencia from '../assets/Diario-Secuencia.png'
import GenerarNCF from '../assets/Generar-NCF.png'
import SecuenciasNCF from '../assets/Secuencias-NCF.png'
import { Header } from '../Header';
import { Text, Body, List, TittleOdoo } from '../Design';


export const ChartAccountConf = () => {
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
                <div className="subheading">Desconfiguracion</div>
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
                <Text
                    Name="En base a esta cuenta es necesario saber cual sera la nueva cuenta que va a sustituir la misma."
                />
                <Text
                    Name="El siguiente paso a seguir es quitar el valor del id en el campo valor del registro y guardar el mismo; se hace con el objetivo de poder mantener la propiedad sin que se encuentre 
                    dependiente del registro que vamos a eliminar."
                />
                <Body
                    Tittle="Modificar Valor"
                />
                <List
                    Element="account.account,"
                />
                <Text
                    Name="El registro debe guardarse de esta forma para que no genere ninguna excepcion al momento de intentar borrar la cuenta contable asociada al mismo."
                />
                <img style={{ width: 700, height: 440 }} src={PropertyValue} />
                <Text
                    Name="Posterior a realizar esto, ya puede proceder a eliminar el plan contable sin ninguna restriccion y posterior a esto puede importar el nuevo plan contable."
                />
                <Text
                    Name="Luego de importar el nuevo catalogo de cuentas se procede a hacer el 'reverse' o configuracion de lo que intencionalmente se habia desconfigurado."
                />
                <div className="subheading">Configuracion</div>
                <Text
                    Name="En el nuevo catalogo de cuentas debemos seleccionar las cuentas pre-seleccionadas como sustitutas de las antiguas, tomar el 'id' y colocarlo en la propiedad de la compania correspodiente."
                />
                <Body
                    Tittle="Nuevo Id"
                />
                <img style={{ width: 700, height: 150 }} src={IdAccount} />
                <Text Name="Seleccionamos el valor del 'id' y lo colocamos en el campo valor despues del modelo en cuestion." />
                <Body
                    Tittle="Nuevo Valor"
                />
                <List
                    Element="account.account,158"
                />
                <br />
                <img style={{ width: 700, height: 440 }} src={NewPropertyValue} />
                <Text
                    Name="Posterior a colocar el id de los records en las propiedades de la compamia, ya el catalogo de cuentas debe estar importado y listo para empezar a utulizar las nuevas cuentas."
                />
                <img style={{ width: 790, height: 640 }} src={ChartAccount} />
            </section>
        </article>
    );
}

export const NCFConf = () => {
    return (
        <article>
            <Header
                Tittle="Configuracion"
                Name="NCF"
            />
            <section>
                <TittleOdoo
                    Tittle="NCF"
                    Code={CaribeLogo}
                />
                <Text
                    Name="En este apartado vamos a generar las secuencias de ncf para los diarios contables que se encuentren marcados con el 'check' control NCF."
                />
                <Text
                    Name="En primera instancea vamos a buscar los diarios contables que se encuentran en el ambiente ingresando a la parte de diarios en el modulo de contabilidad."
                />
                <Body
                    Tittle="Ruta"
                />
                <List
                    Element="Contabilidad > Configuracion > Diarios"
                />
                <br />
                <img style={{ width: 730, height: 560 }} src={Diarios} />
                <Text
                    Name="Si no sabes con exactitud los diarios que llevan control de ncf, podemos revisar al detalle cada uno y generar las secuencias."
                />
                <Body
                    Tittle="Diarios con control de NCF"
                />
                <img style={{ width: 730, height: 560 }} src={DiarioNCF} />
                <Text
                    Name="Si nos desplazamos a la pagina 'Secuencias NCF', solo debe haber un registro, de ser asi, se deben generar todas las secuencias."
                />
                <img style={{ width: 730, height: 560 }} src={DiarioSecuencia} />
                <Text
                    Name="Posterior a la verificacion podemos hacer click en 'Generar NCF', esta accion debe crear todas las secuencias necesarias para las operaciones con los NCF."
                />
                <img style={{ width: 730, height: 560 }} src={GenerarNCF} />
                <Text
                    Name="Luego de hacer click podemos visualizar lo antes mencionado."
                />
                <img style={{ width: 730, height: 600 }} src={SecuenciasNCF} />
            </section>
        </article>
    );
}

export const FiscalYearConf = () => {
    return (<></>);
}