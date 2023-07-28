import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(404).end();
    }

    try {
        const { email, username, password } = req.body;
        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            res.status(422).json({ error: 'Email already taken' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name: username,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        })
        return user;
    }


    catch (error) {
        console.log(error);
    }
}