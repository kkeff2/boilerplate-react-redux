import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

var context = require.context('./src', true, /.test\.js$/);
context.keys().forEach(context);