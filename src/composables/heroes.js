import { ref } from "vue";
import useFormatDate from "@/composables/date";
const { formatModifiedDate, getActualDate } = useFormatDate();
const error = ref(null);
const heroes = ref([]);
const heroesByName = ref([]);
let limit = ref(12), offset = ref(0);

const getHeroes = async () => {
  error.value = null;
  const url = `https://gateway.marvel.com/v1/public/characters?limit=${limit.value}&offset=${offset.value}&ts=1&apikey=c90db4279fd2c8688f17c1cc635ec278&hash=14140d830ab920cb21594575ac7e28cc`;
  try {
    const response = await fetch(url);
    const  { data } = await response.json();
    for (const heroe of data.results) {
      heroes.value.push({
        id: heroe.id,
        modified: formatModifiedDate(heroe.modified),
        description: heroe.description,
        name: heroe.name,
        thumbnail: `${heroe.thumbnail.path}/standard_fantastic.${heroe.thumbnail.extension}`,
      });
    }
    return heroes.value;
  } catch (e) {
    error.value = e.message;
    console.log(error.value);
  }
};

const getHeroById = (id) => {
  error.value = null;
  if (!id) return
/*   const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=c90db4279fd2c8688f17c1cc635ec278&hash=14140d830ab920cb21594575ac7e28cc`; */
  try {
    const hero = ref([]);
/*     const response = await fetch(url);
    const  { data } = await response.json(); */

    for (const heroe of heroes.value) {
      if (heroe.id === Number(id)) {
        hero.value.push({
          id: heroe.id,
          modified: heroe.modified,
          description: heroe.description,
          name: heroe.name,
          thumbnail: heroe.thumbnail,
        });
        break;
      }

    }
    return hero.value[0];
  } catch (e) {
    error.value = e.message;
    console.log(error.value);
  }
};

const getHeroesByName = async (name) => {
  error.value = null;
  if(!name) return
  const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=c90db4279fd2c8688f17c1cc635ec278&hash=14140d830ab920cb21594575ac7e28cc`;
  try {
    const response = await fetch(url);
    const {data} = await response.json();

    if(data.results.length > 0) {
      heroes.value = []
      for (const hero of data.results) {
        heroes.value.push({
          id: hero.id,
          modified: formatModifiedDate(hero.modified),
          description: hero.description,
          name: hero.name,
          thumbnail: `${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`,
        });
      }
      return heroes.value;
    } else {
      alert('No se encontraron resultados')
      return heroes.value;
    }

  } catch (e) {
    error.value = e.message;
    console.log(error.value);
  }
};

const saveNewHero = (hero) => {
  error.value = null;
  try {
    heroes.value.unshift({
      id: hero.id,
      modified: getActualDate(),
      description: hero.description,
      name: hero.name,
      thumbnail: hero.thumbnail
    });
    return heroes.value;
  } catch (e) {
    error.value = e.message;
    console.log(error.value);
  }
};


const useHeroes = () => {
  return { error, getHeroes, getHeroById, getHeroesByName, saveNewHero, heroes, limit, offset };
};

export default useHeroes;
