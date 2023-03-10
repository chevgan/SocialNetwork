export const required = value => {
    if (value) return undefined;

    return "Поле, обязательное для заполнения";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максемальная длина ${maxLength} символов`;
    return undefined;
}