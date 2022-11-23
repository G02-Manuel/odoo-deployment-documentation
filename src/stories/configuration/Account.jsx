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
import FiscalYear from '../assets/Fiscal-Year.png'
import ClosingPeriod from '../assets/closing-period.png'
import ClosingPeriodValue from '../assets/closing-period-value.png'
import BlockPeriod from '../assets/block-period.png'
import Currency from '../assets/Currencys.png'
import Tasas from '../assets/Tasas.png'
import TasasLog from '../assets/Tasas-Log.png'
import DGII from '../assets/DGII.png'
import DGIIReports from '../assets/DGII-Reports.png'
import Exportable from '../assets/Exportables-DGII.png'
import IT1 from '../assets/IT-1.png'
import Extractos from '../assets/Extractos.png'
import ConsumoFact from '../assets/Facturas-Consumo.png'
import Repo from '../assets/repo.svg';
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
                <img style={{ width: 690, height: 360, borderRadius: 20 }} src={CompanyProperty} />
                <Text
                    Name="Vamos a filtrar por el nombre y que el mismo contenga el valor (account)"
                />
                <img style={{ width: 690, height: 360, borderRadius: 20 }} src={AccountProperty} />
                <Text
                    Name="Antes de continuar con el siguiente paso es fundamental resaltar que para realizar el proceso es necesario hacer una verificacion y determiar una equivalencia."
                />
                <Text
                    Name="Es necesario ingresar registro por registro para hacer las modificaciones."
                />
                <img style={{ width: 690, height: 300, borderRadius: 20 }} src={PropertyDetail} />
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
                <img style={{ width: 690, height: 400, borderRadius: 20 }} src={AccountImage} />
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
                <img style={{ width: 700, height: 440, borderRadius: 20 }} src={PropertyValue} />
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
                <img style={{ width: 700, height: 150, borderRadius: 20 }} src={IdAccount} />
                <Text Name="Seleccionamos el valor del 'id' y lo colocamos en el campo valor despues del modelo en cuestion." />
                <Body
                    Tittle="Nuevo Valor"
                />
                <List
                    Element="account.account,158"
                />
                <br />
                <img style={{ width: 700, height: 440, borderRadius: 20 }} src={NewPropertyValue} />
                <Text
                    Name="Posterior a colocar el id de los records en las propiedades de la compamia, ya el catalogo de cuentas debe estar importado y listo para empezar a utulizar las nuevas cuentas."
                />
                <img style={{ width: 790, height: 640, borderRadius: 20 }} src={ChartAccount} />
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
                <img style={{ width: 730, height: 560, borderRadius: 20 }} src={Diarios} />
                <Text
                    Name="Si no sabes con exactitud los diarios que llevan control de ncf, podemos revisar al detalle cada uno y generar las secuencias."
                />
                <Body
                    Tittle="Diarios con control de NCF"
                />
                <img style={{ width: 730, height: 560, borderRadius: 20 }} src={DiarioNCF} />
                <Text
                    Name="Si nos desplazamos a la pagina 'Secuencias NCF', solo debe haber un registro, de ser asi, se deben generar todas las secuencias."
                />
                <img style={{ width: 730, height: 560, borderRadius: 20 }} src={DiarioSecuencia} />
                <Text
                    Name="Posterior a la verificacion podemos hacer click en 'Generar NCF', esta accion debe crear todas las secuencias necesarias para las operaciones con los NCF."
                />
                <img style={{ width: 730, height: 560, borderRadius: 20 }} src={GenerarNCF} />
                <Text
                    Name="Luego de hacer click podemos visualizar lo antes mencionado."
                />
                <img style={{ width: 730, height: 600, borderRadius: 20 }} src={SecuenciasNCF} />
            </section>
        </article>
    );
}

