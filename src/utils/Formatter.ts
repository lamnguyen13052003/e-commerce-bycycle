const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const formatterDateTime = new Intl.DateTimeFormat('vi-VN', {
    dateStyle: "medium"
})

const formatCurrency = (n: number) => {
    return formatter.format(n);
}

const formatDateTime = (date: Date) => {
    return formatterDateTime.format(date);
}

export {formatCurrency, formatDateTime}