import marked from "marked";

let preview = document.querySelector("#preview");
let editor = document.querySelector("#editor");
["input", "paste"].forEach(event => {
  editor.addEventListener(
    event,
    ev => {
      preview.innerHTML = marked(ev.target.value, {
        breaks: true
      });
    }
  );
});
editor.value = `# Welcome to markdown previewer
## try to edit this and play around

it can include \`code inline\` or within code blocks: 
\`\`\`javascript
console.log('code blocks')
\`\`\`
 and [links also](#nowhere)
this has many advantages: 
- it's easy
- it's **efficient**
- you can even write many html elements, here's an image 
![example image](https://s3.amazonaws.com/freecodecamp/FFCFire.png)

here's how to make blockquotes: 
> some line in a blockquote
> and another one
`;
preview.innerHTML = marked(editor.value, { breaks: true });
