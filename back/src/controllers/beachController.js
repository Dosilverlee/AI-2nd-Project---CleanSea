import { beachService } from "../services/beachService";
import { Logger } from "winston";

const getBeaches = async (req, res, next) => {
  try {
    const result = await beachService.getBeaches();
    logger.info("getBeaches");
    res.status(200).json(result);
  } catch (e) {
    logger.error(e);
    next(e);
  }
};

export const beachController = {
  getBeaches,
};