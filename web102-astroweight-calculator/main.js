        var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];

    const planetImages = {
        'Pluto':'https://azcapitoltimes.com/files/2024/03/Pluto.jpg',
        'Neptune':'https://universemagazine.com/wp-content/uploads/2021/12/neptune-stars-ian-mckinnell.jpg',
        'Uranus':'https://c4.wallpaperflare.com/wallpaper/698/20/1008/ring-uranus-planet-blue-planet-wallpaper-preview.jpg',
        'Saturn':'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/saturn-planet-in-solar-system-close-up-science-photo-library-mark-garlick.jpg',
        'Jupiter':'https://cff2.earth.com/uploads/2024/03/18090648/Discovery-of-22Warm-Jupiter22-planet-called-S1429-b-challenges-our-understanding-of-planet-formation-.jpeg',
        'Mars':'https://c02.purpledshub.com/uploads/sites/41/2023/07/mars-thumbnail-fb84d10.jpg',
        'Moon':'https://www.snexplores.org/wp-content/uploads/2021/03/1030_LL_moon_feat.jpg',
        'Earth':'https://www.cnet.com/a/img/resize/548dfccd9107fca6a67dd053e4370e814f7b6f6c/hub/2023/02/07/0da07e21-1986-4f2e-a40c-db0bf419bab8/planets1.jpg?auto=webp&fit=crop&height=675&width=1200',
        'Venus':'https://img.freepik.com/premium-photo/venus-planet-space-background_974629-48439.jpg',
        'Mercury':'https://img.freepik.com/premium-photo/mercury-space-background-elements-this-image-furnished-by-nasa_103740-2454.jpg',
        'Sun':'https://ewscripps.brightspotcdn.com/dims4/default/a3b239e/2147483647/strip/true/crop/3000x1688+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F72%2F2a%2F4d8241b94204ab9dfcfa43e0164e%2Fs116263710.JPG',
        'default':'https://m.media-amazon.com/images/I/61f5dUCGcvL._UF894,1000_QL80_.jpg',

    }
    
        // We are going to solve this by breaking the problem into three parts. 
        // Programmers like automating things, we'll populate the HTML drop down options using code, 
        // instead of having to type out all the values. 
        // Create a function that does the some math and gives us the new weight. 
        // Then create a function that responds when the user clicks on the button. 

        // 1. Populate the dropdown element with the data found in the planets array.
        // The value of each option should be the planet's name. 
        // Use the following built-in methods: 
        // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 
        var planetsDropDown = document.getElementById('planets');
        
        //error when this was not written, returning planets twice in dropdown
        planetsDropDown.innerHTML = '';

        planets.forEach(function(planet) {
            var option = document.createElement('option');
            option.value = planet[0];
            option.textContent = planet[0];
            planetsDropDown.appendChild(option);
        });

    function calculateWeight(weight, planetName) { 
        // 2. Write the code to return the correct weight 
  // 1. Find the planet's multiplier in the planets array
  const planet = planets.find(function(p) {
    return p[0] === planetName; // p[0] is the planet's name
  });

  // 2. planet[1] is the multiplier
  const multiplier = planet[1];

  // 3. Multiply the user's weight by the multiplier
  const newWeight = weight * multiplier;

  // 4. Return the result
  return newWeight;
}
 
    function handleClickEvent(e) {
        // 3. Declare a variable called userWeight and assign the value of the user's weight. 
        //By using parsefloat, we can convert to number right away vice string
    const userWeight = parseFloat(document.getElementById('user-weight').value);
        // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 
    const selectPlanet = document.getElementById('planets')
    const planetName = selectPlanet.value
        // 5. Declare a variable called result and assign the value of the new calculated weight. 
        const result = calculateWeight(userWeight, planetName);
        // 6. Write code to display the message shown in the screenshot. 
        const messageDisplay = document.getElementById('messageDisplay');
        let displayPlanetName = planetName;
        if (planetName === 'Sun') {
  displayPlanetName = 'the Sun';
}
        messageDisplay.innerText = `If you were on ${displayPlanetName}, you would weigh ${result.toFixed(2)} lbs!`;
          // Dynamically update background image using external URL
        const imageUrl = planetImages[planetName];
          if (imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // Fix background during scroll
} else {
    //default background if planet not found
    document.body.style.backgroundImage = '';
}
    }

        // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
    document.getElementById('calculate-button').onclick = handleClickEvent;

        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 


        // Bonus Challenges 
        // 8. Reverse the drop down order so that the sun is first.