// Test away!

import React from 'react';
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Controls from './Controls'


describe('<Controls />', () => {
//snapshot 
    it("matches snapshot" , () => {
        const tree = renderer.create(<Controls/>)  
        expect(tree.toJSON()).toMatchSnapshot();
      });
      //fulfills the req 
      //check buttons to toggle the closed and locked states.
      it('toggle closed and locked', ()=>{
        const { getByText } = render(<Controls/>)
        getByText(/close gate/i)
        getByText(/lock gate/i)
    })
})