const uuidv4 = require('uuid/v4');
export function getUUID() {
    return uuidv4().replace(/-/g, '');//[1-2]
}

