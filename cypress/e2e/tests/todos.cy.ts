/// <reference types="cypress" />

describe('Todo App', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    cy.clearLocalStorage();
    // Visit the todos page
    cy.visit('/todos');
  });

  it('should start with an empty todo list', () => {
    cy.get('.space-y-3 > div').should('have.length', 0);
    cy.contains('Total todos: 0').should('exist');
    cy.contains('Completed: 0').should('exist');
  });

  it('can add new todo items', () => {
    const newTodo = 'Buy groceries';
    
    // Add new todo
    cy.get('input[type="text"]').type(`${newTodo}{enter}`);
    
    // Verify todo was added
    cy.get('.space-y-3 > div').should('have.length', 1);
    cy.contains(newTodo).should('exist');
    cy.contains('Total todos: 1').should('exist');
  });

  it('can mark todo as completed', () => {
    const todo = 'Exercise';
    
    // Add new todo
    cy.get('input[type="text"]').type(`${todo}{enter}`);
    
    // Mark as completed
    cy.get('input[type="checkbox"]').click();
    
    // Verify completion
    cy.contains(todo).should('have.class', 'line-through');
    cy.contains('Completed: 1').should('exist');
  });

  it('can edit todo items', () => {
    const originalTodo = 'Original task';
    const editedTodo = 'Edited task';
    
    // Add new todo
    cy.get('input[type="text"]').type(`${originalTodo}{enter}`);
    
    // Click edit button
    cy.contains('Edit').click();
    
    // Edit todo
    cy.get('input[type="text"]').last().clear().type(editedTodo);
    cy.contains('Save').click();
    
    // Verify edit
    cy.contains(editedTodo).should('exist');
    cy.contains(originalTodo).should('not.exist');
  });

  it('can delete todo items', () => {
    const todo = 'Task to delete';
    
    // Add new todo
    cy.get('input[type="text"]').type(`${todo}{enter}`);
    
    // Verify todo exists
    cy.contains(todo).should('exist');
    
    // Delete todo
    cy.contains('Delete').click();
    
    // Verify deletion
    cy.contains(todo).should('not.exist');
    cy.contains('Total todos: 0').should('exist');
  });

  it('persists todos after page reload', () => {
    const todo = 'Persistent todo';
    
    // Add new todo
    cy.get('input[type="text"]').type(`${todo}{enter}`);
    
    // Reload page
    cy.reload();
    
    // Verify todo still exists
    cy.contains(todo).should('exist');
  });

  it('handles multiple todos', () => {
    const todos = ['First task', 'Second task', 'Third task'];
    
    // Add multiple todos
    todos.forEach(todo => {
      cy.get('input[type="text"]').type(`${todo}{enter}`);
    });
    
    // Verify all todos exist
    cy.get('.space-y-3 > div').should('have.length', 3);
    todos.forEach(todo => {
      cy.contains(todo).should('exist');
    });
  });

  it('validates empty todo input', () => {
    // Try to add empty todo
    cy.get('input[type="text"]').type('{enter}');
    
    // Verify no todo was added
    cy.get('.space-y-3 > div').should('have.length', 0);
  });
});