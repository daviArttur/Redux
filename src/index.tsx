import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Header from './components/Header';
import store from './store/configureStore';

const container = document.getElementById('root')!;

container.style.display = 'flex'
container.style.alignItems = 'center'
container.style.justifyContent = 'center'
container.style.flexDirection = 'column'

const root = createRoot(container);


root.render(
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
);
