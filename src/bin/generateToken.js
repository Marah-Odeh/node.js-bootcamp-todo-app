import jwt from "jsonwebtoken";

const TOKEN_SECRET = "testtoken";
const token = jwt.sign(
  {
    user: "abd",
    password: "password",
  },
  TOKEN_SECRET
);

const verifiedUser = jwt.verify(token, TOKEN_SECRET, (error, user) => {
  if (error) throw error;
  return user;
});

console.log({ token }, { verifiedUser });
