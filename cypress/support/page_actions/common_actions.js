class Common {
    constructor(){

    }

    visitUrl(url){
        cy.visit(url);
    }


}

export const common = new Common();