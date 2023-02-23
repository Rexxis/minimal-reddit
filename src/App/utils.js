export const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const formattedDate = date.toLocaleDateString('en-US')
    const formattedTime = date.toLocaleTimeString('en-US')

    return `${formattedDate} ${formattedTime}`
}