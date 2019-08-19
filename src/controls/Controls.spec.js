// Test away!

import React from 'react';
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import Controls from './Controls'


describe('<Controls />', () => {
    it("matches snapshot" , () => {
        const tree = renderer.create(<Controls/>)  
        expect(tree.toJSON()).toMatchSnapshot();
      });

    it('provides buttons for toggling', ()=>{
      const { getByTestId } = render (<Controls/>);
      const openCloseBtn = getByTestId('control-open-close');
      const lockUnlockBtn = getByTestId('control-lock-unlock')

      expect(openCloseBtn).toBe(true);
      expect(lockUnlockBtn).toBe(true)
    })
})
    