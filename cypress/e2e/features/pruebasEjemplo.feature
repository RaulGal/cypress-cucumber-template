Feature: Pruebas de ejemplo

Scenario: Visitamos pagina web por medio de variable de entorno y accedemos a poyecto Hundred Souls
Given accedemos a la url de ejemplo
And usuario hace click en el elemento "Ultimos proyectos"
And usuario hace click en el elemento "Accede" numero 0
Then esperamos 10 segundos

Scenario: Visitamos pagina web por medio de visit() y comprobamos que estamos en el sitio correcto
Given accedemos a la url "https://raulgalvan.netlify.app/"
And usuario hace click en el elemento "Ultimos proyectos"