//Action types
export const INCREMENTCOOKIES = 'INCREMENTCOOKIES';
export const DECREMENTCOOKIES = 'DECREMENTCOOKIES';
export const CLEARCOOKIES = 'CLEARCOOKIES';
export const INCREMENTTOTAL = 'INCREMENTTOTAL';
export const CLEARTOTAL = 'CLEARTOTAL';
export const INCREMENTLEVEL = 'INCREMENTLEVEL';
export const CLEARLEVEL = 'CLEARLEVEL';
export const INCREMENTBREAKPOINT = 'INCREMENTBREAKPOINT';
export const CLEARBREAKPOINT = 'CLEARBREAKPOINT';
export const SETTRUE = 'SETTRUE';
export const SETFALSE = 'SETFALSE';

//Action creators
export const incrementCookiesCount = () => {
    return {
        type: INCREMENTCOOKIES
    }
};

export const decrementCookiesCount = () => {
    return {
        type: DECREMENTCOOKIES
    }
};

export const clearCookies = () => {
    return {
        type: CLEARCOOKIES
    }
};

export const incrementTotal = () => {
    return {
        type: INCREMENTTOTAL
    }
};

export const clearTotal = () => {
    return {
        type: CLEARTOTAL
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

export const activatePopper = () => {
    return {
        type: SETTRUE
    }
};

export const deactivatePopper = () => {
    return {
        type: SETFALSE
    }
};

export const activateInterval = () => {
    return {
        type: SETTRUE
    }
};

export const deactivateInterval = () => {
    return {
        type: SETFALSE
    }
};