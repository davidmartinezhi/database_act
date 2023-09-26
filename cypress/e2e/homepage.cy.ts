describe('NewAlumnoForm', () => {
  beforeEach(() => {
    // Navegar a la página donde se encuentra el formulario
    cy.visit('http://localhost:3000'); 
  });

  it('should fill and submit the form', () => {
    // Llenar los campos de Información del Alumno
    cy.get('input[name="nombre"]').type('Juan');
    cy.get('input[name="apellidoP"]').type('Pérez');
    cy.get('input[name="apellidoM"]').type('García');

    // Llenar los campos de Dirección
    cy.get('input[name="calle"]').type('Calle 123');
    cy.get('input[name="numero"]').type('45');
    cy.get('input[name="colonia"]').type('Centro');
    cy.get('input[name="ciudad"]').type('Monterrey');
    cy.get('input[name="estado"]').type('Nuevo León');
    cy.get('input[name="codigoP"]').type('64000');

    // Seleccionar una universidad
    cy.get('select[name="universidad"]').select('Tec de Monterrey');

    // Hacer clic en el botón de enviar
    cy.get('button[type="submit"]').click();
    
  });
});