const l = document.querySelectorAll('.accordion-header');
for (let ll of l)  {
  ll.addEventListener('click', showHide);
  if (ll.dataset.marker === '+') {
    ll.parentNode.querySelector('.card').style.display = 'none';
  }
}

const i = document.querySelectorAll('.accordion-item');
for (let ii of i) {
    if (ii.dataset.color === undefined) {
        ii.style.backgroundColor = '#93ED94'
    }
    else {
        ii.style.backgroundColor = ii.dataset.color;
    }
}

function showHide(e) {
  let close = false;
  if (this.dataset.marker === '+') {
    this.dataset.marker = '–';
    close = false;
  }
  else {
    this.dataset.marker = '+';
    close = true;
  }

  if (this.parentNode.parentNode.dataset.collapse === "all") {
    const items = this.parentNode.parentNode.querySelectorAll('.accordion-item');
    for (let item of items){
      const card = item.querySelector('.card');
      const header = item.querySelector('.accordion-header')
      card.style.display = 'none';
      header.dataset.marker = '+';
    }

    if (!close) {
      this.parentNode.querySelector('.card').style.display = 'block';
      this.dataset.marker = '–';
    }
  }

  else {

    if (this.dataset.marker === '–') {
      this.parentNode.querySelector('.card').style.display = 'block';
    }
    else {
      this.parentNode.querySelector('.card').style.display = 'none';
    }
  }

}
