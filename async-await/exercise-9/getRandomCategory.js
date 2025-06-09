export function getRandomCategory() {
    const categoriesText = ['Їжа', 'Техніка', 'Книги', 'Одяг'];
    const categoriesData = ['food', 'tech', 'books', 'clothes'];
    const randomIndex = Math.floor(Math.random() * categoriesText.length);
    return {categoriesData:categoriesData[randomIndex], categoriesText:categoriesText[randomIndex]};
  }