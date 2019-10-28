/**
   *
   * @param {string} start '11:11'
   * @param {string} end   '11:11'
   * convert them to array of strings
   
   *@return result string 11:11
   */
function timeDifference(start, end) {
    start = [...start];
    end = [...end];

    let startHours = start[0].concat(start[1]);
    let startMinutes = start[3].concat(start[4]);
    let endHours = end[0].concat(end[1]);
    let endMinutes = end[3].concat(end[4]);
    let resultHours = endHours - startHours;
    let resultMinutes = endMinutes - startMinutes;

    if (startMinutes > endMinutes) {
        resultMinutes = 60 - -resultMinutes;
        resultHours--;
    }
    if (+endHours >= 0 && +endHours < startHours) {
        resultHours = 24 - startHours + +endHours;
    }

    return `${resultHours}:${resultMinutes}`;
}

export default timeDifference;
