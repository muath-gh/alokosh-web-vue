import type { Product } from '../types/product'

// export const products: Product[] = [
//   {
//     id: '1',
//     name: 'Premium Tahini',
//     nameAr: 'طحينة فاخرة',
//     description: 'Pure, creamy tahini made from the finest sesame seeds',
//     descriptionAr: 'طحينة نقية وكريمية مصنوعة من أجود أنواع السمسم المحمص بعناية',
//     image: 'https://images.pexels.com/photos/6544380/pexels-photo-6544380.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'tahini',
//     features: ['100% Natural', 'No Additives', 'Rich in Calcium'],
//     featuresAr: ['طبيعي 100%', 'بدون إضافات', 'غني بالكالسيوم']
//   },
//   {
//     id: '2',
//     name: 'Roasted Sesame',
//     nameAr: 'سمسم محمص',
//     description: 'Perfectly roasted sesame seeds with authentic taste',
//     descriptionAr: 'سمسم محمص بشكل مثالي مع نكهة أصيلة ومميزة',
//     image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'sesame',
//     features: ['Premium Quality', 'Traditional Roasting', 'Rich Flavor'],
//     featuresAr: ['جودة فائقة', 'تحميص تقليدي', 'نكهة غنية']
//   },
//   {
//     id: '3',
//     name: 'Organic Tahini',
//     nameAr: 'طحينة عضوية',
//     description: 'Certified organic tahini for health-conscious customers',
//     descriptionAr: 'طحينة عضوية معتمدة للعملاء المهتمين بالصحة',
//     image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'tahini',
//     features: ['Organic Certified', 'Nutrient Rich', 'Smooth Texture'],
//     featuresAr: ['عضوي معتمد', 'غني بالعناصر الغذائية', 'قوام ناعم']
//   },
//   {
//     id: '4',
//     name: 'Black Sesame',
//     nameAr: 'سمسم أسود',
//     description: 'Rare black sesame with unique nutritional benefits',
//     descriptionAr: 'سمسم أسود نادر بفوائد غذائية فريدة ومميزة',
//     image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'specialty',
//     features: ['High in Antioxidants', 'Unique Flavor', 'Premium Quality'],
//     featuresAr: ['غني بمضادات الأكسدة', 'نكهة فريدة', 'جودة فاخرة']
//   },
//   {
//     id: '5',
//     name: 'Honey Tahini',
//     nameAr: 'طحينة بالعسل',
//     description: 'Delicious blend of pure tahini and natural honey',
//     descriptionAr: 'مزيج لذيذ من الطحينة النقية والعسل الطبيعي',
//     image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'specialty',
//     features: ['Natural Sweetness', 'Energy Boosting', 'No Preservatives'],
//     featuresAr: ['حلاوة طبيعية', 'معزز للطاقة', 'بدون مواد حافظة']
//   },
//   {
//     id: '6',
//     name: 'White Sesame',
//     nameAr: 'سمسم أبيض',
//     description: 'Premium white sesame seeds for traditional recipes',
//     descriptionAr: 'سمسم أبيض فاخر للوصفات التقليدية الأصيلة',
//     image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800',
//     category: 'sesame',
//     features: ['Versatile Use', 'Fresh & Crunchy', 'High Quality'],
//     featuresAr: ['استخدام متعدد', 'طازج ومقرمش', 'جودة عالية']
//   }
// ]


