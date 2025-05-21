const recipes = [
  {
    "image": "https://source.unsplash.com/400x300/?pasta",
    "title": "Creamy Garlic Pasta",
    "ingredients": [
      "Spaghetti",
      "Garlic",
      "Heavy cream",
      "Parmesan",
      "Salt",
      "Pepper"
    ],
    "instructions": "Boil pasta. Sauté garlic in butter. Add cream, cheese, and combine with pasta.",
    "cuisineType": "Italian",
    "preparationTime": 25,
    "categories": ["Lunch", "Dinner"],
    "likeCount": 2
  },
  {
    "image": "https://source.unsplash.com/400x300/?tacos",
    "title": "Spicy Chicken Tacos",
    "ingredients": [
      "Chicken",
      "Taco shells",
      "Lettuce",
      "Tomato",
      "Sour cream",
      "Taco seasoning"
    ],
    "instructions": "Cook chicken with seasoning. Fill taco shells with ingredients.",
    "cuisineType": "Mexican",
    "preparationTime": 30,
    "categories": ["Lunch", "Dinner"],
    "likeCount": 3
  },
  {
    "image": "https://source.unsplash.com/400x300/?dal",
    "title": "Simple Yellow Dal",
    "ingredients": ["Lentils", "Turmeric", "Salt", "Onion", "Garlic", "Ghee"],
    "instructions": "Cook lentils with turmeric and salt. Fry onions/garlic in ghee and add.",
    "cuisineType": "Indian",
    "preparationTime": 40,
    "categories": ["Lunch", "Vegan"],
    "likeCount": 1
  },
  {
    "image": "https://source.unsplash.com/400x300/?dumplings",
    "title": "Steamed Veg Dumplings",
    "ingredients": [
      "Flour",
      "Cabbage",
      "Carrot",
      "Soy sauce",
      "Ginger",
      "Garlic"
    ],
    "instructions": "Make filling, wrap in dough, and steam for 10 mins.",
    "cuisineType": "Chinese",
    "preparationTime": 45,
    "categories": ["Lunch", "Dinner", "Vegan"],
    "likeCount": 2
  },
  {
    "image": "https://source.unsplash.com/400x300/?pancakes",
    "title": "Fluffy Pancakes",
    "ingredients": [
      "Flour",
      "Milk",
      "Eggs",
      "Baking powder",
      "Sugar",
      "Butter"
    ],
    "instructions": "Mix ingredients, cook on skillet until golden brown.",
    "cuisineType": "Others",
    "preparationTime": 20,
    "categories": ["Breakfast", "Dessert"],
    "likeCount": 3
  },
  {
    "image": "https://source.unsplash.com/400x300/?biryani",
    "title": "Chicken Biryani",
    "ingredients": ["Chicken", "Basmati rice", "Onion", "Yogurt", "Spices"],
    "instructions": "Marinate chicken, layer with rice, cook on low heat.",
    "cuisineType": "Indian",
    "preparationTime": 60,
    "categories": ["Dinner"],
    "likeCount": 1
  },
  {
    "image": "https://source.unsplash.com/400x300/?salad",
    "title": "Quinoa Veg Salad",
    "ingredients": [
      "Quinoa",
      "Cucumber",
      "Tomato",
      "Lemon",
      "Olive oil",
      "Mint"
    ],
    "instructions": "Cook quinoa. Mix with chopped veggies and dressing.",
    "cuisineType": "Others",
    "preparationTime": 25,
    "categories": ["Lunch", "Vegan"],
    "likeCount": 2
  },
  {
    "image": "https://source.unsplash.com/400x300/?noodles",
    "title": "Soy Garlic Noodles",
    "ingredients": [
      "Noodles",
      "Soy sauce",
      "Garlic",
      "Spring onions",
      "Sesame oil"
    ],
    "instructions": "Cook noodles. Toss with sauce and sautéed garlic.",
    "cuisineType": "Chinese",
    "preparationTime": 20,
    "categories": ["Lunch", "Dinner", "Vegan"],
    "likeCount": 3
  },
  {
    "image": "https://source.unsplash.com/400x300/?brownie",
    "title": "Fudgy Chocolate Brownies",
    "ingredients": ["Cocoa", "Butter", "Sugar", "Eggs", "Flour", "Chocolate"],
    "instructions": "Mix all ingredients. Bake at 180°C for 25 minutes.",
    "cuisineType": "Others",
    "preparationTime": 35,
    "categories": ["Dessert"],
    "likeCount": 2
  },
  {
    "image": "https://source.unsplash.com/400x300/?nachos",
    "title": "Loaded Veg Nachos",
    "ingredients": ["Tortilla chips", "Beans", "Cheese", "Salsa", "Jalapeños"],
    "instructions": "Layer and bake chips with toppings until cheese melts.",
    "cuisineType": "Mexican",
    "preparationTime": 15,
    "categories": ["Lunch", "Vegan"],
    "likeCount": 2
  },
  {
    "image": "https://source.unsplash.com/400x300/?risotto",
    "title": "Mushroom Risotto",
    "ingredients": [
      "Arborio rice",
      "Mushrooms",
      "Onion",
      "Garlic",
      "Stock",
      "Parmesan"
    ],
    "instructions": "Sauté mushrooms, slowly cook rice with broth until creamy.",
    "cuisineType": "Italian",
    "preparationTime": 50,
    "categories": ["Dinner"],
    "likeCount": 1
  },
  {
    "image": "https://source.unsplash.com/400x300/?smoothie",
    "title": "Berry Banana Smoothie",
    "ingredients": ["Banana", "Berries", "Yogurt", "Honey"],
    "instructions": "Blend all ingredients until smooth. Serve chilled.",
    "cuisineType": "Others",
    "preparationTime": 5,
    "categories": ["Breakfast", "Vegan"],
    "likeCount": 3
  },
  {
    "image": "https://source.unsplash.com/400x300/?samosa",
    "title": "Crispy Veg Samosas",
    "ingredients": ["Potato", "Peas", "Spices", "Flour", "Oil"],
    "instructions": "Prepare filling, shape samosas, and deep fry.",
    "cuisineType": "Indian",
    "preparationTime": 40,
    "categories": ["Lunch", "Vegan", "Snack"],
    "likeCount": 1
  },
  {
    "image": "https://source.unsplash.com/400x300/?stirfry",
    "title": "Tofu Stir Fry",
    "ingredients": [
      "Tofu",
      "Bell peppers",
      "Soy sauce",
      "Ginger",
      "Sesame oil"
    ],
    "instructions": "Sauté tofu and veggies. Toss with sauce and serve.",
    "cuisineType": "Chinese",
    "preparationTime": 30,
    "categories": ["Dinner", "Vegan"],
    "likeCount": 2
  },
  {
    "image": "https://source.unsplash.com/400x300/?cake",
    "title": "Vanilla Sponge Cake",
    "ingredients": [
      "Flour",
      "Sugar",
      "Eggs",
      "Vanilla",
      "Baking powder",
      "Milk"
    ],
    "instructions": "Mix and bake at 180°C for 30 minutes.",
    "cuisineType": "Others",
    "preparationTime": 40,
    "categories": ["Dessert"],
    "likeCount": 3
  }
]

module.exports = recipes;
