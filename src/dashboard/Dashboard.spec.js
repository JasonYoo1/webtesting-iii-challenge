// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react'


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
    it('checks buttons if it change state', () => {
        const { getByText } = render(<Dashboard />);
  
        const closeButton = getByText("Close Gate")
        fireEvent.click(closeButton);
        expect(getByText('Unlocked'));
        expect(getByText('Closed'));
        expect(getByText('Lock Gate'));
        expect(getByText('Open Gate'));

        const lockButton = getByText("Lock Gate")
        fireEvent.click(lockButton)
        expect(getByText('Locked'));
        expect(getByText('Closed'));
        expect(getByText('Unlock Gate'));
        expect(getByText('Open Gate'));

        const unlockButton = getByText("Unlock Gate")
        fireEvent.click(unlockButton)
        expect(getByText('Unlocked'));
        expect(getByText('Closed'));
        expect(getByText('Lock Gate'));
        expect(getByText('Open Gate'));

        const openButton = getByText("Open Gate")
        fireEvent.click(openButton)
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
        expect(getByText('Lock Gate'));
        expect(getByText('Close Gate'));

    })
});