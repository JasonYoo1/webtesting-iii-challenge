// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';
import { render } from '@testing-library/react'



describe("<Display />", () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot();

    })
    
})

describe ('<Display />', ()=>{
    it('should display open and unlocked', ()=>{
        const {getText,queryByText} = render(<Display/>)
        expect (queryByText(/open/i)).toBeTruthy();
        expect (queryByText(/unlocked/i)).toBeTruthy();
    })
})

 