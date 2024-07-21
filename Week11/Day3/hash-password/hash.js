import bcrypt from "bcrypt"

const hashMyPassword = (hashMyPassword) =>{
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export default hashMyPassword;