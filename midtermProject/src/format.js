/**
 * Created by Mitch on 2017-12-07.
 */

export function getAge(dob){
    let dateDifMs = new Date(Date.now() - new Date(dob).getTime());
    return Math.abs(dateDifMs.getUTCFullYear() - 1970);
}