
describe('Автотесты на авторизацию', function () {
    it('Верный логин,верный пароль', function () {
         cy.visit('https://login.qa.studio/');  
         cy.get('#mail').type('german@dolnikov.ru'); 
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
  describe('1.2 Забыли пароль', function () {
    it('Логика и восстановление пароля', function () {
         cy.clearAllCookies();
         cy.visit('https://login.qa.studio/');  
         cy.get('#forgotEmailButton').click();
         cy.contains('Восстановите пароль');
         cy.get('#mailForgot').type('iLoveqastudio1@mail.ru');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');
          })
    })

    describe('1.3 Напиши проверку на негативный кейс авторизации', function () {
        it('Правильный логин,не правильный пароль', function () {
             cy.clearAllCookies();
             cy.visit('https://login.qa.studio/');  
             cy.get('#mail').type('german@dolnikov.ru'); 
             cy.get('#pass').type('iLoveqastudio2');
             cy.get('#loginButton').click();
             cy.contains('Такого логина или пароля нет');
             cy.get('#exitMessageButton > .exitIcon');
              })
        })
        describe('1.4 Напиши проверку на негативный кейс авторизации', function () {
            it('Не правильный логин,правильный пароль', function () {
                 cy.clearAllCookies();
                 cy.visit('https://login.qa.studio/');  
                 cy.get('#mail').type('german@olnikov.ru'); 
                 cy.get('#pass').type('iLoveqastudio1');
                 cy.get('#loginButton').click();
                 cy.contains('Такого логина или пароля нет');
                 cy.get('#exitMessageButton > .exitIcon');
                  })
            })
            describe('1.5 Напиши проверку на негативный кейс валидации', function () {
                it('Ввести логин без @, Ввести правильный пароль', function () {
                     cy.clearAllCookies();
                     cy.visit('https://login.qa.studio/');  
                     cy.get('#mail').type('germanolnikov.ru'); 
                     cy.get('#pass').type('iLoveqastudio1');
                     cy.get('#loginButton').click();
                     cy.contains('Нужно исправить проблему валидации');
                     cy.get('#exitMessageButton > .exitIcon');
                      })
                })
                describe('1.6 Напиши проверку на приведение к строчным буквам в логине', function () {
                    it('Ввести логин GerMan@Dolnikov.ru, Ввести правильный пароль', function () {
                         cy.clearAllCookies();
                         cy.visit('https://login.qa.studio/');  
                         cy.get('#mail').type('GerMan@Dolnikov.ru'); 
                         cy.get('#pass').type('iLoveqastudio1');
                         cy.get('#loginButton').click();
                         cy.contains('Авторизация прошла успешно');
                         cy.get('#exitMessageButton > .exitIcon');
                          })
                    })