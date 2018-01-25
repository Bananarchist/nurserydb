export default function parseColumnArray(arr) {
    return arr.reduce(
        (a,c) => {
            a[c] = c;
            return a;
        }, {}
    );
}
