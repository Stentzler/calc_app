// Test for inputs and getting the request back from the API

context('Register', () => {
	it("Enters the landing page and click 'Iniciar'", () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();
	});

	it('Fill the form without days, make a post request to the API, assert the received answer', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.get('#valor').type('1000');
		cy.get('#parcelas').type('4');
		cy.get('#mdr').type('4');
		cy.contains('Calcular').click();

		cy.contains('Amanhã: R$ 865.00').should('be.visible');
		cy.contains('Em 15 dias: R$ 883.00').should('be.visible');
		cy.contains('Em 30 dias: R$ 902.00').should('be.visible');
		cy.contains('Em 90 dias: R$ 950.00').should('be.visible');
	});

	it('Fill the form, including days, make a request to the API, assert the received answer  ', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.get('#valor').type('1000');
		cy.get('#parcelas').type('4');
		cy.get('#mdr').type('4');
		cy.get('#days').type('1,24,32,47');
		cy.contains('Calcular').click();

		cy.contains('Amanhã: R$ 865.00').should('be.visible');
		cy.contains('Em 24 dias: R$ 894.00').should('be.visible');
		cy.contains('Em 32 dias: R$ 904.00').should('be.visible');
		cy.contains('Em 47 dias: R$ 918.00').should('be.visible');
	});

	it('Submitting without filling any of the fields', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.contains('Calcular').click();

		cy.contains('**Digite um Número').should('be.visible');
		cy.contains('Preencha o formulário.').should('be.visible');
	});

	it('Submitting with wrong data for "valor". Testing min and max', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.get('#valor').type('-1');
		cy.contains('Calcular').click();

		cy.contains('**Valor mínimo R$1000').should('be.visible');

		cy.get('#valor').clear();
		cy.get('#valor').type('100000001');
		cy.contains('Calcular').click();

		cy.contains('**Valor máximo R$100000000').should('be.visible');
	});

	it('Submitting with wrong data for "parcelas". Testing min and max', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.get('#parcelas').type('0');
		cy.contains('Calcular').click();

		cy.contains('**Parcela mínima 1').should('be.visible');

		cy.get('#parcelas').clear();
		cy.get('#parcelas').type('13');
		cy.contains('Calcular').click();

		cy.contains('**Parcela máxima 12').should('be.visible');
	});

	it('Submitting wrong data for "MDR". Testing min and max', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.get('#mdr').type('-1');
		cy.contains('Calcular').click();

		cy.contains('**Mínimo zero').should('be.visible');

		cy.get('#mdr').clear();
		cy.get('#mdr').type('101');
		cy.contains('Calcular').click();

		cy.contains('**Máximo 100').should('be.visible');
	});

	it('Submitting wrong data for "days". Testing other characters than comma and numbers', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.get('#days').type('1.3333');
		cy.contains('Calcular').click();

		cy.contains('**Apenas números separados por vírgulas').should('be.visible');
	});

	it('Submitting wrong data for "days". Starting with comma should include the value for Today', () => {
		cy.visit('http://localhost:3000');
		cy.viewport(1440, 900);

		cy.contains('Iniciar').click();

		cy.get('#valor').type('1000');
		cy.get('#parcelas').type('4');
		cy.get('#mdr').type('4');
		cy.get('#days').type(',,,1,,,,3');
		cy.contains('Calcular').click();

		cy.contains('Você Receberá:').should('be.visible');
		cy.contains('Hoje: R$ 864.00').should('be.visible');
		cy.contains('Amanhã: R$ 865.00').should('be.visible');
		cy.contains('Em 3 dias: R$ 867.00').should('be.visible');
	});
});
