// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderListItem } from '../render-utils.js';

const test = QUnit.test;

test('renderListItem renders a div with animal details', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal-detail"><h1>Info About <span id="animal-name">Samuel the Sheep</span></h1><img id="animal-image" src="../assets/sheep.svg"><p id="animal-says">Just because we're sheep, it doesn't mean we have to follow. Think for yourselves.</p></div>`;
    //Act
    // Call the function you're testing and set the result to a const
    const samuel = {
        id: '6',
        name: 'Samuel the Sheep',
        type: 'sheep',
        says: "Just because we're sheep, it doesn't mean we have to follow. Think for yourselves.",
        top: '225px',
        left: '20%',
        
    };

    const actual = renderListItem(samuel);
    expect.equal(actual.outerHTML, expected);
});
