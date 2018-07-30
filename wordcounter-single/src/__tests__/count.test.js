import countWords from '../countWords.js';

describe('the counting funciton',()=>{
  it('counts the correct number of words',()=>{
    expect(countWords('One two three')).toBe(3);
  });
  it('counts an empty string', ()=>{
    expect(countWords('')).toBe(0);
  });
});
