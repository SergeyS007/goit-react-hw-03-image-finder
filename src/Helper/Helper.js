const helper = array => {
  return array.map(
    ({ id, webformatURL: smallFoto, largeImageURL: largeFoto }) => ({
      id,
      smallFoto,
      largeFoto,
    })
  );
};

export default helper;
