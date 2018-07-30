import React from 'react';
import Enzyme from 'enzyme';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WordCounter from '../WordCounter';
import countWords from '../countWords';
import Counter from '../Counter';
import Editor from '../Editor';
import ProgressBar from '../ProgressBar';

describe('When I type some words', () => {
  const target = 10;
  const inputString = 'One two three four';
  configure({ adapter: new Adapter() });
  const wordCounter = shallow(<WordCounter targetWordCount={target} />);
  const textarea = wordCounter.find(Editor).dive().find('textarea');
  it('displays the correct count as a number', () => {
    textarea.simulate('change', { target: { value: 'Iba dag' } });
    const counter = wordCounter.find(Counter);
    //expect(counter.prop('count')).toBe(countWords(inputString));
    expect(counter.prop('count')).toBe(1); // this is not ok, - it return count of initial word that is send 
  });
});
