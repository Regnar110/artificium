import LoginPageWrapper from './components/LoginPageWrapper/LoginPageWrapper'
import LoginSection from './components/LoginSection/LoginSection'
import ArtificiumAbsoluteLogo from '../AppComponents/ArtificiumAbsoluteLogo/ArtificiumAbsoluteLogo'
import LoginFunctionalityBlock from './components/LoginFunctionalityBlock/LoginFunctionalityBlock'
import LoginHeaders from './components/LogInHeaders/LoginHeaders'
import LoginButtonsWrapper from './components/LoginButtonsWrapper/LoginButtonsWrapper'
import LoginButtons from './components/LoginButtonsWrapper/LoginButtons/LoginButtons'
import SpaceBreaker from './components/LoginButtonsWrapper/SpaceBreaker'
import LoginForm from './components/LoginForm/LoginForm'
import SignUpRedirect from './components/SignUpRedirect/SignUpRedirect'
import LoginIllustration from './components/LoginIllustration/LoginIllustration'

export default function Login() {
  return (
    <LoginPageWrapper>
      <LoginSection>
        <ArtificiumAbsoluteLogo position='absolute' positionCordinates='top-5 left-5'/>
        <LoginFunctionalityBlock>
          <LoginHeaders/>
          <LoginButtonsWrapper>
            <LoginButtons/>
            <SpaceBreaker/>
          </LoginButtonsWrapper> 
          <LoginForm/>
          <SignUpRedirect/>
        </LoginFunctionalityBlock>
      </LoginSection>
      <LoginIllustration/>
    </LoginPageWrapper>
  )
}