export const FiscalYearConf = () => {
    return (
        <article>
            <Header
                Tittle="Configuracion"
                Name="Parte Fiscal"
            />
            <section>
                <TittleOdoo
                    Tittle="Anio Fiscal"
                    Code={CaribeLogo}
                />
                <Text
                    Name="En terminos simples el anio fiscal hace referencia a la fecha de cierre contable de la empresa en cuestion."
                />
                <Text
                    Name="Para realizar la configuracion de este necesitamos acceder a la configuracion del modulo de contabilidad, en el apartado de 'Periodos Fiscales'."
                />
                <Body
                    Tittle="Ruta"
                />
                <List
                    Element="Contabilidad > Configuracion > Configuracion  =>  Periodos Fiscales"
                />
                <br />
                <img style={{ width: 730, height: 280, borderRadius: 20 }} src={FiscalYear} />
                <Text
                    Name="Nota: Es necesario que el modulo 'account_fiscal_year' se encuentre instalado."
                />
                <div className="subheading">Modulos Adicionales</div>
                <Text
                    Name="Existe varios modulos que se puede utilizar para agregar mas funciones y generar una mejor experiencia al usuario, entre esos modulos destaco los siguientes:"
                />
                <Body
                    Tittle="Account Move Fiscal Year"
                />
                <List
                    Element="account_move_fiscal_year"
                />
                <Text
                    Name="Este módulo extiende la funcionalidad del módulo de Contabilidad de Odoo, para generar automáticamente años fiscales."
                />
                <Text
                    Name="Una vez instalado, se ejecuta un cron cada día. Creará, para cada empresa, un nuevo ejercicio fiscal, si es el último día del ejercicio fiscal en curso."
                />
                <Text
                    Name="Este módulo es especialmente interesante en el contexto de varias empresas, para evitar la molesta configuración cada año."
                />
                <Text
                    Name="El año fiscal creado tiene una duración clásica de “12 meses”, pero el contador puede modificarlo, una vez creado."
                />
                <br />
                <TittleOdoo
                    Tittle="Cierre Fiscal"
                    Code={CaribeLogo}
                />
                <Text
                    Name="En Odoo no hay necesidad de hacer una entrada específica de cierre de fin de año para cerrar las cuentas del estado de resultados. Los informes se crean en tiempo real, lo que significa que el estado de resultados se corresponde directamente con la fecha de fin de año que especifique en Odoo."
                />
                <Text
                    Name="Mas existe la opcion de configurar este periodo de cierre para llevar todo mas organizado."
                />
                <Body
                    Tittle="Ruta"
                />
                <List
                    Element="Contabilidad > Configuracion > Configuracion  =>  Periodos Fiscales"
                />
                <br />
                <img style={{ width: 730, height: 280, borderRadius: 20 }} src={ClosingPeriod} />
                <Text
                    Name="Colocar la fecha para realizar el cierre de las cuentas que componen el 'Estado de Resultado', lo que significa que no se podra realizar ninguna transaccion financiera antes de la fecha
                    colocada en este apartado."
                />
                <Body
                    Tittle="Ejemplo"
                />
                <img style={{ width: 730, height: 280, borderRadius: 20 }} src={ClosingPeriodValue} />
                <Text
                    Name="En este ejemplo colocamos la fecha de bloqueo y la fecha de bloqueo para los responsables de contabilidad, ya que por la jerarquia de sus permisos pueden realizar modificaciones
                     posteior a colocar la primera fecha."
                />
                <Text
                    Name="Un claro ejemplo de que lo antes mencionado es este intento de crear una factura antes de la fecha que se tomo como bloqueo."
                />
                <img style={{ width: 850, height: 250, borderRadius: 20 }} src={BlockPeriod} />
                <Text
                    Name="No permitiria registrar ninguna operacion."
                />
            </section>
        </article>
    );
}

export const CurrencyConf = () => {
    return (
        <article>
            <Header
                Tittle="Configuracion"
                Name="Divisas"
            />
            <section>
                <TittleOdoo
                    Tittle="Tasas"
                    Code={CaribeLogo}
                />
                <Text
                    Name="En este apartado mostramos como se debe colocar la tasa de las distintas monedas 
                    en caso de que el ambiente se configure con estas caracteristicas; el calculo de la misma es bastante 
                    simple, ya que la operacion que realiza es una division de 1 peso sobre la tasa de la moneda en cuestion."
                />
                <Text
                    Name="Para configurar estas tasas nos dirigimos a la siguiente ruta:"
                />
                <List
                    Element="Contabilidad > Configuracion > Monedas"
                />
                <br />
                <img style={{ width: 650, height: 250, borderRadius: 20 }} src={Currency} />
                <Text
                    Name="Aqui podemos visualizar y agregar nuevas divisas, asi como poder agrear y cambiar la tasa de cada una de estas."
                />
                <b><Text Name="Importante destacar que la tasa debe modificarse diariamente, ya que es un elemento variable diariamente." /></b>
                <Text Name="Para realizar el cambio de la tasa, vamos a ingrear a una de las divisas." />
                <img style={{ width: 650, height: 280, borderRadius: 20 }} src={Tasas} />
                <Text
                    Name="Dentro de este apartado vamos a visualizar todas las tasas que se han agregado a esta divisa 
                    con la fecha en la que se agrego."
                />
                <img style={{ width: 650, height: 320, borderRadius: 20 }} src={TasasLog} />
                <Text
                    Name="Hacemos click en crear y agregamos la tasa del dia para esa divisa."
                />
            </section>
        </article>
    );
}

