export const easyPassword = /^[a-zA-Z]+$|^\d+$|^[^a-zA-Z\d\s]+$/;
export const middlePassword = /^(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d\s])|(?=.*\d)(?=.*[^a-zA-Z\d\s])/;
export const strongPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])/;
