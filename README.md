# Proyecto Cypress - Cucumber
Esto es un proyecto plantilla para crear tu propio proyecto de automatizacion de Cypress con Cucumber.

se sigue la metodologia POM (Page, Object, Model) usando la sintaxis Gherkin (Cucumber), lo que hace mas legible para los usuarios sin formación técnica como por la máquina. Ademas de esto crea un diccionario interno con las instrucciones automatizadas de tu proyecto.
El stack principal del ecosistema es:
| Herramienta | Descripción |
| ------ | ------ |
| Cypress | Herramienta para ejecutar tests E2E |
| cypress-cucumber-preprocessor | Plugin que permite a Cypress entender syntaxis Gherkin (Cucumber) |

Empezando
Estas instrucciones muestran cómo utilizar el proyecto.

Requisitos
Para ejecutar correctamente el proyecto en local se necesita:

Node.js
npm


Instalación
Desde el directorio raíz del proyecto:
npm install
Las dependencias, especialmente Cypress, serán instaladas.

Ejecutando las pruebas
Si se ejecuta Cypress sin tests se crearán unos por defecto. Para ejecutar localmente algún test, hay que crearlo si es nuevo y ponerlos en el directorio cypress/e2e/features.

Ejecutar los tests localmente con UI
$(npm bin)/cypress open
Se abrirá Cypress con la interfaz gráfica, útil durante el proceso de creación/debugueo de tests.

Ejecutar los tests localmente desde la consola
Explain what these tests test and why
$(npm bin)/cypress run
Se ejecutarán los escenarios desde la consola, usando un headless browser.

Ciclo de desarrollo de tests y estructura
¿Cómo se puede utilizar todo esto para añadir un nuevo caso de prueba?
Pondremos un ejemplo de como se podria proceder:
Añade un nuevo archivo .feature en cypress/e2e/features con cualquier nombre.
Se hace manualmente el test que se quiere automatizar, para enfocarnos en qué queremos testear.
Se definen los pasos del test (o de uno en uno) con lenguaje Gherkin (escenarios con Given/When/Then). Cada acción individual del usuario (hacer click en un elemento, escribir en un input, esperar un mensaje concreto) es un solo paso, para poder ser adecuadamente reutilizado en futuros escenarios.
Se implementan los pasos del escenario anteriormente definidos en cypress/e2e/page_steps, vacíos. Todos los page_steps son compartidos, incluso si están en diferentes archivos, por lo que probablemente se puedan reutilizar algunos pasos comunes, como clicar en un botón.
Se utilizan objetos para modelizar las diferentes páginas o componentes/módulos reutilizables en cada página, definiéndose en el directorio cypress/support/page_actions. Aquí se implementan los selectores de los elementos y otras propiedades de la página, como su URL, en forma de propiedades del page object. También tendrá funciones que contendrán toda la lógica de interacción de la página (la mayor parte de lo que ofrece Cypress), que no debería definirse fuera para su posterior reutilización.
En los page_steps, se llama a las acciones (definidas en los page_action) que deba hacer cada uno, importando la página donde se haga esa acción e invocando su función correspondiente.
Abrimos Cypress en modo UI
Seleccionamos el feature y lo ejecutamos. Los posibles errores durante la implementación se pueden corregir sin cerrar el test. Al guardar todo, Cypress lo detectará y lanzará el escenario de nuevo.
Implementamos el resto de pasos del mismo modo hasta completar un escenario.

Notas

En cypress/support/index.js (el punto de entrada) se leen las fixtures y se setean otros datos necesarios como globales.
Un ejemplo del punto anterior es un sufijo único numérico para todos los objetos, de forma que si ya existieran con el mismo nombre nunca habrá colisión de datos.
En cypress/support/commands.js se definen o sobreescriben funciones de Cypress. Muy utilizado para llamadas REST o gestionar la sesión o crear tu propias funciones de Cypress
En cypress/support/utils hay pequeñas utilidades o helpers.
