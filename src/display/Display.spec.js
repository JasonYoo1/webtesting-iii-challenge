// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect';



describe("<Display />", () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot();

    })
    it('red-led test', () => {
        const component = render(<Display closed={true} locked={true}/>)
        const display = component.getByText('Locked')
        expect(display).toHaveClass('red-led')
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

 