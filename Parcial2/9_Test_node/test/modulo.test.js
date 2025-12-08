import assert from 'node:assert';
import test from 'node:test';
import * as operaciones from '../src/modulo.js';

test('Prueba de la función suma', () => {   
    const resultado = operaciones.suma(2, 3);
    assert.strictEqual(resultado, 5);
});
