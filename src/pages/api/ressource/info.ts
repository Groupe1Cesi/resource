import type { NextApiRequest, NextApiResponse } from 'next';
import { Database } from '@/components/server/mongodb/mongodb.component'
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const database = await Database.getInstance();
    const authorization = req.headers.authorization
    if (!authorization) {
        return res.status(401).json({ message: 'Non autorisé. Error 001' })
    }
    let token:any
    try {
        token = jwt.verify(authorization, process.env.JWT_SECRET as string)
    } catch (error:any) {
        return res.status(401).json({ status: 'error', message: 'Non autorisé. Error 002', error: error.message  })
    }
    if (!token.email && !token.id) {
        return res.status(401).json({ message: 'Non autorisé. Error 003' })
    }
    let ressource: any
    try {
        ressource = await database.db.collection('ressources').find().toArray()
        console.log(ressource)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status:'failed', message: 'Erreur Interne' })
    }
    if (!ressource) {
        return res.status(401).json({ message: 'Non autorisé. . Error 004' })
    }

    if (ressource._id.toString() !== token.id) {
        return res.status(401).json({ message: 'Non autorisé. Error 005' })
    }
    if (ressource.email !== token.email) {
        return res.status(401).json({ message: 'Non autorisé. Error 006' })
    }
    let ressourceInfos = {
        titre: ressource.titre,
        description: ressource.description,
    }
    console.log(ressource)
    if (!ressourceInfos) {
        return res.status(401).json({ status: "failed", message: "Erreur Interne" })
    }

    return res.status(200).json({ status: "success", ressource: ressourceInfos })
}