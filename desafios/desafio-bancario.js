const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}
 
//Criar transação
function createTransaction(transaction){
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
        
    } 
    else {
        user.balance = user.balance - transaction.value
      
    }
}

//gerar relatorios
function getHigherTransactionByType(type){
    
    let higherTransaction
    let higherValue = 0

    for(let transaction of user.transactions){
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
            
        }
    }
return higherTransaction
}

function getAverageTransactionValue(){
    
    let sum = 0 

    for(let transaction of user.transactions){
        sum += transaction.value
    }
    return sum / user.transactions.length

}

function getTransactionsCount(){
    
    let count={
        credit: 0,
        debit: 0,
    }
for(let transaction of user.transactions){
    if (transaction.type ==='credit') 
        count.credit++

    
    else         count.debit ++
        
    }
    return count
}



//chamando a função "create" para inserir transações
createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

// para exibir o saldo total do usuario
console.log(user.balance)

// exibe a maior transação do tipo "credito"
console.log(getHigherTransactionByType('credit'))

// exibe a maior transação do tipo "debito"
console.log(getHigherTransactionByType('debit'))

// exibe a media de valores das transações
console.log(getAverageTransactionValue())

// exibe a contagem de tipo de transações
console.log(getTransactionsCount())