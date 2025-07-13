// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu Data
const menuData = {
    appetizers: [
        {
            name: "Samosa",
            description: "Crispy pastry filled with spiced potatoes and peas",
            price: "₹99",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"
        },
        {
            name: "Paneer Tikka",
            description: "Grilled cottage cheese marinated in aromatic spices",
            price: "₹199",
            image: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg"
        },
        {
            name: "Vegetable Pakora",
            description: "Assorted vegetables dipped in spiced chickpea batter and fried",
            price: "₹149",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora.webp"
        }
    ],
    "main-courses": [
        {
            name: "Palak Paneer",
            description: "Fresh spinach curry with cottage cheese in aromatic spices",
            price: "₹199",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOQgBzZIBT1C2vwrQ7UUeJ65KeaPMlWwQAxSFFjGr-PBxd1Ge-hyM19dzEeNOnmdcqJ7zJY4hrv0YEaPL57fOydN_dqK12t9GotwA95hBZ"
        },
        {
            name: "Dal Makhani",
            description: "Slow-cooked black lentils with cream and aromatic spices",
            price: "₹249",
            image: "https://www.sharmispassions.com/wp-content/uploads/2012/05/dal-makhani7.jpg"
        },
        {
            name: "Vegetable Biryani",
            description: "Fragrant basmati rice with mixed vegetables and aromatic spices",
            price: "₹299",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDiMiok2ektyhL9ZFNhPX3psPNJKIaVY3Ng&s"
        },
        {
            name: "Aloo Gobi",
            description: "Potatoes and cauliflower cooked with Indian spices",
            price: "₹199",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe.jpg"
        }
    ],
    desserts: [
        {
            name: "Gulab Jamun",
            description: "Sweet milk dumplings soaked in rose-flavored sugar syrup",
            price: "₹99",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp"
        },
        {
            name: "Rasmalai",
            description: "Soft cottage cheese patties in sweetened milk",
            price: "₹99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s"
        },
        {
            name: "Kheer",
            description: "Traditional rice pudding with nuts and saffron",
            price: "₹79",
            image: "https://www.sharmispassions.com/wp-content/uploads/2015/06/seviyan-kheer5.jpg"
        }
    ],
    beverages: [
        {
            name: "Masala Chai",
            description: "Traditional spiced Indian tea with milk",
            price: "₹49",
            image: "https://cdn.shopify.com/s/files/1/0758/6929/0779/files/Masala_Tea_-_Annams_Recipes_Shop_2_480x480.jpg?v=1732347934"
        },
        {
            name: "Lassi",
            description: "Sweet yogurt-based drink with rose or mango",
            price: "₹89",
            image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg"
        },
        {
            name: "Thandai",
            description: "Traditional cooling drink with nuts and spices",
            price: "₹99",
            image: "https://www.cookwithmanali.com/wp-content/uploads/2015/03/Thandai-Indian-Drink-500x375.jpg"
        }
    ]
};

// Menu Functionality
const menuGrid = document.getElementById('menu-grid');
const tabButtons = document.querySelectorAll('.tab-btn');

function loadMenuItems(category) {
    menuGrid.innerHTML = '';
    const items = menuData[category];
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Initialize menu with appetizers
loadMenuItems('appetizers');

// Tab switching functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Load menu items for selected category
        loadMenuItems(button.dataset.category);
    });
});

// Testimonials Data
const testimonials = [
    {
        text: "The best vegetarian Indian restaurant! The paneer dishes are perfectly spiced and the atmosphere is warm and welcoming.",
        author: "Priya Patel",
        rating: 5
    },
    {
        text: "Amazing authentic Indian food and excellent service. The dal makhani is outstanding. Highly recommend!",
        author: "Rajesh Kumar",
        rating: 5
    },
    {
        text: "Authentic Indian vegetarian cuisine with traditional flavors. The gulab jamun was absolutely divine!",
        author: "Anjali Sharma",
        rating: 5
    },
    {
        text: "Perfect for family dining! Warm atmosphere and delicious food. Will definitely come back.",
        author: "Amit Singh",
        rating: 5
    },
    {
        text: "The staff was incredibly friendly and the food exceeded all expectations. A true gem for vegetarian dining!",
        author: "Meera Iyer",
        rating: 5
    }
];

// Testimonials Slider
const testimonialsContainer = document.getElementById('testimonials-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentTestimonial = 0;

function loadTestimonials() {
    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        testimonialDiv.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.text}"</p>
                <div class="testimonial-author">- ${testimonial.author}</div>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });
}

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonialsContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize testimonials
loadTestimonials();

// Event listeners for testimonial navigation
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Auto-advance testimonials
setInterval(nextTestimonial, 5000);

// Reservation Form
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const reservationData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        guests: formData.get('guests'),
        specialRequests: formData.get('special-requests')
    };
    
    // Simulate form submission
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Booking...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Show success message
        alert('Thank you for your reservation! We will confirm your booking via email shortly.');
        
        // Reset form
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Gallery lightbox effect (optional enhancement)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightboxImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;
        
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.menu-item, .gallery-item, .testimonial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Set minimum date for reservation form
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today; 