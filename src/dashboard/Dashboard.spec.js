// Test away

import React from 'react';
import renderer from 'react-test-renderer'


import Dashboard, { asyncFunc } from './Dashboard'

//testing snap

describe('<Dashboard /', ()=>{
    const snapshotTree = renderer.create (<Dashboard />).toJSON()
    expect(snapshoTree).toMatchSnapshot()
})



describe("asyncFunc", ()=>{
    it ('eventually resolves to success', ()=>{
        let resolvedValue = null;
        const expected = "success"
        asyncFunc().then(res => {
            resolvedValue = res;
            expect(resolvedValue).toEqual(expected)
        })
    })
}
)