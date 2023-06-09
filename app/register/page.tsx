import React  from 'react'
import ArtificiumAbsoluteLogo from '../AppComponents/ArtificiumAbsoluteLogo/ArtificiumAbsoluteLogo'
import RegisterPageWrapper from './components/RegisterPageWrapper/RegisterPageWrapper'
import RegisterWrapper from './components/RegisterWrapper/RegisterWrapper'
import RegisterFunctionalityBlock from './components/RegisterFunctionalityBlock/RegisterFunctionalityBlock'
import RegisterHeaders from './components/RegisterHeaders/RegisterHeaders'
import RegisterForm from './components/RegisterForm/RegisterForm'
import SignInRedirect from './components/SignInRedirect/SignInRedirect'
import RegisterFooter from './components/RegisterFooter/RegisterFooter'
import RegisterIllustration from './components/RegisterIllustration/RegisterIllustration'
const Register = () => {
  return(
    <RegisterPageWrapper>
        <RegisterWrapper>
            <ArtificiumAbsoluteLogo position='relative' positionCordinates='top-5 left-5'/>   
            <RegisterFunctionalityBlock>
                <RegisterHeaders/>
                <RegisterForm/>               
                <SignInRedirect/>
                <RegisterFooter/>
            </RegisterFunctionalityBlock>
        </RegisterWrapper>
        <RegisterIllustration/>
    </RegisterPageWrapper>
  )
}

export default Register
