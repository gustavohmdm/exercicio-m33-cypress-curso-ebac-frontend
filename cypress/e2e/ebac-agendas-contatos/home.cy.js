describe('Testes na agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('abc')
        cy.get('[type="email"]').type('abc@teste')
        cy.get('[type="tel"]').type('123456789')
        cy.get('.adicionar').click()
        cy.contains('abc').should('exist')
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('def')
        cy.get('[type="email"]').clear().type('def@teste')
        cy.get('[type="tel"]').clear().type('111111111')
        cy.get('.alterar').click()
        cy.contains('def').should('exist')
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.contains('abc').should('not.exist')
    })
})
