var jwt = require("jsonwebtoken");
var uuid4 = require("uuid4");

var app_access_key = "636b920aa04fa8bc9163c6cc";
var app_secret =
  "VYcnlGNn5cKP5lbHrpi-9ViTgBxz2O6W3-D7IfwDUcGZTK8Un0JD8_QKQ30c5RVood7uFOMpdrzo8ck7tbo7IKiEOm4oG0wqQ7Dxhf453NMTraHW1fiUQ42v68hM7Uo4kSp08Sn9XDL_gJIyThEEF462HgVfE_sYVE8dH0DAKW8=";

var payload = {
  access_key: app_access_key,
  room_id: "636ba0a3e08863a3f2fb1a53",
  user_id: "abdulbasit",
  role: "broadcaster" || "hls-viewer",
  type: "app",
  version: 2,
  iat: Math.floor(Date.now() / 1000),
  nbf: Math.floor(Date.now() / 1000),
};

jwt.sign(
  payload,
  app_secret,
  {
    algorithm: "HS256",
    expiresIn: "24h",
    jwtid: uuid4(),
  },
  function (err, token) {
    console.log(token);
  }
);
