// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = "book",
  DVD = "dvd",
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: ItemType.Book;
  title: string;
  author: string;
}

interface DVD {
  type: ItemType.DVD;
  title: string;
  duration: number;
}

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
type filterFn = (item: Book | DVD) => boolean;

const filterItems = (items: (Book | DVD)[], filterFn: filterFn) => {
  const result: string[] = [];
  items.forEach((item) => {
    if (!!filterFn(item)) {
      result.push(item.title);
    }
  });
  return result;
};

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
const printItemsData = (items: (Book | DVD)[]) => {
  items.forEach((item) => {
    let data: string | number;
    if ("author" in item) {
      data = item.author;
    } else {
      data = item.duration;
    }
    console.log(`${item.type}, ${item.title}, ${data}`);
  });
};

// Test data
const libraryItems: (Book | DVD)[] = [
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
const filturDuration = (item: DVD | Book) => {
  if (item.type === ItemType.DVD && item.duration > 120) return true;
  return false;
};
console.log(filterItems(libraryItems, filturDuration));

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
const filturAuthor = (item: DVD | Book) => {
  if (item.type === ItemType.Book && item.author === "Harper Lee") return true;
  return false;
};
console.log(filterItems(libraryItems, filturAuthor));
