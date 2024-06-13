export const formatCurrency = (amount: number): string => {
    return Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(amount);
};