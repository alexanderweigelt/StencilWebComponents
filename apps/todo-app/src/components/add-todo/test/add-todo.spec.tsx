import { newSpecPage } from '@stencil/core/testing';
import { AddTodo } from '../add-todo';
import { h } from '@stencil/core';

describe('AddToDo Component', () => {
  it('matches the snapshot', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => (
        <AddTodo
          handleInputChange={() => {}}
          addTodo={() => {}}
          newTodoText="Test Todo"
        />
      ),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('calls handleInputChange on input change', async () => {
    const handleInputChangeMock = jest.fn();

    const page = await newSpecPage({
      components: [],
      template: () => (
        <AddTodo
          handleInputChange={handleInputChangeMock}
          addTodo={() => {}}
          newTodoText=""
        />
      ),
    });

    const input = page.root.querySelector('input');
    input.dispatchEvent(new Event('input'));

    expect(handleInputChangeMock).toHaveBeenCalledTimes(1);
  });

  it('calls addTodo on form submit', async () => {
    const addTodoMock = jest.fn();

    const page = await newSpecPage({
      components: [],
      template: () => (
        <AddTodo
          handleInputChange={() => {}}
          addTodo={addTodoMock}
          newTodoText="Test Todo"
        />
      ),
    });

    const form: HTMLFormElement = page.root.querySelector('form');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    await page.waitForChanges();

    expect(addTodoMock).toHaveBeenCalledTimes(1);
  });
});
