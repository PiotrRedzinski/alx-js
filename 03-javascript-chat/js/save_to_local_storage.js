export const save_historia = (historia) => {
    localStorage.setItem('historia_czatu',JSON.stringify(historia));
}
