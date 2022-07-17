const formatModifiedDate = (time) => {
    if (time) {
        const dateTime = new Date(time)
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
        };
        return new Intl.DateTimeFormat('es-CO', options).format(dateTime);
    }
}

const getActualDate = () => {
    const date = new Date();
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
    };
    return new Intl.DateTimeFormat('es-CO', options).format(date);
}


const useFormatDate = () => {
    return { formatModifiedDate, getActualDate  };
}

export default useFormatDate