import React from "react";
import Movie from "./components/Movie";
import PersonalPage from "./components/PersonalPage";
import CurrentTime from "./components/CurrentTime";
import Pet from "./components/Pet";

function App() {
  return (
    <div>
      <h1>Favorite movie</h1>
      <Movie
        title="Darker than Black"
        director="	
Тэнсаи Окамура, Даисукэ Тиба, Хидэки Ито, Такэфуми Андзаи"
        year="	5 апреля 2007 года"
        studio="Bones"
        poster="https://pm1.aminoapps.com/6604/a3b027ff8e38748e4ba3fe5c5a80f63dce5d1e2d_00.jpg"
      />

      <h1>Personal side</h1>
      <PersonalPage
        fullName="Li Sheng Shun"
        phone="+81 90 1234 5678"
        email="yamada@example.jp"
        city="Tokyo"
        experience="military"
        skills="Your recruits"
        photo="https://shikimori.me/system/characters/original/2160.jpg"
      />

      <h1>Current hour</h1>
      <CurrentTime />

      <h1>Home lover</h1>
      <Pet
        type="Любимый"
        name="Лунар"
        age="Вечно молодой"
        description="Таинственный, игривый, мудрый - способен видеть в темноте, может создавать иллюзии, имеет шерсть, меняющую цвет в зависимости от настроения"
        image="https://yokiani.me/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL1E5RVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--736803fe52130ac5e46d5c3656c594ffa51444a0/role_PyHaHPpvWW1b6xhpbvgiUw.jpg?disposition=inline"
      />
    </div>
  );
}

export default App;
