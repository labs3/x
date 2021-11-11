const summary = await (await fetch('https://pool.halo.ms/api/nyc/round/1')).json()
const differentPeople = Object.keys(summary.contributions).length
console.log(`${differentPeople} different addresses`)

const txids = await (await fetch('https://pool.halo.ms/api/nyc/round/1/txids')).json()
console.log(`${txids.length} transactions`)

const balance = await (await fetch('https://pool.halo.ms/api/nyc/round/1/balance')).json()
const stxBalance = balance.stx.balance / 1_000_000
const price = await (await fetch('https://api.coingecko.com/api/v3/simple/price?ids=blockstack&vs_currencies=btc%2Cusd')).json()
const btcPrice = price.blockstack.btc
const usdPrice = price.blockstack.usd
console.log(`${stxBalance.toFixed(2)} STX in the pool worth $${(usdPrice*stxBalance).toFixed(2)} / ₿${(btcPrice*stxBalance).toFixed(2)}`)