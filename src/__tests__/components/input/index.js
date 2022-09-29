import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../../../src/components/Input';

Enzyme.configure({adapter: new Adapter()});

it('Input changes the text after click', () => {
  // Render a checkbox with label in the document
  const input = shallow(<Input label='Label teste' placeholder='Placeholder teste' />);
  console.log(input.text())
  expect(input.text()).toEqual('Off');

  input.find('input').simulate('change');

  expect(input.text()).toEqual('On');
});