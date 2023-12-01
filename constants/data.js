const agridata = [
    {
        "id":1,
        "product": "Wheat",
        "category": "Cereal",
        "region": "Machakos County",
        "yield": 5000,
        "price_per_unit": 30,  // in KES per kilogram
        "harvest_date": "2023-07-15",
        "pest": "Aphids",
        "prevention": "Use insecticidal soap, neem oil. Introduce natural predators like ladybugs.",
        "planting_advice": "Plant in May for optimal growth.",
        "planting_steps": [
          "Prepare the soil by plowing and adding organic matter.",
          "Sow the wheat seeds at the recommended depth and spacing.",
          "Water the seeds adequately during germination and early growth.",
          "Apply fertilizers based on soil nutrient analysis.",
          "Monitor for pests and diseases regularly."
        ]
      },
      {
        "id":2,
        "product": "Rice",
        "category": "Cereal",
        "region": "Machakos County",
        "yield": 7000,
        "price_per_unit": 25,
        "harvest_date": "2023-09-01",
        "pest": "Rice Blast",
        "prevention": "Use resistant varieties, ensure proper water management.",
        "planting_advice": "Plant in March for best results.",
        "planting_steps": [
          "Select a well-drained field with adequate water sources.",
          "Pre-soak rice seeds before planting.",
          "Plant the seeds in rows with proper spacing.",
          "Maintain proper water levels throughout the growing season.",
          "Apply fertilizers as per the crop's nutrient requirements."
        ]
      },
      {
        "id":3,
        "product": "Corn",
        "category": "Grain",
        "region": "Machakos County",
        "yield": 6000,
        "price_per_unit": 20,
        "harvest_date": "2023-08-10",
        "pest": "Fall Armyworm",
        "prevention": "Rotate crops, use biological control, early detection and intervention.",
        "planting_advice": "Plant in April for a good harvest.",
        "planting_steps": [
          "Choose a well-drained field with good sunlight exposure.",
          "Plant corn seeds at the recommended depth and spacing.",
          "Implement crop rotation to reduce pest pressure.",
          "Apply organic mulch to conserve moisture and suppress weeds.",
          "Monitor for signs of pests and take timely action."
        ]
      },
      {
        "id":4,
        "product": "Apples",
        "category": "Fruit",
        "region": "Machakos County",
        "yield": 800,
        "price_per_unit": 50,
        "harvest_date": "2023-10-05",
        "pest": "Codling Moth",
        "prevention": "Apply pheromone traps, proper orchard hygiene.",
        "planting_advice": "Plant in June for optimal fruiting.",
        "planting_steps": [
          "Select disease-resistant apple varieties for planting.",
          "Prepare a well-drained and fertile planting site.",
          "Plant apple trees at the recommended spacing.",
          "Prune the trees regularly to encourage proper shape and airflow.",
          "Apply organic mulch to conserve soil moisture."
        ]
      },
      {
        "id":5,
        "product": "Tomatoes",
        "category": "Vegetable",
        "region": "Machakos County",
        "yield": 1200,
        "price_per_unit": 40,
        "harvest_date": "2023-11-20",
        "pest": "Tomato Hornworm",
        "prevention": "Handpick the worms, use natural predators like parasitic wasps.",
        "planting_advice": "Plant in February for a successful crop.",
        "planting_steps": [
          "Start tomato seeds indoors before the growing season.",
          "Transplant seedlings when they are strong and have true leaves.",
          "Provide support for tomato plants to prevent breakage.",
          "Mulch around the plants to control weeds and retain soil moisture.",
          "Water consistently and avoid overhead watering to prevent diseases."
        ]
      },
      {
        "id":6,
        "product": "Cotton",
        "category": "Fiber",
        "region": "Machakos County",
        "yield": 400,
        "price_per_unit": 60,
        "harvest_date": "2023-12-05",
        "pest": "Boll Weevil",
        "prevention": "Use insecticides, destroy crop residues after harvest.",
        "planting_advice": "Plant in May for optimal fiber quality.",
        "planting_steps": [
          "Choose well-drained soil with good fertility for cotton cultivation.",
          "Sow cotton seeds at the recommended depth and spacing.",
          "Implement pest control measures, especially against boll weevils.",
          "Harvest cotton when bolls are mature but not overripe.",
          "Remove and destroy plant residues to prevent overwintering pests."
        ]
      },
      {
        "id":7,
        "product": "Maize",
        "category": "Grain",
        "region": "Machakos County",
        "yield": 5500,
        "price_per_unit": 18,  // in KES per kilogram
        "harvest_date": "2023-08-25",
        "pest": "Stalk Borer",
        "prevention": "Practice crop rotation, use resistant maize varieties.",
        "planting_advice": "Plant in April for optimal yield.",
        "planting_steps": [
          "Prepare the soil by plowing and adding organic matter.",
          "Plant maize seeds at the recommended depth and spacing.",
          "Apply balanced fertilizers based on soil nutrient levels.",
          "Implement pest control measures, especially against stalk borers.",
          "Harvest maize when kernels are fully developed but not overly mature."
        ]
      },
      {
        "id":8,
        "product": "Coffee",
        "category": "Cash Crop",
        "region": "Machakos County",
        "yield": 800,
        "price_per_unit": 120,  // in KES per kilogram of beans
        "harvest_date": "2023-11-10",
        "pest": "Coffee Berry Borer",
        "prevention": "Harvest cherries promptly, use shade trees, practice good farm hygiene.",
        "planting_advice": "Plant in well-drained soil with a suitable altitude.",
        "planting_steps": [
          "Select high-quality coffee beans for planting.",
          "Plant coffee beans in shaded areas to protect from extreme sunlight.",
          "Apply organic mulch to retain soil moisture and suppress weeds.",
          "Regularly monitor for pests and diseases.",
          "Harvest coffee cherries when they are fully ripe."
        ]
      },
      {
        "id":9,
        "product": "Bananas",
        "category": "Fruit",
        "region": "Machakos County",
        "yield": 1000,
        "price_per_unit": 35,  // in KES per kilogram
        "harvest_date": "2023-10-20",
        "pest": "Banana Weevil",
        "prevention": "Practice crop rotation, remove and destroy infected plants.",
        "planting_advice": "Plant in well-drained soil with adequate water availability.",
        "planting_steps": [
          "Select disease-resistant banana varieties for planting.",
          "Plant banana suckers at the recommended spacing.",
          "Apply balanced fertilizer during the growing season.",
          "Monitor and control pests, especially banana weevils.",
          "Harvest bananas when they are fully mature."
        ]
      },
      {
        "id":10,
        "product": "Soybeans",
        "category": "Legume",
        "region": "Machakos County",
        "yield": 3000,
        "price_per_unit": 28,  // in KES per kilogram
        "harvest_date": "2023-09-15",
        "pest": "Soybean Aphid",
        "prevention": "Use resistant varieties, apply insecticidal soap.",
        "planting_advice": "Plant in early to mid-rainy season for optimal growth.",
        "planting_steps": [
          "Prepare the soil by plowing and ensuring good drainage.",
          "Sow soybean seeds at the recommended depth.",
          "Inoculate seeds with nitrogen-fixing bacteria for better growth.",
          "Monitor for pests, especially soybean aphids.",
          "Harvest soybeans when the pods are fully developed."
        ]
      }
]

export default agridata;