const GetDB = ({ id }) => { 

    const db = [
        {
            _id: 1,
            clave: 'PRO-0001',
            name: 'Bocina Ultimate Ears Boom 3 Bluetooth - Night Black',
            category: 'Electrónica',
            price: 2399,
            image: 'coloca la ruta de las imagenes',
        },
        {
            _id: 2,
            clave: 'PRO-0002',
            name: 'Reloj Inteligente Besoner B57 Bluetooth Deportivo Ip67',
            category: 'Electrónica',
            price: 595,
            image: 'coloca la ruta de las imagenes',
        },
        {
            _id: 3,
            clave: 'PRO-0003',
            name: 'Secadora de Cabello Conair Mini de Pared',
            category: 'Hogar',
            price: 1499,
            image: 'coloca la ruta de las imagenes',
        },
        {
            _id: 4,
            clave: 'PRO-0004',
            name: 'Consola XBOX ONE S All Digital 1 TB',
            category: 'Electrónica',
            price: 5999,
            image: 'coloca la ruta de las imagenes',
        },
        {
            _id: 5,
            clave: 'PRO-0005',
            name: 'Control Xbox One Inalámbrico Rojo',
            category: 'Electrónica',
            price: 1499,
            image: 'coloca la ruta de las imagenes',
        },
        {
            _id: 6,
            clave: 'PRO-0006',
            name: 'Audífonos Estéreo con Micrófono Headset Stereo',
            category: 'Electrónica',
            price: 1599,
            image: 'coloca la ruta de las imagenes',
        },
        {
            _id: 7,
            clave: 'PRO-0007',
            name: 'Monitor LED BenQ GW2760HM',
            category: 'Electrónica',
            price: 5999,
            image: 'coloca la ruta de las imagenes',
        },
        {
            _id: 8,
            clave: 'PRO-0008',
            name: 'Kit Escritorio y Librero Beta 83 x 36 x 135.1 IEV Café',
            category: 'Oficina',
            price: 3879,
            image: 'coloca la ruta de las imagenes',
        },
    ]

    return !id ? db : db.find( product => product._id === id )
    
}