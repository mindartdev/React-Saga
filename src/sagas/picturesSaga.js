import { take, put, call, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { GET_PICTURES, showPictures } from "./../actions";

const pics = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://picsum.photos/100/100?random",
    thumbnailUrl: "https://picsum.photos/100/100/?random"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://picsum.photos/200/200?random",
    thumbnailUrl: "https://picsum.photos/200/200?random"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://picsum.photos/300/300?random",
    thumbnailUrl: "https://picsum.photos/300/300?random"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://picsum.photos/400/400?random",
    thumbnailUrl: "https://picsum.photos/400/400?random"
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://picsum.photos/500/500?random",
    thumbnailUrl: "https://picsum.photos/500/500?random"
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://picsum.photos/600/600?random",
    thumbnailUrl: "https://picsum.photos/600/600?random"
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://picsum.photos/700/700?random",
    thumbnailUrl: "https://picsum.photos/700/700?random"
  }
];
export function* picturesSaga() {
  const req = yield take(GET_PICTURES);

  debugger;
  yield put(showPictures(pics));
}
