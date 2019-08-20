// Test away!

import React from 'react';
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
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
    it(' should toggleClosed change on btn click', ()=>{
        //created mock function
        const toggleClosed = jest.fn();
        const { getByText } = render(<Controls toggleClosed={toggleClosed}/>)
        const button = getByText(/close gate/i)
        fireEvent.click(button)
        expect(toggleClosed).toBeCalledTimes(1)
    })
})