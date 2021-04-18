import React from 'react';
import {TouchableOpacity} from 'react-native';
// Trouble importing shallow
import {shallow} from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16'
import {configure} from "enzyme";

configure({adapter: new Adapter()});

it('button renders correctly across all screens', () => {
    const tree = renderer.create(<TouchableOpacity />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('test onPress functionality for Forgot Password button', () => {
    const onPressEvent = jest.passwordReset('austinmathe@gmail.com');
    onPressEvent.mockReturnValue('Switch screens invoked');

    const wrapper = shallow(<CustomLink onPress = {onPressEvent} text = 'CustomLink Component'/>);
    wrapper.find(Text).first().props.onPress();

    // Expecting the screen to change once
    expect(onPressEvent.mock.calls.length).toBe(1);
})

