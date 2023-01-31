import React from "react";
import memesData from "../memesData.js";

//console.log(randomMeme);
//console.log(memesData.data.memes[randomMeme]);

const Meme = () => {
  //meme object
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  //allMemeImages
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const getMemeImage = function (event) {
    const memesArray = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomMeme].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
        [event.target.name]: "",
      };
    });
  };

  const handleChange = (event) => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <section>
      <div className="form">
        <div className="form__input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button type="button" className="btn form__btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
};

export default Meme;
