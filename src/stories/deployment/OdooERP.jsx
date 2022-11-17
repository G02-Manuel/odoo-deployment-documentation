import React from "react";
import OdooLogo from '../assets/odoo_logo_1.png'
import OcaLogo from '../assets/OCA_Contributor_Logo.png'
import { Header } from '../Header';
import { Tittle, TittleOdoo, Text, Body, List } from '../Design';

export const GeneralEnviroment = () => {
    return (
        <article>
            <Header
                Tittle="Entorno De Odoo"
                Name="Ambiente desplegado"
            />
            <section>
                <TittleOdoo
                    Tittle="Localizacion Dominicana"
                    Code={OdooLogo}
                />
                <Text
                    Name='Posterior a crear la base de datos debemos instalar los modulos base que se especifican en el alcance de la implementacion, para posteriormente instalar los de la localizacion y 
                    manejo de los diferentes procesos financieros de la Rep. Dom.'
                />
                <Text
                    Name="A continuacion se mostraran los modulos a instalar y el orden jerarquico que generalmente se utiliza."
                />
                <Body
                    Tittle="Primero"
                />
                <List
                    Element="ncf_manager"
                />
                <Text
                    Name="Este módulo implementa la administración y gestión de los números de comprobantes fiscales para el cumplimento de la norma 06-18 de la Dirección de Impuestos Internos en la República Dominicana."
                />
                <Body
                    Tittle="Segundo"
                />
                <List
                    Element="ncf_invoice_template"
                />
                <Text
                    Name="Este modulo sobre escribe el formato de las facturas para adaptarlo a la Norma General 06-2018 de la DGII."
                />
                <Body
                    Tittle="Tercero"
                />
                <List
                    Element="dgii_reports"
                />
                <Text
                    Name="Este módulo extiende las funcionalidades del ncf_manager, integrando los reportes de declaraciones fiscales"
                />
                <Text
                    Name="Entre el segundo y tercero no importa cual se instale primero, ya que ambos dependen del primero."
                />
                <Body
                    Tittle="Manejo de los ncf en los modulos (Compras, Facturacion y POS)"
                />
                <List
                    Element="ncf_purchase"
                />
                <List
                    Element="ncf_sale"
                />
                <List
                    Element="ncf_pos"
                />
                <Text
                    Name="Estos modulos se instalaran en base a las necesidades y requerimientos del alcance del sistema a implementar."
                />
                <br />
                <br />
                <Tittle
                    Tittle="OCA Localizacion"
                    Code={OcaLogo}
                />
                <Text
                    Name="En este apartado vamos a mostrar los modulos de la comunidad que permiten realizar una buena implementacion, facilitan las visualizacion de reportes financieros y flujos que 
                    agregan bastante valor al ambiente."
                />
                <Text
                    Name="Podemos iniciar mostranto los modulos que permiten visualizar los modulos en el home, en vez de verlos en una lista desplegable."
                />
                <Body
                    Tittle="Community Responsive"
                />
                <List
                    Element="web_responsive"
                />
                <div className="subheading">Parte Financiera</div>
                <Text Name="Los modulos especificados a continuacion agregar distintas funciones a la parte financiera del ambiente." />
                <Body
                    Tittle="Reportes Financieros"
                />
                <List
                    Element="account_financial_report"
                />
                <Text
                    Name="Los reportes financieros agregados por este modulo son los singuientes: Libro mayor, Libro Diario, Balance de Sumas y Saldos, Partidas Abiertas, Saldos de Empresas por Antiguedad, 
                    Iformes de impuestos."
                />
                <Body
                    Tittle="Tipos de Cuenta"
                />
                <List
                    Element="account_type_menu"
                />
                <Text Name="Este modulo permite agregar distintos tipos de cuentas contables." />
                <Body
                    Tittle="Grupo de Cuentas"
                />
                <List
                    Element="account_group_menu"
                />
                <Text Name="Este modulo permite agregar distintos grupos a las cuentas contables." />
                <Body
                    Tittle="Anio Fiscal"
                />
                <List
                    Element="account_fiscal_year"
                />
                <Text Name="Este modulo permite agregar el anio fiscal de las operaciones contables." />
                <Body
                    Tittle="Anio Fiscal - Periodo"
                />
                <List
                    Element="account_fiscal_year_auto_create"
                />
                <Text Name="Este modulo permite agregar un periodo fiscal para generar el anio fiscal de forma automatica." />
                <Body
                    Tittle="Estados Financieros De Clientes Y Suplidores"
                />
                <List
                    Element="partner_statement"
                />
                <Text Name="Este módulo amplía la funcionalidad de Facturación para admitir la impresión de extractos de clientes y proveedores. Hay dos tipos de extractos, Actividad y Pendiente. Los detalles de antigüedad se pueden mostrar en los informes, expresados ​​en cubos de antigüedad, de modo que el cliente o el proveedor puedan revisar cuánto está abierto, vencido o vencido." />
                <Text Name="El estado de actividad proporciona detalles de toda la actividad en las cuentas por cobrar o por pagar del socio entre dos fechas seleccionadas. Esto incluye todas las facturas, reembolsos y pagos. Cualquier saldo pendiente con fecha anterior al período de estado de cuenta elegido aparecerá como un saldo a plazo en la parte superior del estado de cuenta. La lista se muestra en orden cronológico y está dividida por monedas." />
                <Text Name="El extracto pendiente proporciona detalles de todas las cuentas por cobrar o por pagar de los socios pendientes hasta una fecha en particular. Esto incluye todas las facturas no pagadas, los reembolsos no reclamados y los pagos pendientes. La lista se muestra en orden cronológico y está dividida por monedas." />

                <div className="subheading">Generacion De Reportes En General</div>
                <Body
                    Tittle="Generar Reportes XLSX"
                />
                <List
                    Element="report_xlsx"
                />
                <Text Name="Este modulo suministra las principales clases para generar los reportes en formato xlsx." />
                <Body
                    Tittle="Generar Reportes CSV"
                />
                <List
                    Element="account_export_csv"
                />
                <Text Name="Este modulo agrega un wizard para generar los reportes en formato csv." />

            </section>
        </article>
    );
}

export const ExternalModule = () => {
    return (
        <article>
            <Header
                Tittle='Terceros'
                Name='Modulos Externos'
            />
            <section>
                <Tittle
                    Tittle="Modulos de Terceros"
                    Code={OcaLogo}
                />
                <Text
                    Name="En esta seccion se especificaran varios modulos de diferentes funcionalidades, tanto como para la apariencia del ambiente, asi como la parte de reporteria contable."
                />
                <div className="subheading">Parte Financiera</div>
                <Body
                    Tittle="Reportes Financieros Dinamicos"
                />
                <List
                    Element="account_dynamic_reports"
                />
                <Text Name="Libro mayor Balance de prueba Antigüedad Balance Pérdidas y ganancias Flujo de caja Dinámico" />
                <div className="subheading">Apariencia del Ambiente</div>
                <Body
                    Tittle="Tema Para El Backend"
                />
                <List
                    Element="backend_theme_v12"
                />
                <Text Name="Tema para darle color al backend y color una imagen de fondo por empresa en el ambiente." />
            </section>
        </article>
    );
}
