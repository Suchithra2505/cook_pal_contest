const recipes = [
    //  provided JSON array 
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

// Function to render recipe cards
    function renderRecipes() {
        const recipeContainer = document.getElementById('recipeContainer');
        recipeContainer.innerHTML = ''; // Clear existing content

        const searchQuery = document.getElementById('search').value.toLowerCase();

        recipes.forEach(recipe => {
            // Check for type, rating, and name filters
            const typeFilter = Array.from(document.querySelectorAll('input[name="recipeType"]:checked')).map(checkbox => checkbox.value);
            const ratingFilter = Array.from(document.querySelectorAll('input[name="ratingFilter"]:checked')).map(checkbox => checkbox.value);

            if ((typeFilter.length === 0 || typeFilter.includes(recipe.type)) &&
                (ratingFilter.length === 0 ||
                 (ratingFilter.includes('above4.5') && recipe.rating > 4) ||
                 (ratingFilter.includes('below4.0') && recipe.rating < 4.0)) &&
                (recipe.name.toLowerCase().includes(searchQuery)|| typeFilter.includes('all'))) {
                const card = document.createElement('div');
                card.className = 'col-md-4';

                card.innerHTML = `
                    <div class="recipe-card">
                        <img src="${recipe.imageSrc}" alt="${recipe.name}">
                        <h6 style="color: #A1A1A1;
                        font-family: Inter;
                        font-size: 10px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 24px; /* 240% */">${recipe.type === 'veg' ? 'Veg' : 'Non-Veg'}</h6>
                        <h5 style="color: #252525;
                        font-family: Inter;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 24px; /* 120% */">${recipe.name}</h5>
                        <p style="color: #DC582A;

                        /* Headings/h3 */
                        font-family: Inter;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 136.523%; /* 27.305px */"> ${recipe.time}</p>
                        <p> ${recipe.rating}</p>
                        <button class="like-button" style="appearance: none;
                        background-color: transparent;
                        border: none;
                        color: inherit;
                        font: inherit;
                        margin: 0;
                        padding: 0;
                        outline: none;
                        cursor: pointer;" onclick="toggleLike(${recipes.indexOf(recipe)})">
                            ${recipe.isLiked ? '❤️ ' : '🤍 '}
                        </button>
                    </div>
                `;

                recipeContainer.appendChild(card);
            }
        });
    }

    // Function to toggle recipe like status
    function toggleLike(index) {
        recipes[index].isLiked = !recipes[index].isLiked;
        renderRecipes(); // Re-render recipes after toggling like status
    }

    // Function to handle search input
    document.getElementById('search').addEventListener('input', function () {
        renderRecipes(); // Re-render recipes on input change
    });
    // Function to update type filter
    function updateTypeFilter(type) {
        const typeCheckboxes = document.querySelectorAll('input[name="recipeType"]');
        typeCheckboxes.forEach(checkbox => {
            checkbox.checked = checkbox.value === type || type === 'all';
        });
        renderRecipes(); // Re-render recipes after updating type filter
    }
    //function to display all items
    
    
    // Event listeners for filter options
    document.querySelectorAll('input[name="recipeType"], input[name="ratingFilter"]').forEach(input => {
        input.addEventListener('change', function () {
            renderRecipes(); // Re-render recipes on filter change
        });
    });
    //document.getElementById('search').addEventListener('input', function () {
        //renderRecipes(); // Re-render recipes on search input change
   // });

    //  forInitial rendering
    renderRecipes();