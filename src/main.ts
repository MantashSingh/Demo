interface MyObjectModel {
  message: string;
  status: number;
  myFunc: () => void;
}

const main = () => {
  const hello = 'Hello there';
  var hello2 = 'Hi';
  let hello3 = 'Hey';
  console.log(hello, hello2, hello3);

  const func = () => {
    console.log('Called my function');
  };
  func();

  const myArray: string[] = ['Hi', 'How', 'Are', 'You'];
  const myObject: MyObjectModel = {
    message: 'hi',
    status: 200,
    myFunc: func,
  };

  // const apiCall = <T>(url?: string) => { // Optionals
  const apiCall = <T>(url: string) => {
    const response = url;
    return response;
  };

  const apiCall2 = ({url}: {url: string}) => {
    const response = {
      message: url,
    };
    return response;
  };

  // const response = apiCall();
  const response1 = apiCall<string>('Hello');
  const response2 = apiCall<string>('Another Call');
  myObject.myFunc();

  myArray.forEach(item => {
    console.log(item);
  });

  // for (item in myObject) {
  //   console.log(item);
  // }

  enum STATUS_CODES {
    SUCCESS = 200,
    ERROR = 404,
    AUTH_ERR = 300,
  }
  console.log(STATUS_CODES.SUCCESS);
};

export default main;
