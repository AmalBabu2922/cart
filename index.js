import { registerRootComponent } from 'expo';

import App from './App';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { AppRegistry } from 'react-native';

const store = configureStore()
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent('main', () => RNRedux);
// registerRootComponent(App);
