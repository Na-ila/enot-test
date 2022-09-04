import TodoProvider from './context/todoContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from './components/Header';
import ToDoBlock from './components/ToDoBlock';
import NewsLine from './components/NewsLine';
import ModalWindow from './components/ModalWindow';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <Header />
        <ToDoBlock />
        <NewsLine />
        <ModalWindow />
      </TodoProvider>
    </QueryClientProvider>
  );
}

export default App;
