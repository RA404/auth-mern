const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dto/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async reqistration(email, password) {
    const condidate = await UserModel.findOne({ email });
    if (condidate) {
      throw ApiError.BadRequest("This user already exists. Please login.");
    }
    const activationLink = uuid.v4();
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/v1/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("The activation link is incorrect");
    }
    user.isActivated = true;
    await user.save();
  }
}

module.exports = new UserService();
