const boldBtn = document.querySelector('.bold');
const italicBtn = document.querySelector('.italic');
const underlineBtn = document.querySelector('.underline');
const fontFamilySelect = document.querySelector('.font-family');
const fontSizeSelect = document.querySelector('.font-size');
const editableDiv = document.querySelector('.editable');

boldBtn.addEventListener('click', () => {
  document.execCommand('bold', false, null);
});

italicBtn.addEventListener('click', () => {
  document.execCommand('italic', false, null);
});

underlineBtn.addEventListener('click', () => {
  document.execCommand('underline', false, null);
});

fontFamilySelect.addEventListener('change', () => {
  const fontFamily = fontFamilySelect.value;
  editableDiv.style.fontFamily = fontFamily;
});

fontSizeSelect.addEventListener('change', () => {
  const fontSize = fontSizeSelect.value;
  editableDiv.style.fontSize = fontSize;
});

editableDiv.addEventListener('input', () => {
  const content = editableDiv.innerHTML.trim();
  console.log(content);
});
