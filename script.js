const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]


const testMap = (array) => {

    const result = array.map((value) => {
        let { id, price } = value // Neste ponto desconstruirmos o objeto para armazenar as propriedades, id e price.
        if (id > 2) { // Aqui é validado se o id é maior que 2
            price = 2.00// Altere o valor da propriedade price para 2.00 dos índices com id's maior que 2
        }
        return {...value, price} // Nesta etapa utilizamos o spread(...), para remontar o objeto e passamos a propriedade que foi alterada
    })

    return result // Por fim é retornado um array de objetos, com as propriedades alteradas
}


testMap(itemArray)

/*
    [
        {id: 1, product: "Pão", price: 5.8, quantity: 3, section: "Padaria"},
        {id: 2, product: "Leite", price: 3, quantity: 1, section: "Derivados de Leite"},
        {id: 3, product: "Carne", price: 2, quantity: 2, section: "Carne"}
    ];
*/



const testFilter = (array) => {

    const result = array.filter( ({id}) => {
        if(id <= 2){
            return true
        }
        // retorne apenas os itens que possuem id <= 2
    })
    return result
        // retorne a variável result onde contem os resultados das filtragens
}

testFilter(itemArray)


const testFind = (array) => {

    const result = array.find( ({id, product}) => {
        if(product === "Leite"){
            return true
        }
        // retorne apenas o item onde product === 'Leite'
    })
    return result
   // retorne a variável result onde contem os resultados das buscas
}

testFind(itemArray)



 const testReduce = (array) => {

    const totalList = array.reduce((acc, {quantity, price}) => {
        // incremente a variável acc, com o valor de price*quantity
        acc += price*quantity
        return acc
        // retorne o valor armazenado em "acc" que neste caso é o valor total da compra
    }, 0)
    return totalList
    // retorne o valor de totalList para verificar quanto ficou sua compra
}

console.log(testReduce(itemArray))



// Desafio
// Crie um filtro onde o resultado traz apenas os itens que tem o price maior que 3.
// Altere o valor do item leite para 4.
// Faça o total de todos os itens da section 'Padaria'

const filtro = (array) => {
    const result = array.filter(({price})=>{
        if(price>3){
            return true
        }
    })
    return result
}

filtro(itemArray)


const usandoMap = (array) => {
    const result = array.map((item)=>{
        let { product, price } = item
        if(product === 'Leite'){
            price = 4
        }
        return {...item, price}
    })
    return result
}

usandoMap(itemArray)


const usandoReduce = (array) => {
    const result = array.reduce((acc, {price, quantity, section})=>{
        if(section === 'Padaria'){
            acc = price*quantity
        }
        return acc
    },0)
    return result   
}


console.log(usandoReduce(itemArray))