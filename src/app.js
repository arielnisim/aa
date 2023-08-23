"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
const filterItems = (items, filterFn) => {
    const result = [];
    items.forEach((item) => {
        if (!!filterFn(item)) {
            result.push(item.title);
        }
    });
    return result;
};
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
const printItemsData = (items) => {
    items.forEach((item) => {
        let data;
        if ("author" in item) {
            data = item.author;
        }
        else {
            data = item.duration;
        }
        console.log(`${item.type}, ${item.title}, ${data}`);
    });
};
// Test data
const libraryItems = [
    {
        type: ItemType.Book,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    { type: ItemType.DVD, title: "Inception", duration: 148 },
    { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { type: ItemType.DVD, title: "Avatar", duration: 162 },
    { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];
// Step 5:  הדפיסו את כל המידע הנתון
printItemsData(libraryItems);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
const filturDuration = (item) => {
    if (item.type === ItemType.DVD && item.duration > 120)
        return true;
    return false;
};
console.log(filterItems(libraryItems, filturDuration));
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
const filturAuthor = (item) => {
    if (item.type === ItemType.Book && item.author === "Harper Lee")
        return true;
    return false;
};
console.log(filterItems(libraryItems, filturAuthor));
