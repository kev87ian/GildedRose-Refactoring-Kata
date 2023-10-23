import {GildedRoseUpdater} from "@/updateQualityMethods";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const updaterClass = new GildedRoseUpdater()

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {

    for (const item of this.items) {
      switch (item.name) {
        case "Sulfuras":
          updaterClass.updateSulfuras(item)
          break;
        case "Backstage Pass":
          updaterClass.updateBackstagePasses(item)
          break;
        case "Aged Brie":
          updaterClass.updateAgedBrie(item)
          break;
        case "Conjured Item":
          updaterClass.updateConjuredItems(item)
          break;
        default:
          updaterClass.updateNormalItem(item)
      }
    }
  }

}
