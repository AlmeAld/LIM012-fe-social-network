//referencia raíz
export const uploadImage = (date, img) => {
  const storageRef = firebase.storage().ref().child(`image/${img.name}`);
  const metadata = { contentType: img.type };
  return storageRef.put(img, metadata)
    .then(snapshot => (snapshot.ref.getDownloadURL()));
};

//<button class = 'post btn-img'></button >