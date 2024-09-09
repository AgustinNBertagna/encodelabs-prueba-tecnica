import {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../db/users";

export default {
  Query: {
    users: () => getUsers(),
    user: (_: undefined, args: any) => getUserById(args.id),
  },

  Mutation: {
    createUser: (_: undefined, args: any) => {
      const { name, email, password } = args;
      return createUser(name, email, password);
    },

    updateUser: (_: undefined, args: any) => {
      const { id, name, email, password } = args;
      return updateUser(id, name, email, password);
    },

    deleteUser: (_: undefined, args: any) => {
      return deleteUser(args.id);
    },
  },
};
