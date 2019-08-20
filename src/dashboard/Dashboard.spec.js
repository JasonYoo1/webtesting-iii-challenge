// Test away
import React from 'react';
import { render } from '@testing-library/react'


import Dashboard, { asyncFunc } from './Dashboard'

//integration test, texting component itself

describe("<Dashboard />", ()=>{
    it('has the state unlock lock open close', ()=>{
        const { getByText } = render(<Dashboard/>);

        expect(getByText('Unlocked'))
    })
})


//unit test (tests a function)