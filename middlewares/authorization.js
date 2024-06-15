import jwt from 'jsonwebtoken'

/**
 *  headers {"Authorization": "Baerer <token>"}
 */

export const Authorization = async(req, res, next) => {

    try {
        const { authorization} = req.headers
        const token = authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(token)
        console.log(decoded)

        next()//pasar a la ruta correspondiente 
    } catch (error) {
        res.status(401).json({
            status:401,
            html: 'No autorizado'
        })
    }

}