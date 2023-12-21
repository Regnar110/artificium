import { render, screen } from '@testing-library/react'
import RegisterForm from './RegisterForm'

import userEvent from '@testing-library/user-event'
const mock_FORM_SUBMIT_REQUEST_RESPONSES = [
  {
    body:{},
    client_message:'SUCCESS',
    status:200
  },
  {
    error_message:"ERROR 500",
    client_message:"ERROR 500 ",
    status: 500
  },
  {
    error_message:"ERROR 510",
    client_message:"ERROR 510 ",
    status: 510
  }
]

const mock_FORM_SUBMIT_FN = jest.fn()
const mock_FORM_SUBMIT_FN_WITH_REQUEST = jest.fn(async (registerData:RegisterFormData) => {
  const option = Math.floor(Math.random() * 3)
  switch (option) {
    case 0:
      return await Promise.resolve({
        body:{},
        client_message:'SUCCESS',
        status:200
      })
    case 1: 
      return await Promise.reject({
        error_message:"ERROR 510",
        client_message:"ERROR 510 ",
        status: 510
      })
    case 2: 
      return await Promise.reject({
        error_message:"ERROR 500",
        client_message:"ERROR 500 ",
        status: 500
      })
  }
  await Promise.resolve({
    body:{},
    client_message:'SUCCESS',
    status:200
  })
})
const mock_FORM_SUBMIT_FN_WITH_PROPS = jest.fn((registerData:RegisterFormData) => {
  
})

const renderTestedComponent = () => render(<RegisterForm/>)

const mock_REGISTER_FORM_DATA = {
  email: 'mock@mock.com', 
  nickname: 'mocked_nickname', 
  register_password: 'mocked_password', 
  register_password_repeat: 'mocked_repeat_password', 
  provider: 'artificium'
} as RegisterFormData

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

  it('form element onSubmit method should be executed with correct props', () => {
    renderTestedComponent();
    screen.getByRole('register-form-element').addEventListener('submit', mock_FORM_SUBMIT_FN)

    expect(userEvent.click(screen.getByTestId('Register'))).toHaveBeenCalledWith(mock_REGISTER_FORM_DATA)
    expect(typeof mock_REGISTER_FORM_DATA.email).toBe('string');
    expect(typeof mock_REGISTER_FORM_DATA.nickname).toBe('string');
    expect(typeof mock_REGISTER_FORM_DATA.register_password).toBe('string');
    expect(typeof mock_REGISTER_FORM_DATA.register_password).toBe('string');
    expect(mock_REGISTER_FORM_DATA.provider).toBe('string');
  })

  it('form element onSubmit method should return correct responses data when promise is resolved', async () => {
    expect(await mock_FORM_SUBMIT_FN_WITH_REQUEST(mock_REGISTER_FORM_DATA)).resolves.toContain(mock_FORM_SUBMIT_REQUEST_RESPONSES)
    expect(mock_FORM_SUBMIT_FN_WITH_REQUEST).toHaveBeenCalledWith(mock_REGISTER_FORM_DATA) 
    })
  })