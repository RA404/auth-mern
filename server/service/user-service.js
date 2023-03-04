const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dto/user-dto");


class UserService {
  async reqistration(email, password) {
    const condidate = await UserModel.findOne({ email });
    if (condidate) {
      throw new Error("This user already exist. Please login.");
    }
    const activationLink = uuid.v4();
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationMail(email, activationLink);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto}
  }
}

module.exports = new UserService();
