const products = [
    { 
        id: 'product1',
        url: 'https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg', 
        title: {
            shortTitle: 'Oppo',
            longTitle: 'OPPO A74 5G'
        }, 
        price: {
            mrp: 20000,
            cost: 14000,
            discount: '29%'
        },
        description: '6.49" Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels. Larger screen to body ratio of 90.5%.Side Fingerprint Sensor.5000 mAh lithium polymer battery.48MP Quad Camera 48MP Main + 2MP Macro + 2MP Depth Lens 8MP Front Camera',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/51rJUwcYdpL._UX679_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51rJUwcYdpL._UX679_.jpg', 
        title: {
            shortTitle: 'Girls Hoodie',
            longTitle: 'Girls Hoodie, Misaky Autumn & Winter Casual Avocado Print Pocket Long Sleeve Pullover Hooded Sweatshirt Tops'
        }, 
        price: {
            mrp: 1999,
            cost: 699,
            discount: '65%'
        },
        description: 'White Hoodie. Polyester Material, Soft, Stretch, Warm,High Elasticity, High Sun Protection, Easy To Wash and Dry.Graphic Hoodies. Good for Spring, Autumn, Winter, Outdoor, Daily, Casual, Club, Sports. Perfect with any jeans, skirts, shorts, pants, etc.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },

    { 
        id: 'product5',
        url: 'https://m.media-amazon.com/images/I/61WajbaZi2L._AC_UL320_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/61WajbaZi2L._AC_UL320_.jpg', 
        title: {
            shortTitle: 'Casual Heel Sandals',
            longTitle: 'ZAPATOZ Womens/Girls Casual Pink Stylish Latest Party/Casual Heel Sandals'
        }, 
        price: {
            mrp: 999,
            cost: 449,
            discount: '55%'
        },
        description: 'Block Heels Sandal that gives us the perfect boost in height and comfort all day long.; Ultra lightweight design featuring an easy slip-on style to perfectly Fit.Fashionable design allows for your stunning looks at all kinds of casual occasions.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },

    
    { 
        id: 'product6',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product7',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '2000 Watts Hair Dryer with powerful AC motor creates ideal airflow & temperature for salon-style results.Includes Cool Shot Button that provides a burst of cold air to help set the desired hairstyle.Comes with Diffuser, Concentrator Nozzle, Comb and 2.5 meter Long Cord',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product8',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product9',
        url: 'https://m.media-amazon.com/images/I/51jWrVyLMLL.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51jWrVyLMLL.jpg', 
        title: {
            shortTitle: 'Children Beauty Makeup Kit',
            longTitle: 'TECHNO BUZZ DEAL WITH DEVICE OF GLOB Children Beauty Makeup Kit Pretend Play Fashion Set Toy with Carry case Suitcase Multi Color'
        }, 
        price: {
            mrp: 1499,
            cost: 547,
            discount: '64%'
        },
        description: 'Toys and Games. This fun game includes everything a true salon would use, from (pretend) makeup to hair clips and style accessories. Your little girl can be a makeup designer, hair stylist, or nail artist all with this game.',
        discount: 'Extra 10% Off', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product10',
        url: 'https://images-eu.ssl-images-amazon.com/images/I/41XYdjiGbqL._SX300_SY300_QL70_FMwebp_.jpg',
        detailUrl: 'https://images-eu.ssl-images-amazon.com/images/I/41XYdjiGbqL._SX300_SY300_QL70_FMwebp_.jpg', 
        title: {
            shortTitle: 'Handmade Macrame Wall Hanging Shelf',
            longTitle: 'RCG Our Handmade Macrame Wall Hanging Shelf Is Made Of 4Mm Macrame Cotton Cord, Compared With Other 3Mm Boho Rope , It Is Stronger, Durable, And Beautiful.'
        }, 
        price: {
            mrp: 789,
            cost: 439,
            discount: '44%'
        },
        description: 'This gracefull macrame wall decor Shelf is made of 100% pure cotton rope, without artificial ingredients or chemicals. Sturdy, durable and premium quality. The Wall Art Home Decor creates a sense of harmony and comfort for your room.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the Day' 
    }
]

module.exports =products;