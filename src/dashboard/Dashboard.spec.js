// Test away

import React from 'react';
import renderer from 'react-test-renderer'


import Dashboard from './Dashboard'

//testing snap

describe('<Dashboard /', ()=>{
    const snapshotTree = renderer.create (<Dashboard />).toJSON()
    expect(snapshoTree).toMatchSnapshot()
})

