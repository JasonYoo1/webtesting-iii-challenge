// Test away
import React from 'react';
import { render } from '@testing-library/react'


import Dashboard, { asyncFunc } from './Dashboard'

//integration test, texting component itself

describe("<Dashboard />", ()=>{
    it('has the state unlock lock open close', ()=>{
        const { getByText } = render(<Dashboard/>);
        //this is done by checking state in Dashboard.js
        expect(getByText('Unlocked'))
        expect(getByText('Open'));
        expect(getByText('Lock Gate'));
        expect(getByText('Close Gate'));
        
    })
})


//unit test (tests a function)