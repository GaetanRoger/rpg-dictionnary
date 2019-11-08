import React from 'react';
import { Pane, Heading, majorScale } from 'evergreen-ui';


export function LoginHeader() {
    return (
        <Pane borderBottom paddingBottom={majorScale(3)}>
          <Heading size={900} is="h1">RPG Dictionary</Heading>
        </Pane>
    );
}