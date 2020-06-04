const jwt = require('jsonwebtoken');

// =============================
// Verificar token
// =============================

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        };
        req.usuario = decoded.usuario;
        next();
    })
}


// =============================
// Verificar Admin_Role
// =============================

let verificaAdmin_Role = (req, res, next) => {
    if (req.usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Rol no válido'
            }
        });
    }
};


module.exports = {
    verificaToken,
    verificaAdmin_Role
}