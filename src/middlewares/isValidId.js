import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const isValidId = (req, res, next) => {
    const { contactsId } = req.params;
    if (!isValidObjectId(contactsId)) {
        throw createHttpError(400, 'Bad Request');
    }
    next();
};