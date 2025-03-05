import jwt from "jsonwebtoken";

export const createToken = (id: string, email: string): string => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables.");
    }

    const payload = { id, email };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};
