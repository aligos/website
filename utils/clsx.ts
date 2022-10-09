type Clsx = (...a: Array<undefined | null | string | boolean>) => string

const clsx: Clsx = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ')

export default clsx