export const DGIIReport = () => {
    return (
        <article>
            <Header
                Tittle="Informes"
                Name="DGII"
            />
            <section>
                <TittleOdoo
                    Tittle="Declaraciones"
                    Code={CaribeLogo}
                />
                <Text
                    Name="En este apartado es donde se generan las declaraciones de los impuestos que posteriormete se presetan ante la DGII."
                />
                <Text
                    Name="Para generar estos informes es necesario navegar hasta la opcion de DGII en el modulo de contabilidad."
                />
                <List
                    Element="Contabilidad > DGII > Informes"
                />
                <br />
                <img style={{ width: 650, height: 250, borderRadius: 20 }} src={DGII} />
                <Text
                    Name="Al seleccionar los informes, si se han generados algunos con anterioridad se mostraran en este apartado."
                />
                <Text
                    Name="En el mismo apartado se pueden generar, seleccionando 'crear' desplega un formulario en el cual lo unico que se debe seleccionar para generar los mismos, es la fecha. "
                />
                <img style={{ width: 660, height: 500, borderRadius: 20 }} src={DGIIReports} />
                <Text
                    Name="Los reportes que se generan al seleccionar la fecha son los '606, 607, 608 y 609'."
                />
                <div className="subheading">Informes 606, 607, 608 y 609</div>
                <Text
                    Name="Definicion de cada informe que se generan."
                />
                <Body
                    Tittle="606"
                />
                <Text
                    Name="El formulario de envío 606 es utilizado para reportar la compra de bienes y servicios que incluyen número de comprobante fiscal (NCF), dicho reporte se debe realizar en los primeros 15 días de cada mes."
                />
                <Text
                    Name="Con este formato se reportan los costos y gastos para fines del impuesto sobre la renta (ISR), aquí se debe plasmar el detalle de las ventas efectuadas durante el período correspondiente al reporte."
                />
                <Text
                    Name="De igual manera, se deben reportar los adelantos utilizados, como créditos para fines del impuesto a las transferencias de bienes industrializados y servicios (ITBIS) y las retenciones del ITBIS realizadas a terceros."
                />
                <Body
                    Tittle="607"
                />
                <Text
                    Name="Este formulario es para presentar las ventas de bienes y servicios efectuadas por el contribuyente que incluyen NCF. Se deben remitir las informaciones de ventas y operaciones efectuadas y las retenciones del ITBIS y del ISR realizadas por terceros, sustentadas en facturas de crédito y comprobantes especiales."
                />
                <Body
                    Tittle="608"
                />
                <Text
                    Name="A través del formato de envío de comprobantes anulados 608, las empresas pueden reportar los NCF anulados. Este formulario es obligatorio para todas las empresas en cumplimiento de la norma general no. 07 – 2018."
                />
                <Body
                    Tittle="609"
                />
                <Text
                    Name="Los contribuyentes que realizan pagos por servicios al exterior utilizan este formato y están obligados a remitir mensualmente un reporte con el detalle de las transacciones de conformidad a lo establecido en la norma general no. 07 – 2018."
                />
                <Text
                    Name="Para el reporte de cada uno de los anteriores formatos, la DGII tiene a disposición del contribuyente  en su portal web www.dgii.gov.do las indicaciones para el envío de dichas informaciones. Cabe destacar que durante este proceso es imprescindible la ayuda de un contable, para evitar cualquier error."
                />
                <div className="subheading">Extractos</div>
                <Text
                    Name="Posterior a la generar los reportes, se agrega un resumen distribuido por reportes, basados en monto de factura, impuestos, retenciones, etc..."
                />
                <img style={{ width: 660, height: 560, borderRadius: 20 }} src={Extractos} />
                <div className="subheading">Archivos .TXT</div>
                <Text
                    Name="En esta seccion es donde se colocan los documentos .txt exportables que se presentan ante la DGII."
                />
                <img style={{ width: 650, height: 300, borderRadius: 20 }} src={Exportable} />
                <Text
                    Name="Los archivos se organizan en una columna haciendo referencia al reporte que pertenece."
                />
                <Text
                    Name="Estos documentos generados poseen el formato establecido por la DGII en los reportes a presentar, se pueden descargar solo haciendo click."
                />
                <div className="subheading">IT 1</div>
                <img style={{ width: 660, height: 650, borderRadius: 20 }} src={IT1} />
                <Text
                    Name="Entre muchas de las obligaciones fiscales en República Dominicana, se encuentra el Impuesto sobre Transferencias de Bienes Industrializados y Servicios (ITBIS). En palabras simples, es un impuesto del tipo de valor agregado que grava el consumo de transferencia e importación de bienes y servicios industrializados nuevos o usados."
                />
                <Text
                    Name="A través de una factura, el ITBIS tiene una dinámica que permite que el contribuyente pague solo por el valor añadido en el proceso productivo. ¿Cómo es esto posible? Al contribuyente se le descuenta el ITBIS pagado en las compras del ITBIS que se cobró al vender. "
                />
                <div className="subheading">Resumen General de Facturas de Consumo</div>
                <Text
                    Name="Esta seccion muestra un resumen de todas las facturas con cliente de consumo."
                />
                <img style={{ width: 660, height: 560, borderRadius: 20 }} src={ConsumoFact} />
            </section>
        </article>
    );
}

