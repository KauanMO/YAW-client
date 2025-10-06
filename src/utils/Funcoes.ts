export function formatarBRL(valor: number) {
    const numero = parseFloat(String(valor).replace(',', '.'));

    if (isNaN(numero)) return 'Valor inválido';

    return numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}