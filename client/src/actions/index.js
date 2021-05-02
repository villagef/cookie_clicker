//Action types
export const INCREMENTCOOKIES = 'INCREMENTCOOKIES';
export const CLEARCOOKIES = 'CLEARCOOKIES';
export const INCREMENTLEVEL = 'INCREMENTLEVEL';
export const CLEARLEVEL = 'CLEARLEVEL';

//Action creators
export const incrementCookiesCount = () => {
    return {
        type: INCREMENTCOOKIES
    }
};

export const clearCookies = () => {
    return {
        type: CLEARCOOKIES
    }
};

export const incrementLevelCount = () => {
    return {
        type: INCREMENTLEVEL
    }
};

export const clearLevel = () => {
    return {
        type: CLEARLEVEL
    }
};