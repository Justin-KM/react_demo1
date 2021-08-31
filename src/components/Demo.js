
import React, { Component } from 'react'
//import { Stack, IStackTokens } from 'office-ui-fabric-react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export class 
Demo extends Component {
    render() {
        return (
            <div>
                <DefaultButton text="Standard"></DefaultButton>
                <PrimaryButton text="Primary"></PrimaryButton>
            </div>
        )
    }
}

export default Demo;
