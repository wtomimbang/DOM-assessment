/*
Make an empty HTML file, put an empty main tag inside the body.

In your JavaScript, use querySelector to get a reference to the main tag and save
it in a variable named main.

Look up three good jokes and store them as separate variables in your JavaScript.

Define an HTML template with a template string. Make a heading for your template that 
says "My Jokes" and make a list of your three jokes, inserting the variables as items in the list.

Put the template inside the main tag.

Make a paragraph tag with the document.createElement method and save it to a variable.

Add the text "That's all folks!" as text content to the newly created paragraph tag.

Append the paragraph tag to the body tag of your HTML page.
*/



const main = document.querySelector("main");

const joke1 = "My very own joke in life as an Electrical Engineer";
const joke2 = "4 Engineers in a stalled car";
const joke3 = "Engineers unable to explain engineering to their kids";


const template = `<h2>My Jokes</h2>

<ol>
<li>${joke1}</li>
<li>${joke2}</li>
<li>${joke3}</li>
</ul>`;

main.innerHTML = template;

const para = document.createElement('p');
const text = document.createTextNode("That's all folks!");
para.appendChild(text);
document.body.appendChild(para);
