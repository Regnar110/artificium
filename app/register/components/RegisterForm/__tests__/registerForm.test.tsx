import { render, screen } from '@testing-library/react'
import RegisterForm from '../RegisterForm'
import userEvent from '@testing-library/user-event'
import { mock_REGISTER_FAILED_RESPONSE, mock_REGISTER_FORM_DATA, mock_REGISTER_SUCCESS_RESPONSE } from '../__mocks__/registerFormData'
jest.mock('../__mocks__/registerFormData.ts');
const mocked_RegisterFormData = mock_REGISTER_FORM_DATA as jest.Mocked<RegisterFormData>

const mocked_RegisterSuccessResponse = mock_REGISTER_SUCCESS_RESPONSE as jest.Mocked<UserAccesSuccessResponse>
const mocked_RegisterFailureResponse = mock_REGISTER_FAILED_RESPONSE as jest.Mocked<UserAccessErrorResponse>

const mock_FORM_SUBMIT_FN = jest.fn()
const mock_FORM_SUBMIT_FN_WITH_REQUEST = jest.fn(async (registerData:RegisterFormData) => {
  if(registerData.nickname) {
    return await Promise.resolve({
      body:{},
      client_message:'SUCCESS',
      status:200
    })
  } else {
    return await Promise.resolve({
      error_message:"ERROR 500",
      client_message:"ERROR 500 ",
      status: 500
    })
  }
});

const renderTestedComponent = () => render(<RegisterForm/>)
renderTestedComponent.

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
    screen.getByRole('register-form-element').addEventListener('submit', mock_FORM_SUBMIT_FN(mocked_RegisterFormData))

    expect(userEvent.click(screen.getByTestId('Register'))).toHaveBeenCalled;
    expect(mock_FORM_SUBMIT_FN).toHaveBeenCalledWith(mocked_RegisterFormData)
    expect(typeof mocked_RegisterFormData.email).toBe('string');
    expect(typeof mocked_RegisterFormData.nickname).toBe('string');
    expect(typeof mocked_RegisterFormData.register_password).toBe('string');
    expect(typeof mocked_RegisterFormData.register_password).toBe('string');
    expect(mocked_RegisterFormData.provider).toBe('artificium');
  })

  it('form element onSubmit method should return correct response data when promise is RESOLVED', async () => {
    expect(await mock_FORM_SUBMIT_FN_WITH_REQUEST(mocked_RegisterFormData)).not.toEqual(mocked_RegisterFailureResponse)
    expect(await mock_FORM_SUBMIT_FN_WITH_REQUEST(mocked_RegisterFormData)).toEqual(mocked_RegisterSuccessResponse)
    expect(mock_FORM_SUBMIT_FN_WITH_REQUEST).toHaveBeenCalledWith(mocked_RegisterFormData);
    })

    it('form element onSubmit method should return correct response data when promise is EESOLVED WITH ERROR', async () => {
      expect(await mock_FORM_SUBMIT_FN_WITH_REQUEST({})).not.toEqual(mocked_RegisterSuccessResponse)
      expect(await mock_FORM_SUBMIT_FN_WITH_REQUEST({})).toEqual(mocked_RegisterFailureResponse)
      expect(mock_FORM_SUBMIT_FN_WITH_REQUEST).toHaveBeenCalledWith(mocked_RegisterFormData) 
    })
  })