$('.form-select').change(function() {
    const modelName = $(this).find('option:selected').data('model-name');
    const transform = document.getElementById('modelTransform');
    
    if (modelName === 'cokebottle') {
        transform.setAttribute('translation', '0 -1.5 0');
        transform.setAttribute('scale', '0.6 0.6 0.6');
        transform.setAttribute('rotation', '0 1 0 1.5');
    } else {
        transform.setAttribute('translation', '0 1.5 0');
        transform.setAttribute('scale', '0.3 0.3 0.3');
        transform.setAttribute('rotation', '0 1 0 1.5');
    }
});

$('.form-select').change(function() {
    var modelName = $(this).find('option:selected').data('model-name');
    var modelUrl = getModelUrl(modelName);
    var description = getModelDescription(modelName);

    if (modelUrl) {
        // Change the URL of the X3D model
        $('#model').attr('url', modelUrl);
    } else {
        console.error('Model URL not found for ' + modelName);
    }

    if (description) {
        // Set the description in the textarea
        $('#descriptionTextarea').val(description);
    } else {
        console.error('Description not found for ' + modelName);
    }
});

// Function to get the URL of the X3D model based on model name
function getModelUrl(modelName) {
    // Define the mapping of model names to URLs
    var modelUrls = {
        'cocacola': 'Content/Can_Models/cocacolacan.x3d',
        'sprite': 'Content/Can_Models/spritecan.x3d',
        'drpepper': 'Content/Can_Models/drpeppercan.x3d',
        'cokebottle': 'Content/Can_Models/cokebottle.x3d'
    };

    // Return the URL of the model if found, otherwise return null
    return modelUrls[modelName] || null;
}

// Function to get the description based on model name
function getModelDescription(modelName) {
    // Define the mapping of model names to descriptions
    var modelDescriptions = {
        'cocacola': 'Founded in 1886 by pharmacist Dr John S Pemberton in Atlanta, Georgia, The Coca‑Cola Company is the world\'s leading manufacturer, marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands. ',
        'sprite': 'First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world\'s leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite Zero, part of our no sugar Zero range, offers the delicious lemon lime taste of Sprite without the sugar or calories. ',
        'drpepper': 'Dr Pepper\'s unique, sparkling blend of 23 fruit flavours has been around for well over a century and it\'s still the same, with that distinctive flavour you just can\'t quite put your tongue on. It was created by Texas pharmacist Charles Alderton in 1885. He gave a sample of the first ever batch to Wade Morrison, a local shop owner, and Mr Morrison instantly agreed to stock the drink. The distinctive, bold taste of Dr Pepper has been popular ever since',
        'cokebottle': 'Originally created in 1940, vibrant and bursting with flavor, Fanta is recognized as one of the world\'s favorite fruit-flavored soft drinks. Available in over 180 countries, Fanta Orange is the most popular flavor, and the brand has expanded to include a sugar-free version, Fanta Zero, to cater to a wider range of tastes and dietary preferences.'
    };

    // Return the description of the model if found, otherwise return null
    return modelDescriptions[modelName] || null;
}

