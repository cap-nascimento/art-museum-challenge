async function getArtData() {
  await fetch('https://api.artic.edu/api/v1/artworks')
  .then((res) => {
    if(res.status >= 200 && res.status <= 299) {
      return res.json();
    } else {
      throw Error('Error on get art request!');
    }
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    alert(error);
  })
}