function truncateString(str, resLen) {
    var truncatedStr = str;
    if (str.length > resLen) {
        truncatedStr = str.slice(0, resLen) + "..."; 
    }
    return truncatedStr;
}