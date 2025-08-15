export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        status: 400,
        message: 'BadRequestError',
        data: {
          message: 'Bad request',
          errors: error.details.map((err) => ({
            message: err.message.replace(/["]/g, ''),
            path: err.path,
            type: err.type,
            context: err.context,
          })),
        },
      });
    }

    req.body = value;
    next();
  };
};
