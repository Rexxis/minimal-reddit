export const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const formattedDate = date.toLocaleDateString('en-US')
    const formattedTime = date.toLocaleTimeString('en-US')

    return `${formattedDate} ${formattedTime}`
}

export const getFormattedNumber = (number) => {
    const formatter = new Intl.NumberFormat('en', {notation: 'compact', minimumFractionDigits: 1, maximumFractionDigits: 1})
    return formatter.format(number)
}

export const getFormattedComment = (number) => {
    const formatter = new Intl.NumberFormat('en', {notation: 'compact', maximumFractionDigits: 1})
    return formatter.format(number)
}