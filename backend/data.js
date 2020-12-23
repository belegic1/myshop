import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            
            name: 'Admin',
            email: 'admin@example',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true
        },
        {
           
            name: 'dragan',
            email: 'dragan@example',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false
        }
    ],
    products:[
        {
            
            name: 'Slimd Shirt' ,
            category: 'Shirt',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 19,
            price: 120,
            image: '/images/p1.jpg',
            description: 'Best price shirt',
            
        },
        {
    
            name: 'Slima Shirt' ,
            category: 'Shirt',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 19,
            price: 120,
            image: '/images/p2.jpg',
            description: 'Best price shirt',

        },
        {
            
            name: 'Slsim Shirt' ,
            category: 'Shirt',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 19,
            price: 120,
            image: '/images/p3.jpg',
            description: 'Best price shirt'

        },
        {
           
            name: 'Slidm Shirt' ,
            category: 'Shirt',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 19,
            price: 120,
            image: '/images/p4.jpg',
            description: 'Best price shirt'

        },
        {
           
            name: 'Slifm Shirt' ,
            category: 'Shirt',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 19,
            price: 120,
            image: '/images/p5.jpg',
            description: 'Best price shirt'
        },
        {
            
            name: 'Sflim Shirt' ,
            category: 'Shirt',
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 19,
            price: 120,
            image: '/images/p6.jpg',
            description: 'Best price shirt'

        },
    ]
}


export default data