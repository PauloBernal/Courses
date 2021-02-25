interface User {
  name: string,
  friends?: User[],
  height?: number
}

const PauloBA: User = {
  name: 'PauloBA',
}

function userCreator<User>(name: string, friends?: User[] | undefined, height?:number | undefined) {
  const newUser = {
    name: name,
    friends: friends,
    height: height
  }
  return newUser;
}

const MateoBA: User = userCreator('MateoBA', [PauloBA], 178)

console.log(MateoBA.name)