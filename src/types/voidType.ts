const addNumbers = () => {
    console.log(2+4)
}
addNumbers();

const throwError = (): never => {
    throw new Error("Your Program Terminated because of error");
}

throwError();

