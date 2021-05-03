//Action types
export const INCREMENTCOOKIES = 'INCREMENTCOOKIES';
export const CLEARCOOKIES = 'CLEARCOOKIES';
export const INCREMENTLEVEL = 'INCREMENTLEVEL';
export const CLEARLEVEL = 'CLEARLEVEL';
export const INCREMENTBREAKPOINT = 'INCREMENTBREAKPOINT';
export const CLEARBREAKPOINT = 'CLEARBREAKPOINT';

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

export const incrementBreakpoint = () => {
    return {
        type: INCREMENTBREAKPOINT
    }
};

export const clearBreakpoint = () => {
    return {
        type: CLEARBREAKPOINT
    }
};