import {Item} from "@/gilded-rose";
import {GildedRoseUpdater} from "@/updateQualityMethods";


const updaterClass = new GildedRoseUpdater()

describe('Aged Brie Test', () => {
  it('should increase in quality as time goes', () => {
    const item = new Item("Aged Brie", 22, 25)
    updaterClass.updateAgedBrie(item)
    expect(item.quality).toBe(26)
    expect(item.sellIn).toBe(21)
  });

  it('should have a maximum quality of 50', () => {
    const item = new Item("Aged Brie", 1, 49)
    updaterClass.updateAgedBrie(item)
    expect(item.quality).toBe(50)
    expect(item.sellIn).toBe(0)
  });


});

describe('Sulfuras Test', () => {
  it('should always have a quality of 80', () => {
    const item = new Item("Sulfuras", 25, 80)
    updaterClass.updateSulfuras(item)
    expect(item.quality).toBe(80)
  });
});


describe('Backstage passes Test', () => {
  it('should increase in quality as times goes', () => {
    const item = new Item("Backstage Pass", 25, 25)
    updaterClass.updateBackstagePasses(item)
    expect(item.quality).toBe(26)
  });

  it('should have a maximum quality of 50', () => {
    const item = new Item("Backstage Pass", 2, 48)
    updaterClass.updateBackstagePasses(item)
    expect(item.quality).toBe(50)
    expect(item.sellIn).toBe(1)

  });

  it('should have a quality of 0 when sellin is 0', () => {
    const item = new Item("Backstage Pass", 0, 50)
    updaterClass.updateBackstagePasses(item)
    expect(item.quality).toBe(0)
  });

  it('should increase in value by 2 when sellin is 10 or less days away', () => {
    const item = new Item("Backstage Pass", 9, 46)
    updaterClass.updateBackstagePasses(item)
    expect(item.quality).toBe(48)
  });

  it('should increase in value by 3 when sellin is 5 or less days away', () => {
    const item = new Item("Backstage Pass", 9, 46)
    updaterClass.updateBackstagePasses(item)
    expect(item.quality).toBe(48)
  });
});

describe('Conjured Items Test', () => {
  it('should reduce quality 2x quicker', () => {
    const item = new Item("Conjured Item", 24, 26)
    updaterClass.updateConjuredItems(item)
    expect(item.sellIn).toBe(23)
    expect(item.quality).toBe(24)
  });

  it('should have a miminum quality of 0', () => {
    const item = new Item("Conjured Item", 24, 1)
    updaterClass.updateConjuredItems(item)
    expect(item.sellIn).toBe(23)
    expect(item.quality).toBe(0)
  });
});

describe('Normal items Test', () => {


  it('reduce quality as time goes', () => {
    const item = new Item("Normal Item", 12, 48)
    updaterClass.updateNormalItem(item)
    expect(item.quality).toBe(47)
  });

  it('reduce quality 2x faster if sell in has passed', () => {
    const item = new Item("Normal Item", 0, 48)
    updaterClass.updateNormalItem(item)
    expect(item.quality).toBe(46)
  });
});
