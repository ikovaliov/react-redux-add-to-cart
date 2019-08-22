export default class ProductService {
  data = [
    {
      id: 0,
      title: 'Samsung Galaxy Watch (46 mm)',
      brand: 'Samsung',
      price: 350,
      productImage:
        'https://www.bite.lt/files/pub/common9/common/device_accessories/gallery1-heroimage-SMR805UZSAXAR.png'
    },
    {
      id: 1,
      title: 'Samsung Galaxy Watch (42 mm)',
      brand: 'Samsung',
      price: 310,
      productImage:
        'https://www.bite.lt/files/pub/common9/common/device_accessories/gallery1-heroimage-SMR810NZDAXAR.png'
    },
    {
      id: 2,
      title: 'Samsung Gear S3 Frontier',
      brand: 'Samsung',
      price: 250,
      productImage:
        'https://www.bite.lt/files/pub/common9/common/device_accessories/gearfrontier1per.png'
    },
    {
      id: 3,
      title: 'Garmin Vivomove HR',
      brand: 'Garmin',
      price: 200,
      productImage:
        'https://www.bite.lt/files/pub/common9/common/device_accessories/pd-01-lg-c3ff1c13-62ef-4da9-a64e-2fde72ccf475.png'
    }
  ];

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //  reject(new Error('Something bad happened'));
        resolve(this.data);
      }, 700);
    });
  }
}
