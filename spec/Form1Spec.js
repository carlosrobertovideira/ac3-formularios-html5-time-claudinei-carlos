describe("Form 1 - Login", function() {
  
  beforeAll(function(){
    jasmine.getFixtures().fixturesPath = 'src';
  });

  beforeEach(function() {
    loadFixtures("form1.html");
    this.fixtures = $("#jasmine-fixtures");
    this.form = $("#form1");
    this.submit = jasmine.createSpy("submit").and.returnValue(false);
    this.form.submit(this.submit);
  });

  it("deve conter um campo de coleta de e-mail correto.", function() {
    expect("email").toExists();
    expect("email").toBeRequired();
    expect("email").toHaveLabel();
    expect("email").toBeEmail();
  });

  it("deve conter um campo de coleta de senha correto.", function() {
    expect("senha").toExists();
    expect("senha").toBeRequired();
    expect("senha").toHaveLabel();
    expect("senha").toBePassword();
  });

  it("deve conter um campo de seleção de 'lembre-se de mim' correto.", function(){
    expect("lembrar").toExists();
    expect("lembrar").not.toBeRequired();
    expect("lembrar").toHaveLabel();
    expect("lembrar").toBeCheckbox();
  });

  it("deve conter um botão de submissão de formulário.", function(){
    expect(this.form).toExistSubmit("ENTRAR");
  });

  it("deve contar um formulário correto.", function(){
    expect(this.form).toValidate();
    expect(this.form).toPost();
  });

});
