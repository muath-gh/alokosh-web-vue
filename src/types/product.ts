export interface ProductOption {
  id: string
  name: string
  nameAr: string
  price?: string
  priceAr?: string
}

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
  multi?: boolean
  options?: ProductOption[]
}
