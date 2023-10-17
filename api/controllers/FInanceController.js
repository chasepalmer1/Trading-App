import yahooFinance from 'yahoo-finance2'

const GetStockInfo = async(req, res) => {
    const { ticker } = req.body;

    const results = await yahooFinance.quoteSummary(ticker)

    const short_name = results.price.shortName;
    const current_price = results.price.regularMarketPrice;

    res.status(200).json({name: short_name, price:current_price})
}

export { GetStockInfo}