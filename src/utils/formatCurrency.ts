export function formatCurrency(value: number, code: string) {
    const parts = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: code
    }).formatToParts(value)

    const currencyPart  = parts.find((part) =>
        part.type === 'currency'
    )
    let symbol = ''

    if (currencyPart) {
        symbol = currencyPart.value
    }

    const amount = parts
        .filter((part) => part.type !== 'currency' && part.type !== 'literal')
        .map((part) => part.value)
        .join('')

    return { symbol, amount }
}