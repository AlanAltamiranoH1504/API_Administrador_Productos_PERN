export const formatoMoneda = (monto: string) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(monto));
}
export const formatoFecha = (fecha: string) => {
    const fechaValida = new Date(fecha);
    return Intl.DateTimeFormat('es-MX', {
        dateStyle: "full"
    }).format(fechaValida);
}