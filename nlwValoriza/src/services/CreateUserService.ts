import { getCustomRepository} from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface  IUserRequest{
    name: string;
    email?: string;
    admin?: boolean;
}

class CreateUserService{
    async execute({name, email, admin}:IUserRequest){
        const usersRrepository = getCustomRepository(UsersRepositories);
        console.log("Email", email);
        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRrepository.findOne({email});

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const user = usersRrepository.create({
            name,
            email,
            admin
        });
        await usersRrepository.save(user);

        return user;
    }
}

export { CreateUserService };