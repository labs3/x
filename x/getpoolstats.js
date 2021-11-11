const summary = await (await fetch('https://pool.halo.ms/api/nyc/round/1')).json()
const differentPeople = Object.keys(summary.contributions).length
console.log(`${differentPeople} different addresses`)

const txids = await (await fetch('https://pool.halo.ms/api/nyc/round/1/txids')).json()
console.log(`${txids.length} transactions`)

const balance = await (await fetch('https://pool.halo.ms/api/nyc/round/1/balance')).json()
console.log(`${balance.stx.balance / 1_000_000} STX in the pool`)