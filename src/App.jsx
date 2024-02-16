import React, { useState } from 'react';
import AddTodo from './components/addTodo';
import Todo from './components/Todo';
export default function App() {
  return (
    <>
      <div>Redux toolKit </div>

      <AddTodo />
      <Todo />
    </>
  );
}
