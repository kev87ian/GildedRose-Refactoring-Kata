import {Item} from "@/gilded-rose";

const MAXIMUM_QUALITY_VALUE: number = 50;
const MINIMUM_QUALITY_VALUE: number = 0;

export class GildedRoseUpdater {
  updateSulfuras(sulfura: Item) {
    sulfura.quality = 80;
  }

  updateBackstagePasses(backstagePass: Item) {
    backstagePass.sellIn -= 1;

    if (backstagePass.sellIn <= 0) {
      backstagePass.quality = 0;
    } else if (backstagePass.sellIn <= 5) {
      backstagePass.quality += 3;
    } else if (backstagePass.sellIn <= 10) {
      backstagePass.quality += 2;
    } else {
      backstagePass.quality += 1;
    }

    if (backstagePass.quality > MAXIMUM_QUALITY_VALUE) {
      backstagePass.quality = MAXIMUM_QUALITY_VALUE;
    }

    if (backstagePass.quality < MINIMUM_QUALITY_VALUE) {
      backstagePass.quality = MINIMUM_QUALITY_VALUE;
    }
  }

  updateAgedBrie(agedBrie: Item) {
    agedBrie.sellIn -= 1;
    agedBrie.quality += 1;

    if (agedBrie.quality > MAXIMUM_QUALITY_VALUE) {
      agedBrie.quality = MAXIMUM_QUALITY_VALUE;
    }
  }

  updateConjuredItems(conjuredItem: Item) {
    conjuredItem.sellIn -= 1;
    conjuredItem.quality -= 2;

    if (conjuredItem.quality < MINIMUM_QUALITY_VALUE) {
      conjuredItem.quality = MINIMUM_QUALITY_VALUE;
    }
  }

  updateNormalItem(item: Item) {

    if (item.sellIn <= 0) {
      item.quality -= 2;
    } else{
      item.quality -= 1;
    }

    if(item.quality<MINIMUM_QUALITY_VALUE){
      item.quality = MINIMUM_QUALITY_VALUE
    }

  }
}
