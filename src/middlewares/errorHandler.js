export const errorHandler = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json({
      status: 400,
      message: 'BadRequestError',
      data: {
        message: 'Bad request',
        errors: err.details.map((e) => ({
          message: e.message,
          path: e.path,
          type: e.type,
          context: e.context,
        })),
      },
    });
  }

  if (err.status && err.expose) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message || 'Error',
      data: err.data || err.message,
    });
  }

  return res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
