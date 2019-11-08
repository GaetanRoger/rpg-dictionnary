import React, { useState } from 'react'
import { Pane, TextInput, majorScale, Button } from 'evergreen-ui'
import { LoginError } from './LoginError';

type LoginFormProps = {
    onLoginClick: (email: string, password: string) => void | Promise<void>,
    onInputChange?: (email: string, password: string) => void | Promise<void>,
    loading?: boolean,
    error?: string
};

export function LoginForm(props: LoginFormProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function onEmailChange(event: any): void {
        setEmail(event.target.value);
        props.onInputChange && props.onInputChange(email, password);
    }

    function onPasswordChange(event: any): void {
        setPassword(event.target.value);
        props.onInputChange && props.onInputChange(email, password);
    }

    return (
        <Pane>
            <TextInput
                value={email}
                onChange={onEmailChange}
                isInvalid={!!props.error}
                disabled={props.loading}

                height={majorScale(5)}
                placeholder="your@email.com"
                type="email"
                width="100%"
                marginTop={majorScale(2)}
            />
            <TextInput
                value={password}
                onChange={onPasswordChange}
                isInvalid={!!props.error}
                disabled={props.loading}

                height={majorScale(5)}
                placeholder="Your password..."
                type="password"
                width="100%"
                marginTop={majorScale(1)}
            />
            <Pane display="flex" justifyContent="space-between" marginTop={majorScale(2)}>
                <Button
                    disabled={props.loading}
                    appearance="minimal"
                >I forgot my password</Button>
                <Button
                    onClick={() => props.onLoginClick(email, password)}
                    isLoading={props.loading}

                    appearance="primary"
                >Login</Button>
            </Pane>

        </Pane>
    )
}
