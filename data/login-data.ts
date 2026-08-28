export const loginData = [
  {
    id: 'TC001',
    scenario: 'Valid username and password',
    username: 'standard_user',
    password: 'secret_sauce',
    expected: 'success',
  },
  {
    id: 'TC002',
    scenario: 'Invalid username',
    username: 'wrong_user',
    password: 'secret_sauce',
    expected: 'failure',
  },
  {
    id: 'TC003',
    scenario: 'Invalid password',
    username: 'standard_user',
    password: 'wrong_password',
    expected: 'failure',
  },
];