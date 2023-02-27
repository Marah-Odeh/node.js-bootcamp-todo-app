import { PrismaClient } from "@prisma/client"
import { generateAccessToken } from "../auth/utils.js";

const prisma = new PrismaClient();

export const createUser = async (data) => {
    return await prisma.user.create({
        data
    })
}

export const login = async (username) => {
    const user = await prisma.user.findUnique({
        where: {
            username
        }, select: {
            username: true,
            id: true
        }
    })
    return generateAccessToken(user)
}

export const getUser = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        }, include: {
            tasks: {
                where: {
                    priority: {
                        gt: 1
                    }
                },
                orderBy: {
                    priority: 'asc'
                }
            },
            _count: {
                select: { tasks: true }
            }
        }
    })
    return user
}