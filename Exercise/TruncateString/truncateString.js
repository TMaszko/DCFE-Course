function truncateString(str, resLen) {
    if (str.length > resLen) {
        str = str.slice(0, resLen) + "..."; 
    }
    return str;
}
