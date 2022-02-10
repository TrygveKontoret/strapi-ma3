module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '146830ccc4df2ce38f6e749573adaaa6'),
  },
});
