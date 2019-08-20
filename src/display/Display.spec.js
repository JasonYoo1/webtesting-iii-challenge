// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';
import { render, getByText } from '@testing-library/react'



describe("<Display />", () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot();

    })
    
})

describe ('<Display />', ()=>{
    it('should display open and unlocked', ()=>{
        const {getByText} = render(<Display/>)
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    })
    it('Changes via props',()=>{
        const {getByText} = render(<Display locked ={true} closed={true}/>);
        expect(getByText('Locked'));
        expect(getByText('Closed'));
    })
})

 