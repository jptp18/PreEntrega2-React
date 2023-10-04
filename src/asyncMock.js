const products = [
    {id:'1',name:'Iphone 12', price: 1000, category:'celular',img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12-320x320.png',stock: 25, description:'Descripcion Iphone 12'},
    {id:'2',name:'Samsung A04', price: 800, category:'celular',img:'https://cbafederal.net/wp-content/uploads/2023/07/ao4-320x320.webp',stock: 15, description:'Descripcion Samsung A04'},
    {id:'3',name:'Ipad 8va generacion', price: 1200, category:'tablet', img:'https://cbafederal.net/wp-content/uploads/2021/09/Apple-iPad-Pro-129-inch-5th-gen-Space-Gray-frontimage-320x320.png',stock: 30, description:'Descripcion Ipad'},
    {id:'4',name:'NoteBook', price: 1500, category:'notebook', img:'https://cbafederal.net/wp-content/uploads/2021/09/Apple-iPad-Pro-129-inch-5th-gen-Space-Gray-frontimage-320x320.png',stock: 30, description:'Descripcion Ipad'}
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>  {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) =>  {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}