

const { default: authReducer } = require("../pages/Auth/auth.slice");

export const rootReducer = {
  auth: authReducer,

}