const Maths = {
    clamp: (num, min, max) => Math.min(Math.max(num, min), max),
    map: (num, start1, stop1, start2, stop2) => ((num - start1) / (stop1 - start1)) * (stop2 - start2) + start2,
    lerp: (num1, num2, amount) => num1 * (1 - amount) + num2 * amount,
}

export default Maths