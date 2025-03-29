export const defaultCategories = [
    // 💸 Income Categories
    {
      id: "salary",
      name: "Salary",
      type: "INCOME",
      color: "#00C896", // Mint Green 💸
      icon: "Wallet",
    },
    {
      id: "freelance",
      name: "Freelance",
      type: "INCOME",
      color: "#009FFD", // Sky Blue 💻
      icon: "Laptop",
    },
    {
      id: "investments",
      name: "Investments",
      type: "INCOME",
      color: "#7D53DE", // Royal Purple 💰
      icon: "TrendingUp",
    },
    {
      id: "business",
      name: "Business",
      type: "INCOME",
      color: "#FF6B6B", // Vivid Coral 🚀
      icon: "Building",
    },
    {
      id: "rental",
      name: "Rental",
      type: "INCOME",
      color: "#FFB400", // Gold Yellow 💵
      icon: "Home",
    },
    {
      id: "other-income",
      name: "Other Income",
      type: "INCOME",
      color: "#A3A3A3", // Muted Gray 💸
      icon: "Plus",
    },
  
    // 💀 Expense Categories (🔥 Neon + Pastel)
    {
      id: "housing",
      name: "Housing",
      type: "EXPENSE",
      color: "#FF4F5A", // Warm Red 🏠
      icon: "Home",
      subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
    },
    {
      id: "transportation",
      name: "Transportation",
      type: "EXPENSE",
      color: "#FF8811", // Mango Orange 🚗
      icon: "Car",
      subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
    },
    {
      id: "groceries",
      name: "Groceries",
      type: "EXPENSE",
      color: "#00B4D8", // Aqua Blue 🥦
      icon: "Shopping",
    },
    {
      id: "utilities",
      name: "Utilities",
      type: "EXPENSE",
      color: "#6A4C93", // Royal Purple 💡
      icon: "Zap",
      subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
    },
    {
      id: "entertainment",
      name: "Entertainment",
      type: "EXPENSE",
      color: "#E7266E", // Hot Pink 🍿
      icon: "Film",
      subcategories: ["Movies", "Games", "Streaming Services"],
    },
    {
      id: "food",
      name: "Food",
      type: "EXPENSE",
      color: "#FF6D00", // Tangerine Orange 🍔
      icon: "UtensilsCrossed",
    },
    {
      id: "shopping",
      name: "Shopping",
      type: "EXPENSE",
      color: "#FF5E78", // Coral Pink 🛍️
      icon: "ShoppingBag",
      subcategories: ["Clothing", "Electronics", "Home Goods"],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      type: "EXPENSE",
      color: "#2FDD92", // Teal Green 💊
      icon: "HeartPulse",
      subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
    },
    {
      id: "education",
      name: "Education",
      type: "EXPENSE",
      color: "#706FD3", // Deep Blue 📚
      icon: "GraduationCap",
      subcategories: ["Tuition", "Books", "Courses"],
    },
    {
      id: "personal",
      name: "Personal Care",
      type: "EXPENSE",
      color: "#D946EF", // Violet Pink 💄
      icon: "Smile",
      subcategories: ["Haircut", "Gym", "Beauty"],
    },
    {
      id: "travel",
      name: "Travel",
      type: "EXPENSE",
      color: "#00BFFF", // Sky Blue ✈️
      icon: "Plane",
    },
    {
      id: "insurance",
      name: "Insurance",
      type: "EXPENSE",
      color: "#2D8CFF", // Cool Blue 🚗
      icon: "Shield",
      subcategories: ["Life", "Home", "Vehicle"],
    },
    {
      id: "gifts",
      name: "Gifts & Donations",
      type: "EXPENSE",
      color: "#F43F5E", // Rose Red 🎁
      icon: "Gift",
    },
    {
      id: "bills",
      name: "Bills & Fees",
      type: "EXPENSE",
      color: "#9C88FF", // Lavender Blue 📜
      icon: "Receipt",
      subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
    },
    {
      id: "other-expense",
      name: "Other Expenses",
      type: "EXPENSE",
      color: "#94a3b8", // Neutral Gray 💸
      icon: "MoreHorizontal",
    },
  ];
  
  export const categoryColors = defaultCategories.reduce((acc, category) => {
    acc[category.id] = category.color;
    return acc;
  }, {});
  