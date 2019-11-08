import React from 'react'
import { Alert, majorScale, InlineAlert } from 'evergreen-ui'

type LoginErrorProps = {
    error?: string;
}

export function LoginError(props: LoginErrorProps) {
    return props.error ? (
        <InlineAlert 
            intent="danger"
            marginTop={majorScale(1)} 
        >{props.error}</InlineAlert>
    ) : null;
}