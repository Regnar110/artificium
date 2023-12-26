function* randomRegisterData():Generator<jest.Mocked<RegisterFormData>, jest.Mocked<RegisterFormData>, unknown> {
    let randomizedObject:jest.Mocked<RegisterFormData>;
    while(true) {
        randomizedObject = generateObject();
        yield randomizedObject;
    }
}
const generateObject = ():RegisterFormData => {
    // Funkcja do generowania losowego ciągu znaków o zadanej długości
    const generateRandomString = (length:number) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };
  
    // Funkcja do generowania losowego emaila
    const generateRandomEmail = () => {
      const randomString = generateRandomString(8);
      return `${randomString}@gmail.com`;
    };
  
    // Funkcja do generowania losowego nicku
    const generateRandomNickname = () => {
      const minLength = 2;
      const maxLength = 20;
      const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
      return generateRandomString(length);
    };
  
    // Generowanie dynamicznego obiektu
    const userObject = {
      email: generateRandomEmail(),
      nickname: generateRandomNickname(),
      register_password: generateRandomString(8),
      register_password_repeat: generateRandomString(8),
      provider: 'artificium',
    };
  
    return userObject as jest.Mocked<RegisterFormData>;
  };
  
export const registerDataGenerator = randomRegisterData();