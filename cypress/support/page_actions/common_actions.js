class Common {
    constructor(){

    }

    visitUrl(){
        cy.visit("https://raulgalvan.netlify.app/");
    }


}

export const common = new Common();