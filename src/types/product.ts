export interface Product {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  image: string
  category: 'tahini' | 'sesame' | 'specialty'
  features: string[]
  featuresAr: string[]
}
