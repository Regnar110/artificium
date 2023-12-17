import { render, screen } from '@testing-library/react'
import RegisterForm from './RegisterForm'
import userEvent from '@testing-library/user-event'
const mock_FORM_SUBMIT_FN = jest.fn(registerData => {

})

beforeAll(()=> {
  userEvent.setup()
})

 
describe('RegisterForm component', () => {
  it('should render', () => {
    const {container:snapshotContainer } = render(<RegisterForm/>)
    
    expect(snapshotContainer).toMatchSnapshot()
  })

  it('should register button work', async () => {
    const response = await userEvent.click(screen.getByText('Register'))
    console.log(response)
  })
})