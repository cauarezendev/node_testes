export default {
  database: 'books',
  username: null,
  password: null,
  host: null,
  dialect: 'sqlite',
  operatorsAliases: false,
  storage: `${process.env.NODE_ENV}_books.sqlite`,
  underscored: true,
};
