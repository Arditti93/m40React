export const getCookie = (name) =>{
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    let output
    if (parts.length === 2) {
        output = parts.pop().split(';').shift();
    } else {
        output = false 
    }
    return output
} 

export const writeCookie = (key, value, days) => {
    var date = new Date();

    // Default at 365 days.
    days = days || 365;

    // Get unix milliseconds at current time plus number of days
    date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

    return cookie
}