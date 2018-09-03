describe("Form 1 - Login", function() {
  
  beforeAll(function(){
    jasmine.getFixtures().fixturesPath = 'src';
  });

  beforeEach(function() {
    loadFixtures("form1.html");
    this.fixtures = $("#jasmine-fixtures");
  });

  it("deve conter um campo de coleta de e-mail com label conectado.", function() {
    expect(false).toBe(true);
  });

  it("deve conter um campo de coleta de senha com label conectado.", function() {
    expect(false).toBe(true);
  });

  it("deve conter um campo de seleção de 'lembre-se de mim' com label conectado.", function(){
    expect(false).toBe(true);
  });

  it("deve conter um botão de submissão de formulário.", function(){
    expect(false).toBe(true);
  });

  it("não deve submeter o formulário se ambos os campos de e-mail e senha não estiverem preenchidos.", function(){
    expect(false).toBe(true);
  });

});
