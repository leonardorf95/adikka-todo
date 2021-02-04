import 'core-js/stable';
import 'regenerator-runtime/runtime';

import todoController from './controllers/todoController.js';

test('Get All Items', () => {
    const data = todoController.getAlls();

    expect(data).not.toBeNull();
});
