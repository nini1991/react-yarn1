import React from 'react';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
//Enzyme.configure({ adapter: new Adapter() });
import App from '../App';
describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});