import { fireEvent, render, screen } from '@testing-library/react'
import RegisterForm from '../RegisterForm'
import userEvent from '@testing-library/user-event'
import { mock_REGISTER_FAILED_RESPONSE, mock_REGISTER_FORM_DATA, mock_REGISTER_SUCCESS_RESPONSE } from '../__mocks__/registerFormData'
import { registerDataGenerator } from '../testUtils/randomRegisterData';

jest.mock('../__mocks__/registerFormData.ts');
const mocked_RegisterFormData = mock_REGISTER_FORM_DATA as jest.Mocked<RegisterFormData>

const mocked_RegisterSuccessResponse = mock_REGISTER_SUCCESS_RESPONSE as jest.Mocked<UserAccesSuccessResponse>
const mocked_RegisterFailureResponse = mock_REGISTER_FAILED_RESPONSE as jest.Mocked<UserAccessErrorResponse>

const mock_FORM_SUBMIT_FN = jest.fn(async (registerData:RegisterFormData) => {
  if(registerData.nickname) {
    return await Promise.resolve({
      body:{},
      client_message:'SUCCESS',
      status:200
    })
  } else {
    return await Promise.reject({
      error_message:"ERROR 500",
      client_message:"ERROR 500 ",
      status: 500
    })
  }
});

const renderTestedComponent = () => render(<RegisterForm/>)

beforeEach(() => {
  renderTestedComponent()
})

beforeAll(()=> {
  userEvent.setup()
})

 
describe('RegisterForm component', () => {
  it('should render', () => {
    const {container:snapshotContainer} = renderTestedComponent()
    expect(snapshotContainer).toMatchSnapshot()
  })

  it('should render form fields', () => {
    expect(screen.getByRole('register-form-element')).toBeTruthy();
    expect(screen.getByLabelText('E-mail')).toBeTruthy();
    expect(screen.getByLabelText('Nickname')).toBeTruthy();
    expect(screen.getByLabelText('Password')).toBeTruthy();
    expect(screen.getByLabelText('Repeat password')).toBeTruthy();
    expect(screen.getByRole('conditions_checkbox')).toBeTruthy();
    expect(screen.getByTestId('Register')).toBeTruthy();
  })

  it('form element onSubmit method should be executed with correct props', () => {
    const data = registerDataGenerator.next().value
    fireEvent.submit(screen.getByTestId('Register'), mock_FORM_SUBMIT_FN(data));
    expect(mock_FORM_SUBMIT_FN).toHaveBeenCalled();
    expect(mock_FORM_SUBMIT_FN).toHaveBeenCalledWith(data);
    
    expect(typeof mocked_RegisterFormData.email).toBe('string');
    expect(typeof mocked_RegisterFormData.nickname).toBe('string');
    expect(typeof mocked_RegisterFormData.register_password).toBe('string');
    expect(typeof mocked_RegisterFormData.register_password).toBe('string');
    expect(mocked_RegisterFormData.provider).toBe('artificium');
  })

  it('form element onSubmit method should return correct response data when promise is RESOLVED', async () => {
    expect.assertions(2);
    const data = registerDataGenerator.next().value
    await expect(mock_FORM_SUBMIT_FN(data)).resolves.toEqual(mocked_RegisterSuccessResponse);
    expect(mock_FORM_SUBMIT_FN).toHaveBeenCalledWith(data);
    })

    it('form element onSubmit method should return correct response data when promise is REJECTED WITH ERROR', async () => {
      expect.assertions(2);
      await expect(mock_FORM_SUBMIT_FN({})).rejects.toEqual(mocked_RegisterFailureResponse);
      expect(mock_FORM_SUBMIT_FN).toHaveBeenCalledWith({}) ;
    })
  })