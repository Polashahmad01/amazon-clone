import ReactDOM from 'react-dom';

import './index.css';
import App from './component/App';
import { StateProvider } from './component/StateProvider/StateProvider';
import { initialState } from './component/reducer/reducer';
import reducer from './component/reducer/reducer'

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer} >
        <App />
    </StateProvider>,
    document.querySelector('#root')
)