import { render, screen } from '@testing-library/react'
import RegisterForm from './RegisterForm'

import userEvent from '@testing-library/user-event'

const mock_FORM_SUBMIT_FN = jest.fn()

const renderTestedComponent = () => render(<RegisterForm/>)

beforeAll(()=> {
  userEvent.setup()
})

 
describe('RegisterForm component', () => {
  it('should render', () => {
    const {container:snapshotContainer} = renderTestedComponent()
    expect(snapshotContainer).toMatchSnapshot()
  })

  it('should render form fields', () => {
    renderTestedComponent()
    expect(screen.getByRole('register-form-element')).toBeTruthy();
    expect(screen.getByLabelText('E-mail')).toBeTruthy();
    expect(screen.getByLabelText('Nickname')).toBeTruthy();
    expect(screen.getByLabelText('Password')).toBeTruthy();
    expect(screen.getByLabelText('Repeat password')).toBeTruthy();
    expect(screen.getByRole('conditions_checkbox')).toBeTruthy();
    expect(screen.getByTestId('Register')).toBeTruthy();
  })

  it('submit button should call onSubmit method', async () => {
    renderTestedComponent();
    screen.getByRole('register-form-element').addEventListener('submit', mock_FORM_SUBMIT_FN)
    expect(userEvent.click(screen.getByTestId('Register'))).toHaveBeenCalled
  })

  // it('should register button call onSumbmit function', async () => {
  //   const {container} = render(<RegisterForm/>)
  //   console.log(container)
  //   const element = screen.getByRole('button')
  //   const response = await userEvent.click(element)
  //   console.log(response)
  // })
})