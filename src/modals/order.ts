export interface ProductOption {
  name: string;
  frontCover?: string;
  backCover?: string;
  coverPrint?: boolean;
  flipSide?: string;
  coverColor?: string;
  isEmbossed?: boolean;
  embossColor?: string;
  coverWeight?: string;
  stitchSide?: string;
  holePunchType?: string;
  holePunchSide?: string;
}

export interface Product {
  format: string;
  weight: string;
  printSetting: string;
  flipSetting: string | null;
  noOfSets: number;
  bwPages: number;
  colorPages: number;
  file: string;
  option: ProductOption;
}

export interface Order {
  order: Product[];
}
