class Common {
    constructor(){
        this.hundredSoulsId = 'project-hundred-souls';

    }

    visitUrl(url){
        cy.visit(url);
    }

    clickButtonName(name){
        cy.findByText(name, {selector: 'button'}).click();
    }

    clickElementName(name){
        cy.findByText(name).click();
    }

    visitUrlEnv(){
        cy.getEnv().then((env)=>{
            this.urlEnv = env.url;
            this.env = env.checkEnv; 
            cy.log(`Te encuentras en el entorno de ${this.env}`);
            cy.visit(this.urlEnv);
        })
    }
    clickElementNameWithNumber(name, number){
        cy.findAllByText(name).eq(number).click();
    }


}

export const common = new Common();