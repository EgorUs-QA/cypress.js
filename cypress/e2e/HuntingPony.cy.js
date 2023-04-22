describe('Автотесты на сайт', function () {
    it('Ханктингпони', function () {
         cy.visit('https://huntingpony.com'); 
         cy.clearAllCookies();
         cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click ();
         cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.wait(5000);
        })
    })