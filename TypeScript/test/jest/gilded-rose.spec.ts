import {Item} from "@/gilded-rose";
import {updateAgedBrie, updateBackstagePasses, updateSulfuras} from "@/updateQualityMethods";

describe('Updated Aged Brie Test', () => {
  it('should increase in quality as time goes', () => {
    const item = new Item("Aged Brie", 22, 25)
    updateAgedBrie(item)
    expect(item.quality).toBe(26)
    expect(item.sellIn).toBe(21)
  });

  it('should have a maximum quality of 50', () => {
    const item = new Item("Aged Brie", 1, 49)
    updateAgedBrie(item)
    expect(item.quality).toBe(50)
    expect(item.sellIn).toBe(0)
  });

  it('should increase quality by 2 if deadline is 10 or less days away', () => {
    const item = new Item("Aged Brie", 8, 48)
    updateAgedBrie(item)
   expect(item.quality).toBe(50)
    expect(item.sellIn).toBe(7)
  });


  it('should increase quality by 3 if deadline is 5 or less days away', () => {
    const item = new Item("Aged Brie", 4, 47)
    updateAgedBrie(item)
    expect(item.quality).toBe(50)
    expect(item.sellIn).toBe(3)
  });
});

describe('Sulfuras Test', () => {
  it('should always have a quality of 80', () => {
    const item = new Item("Sulfuras", 25, 80)
    updateSulfuras(item)
    expect(item.quality).toBe(80)
  });
});


describe('Backstage passes Test', () => {
  it('should increase in quality as times goes', () => {
    const item = new Item("Backstage Pass", 25, 25)
    updateBackstagePasses(item)
    expect(item.quality).toBe(26)
  });

  it('should have a maximum quality of 50', () => {
    const item = new Item("Backstage Pass", 2, 48)
    updateBackstagePasses(item)
    expect(item.quality).toBe(50)
    expect(item.sellIn).toBe(1)

  });

  it('should have a quality of 0 when sellin is 0', () => {
    const item = new Item("Backstage Pass", 0, 50)
    updateBackstagePasses(item)
    expect(item.quality).toBe(0)
  });

  it('should increase in value by 2 when sellin is 10 or less days away', () => {
    const item = new Item("Backstage Pass", 9, 46)
    updateBackstagePasses(item)
    expect(item.quality).toBe(48)
  });

  it('should increase in value by 3 when sellin is 5 or less days away', () => {
    const item = new Item("Backstage Pass", 9, 46)
    updateBackstagePasses(item)
    expect(item.quality).toBe(48)
  });


});

