import React from 'react';
import { SafeEnvironmentContainer } from './SafeEnvironment.style'
import { Container } from '@material-ui/core'

const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente seguro
            </Container>
        </SafeEnvironmentContainer>
    )
}
export default SafeEnvironment;