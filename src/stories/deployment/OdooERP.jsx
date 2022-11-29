import React from "react";
import OdooLogo from '../assets/odoo_logo_1.png'
import OcaLogo from '../assets/OCA_Contributor_Logo.png'
import Parameters from '../assets/parameters.png'
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

export const ServerConfMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros Incio del Servicio'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Configuración de inicio del servidor</div>
                <Body
                    Tittle="Parametros"
                />
                <List
                    Element="admin_passwd"
                />
                <Text
                    Name="Contraseña de administrador."
                />
                <List
                    Element="addons_path"
                />
                <Text
                    Name="Ruta absoluta donde se guardan los diferentes módulos del sistema, se pueden especificar diferentes rutas separadas por coma (,)."
                />
                <List
                    Element="data_dir"
                />
                <Text
                    Name="Directorio donde se guardarán los datos del sistema."
                />
            </section>
        </article>
    );
}

export const HttpConfMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros HTTP'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Configuración HTTP</div>
                <List
                    Element="http_interface"
                />
                <Text
                    Name="Interfaz de red de escucha para servicio HTTP."
                />
                <List
                    Element="http_port"
                />
                <Text
                    Name="Puerto socket de conexión hacia el servicio de Odoo a través de HTTP."
                />
                <List
                    Element="longpolling_port"
                />
                <Text
                    Name="Puerto socket de conexión hacia el servicio de Odoo a través de long polling."
                />
                <List
                    Element="http_enable"
                />
                <Text
                    Name="Con valor: False; deshabilita completamente los servicios HTTP y Longpolling."
                />
                <List
                    Element="proxy_mode"
                />
                <Text
                    Name="Activa proxy reverso WSGI, solo se dispone cuando existe un servidor proxy de confianza detrás."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const XMLRpcMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros XML-RPC'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Configuración XML-RPC</div>
                <Text
                    Name="El protocolo es usado por el sistema para hacer los llamados de métodos de modelos de Odoo. Este protocolo se puede deshabilitar o crear ciertos criterios de conexión segura. Los parámetros principales son:"
                />
                <List
                    Element="xmlrpc_interface"
                />
                <Text
                    Name="Interfaz, dirección IP o URL."
                />
                <List
                    Element="xmlrpc_port"
                />
                <Text
                    Name="Puerto de conexión."
                />
                <List
                    Element="no_xmlrpc"
                />
                <Text
                    Name="Por defecto está habilitado, se puede deshabilitar con True."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const WebInterfaceMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros Interfaz Web'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Configuración interfaz web</div>
                <List
                    Element="dbfilter"
                />
                <Text
                    Name="Filtro con expresiones regulares para habilitar bases de datos disponibles en la presentación de selección de las mismas. Se pueden usar los argumentos %d para dominio y %h para host."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const TestMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros Para Pruebas'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Configuración para pruebas</div>
                <List
                    Element="test_file"
                />
                <Text
                    Name="Lanzador de archivo python o YML de prueba."
                />
                <List
                    Element="test_report_directory"
                />
                <Text
                    Name="Si se configura un directorio, entonces todos los reportes de ejemplos serán guardados allí."
                />
                <List
                    Element="test_enable"
                />
                <Text
                    Name="Habilita YML y una unidad de prueba."
                />
                <List
                    Element="test_commit"
                />
                <Text
                    Name="Confirma cambios realizados en la base de datos realizados por YAML o XML de pruebas."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const LoggingMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros de Sesion'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Configuración Logging</div>
                <List
                    Element="logfile"
                />
                <Text
                    Name="Habilita una rotación del archivo log del sistema."
                />
                <List
                    Element="syslog"
                />
                <Text
                    Name="Si se configura con valor: True; envía los logs del sistema al archivo log del sistema operativo."
                />
                <List
                    Element="log_handler"
                />
                <Text
                    Name="Habilita ciertos prefijos en cada log para realizar debug en el sistema."
                />
                <List
                    Element="log_db"
                />
                <Text
                    Name="Habilita logs de la base de datos."
                />
                <List
                    Element="log_db_level"
                />
                <Text
                    Name="Niveles de logs de la base de datos, por defecto es: warning."
                />
                <List
                    Element="log_level"
                />
                <Text
                    Name="Especifica el nivel de log del sistema por defecto es: info; se pueden elegir: debug_rpc, warn, test, critical, debug_sql, error, debug, debug_rpc_answer, notset."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const SMTPMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros SMTP'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Configuración SMTP</div>
                <List
                    Element="email_from"
                />
                <Text
                    Name="Se especifica una dirección de correo electrónico para envío de correos."
                />
                <List
                    Element="smtp_server"
                />
                <Text
                    Name="Se especifica un servidor SMTP para envío de correo electrónico."
                />
                <List
                    Element="smtp_port"
                />
                <Text
                    Name="Se especifica el puerto de envío de correo electrónico, por defecto es el número 25."
                />
                <List
                    Element="smtp_ssl"
                />
                <Text
                    Name="Si pasa a través de un canal seguro con SSL (STARTTLS)."
                />
                <List
                    Element="smtp_user"
                />
                <Text
                    Name="Especifica el usuario para el envío de correo electrónico."
                />
                <List
                    Element="smtp_password"
                />
                <Text
                    Name="Se especifica la contraseña del usuario para el envío de correo electrónico."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const DataBaseMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros Base de Datos'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Opciones relacionadas con la base de datos</div>
                <List
                    Element="db_name"
                />
                <Text
                    Name="Se especifica el nombre de la base de datos por defecto."
                />
                <List
                    Element="db_user"
                />
                <Text
                    Name="Se especifica el nombre de usuario para la conexión hacia la base de datos por defecto."
                />
                <List
                    Element="db_password"
                />
                <Text
                    Name="Se especifica la contraseña del nombre de usuario para la conexión hacia la base de datos por defecto."
                />
                <List
                    Element="pg_path"
                />
                <Text
                    Name="Se especifica la ruta del ejecutable del manejador de base de datos."
                />
                <List
                    Element="db_host"
                />
                <Text
                    Name="Se especifica la dirección IP o nombre de servidor donde está el manejador de la base de datos."
                />
                <List
                    Element="db_port"
                />
                <Text
                    Name="Se especifica el puerto de conexión hacia el manejador de base de datos."
                />
                <List
                    Element="db_sslmode"
                />
                <Text
                    Name="Se especifica el modo de conexión segura hacia el manejador de base de datos si está en otro servidor distinto al del sistema, las opciones son: disable, allow, prefer, require, verify-ca, verify-full."
                />
                <List
                    Element="db_maxconn"
                />
                <Text
                    Name="Se especifica el máximo número de conexiones físicas hacia PostgreSQL."
                />
                <List
                    Element="db_template"
                />
                <Text
                    Name="Se especifica una base de datos plantilla personalizada para crear nuevas bases de datos."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const WorldMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Internacionalización'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Opciones de internacionalización</div>
                <List
                    Element="load_language"
                />
                <Text
                    Name="Se especifican los idiomas que se desean cargar en el sistema por defecto."
                />
                <List
                    Element="language"
                />
                <Text
                    Name="Se especifican los archivos de traducción, se puede usar: translate_out y translate_in."
                />
                <List
                    Element="translate_out"
                />
                <Text
                    Name="Se exporta todas las sentencias que serán traducidas a un archivo: .CSV, PO o TGZ."
                />
                <List
                    Element="translate_in"
                />
                <Text
                    Name="Se importa de un archivo: .CSV o PO; todas las traducciones. Solo si se habilita el parámetro: language."
                />
                <List
                    Element="overwrite_existing_translations"
                />
                <Text
                    Name="Sobre escribe traducciones de términos existentes en la actualización de un módulo o importa desde un archivo: .CSV o PO."
                />
                <List
                    Element="translate_modules"
                />
                <Text
                    Name="Especifica módulos para ser exportados, se combina con: translate_out."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const SecurityMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros de Seguridad'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Opciones relacionadas con la seguridad</div>
                <List
                    Element="list_db"
                />
                <Text
                    Name="Con valor False; se deshabilita la opción de visualizar la lista de bases de datos disponibles en el sistema. Por defecto es: True."
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const AdvancedMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Parametros Avanzados'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Opciones avanzadas</div>
                <List
                    Element="dev_mode"
                />
                <Text
                    Name="Modo desarrollador dispone algunos valores tales como: all, [pudb|wdb|ipdb|pdb], reload, qweb, werkzeug, xml. Si se usan varias de estas opciones, se separan con coma (,)."
                />
                <List
                    Element="shell_interface"
                />
                <Text
                    Name="Se configura una REPL preferida para el uso en modo de shell."
                />
                <List
                    Element="stop_after_init"
                />
                <Text
                    Name="Detiene el servidor después de su inicialización. Su valor por defecto es: False."
                />
                <List
                    Element="osv_memory_count_limit"
                />
                <Text
                    Name="Forzar un límite en el número máximo de registros mantenidos en la memoria de la tabla virtual osv_memory. Es un número entero."
                />
                <List
                    Element="osv_memory_age_limit"
                />
                <Text
                    Name="Forzar el número de tiempo máximo de registros mantenidos en la memoria de la tabla virtual osv_memory. Este número está expresado en hora, es un flotante. Por defecto tiene valor: 1.0"
                />
                <List
                    Element="max_cron_threads"
                />
                <Text
                    Name="Se determina el número máximo de procesos para tareas programadas (cron) corriendo simultáneamente en el sistema. Por defecto tiene un valor de: 2."
                />
                <List
                    Element="unaccent"
                />
                <Text
                    Name="Opción para habilitar no usar acento, que provee la base de datos. Por defecto es: False."
                />
                <List
                    Element="geoip_database"
                />
                <Text
                    Name="Ruta absoluta para archivo de GeoIP. Por defecto es: /usr/share/GeoIP/GeoLite2-City.mmdb"
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
            </section>
        </article>
    );
}

