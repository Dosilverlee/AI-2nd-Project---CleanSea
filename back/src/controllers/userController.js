import { userService } from "../services/userService";

const joinUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (!name || !email || !password) {
    res.status(400).send({ message: "모든 사항을 입력하세요" });
    return;
  }
  const createUser = await userService.createUser(email, name, password);

  res.status(200).json(createUser);
};

export { joinUser };
