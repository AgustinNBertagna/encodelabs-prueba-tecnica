import User from "./User";

export async function getUsers() {
  try {
    const users = await User.find().exec();
    if (!users.length) throw new Error("Users not found");
    return { users };
  } catch (error) {
    return { error: (error as any).message, users: [] };
  }
}

export async function getUserById(id: string) {
  try {
    if (!id) throw new Error("ID is required to fetch user");
    const user = await User.findById(id).exec();
    if (!user) throw new Error(`User with ID ${id} not found`);
    return { user };
  } catch (error) {
    return { error: (error as any).message };
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    if (!name || !email || !password)
      throw new Error(
        "Name, email, and password are required to create a user"
      );
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();
    return { id: savedUser._id };
  } catch (error) {
    return { error: (error as any).message };
  }
}

export async function updateUser(
  id: string,
  name?: string,
  email?: string,
  password?: string
) {
  try {
    if (!id) {
      throw new Error("ID is required to update user");
    }

    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = password;

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
    if (!updatedUser) {
      throw new Error(`User not found`);
    }
    return { id: updatedUser._id };
  } catch (error) {
    return { error: (error as any).message };
  }
}

export async function deleteUser(id: string) {
  try {
    if (!id) throw new Error("ID is required to delete user");
    const user = await User.findByIdAndDelete(id).exec();
    if (!user) throw new Error("User not found");
    return { id: user._id };
  } catch (error) {
    return { error: (error as any).message };
  }
}
