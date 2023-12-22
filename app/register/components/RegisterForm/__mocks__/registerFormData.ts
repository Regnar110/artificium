export const mock_REGISTER_FORM_DATA = {
    email: 'mock@mock.com', 
    nickname: 'mocked_nickname', 
    register_password: 'mocked_password', 
    register_password_repeat: 'mocked_repeat_password', 
    provider: 'artificium'
  } as RegisterFormData

export const mock_REGISTER_SUCCESS_RESPONSE = {
  body:{},
  client_message:'SUCCESS',
  status:200
};

export const mock_REGISTER_FAILED_RESPONSE = {
  error_message:"ERROR 500",
  client_message:"ERROR 500 ",
  status: 500
}