export const DataTemplate = () => {

    const FacturasClientes = () => {
        let Name = '';
        Name = 'FacturasClientes.xls';

        // using Java Script method to get PDF file
        fetch(Name).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = Name;
                alink.click();
            })
        });
    }

    const FacturasProveedores = () => {
        let Name = '';
        Name = 'FacturasProveedores.xls';

        // using Java Script method to get PDF file
        fetch(Name).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = Name;
                alink.click();
            })
        });
    }

    const NotasCredito = () => {
        let Name = '';
        Name = 'RectificativasClientes.xls';

        // using Java Script method to get PDF file
        fetch(Name).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = Name;
                alink.click();
            })
        });
    }

    const NotasDebito = () => {
        let Name = '';
        Name = 'RectificativasProveedores.xls';

        // using Java Script method to get PDF file
        fetch(Name).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = Name;
                alink.click();
            })
        });
    }


    return (
        <article>
            <Header
                Tittle="Templates"
                Name="Financieros"
            />
            <section>
                <TittleOdoo
                    Tittle="Plantillas Importar Informacion"
                    Code={CaribeLogo}
                />
                <br />
                <br />
                <br />
                <br />
                <div className="link-list">
                    <div className="subheading">Facturas Cliente/Proveedor</div>
                    <a className="link-item" onClick={FacturasClientes} target="_blank">
                        <img src={Repo} alt="repo" />
                        <span>
                            <strong>Facturas Clientes</strong>
                        </span>
                    </a>
                    <a className="link-item" onClick={FacturasProveedores} target="_blank">
                        <img src={Repo} alt="repo" />
                        <span>
                            <strong>Facturas Proveedores</strong>
                        </span>
                    </a>
                    <div className="subheading">Facturas Rectificativas Cliente/Proveedor</div>
                    <a className="link-item" onClick={NotasCredito} target="_blank">
                        <img src={Repo} alt="repo" />
                        <span>
                            <strong>Notas de Credito</strong>
                        </span>
                    </a>
                    <a className="link-item" onClick={NotasDebito} target="_blank">
                        <img src={Repo} alt="repo" />
                        <span>
                            <strong>Notas de Debito</strong>
                        </span>
                    </a>
                    <div className="subheading">Pagos Cliente/Proveedor</div>
                </div>
            </section>
        </article>
    );
}
