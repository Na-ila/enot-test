import TodoProvider from './context/todoContext';

import Header from './components/Header';
import ToDoBlock from './components/ToDoBlock';
import NewsLine from './components/NewsLine';

function App() {
  return (
    <TodoProvider>
      <Header />
      <ToDoBlock />
      <NewsLine />
    </TodoProvider>
  );
}

export default App;
