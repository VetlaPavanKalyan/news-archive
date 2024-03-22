const formatDateTime = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    const options = { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true
    };

    return new Intl.DateTimeFormat('en-US', options).format(inputDate);
}

export default formatDateTime;