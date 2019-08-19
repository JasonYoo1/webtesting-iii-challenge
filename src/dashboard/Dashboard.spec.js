// Test away

import React from 'react';
import renderer from 'react-test-renderer'


import Dashboard, { asyncFunc } from './Dashboard'

//integration test, texting component itself

describe("<Dashboard />", ()=>{
    const snapshotTree = renderer.create (<Dashboard />)
    expect(snapshotTree.toJSON()).toMatchSnapshot()
})


//unit test (tests a function)
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