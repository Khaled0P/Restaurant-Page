import './style.css';

export default function aboutPage() {
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('aboutContainer');
  aboutContainer.innerHTML = `<h1>About our Page</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          fuga repellendus nesciunt. Laborum error, doloremque nam, perferendis
          dolorem nemo cumque eveniet sapiente nobis rerum quisquam repellat
          voluptatibus nulla iure aliquam?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          fuga repellendus nesciunt. Laborum error, doloremque nam, perferendis
          dolorem nemo cumque eveniet sapiente nobis rerum quisquam repellat
          voluptatibus nulla iure aliquam?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          fuga repellendus nesciunt. Laborum error, doloremque nam, perferendis
          dolorem nemo cumque eveniet sapiente nobis rerum quisquam repellat
          voluptatibus nulla iure aliquam?
        </p>`;
  return aboutContainer;
}
