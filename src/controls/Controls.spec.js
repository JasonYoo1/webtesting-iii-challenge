// Test away!

import React from 'react';
import renderer from 'react-test-renderer'


import Controls from './Controls'


describe('<Controls />', () => {
    it("defaults to 'unlocked' and 'open'" , () => {
        let messageMock = "";
        const { getByText } = render(<Controls speak={speak} message={messageMock} />);
  
        expect(Controls.props.locked).toBe("locked");
      });
})
    