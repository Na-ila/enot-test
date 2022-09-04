import TodoProvider from './context/todoContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from './components/Header';
import ToDoBlock from './components/ToDoBlock';
import NewsLine from './components/NewsLine';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <Header />
        <ToDoBlock />
        <NewsLine />
      </TodoProvider>
    </QueryClientProvider>
  );
}

export default App;
