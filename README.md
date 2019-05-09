# Backend of flashcards web app
It's not individual project. Should be used with frontend (separte repository)
## Database
Database is called 'fiszki'
### flashcards collection
document
```
    firstText: 'Apple',
    secondText: 'Jabłko'
```
### category collection
document
```
    name: 'Polish'
```
### flashcardsCategories collection
document
```
    flashcardId: ObjectId('...'),
    categoryId: ObjectId('...')
```
## Routes

#### flashcards (CRUD)
```
    /api/flashcards         // GET      -> get all flashcards
    /api/flashcards         // POST     -> add flashcard 
    /api/flashcards/ID      // DELETE   -> delete flashcard with given ID
    /api/flashcards/ID      // PUT      -> change specific flashcard properties with those in req.body
```
#### categories (CRUD)
```
    /api/categories         // GET      -> get all categories
    /api/categories         // POST     -> add category 
    /api/categories/ID      // DELETE   -> delete category with given ID
    /api/categories/ID      // PUT      -> change specific category properties with those in req.body
```
#### relation (get, create, delete)
```
    /api/flashcards/ID/categories                           // GET      -> get all categories related to flashcard with given ID 
    /api/flashcards/flashcardID/categories/categoryID       // POST     -> creates relation between specific flashcard and specific category
    /api/flashcards/flashcardID/categories/categoryID       // DELETE   -> removes relation between specific flashcard and specific category

    /api/categories/ID/flashcards                           // GET      -> get all flashcards related to category with given ID

```