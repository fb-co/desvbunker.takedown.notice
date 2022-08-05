const MOBILE_WIDTH = 850;

export function is_mobile() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= MOBILE_WIDTH;
}