export const products: Product[] = [
  { id:'1', name:'Product 1', nameAr:'منتج 1', description:'Demo product 1', descriptionAr:'وصف تجريبي للمنتج 1', image:'/products/product1.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'2', name:'Product 2', nameAr:'منتج 2', description:'Demo product 2', descriptionAr:'وصف تجريبي للمنتج 2', image:'/products/product2.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'3', name:'Product 3', nameAr:'منتج 3', description:'Demo product 3', descriptionAr:'وصف تجريبي للمنتج 3', image:'/products/product3.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'4', name:'Product 4', nameAr:'منتج 4', description:'Demo product 4', descriptionAr:'وصف تجريبي للمنتج 4', image:'/products/product4.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'5', name:'Product 5', nameAr:'منتج 5', description:'Demo product 5', descriptionAr:'وصف تجريبي للمنتج 5', image:'/products/product5.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'6', name:'Product 6', nameAr:'منتج 6', description:'Demo product 6', descriptionAr:'وصف تجريبي للمنتج 6', image:'/products/product6.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'7', name:'Product 7', nameAr:'منتج 7', description:'Demo product 7', descriptionAr:'وصف تجريبي للمنتج 7', image:'/products/product7.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'8', name:'Product 8', nameAr:'منتج 8', description:'Demo product 8', descriptionAr:'وصف تجريبي للمنتج 8', image:'/products/product8.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'9', name:'Product 9', nameAr:'منتج 9', description:'Demo product 9', descriptionAr:'وصف تجريبي للمنتج 9', image:'/products/product9.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'10', name:'Product 10', nameAr:'منتج 10', description:'Demo product 10', descriptionAr:'وصف تجريبي للمنتج 10', image:'/products/product10.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'11', name:'Product 11', nameAr:'منتج 11', description:'Demo product 11', descriptionAr:'وصف تجريبي للمنتج 11', image:'/products/product11.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'12', name:'Product 12', nameAr:'منتج 12', description:'Demo product 12', descriptionAr:'وصف تجريبي للمنتج 12', image:'/products/product12.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'13', name:'Product 13', nameAr:'منتج 13', description:'Demo product 13', descriptionAr:'وصف تجريبي للمنتج 13', image:'/products/product13.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'14', name:'Product 14', nameAr:'منتج 14', description:'Demo product 14', descriptionAr:'وصف تجريبي للمنتج 14', image:'/products/product14.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'15', name:'Product 15', nameAr:'منتج 15', description:'Demo product 15', descriptionAr:'وصف تجريبي للمنتج 15', image:'/products/product15.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'16', name:'Product 16', nameAr:'منتج 16', description:'Demo product 16', descriptionAr:'وصف تجريبي للمنتج 16', image:'/products/product16.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'17', name:'Product 17', nameAr:'منتج 17', description:'Demo product 17', descriptionAr:'وصف تجريبي للمنتج 17', image:'/products/product17.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'18', name:'Product 18', nameAr:'منتج 18', description:'Demo product 18', descriptionAr:'وصف تجريبي للمنتج 18', image:'/products/product18.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'19', name:'Product 19', nameAr:'منتج 19', description:'Demo product 19', descriptionAr:'وصف تجريبي للمنتج 19', image:'/products/product19.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'20', name:'Product 20', nameAr:'منتج 20', description:'Demo product 20', descriptionAr:'وصف تجريبي للمنتج 20', image:'/products/product20.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'21', name:'Product 21', nameAr:'منتج 21', description:'Demo product 21', descriptionAr:'وصف تجريبي للمنتج 21', image:'/products/product21.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'22', name:'Product 22', nameAr:'منتج 22', description:'Demo product 22', descriptionAr:'وصف تجريبي للمنتج 22', image:'/products/product22.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'23', name:'Product 23', nameAr:'منتج 23', description:'Demo product 23', descriptionAr:'وصف تجريبي للمنتج 23', image:'/products/product23.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'24', name:'Product 24', nameAr:'منتج 24', description:'Demo product 24', descriptionAr:'وصف تجريبي للمنتج 24', image:'/products/product24.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'25', name:'Product 25', nameAr:'منتج 25', description:'Demo product 25', descriptionAr:'وصف تجريبي للمنتج 25', image:'/products/product25.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'26', name:'Product 26', nameAr:'منتج 26', description:'Demo product 26', descriptionAr:'وصف تجريبي للمنتج 26', image:'/products/product26.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'27', name:'Product 27', nameAr:'منتج 27', description:'Demo product 27', descriptionAr:'وصف تجريبي للمنتج 27', image:'/products/product27.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'28', name:'Product 28', nameAr:'منتج 28', description:'Demo product 28', descriptionAr:'وصف تجريبي للمنتج 28', image:'/products/product28.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'29', name:'Product 29', nameAr:'منتج 29', description:'Demo product 29', descriptionAr:'وصف تجريبي للمنتج 29', image:'/products/product29.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'30', name:'Product 30', nameAr:'منتج 30', description:'Demo product 30', descriptionAr:'وصف تجريبي للمنتج 30', image:'/products/product30.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'31', name:'Product 31', nameAr:'منتج 31', description:'Demo product 31', descriptionAr:'وصف تجريبي للمنتج 31', image:'/products/product31.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'32', name:'Product 32', nameAr:'منتج 32', description:'Demo product 32', descriptionAr:'وصف تجريبي للمنتج 32', image:'/products/product32.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'33', name:'Product 33', nameAr:'منتج 33', description:'Demo product 33', descriptionAr:'وصف تجريبي للمنتج 33', image:'/products/product33.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'34', name:'Product 34', nameAr:'منتج 34', description:'Demo product 34', descriptionAr:'وصف تجريبي للمنتج 34', image:'/products/product34.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'35', name:'Product 35', nameAr:'منتج 35', description:'Demo product 35', descriptionAr:'وصف تجريبي للمنتج 35', image:'/products/product35.jpg', category:'sesame', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'36', name:'Product 36', nameAr:'منتج 36', description:'Demo product 36', descriptionAr:'وصف تجريبي للمنتج 36', image:'/products/product36.jpg', category:'specialty', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] },
  { id:'37', name:'Product 37', nameAr:'منتج 37', description:'Demo product 37', descriptionAr:'وصف تجريبي للمنتج 37', image:'/products/product37.jpg', category:'tahini', features:['Feature A','Feature B','Feature C'], featuresAr:['ميزة أ','ميزة ب','ميزة ج'] }
]

