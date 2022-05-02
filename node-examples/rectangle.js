export function perimeter(x, y) { return (2 * (x + y)); }
export function area(x, y) { return (x * y); }

export default (x, y, callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() =>
            callback(new Error("Rectangle dimensions should be greater than zero: l = " + x + ", and b = " + y), null), 2000);
    else
        setTimeout(() =>
            callback(null, {
                perimeter: () => (2 * (x + y)),
                area: () => (x * y)
            }),
            2000);
}