export const MultiProcessMethod = () => {
    return (
        <article>
            <Header
                Tittle='Rendimiento'
                Name='Configuracion'
            />
            <section>
                <TittleOdoo
                    Tittle='Multiprocesamiento'
                    Code={Parameters}
                />
                <Text
                    Name="Existen varios parametros que permiten hacer una configuracion del servicio de odoo, los mismos se definen en el archivo de configuracion '.conf'."
                />
                <Text
                    Name="A continuacion vamos a visualizar por categoria algunos de los parametros existentes y su definicion de uso."
                />
                <div className="subheading">Opciones de multiprocesamiento</div>
                <List
                    Element="workers"
                />
                <Text
                    Name="Especifica el número de 'trabajadores', por defecto con valor: 0; es un número entero y deshabilita el modo de bifurcación."
                />
                <List
                    Element="limit_memory_soft"
                />
                <Text
                    Name="Máximo número permitido de memoria virtual por 'trabajador', cuando el número es alcanzado, se reinicia la solicitud actual. Por defecto es el resultado de: 2048 * 1024 * 1024. Este valor es número entero."
                />
                <List
                    Element="limit_memory_hard"
                />
                <Text
                    Name="Máximo número permitido de memoria virtual por 'trabajador', cuando el número es alcanzado, cualquier intento de uso de memoria fallará. Por defecto tiene un valor del resultado de la siguiente operación: 2560 * 1024 * 1024. Es de tipo numérico."
                />
                <List
                    Element="limit_time_cpu"
                />
                <Text
                    Name="Máximo número de tiempo de CPU permitido por solicitud, es entero y por defecto es: 60"
                />
                <List
                    Element="limit_time_real"
                />
                <Text
                    Name="Máximo número real de tiempo permitido por solicitud, es entero y por defecto es: 120"
                />
                <List
                    Element="limit_time_real_cron"
                />
                <Text
                    Name="Máximo número real de tiempo permitido por un trabajo de tarea programada (cron) del sistema. Por defecto toma el valor del parámetro limit_time_real. Si se configura con valor 0; entonces no tendrá límite."
                />
                <List
                    Element="limit_request"
                />
                <Text
                    Name="Máximo número de solicitud de procesos por 'trabajador', es un número entero y por defecto tiene valor: 8192"
                />
                {/* <img style={{ width: 730, height: 400, borderRadius: 20 }} src={DNSRecord} /> */}
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
