const jsonServer = require('json-server')
const moment = require('moment')
const server = jsonServer.create()
const path = require('path')
const db = require(path.join(__dirname, 'db.json'))
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.post('/add-loan', (req, res) => {
  const userId = req.body['userId']
  if (userId != null && userId >= 0) {
    let result = db.loans.find(loan => {
      return loan.userId == userId;
    })

    if (result) {
      result.loan.push({
        amount: Number(req.body['loanAmount']),
        purpose: req.body['purpose'],
        loanTerm: Number(req.body['loanTerm']),
        recentlyPayment: []
      })
      res.status(200).jsonp([result]);
    } else {
      res.status(400).jsonp({
        error: "Bad userId"
      });
    }
  } else {
    res.status(400).jsonp({
      error: "No valid userId"
    });
  }
})
server.post('/repay', (req, res) => {
  const userId = req.body['userId']
  if (userId != null && userId >= 0) {
    let result = db.loans.find(loan => {
      return loan.userId === userId;
    })
    let loan = result.loan.find(item => item.purpose === req.body['purpose'])

    if (loan) {
      loan.recentlyPayment.push({
        date: moment().format('DD-MM-YYYY'),
        payAmount: loan.amount / loan.loanTerm
      })
      res.status(200).jsonp([result]);
    } else {
      res.status(400).jsonp({
        error: "Bad userId"
      });
    }
  } else {
    res.status(400).jsonp({
      error: "No valid userId"
    });
  }
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
