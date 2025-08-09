const accionPrueba = (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Funcionando controlador de prueba"
    });
}
export {
    accionPrueba
}