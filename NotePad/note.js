let saveBtn = document.querySelector('.save-btn');
let showBtn = document.querySelector('.show-btn');
let clearBtn = document.querySelector('.clear-btn');
let noteField = document.querySelector('#text-field');


let txt = '';

let note = JSON.parse(localStorage.getItem('notes')) || {
  message : ''
}

document.querySelector('#text-field').value = note.message;

//to save note
saveBtn.addEventListener('click', function(){

  let writtenText = document.querySelector('#text-field').value;

      txt += writtenText;
      note.message = txt;
      
  let JSONobj = JSON.stringify(note);
  localStorage.setItem('notes', JSONobj);

})

//show notes
showBtn.addEventListener('click', () =>{
  let overLay = document.querySelector('.overlay');
  overLay.classList.add('passive');
})

// to clear notes
clearBtn.addEventListener('click', function(){

  document.querySelector('#text-field').value = "";
  localStorage.removeItem('notes');
})

/*
let saveBtn = document.querySelector('.save-btn');
let showBtn = document.querySelector('.show-btn');
let clearBtn = document.querySelector('.clear-btn');
let noteField = document.querySelector('#text-field');


let txt = '';

let note = {
  message : ''
}
saveBtn.addEventListener('click', function(){

  let writtenText = document.querySelector('#text-field').value;

      txt += writtenText;
      note.message = txt;

  let writtenNote = note.message;
  let JSONnote = JSON.stringify(writtenNote);
  localStorage.setItem('notes', JSONnote);

  //console.log(JSONnote);
})

//show notes
showBtn.addEventListener('click', () =>{
  let overLay = document.querySelector('.overlay');
  overLay.classList.add('passive');

  let storedData = JSON.parse(localStorage.getItem('notes'));
  document.querySelector('#text-field').value = storedData;
})

// to clear notes
clearBtn.addEventListener('click', function(){

  document.querySelector('#text-field').value = "";
  localStorage.removeItem('notes');
})
*/