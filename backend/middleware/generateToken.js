import jwt from 'jsonwebtoken';

const createToken = (id, email) => {
    try {
        const token = jwt.sign({
            id,
            email
        },
            process.env.GENERATE_TOKEN_SECRET
            , {
                expiresIn: process.env.GENERATE_TOKEN_EXPIRY
            })
        return token;
    } catch (error) {
        throw error
    }

};

export default createToken;