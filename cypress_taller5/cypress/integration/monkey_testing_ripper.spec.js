describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomClick(10);
    })
})

function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.Dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}

function randomEvent(cantidadEventos) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var cantidadEventos = cantidadEventos;
    if(cantidadEventos > 0) {
        switch(getRandomInt(0, 4)) {
            case 0:
                // Hacer click en un link al azar
                cy.get('a').then($links => {
                    var randomLink = $links.get(getRandomInt(0, $links.length));
                    if(!Cypress.Dom.isHidden(randomLink)) {
                        cy.wrap(randomLink).click({force: true});
                        cantidadEventos = cantidadEventos - 1;
                    }
                    setTimeout(randomClick, 1000, cantidadEventos);
                });
                break;
            case 1:
                // Llenar un campo de texto al azar
                break;
            case 3:
                // Seleccionar un combo al azar
                break;
            case 4:
                // Hacer click en un botón al azar
                break;
        }
    }
}
