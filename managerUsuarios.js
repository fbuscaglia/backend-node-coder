const fs = require("fs");
const usersRoutes = "Usuarios.json";

class UsersManager {
  async searchUsers() {
    try {
      if (fs.existsSync(usersRoutes)) {
        const userInfo = await fs.promises.readFile(usersRoutes, "utf-8");
        const userInfoJS = JSON.parse(userInfo);
        return userInfoJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
  async createUser(user) {
    try {
      const users = await this.searchUsers();
      users.push(user);
      await fs.promises.writeFile(usersRoutes, JSON.stringify(users));
    } catch (error) {
      console.log(error);
    }
  }
}

const manager = new UsersManager();
async function test() {
  const consultarUsuarios = await manager.searchUsers();
  console.log(consultarUsuarios);
  const user1 = {
    nombre: "Franco",
    apellido: "Buscaglia",
    edad: 27,
  };
  await manager.createUser(user1);
  console.log(consultarUsuarios);
}

test();
