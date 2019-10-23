export const RandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const RandomBoolean = (p: number = 0.5) => (Math.random() <= p)