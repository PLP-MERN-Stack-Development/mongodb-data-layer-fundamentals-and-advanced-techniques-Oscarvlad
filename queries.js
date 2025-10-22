// queries.js - PLP Bookstore MongoDB Queries

// Connect to Atlas and database
const conn = new Mongo("mongodb+srv://plp_oscar:1nd1ca7@clusterplp.j5asqcg.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPLP");
const db = conn.getDB("plp_bookstore");

// Task 2: Basic CRUD Operations

print("=== TASK 2: BASIC CRUD OPERATIONS ===");

// Find all books in a specific genre
print("1. Find all books in Fiction genre:");
db.books.find({ genre: "Fiction" });

// Find books published after a certain year
print("2. Find books published after 1950:");
db.books.find({ published_year: { $gt: 1950 } });

// Find books by a specific author
print("3. Find books by George Orwell:");
db.books.find({ author: "George Orwell" });

// Update the price of a specific book
print("4. Update the price of The Great Gatsby:");
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 11.99 } }
);

// Delete a book by its title
print("5. Delete book 'Moby Dick':");
db.books.deleteOne({ title: "Moby Dick" });

// Task 3: Advanced Queries

print("=== TASK 3: ADVANCED QUERIES ===");

// Find books that are both in stock and published after 1900
print("6. Books in stock and published after 1900:");
db.books.find({
  in_stock: true,
  published_year: { $gt: 1900 }
});

// Use projection to return only title, author, and price fields
print("7. Fiction books (title, author, price only):");
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// Implement sorting to display books by price (ascending)
print("8. Books sorted by price (ascending):");
db.books.find().sort({ price: 1 });

// Implement sorting to display books by price (descending)
print("9. Books sorted by price (descending):");
db.books.find().sort({ price: -1 });

// Use limit and skip methods to implement pagination (5 books per page)
print("10. Pagination - Page 1 (5 books):");
db.books.find().limit(5).skip(0);

print("11. Pagination - Page 2 (5 books):");
db.books.find().limit(5).skip(5);

// Task 4: Aggregation Pipeline

print("=== TASK 4: AGGREGATION PIPELINE ===");

// Calculate the average price of books by genre
print("12. Average price by genre:");
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
]);

// Find the author with the most books in the collection
print("13. Author with most books:");
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// Group books by publication decade and count them
print("14. Books by publication decade:");
db.books.aggregate([
  {
    $project: {
      title: 1,
      published_year: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 },
      books: { $push: "$title" }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

// Task 5: Indexing

print("=== TASK 5: INDEXING ===");

// Create an index on the title field for faster searches
print("15. Creating index on title field:");
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year
print("16. Creating compound index on author and published_year:");
db.books.createIndex({ author: 1, published_year: -1 });

// Use the explain() method to demonstrate performance improvement
print("17. Performance analysis with explain():");
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");

print("ALL ASSIGNMENT TASKS COMPLETED SUCCESSFULLY!");
