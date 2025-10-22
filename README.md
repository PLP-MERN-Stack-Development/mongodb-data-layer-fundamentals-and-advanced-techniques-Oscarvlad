
# 🎯 Project Overview

The plp_bookstore database models a simple digital bookstore inventory system. Each book document includes essential metadata such as:

- `title` (string)
- `author` (string)
- `genre` (string)
- `published_year` (number)
- `price` (number)
- `in_stock` (boolean)
- `pages` (number)
- `publisher` (string)

This project fulfills all requirements of the PLP MongoDB assignment, showcasing:

- Proper data modeling with realistic sample data
- Efficient querying and filtering
- Data transformation via aggregation
- Performance optimization using indexes
- Real-world database operations

## Repository Structure

plp-bookstore/
├── insert_books.js # Inserts 12+ sample book documents into the 'books' collection
├── queries.js # All MongoDB queries: CRUD, advanced, aggregation, indexing
├── README.md # This comprehensive guide
└── mongodb_compass_screenshot.png # Screenshot showing sample data in Atlas

## Prerequisites

- MongoDB Atlas account
- MongoDB Compass (optional, for visual interface)
- MongoDB Shell (mongosh)

### Step 1: Set Up MongoDB Atlas

1. **Create Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create Cluster**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select cloud provider and region
   - Click "Create"

3. **Configure Database Access**
   - Go to "Database Access" → "Add New Database User"
   - Username: plpuser (or your preferred name)
   - Password: Create a secure password
   - Privileges: "Read and write to any database"

4. **Network Access**
   - Go to "Network Access" → "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Clusters" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string

### Step 2: Run the Project

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd plp-bookstore
   ```

1. **Update Connection String**

   -Edit both insert_books.js and queries.js
   -Replace the connection string with your Atlas connection string:

   ```bash
   const conn = new Mongo("mongodb+srv://username:password@cluster.xxx.mongodb.net/");
   ```

1. **Insert Sample Data**

```bash
mongosh "your-connection-string" < insert_books.js
```

1. **Execute All Queries**

```bash
mongosh "your-connection-string" < queries.js
```
