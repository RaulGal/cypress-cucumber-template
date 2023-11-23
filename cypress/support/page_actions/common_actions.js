class Common {
    constructor(){

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


}

export const common = new Common();