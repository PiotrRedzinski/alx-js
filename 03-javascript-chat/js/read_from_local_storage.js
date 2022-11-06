const read_historia = () => {
    return JSON.parse(localStorage.getItem('historia_czatu'));
}

export default read_historia