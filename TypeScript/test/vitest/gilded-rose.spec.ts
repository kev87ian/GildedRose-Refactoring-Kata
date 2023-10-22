import {Item} from "@/gilded-rose";
import {updateAgedBrie} from "@/updateQualityMethods";

describe('Update Aged Brie Test', () => {
  it('decreases sellIn value by 1', () => {
    const item = new Item('Aged Brie', 5, 20);
    updateAgedBrie(item);
    expect(item.sellIn).toBe(4);
  });
  it('does not increase quality beyond 50', () => {
    const item = new Item('Aged Brie', 5, 50);
    updateAgedBrie(item);
    expect(item.quality).toBe(50);
  });
  it('increases quality by 1 as it ages', () => {
    const item = new Item('Aged Brie', 5, 20);
    updateAgedBrie(item);
    expect(item.quality).toBe(21);
  });

  it('should not have a quality below 0', () => {
    const item = new Item("Aged Brie", 5, 0)
    updateAgedBrie(item)
    expect(item.quality).toBe(0)
  })
});

